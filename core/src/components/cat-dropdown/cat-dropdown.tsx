import { autoUpdate, computePosition, flip, offset, Placement, size } from '@floating-ui/dom';
import { timeTransitionS } from '@haiilo/catalyst-tokens';
import { Component, Event, EventEmitter, h, Host, Listen, Method, Prop } from '@stencil/core';
import * as focusTrap from 'focus-trap';
import type { FocusableElement } from 'tabbable';
import firstTabbable from '../../utils/first-tabbable';

let nextUniqueId = 0;

/**
 * A dropdown component to display a list of actions in a dropdown menu or to
 * show additional content on demand.
 */
@Component({
  tag: 'cat-dropdown',
  styleUrl: 'cat-dropdown.scss',
  shadow: true
})
export class CatDropdown {
  private static readonly OFFSET = 4;
  private readonly id = nextUniqueId++;
  private triggerSlot!: HTMLSlotElement;
  private trigger?: FocusableElement;
  private content!: HTMLElement;
  private trap?: focusTrap.FocusTrap;
  private isOpen: boolean | null = false;

  /**
   * The placement of the dropdown.
   */
  @Prop() placement: Placement = 'bottom-start';

  /**
   * Do not close the dropdown on outside clicks.
   */
  @Prop() noAutoClose = false;

  /**
   * Do not navigate focus inside the dropdown via vertical arrow keys.
   */
  @Prop() arrowNavigation: 'horizontal' | 'vertical' | 'none' = 'vertical';

  /**
   * Do not change the size of the dropdown to ensure it isn’t too big to fit
   * in the viewport (or more specifically, its clipping context).
   */
  @Prop() noResize = false;

  /**
   * Allow overflow when dropdown is open.
   */
  @Prop() overflow = false;

  /**
   * Emitted when the dropdown is opened.
   */
  @Event() catOpen!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the dropdown is closed.
   */
  @Event() catClose!: EventEmitter<FocusEvent>;

  @Listen('catClick')
  clickHandler(event: CustomEvent<MouseEvent>) {
    // we need to delay the initialization of the trigger until first
    // interaction because the element might still be hidden (and thus not
    // tabbable) if contained in another Stencil web component
    if (!this.trigger) {
      this.initTrigger();
      this.toggle();
    }

    // hide dropdown on button clicks inside the dropdown content
    const path = event.composedPath();
    if (
      !this.noAutoClose &&
      // check if click was inside of the dropdown content
      path.includes(this.content) &&
      // check if click was not on a trigger for a sub-dropdown
      (event.target as Element)?.slot !== 'trigger' &&
      // check if click was not an element marked with data-dropdown-no-close
      !path.slice(0, path.indexOf(this.content)).find(el => this.hasAttribute(el, 'data-dropdown-no-close'))
    ) {
      this.close();
    }
  }

  /**
   * Toggles the dropdown.
   */
  @Method()
  async toggle(): Promise<void> {
    this.isOpen ? this.close() : this.open();
  }

  /**
   * Opens the dropdown.
   */
  @Method()
  async open(): Promise<void> {
    if (this.isOpen === null || this.isOpen) {
      return; // busy or open
    }

    this.isOpen = null;
    this.content.style.display = 'block';
    // give CSS transition time to apply
    setTimeout(() => {
      this.isOpen = true;
      this.content.classList.add('show');
      this.trigger?.setAttribute('aria-expanded', 'true');
      this.trap = this.trap
        ? this.trap.updateContainerElements(this.content)
        : focusTrap.createFocusTrap(this.content, {
            tabbableOptions: {
              getShadowRoot: true
            },
            allowOutsideClick: true,
            clickOutsideDeactivates: event =>
              !this.noAutoClose &&
              // check if click was outside of the dropdown content
              !event.composedPath().includes(this.content) &&
              // check if click was not on an element marked with data-dropdown-no-close
              !event.composedPath().find(el => this.hasAttribute(el, 'data-dropdown-no-close')),
            onPostDeactivate: () => this.close(),
            onPostActivate: () => this.catOpen.emit(),
            setReturnFocus: elem => this.trigger || elem,
            isKeyForward: event => {
              if (
                (this.arrowNavigation === 'horizontal' && event.key === 'ArrowRight') ||
                (this.arrowNavigation === 'vertical' && event.key === 'ArrowDown')
              ) {
                event.preventDefault();
                return true;
              }
              return event.key === 'Tab';
            },
            isKeyBackward: event => {
              if (
                (this.arrowNavigation === 'horizontal' && event.key === 'ArrowLeft') ||
                (this.arrowNavigation === 'vertical' && event.key === 'ArrowUp')
              ) {
                event.preventDefault();
                return true;
              }
              return event.key === 'Tab' && event.shiftKey;
            }
          });
      this.trap.activate();
    });
  }

  /**
   * Closes the dropdown.
   */
  @Method()
  async close(): Promise<void> {
    if (!this.isOpen) {
      return; // busy or closed
    }

    this.isOpen = null;
    this.content.classList.remove('show');
    // give CSS transition time to apply
    setTimeout(() => {
      this.isOpen = false;
      this.content.classList.remove('show');
      this.content.style.display = '';
      this.trigger?.setAttribute('aria-expanded', 'false');
      this.trap?.deactivate();
      this.catClose.emit();
    }, timeTransitionS);
  }

  render() {
    return (
      <Host>
        <slot name="trigger" ref={el => (this.triggerSlot = el as HTMLSlotElement)}></slot>
        <div
          id={this.contentId}
          class={{ content: true, 'overflow-auto': !this.overflow }}
          ref={el => (this.content = el as HTMLElement)}
        >
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

  private get contentId() {
    return `cat-dropdown-${this.id}`;
  }

  private initTrigger() {
    this.trigger = this.findTrigger();
    this.trigger.setAttribute('aria-haspopup', 'true');
    this.trigger.setAttribute('aria-expanded', 'false');
    this.trigger.setAttribute('aria-controls', this.contentId);
    this.trigger.addEventListener('click', () => this.toggle());
    autoUpdate(this.trigger, this.content, () => this.update());
  }

  private findTrigger() {
    let trigger: FocusableElement | undefined;
    const elems = this.triggerSlot?.assignedElements?.() || [];
    while (!trigger && elems.length) {
      const elem = elems.shift();
      trigger = elem?.hasAttribute('data-trigger')
        ? (elem as HTMLElement)
        : elem?.querySelector('[data-trigger]') ?? undefined;
    }
    if (!trigger) {
      trigger = firstTabbable(this.triggerSlot);
    }
    if (!trigger) {
      throw new Error('Cannot find tabbable element. Use [data-trigger] to set the trigger.');
    }
    return trigger;
  }

  private update() {
    if (this.trigger) {
      const resize = this.noResize
        ? []
        : [
            size({
              padding: CatDropdown.OFFSET,
              apply({ availableWidth, availableHeight, elements }) {
                Object.assign(elements.floating.style, {
                  maxWidth: `${availableWidth}px`,
                  maxHeight: `${availableHeight}px`
                });
              }
            })
          ];
      computePosition(this.trigger, this.content, {
        strategy: 'fixed',
        placement: this.placement,
        middleware: [offset(CatDropdown.OFFSET), flip(), ...resize]
      }).then(({ x, y, placement }) => {
        this.content.dataset.placement = placement;
        Object.assign(this.content.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    }
  }

  private hasAttribute(elem: EventTarget, attr: string) {
    return elem instanceof HTMLElement && elem.hasAttribute(attr);
  }
}
