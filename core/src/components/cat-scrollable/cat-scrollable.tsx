import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

/**
 * An element to display scrollable content.
 */
@Component({
  tag: 'cat-scrollable',
  styleUrl: 'cat-scrollable.scss',
  shadow: true
})
export class CatScrollable {
  scrollElement?: HTMLElement;
  scrollWrapperElement?: HTMLElement;
  private readonly init = new Subject<void>();
  private readonly destroyed = new Subject<void>();
  private scrolled!: Observable<Event>;

  /** Flags to disable/enable scroll shadowX. */
  @Prop()
  noShadowX = false;

  /** Flags to disable/enable scroll shadowY. */
  @Prop()
  noShadowY = false;

  /** Flags to disable/enable overflowX. */
  @Prop()
  noOverflowX = false;

  /** Flags to disable/enable overflowY. */
  @Prop()
  noOverflowY = false;

  /** Flag to disable/enable overscroll behavior. */
  @Prop()
  noOverscroll = false;

  /**
   * Flag to not fire an initial event after content initialization.
   */
  @Prop() noScrolledInit = false;

  /**
   * Buffer to be used to calculate the scroll distance.
   */
  @Prop() scrolledBuffer = 0;

  /**
   * Emitted when the content is fully scrolled to the top.
   */
  @Event() scrolledTop!: EventEmitter<void>;

  /**
   * Emitted when the content is fully scrolled to the left.
   */
  @Event() scrolledLeft!: EventEmitter<void>;

  /**
   * Emitted when the content is fully scrolled to the right.
   */
  @Event() scrolledRight!: EventEmitter<void>;

  /**
   * Emitted when the content is fully scrolled to the bottom.
   */
  @Event() scrolledBottom!: EventEmitter<void>;

  componentDidRender() {
    if (this.scrollElement) {
      this.scrolled = fromEvent(this.scrollElement, 'scroll').pipe(takeUntil(this.destroyed));
    }
    this.attachEmitter('left', this.scrolledLeft, this.scrolledBuffer);
    this.attachEmitter('right', this.scrolledRight, this.scrolledBuffer);
    this.attachEmitter('bottom', this.scrolledBottom, this.scrolledBuffer);
    this.attachEmitter('top', this.scrolledTop, this.scrolledBuffer);
    merge(this.init, this.scrolled)
      .pipe(
        map(() => ({
          top: this.getScrollOffset('top') > 0,
          left: this.getScrollOffset('left') > 0,
          right: this.getScrollOffset('right') > 0,
          bottom: this.getScrollOffset('bottom') > 0
        })),
        distinctUntilChanged(),
        takeUntil(this.destroyed)
      )
      .subscribe(({ top, left, right, bottom }) => {
        this.toggleClass('cat-scrollable-top', top);
        this.toggleClass('cat-scrollable-left', left);
        this.toggleClass('cat-scrollable-right', right);
        this.toggleClass('cat-scrollable-bottom', bottom);
      });
  }

  componentDidLoad() {
    if (!this.noScrolledInit) {
      this.init.next();
    }
  }

  disconnectedCallback() {
    this.init.complete();
    this.destroyed.next();
    this.destroyed.complete();
  }

  render() {
    return [
      <div class="scrollable-wrapper" ref={el => (this.scrollWrapperElement = el)}>
        {!this.noShadowY && <div class="shadow-top"></div>}
        {!this.noShadowX && <div class="shadow-left"></div>}
        {!this.noShadowX && <div class="shadow-right"></div>}
        {!this.noShadowY && <div class="shadow-bottom"></div>}
      </div>,
      <div
        ref={el => (this.scrollElement = el)}
        class={{
          'scrollable-content': true,
          'scroll-x': !this.noOverflowX,
          'scroll-y': !this.noOverflowY,
          'no-overscroll': this.noOverscroll
        }}
      >
        <slot></slot>
      </div>
    ];
  }

  private attachEmitter(from: 'top' | 'left' | 'right' | 'bottom', emitter: EventEmitter<void>, buffer: number) {
    merge(this.init, this.scrolled)
      .pipe(map(() => this.getScrollOffset(from)))
      .pipe(map(offset => offset <= buffer))
      .pipe(distinctUntilChanged())
      .pipe(filter(isLower => isLower))
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => emitter.emit());
  }

  private getScrollOffset(from: 'top' | 'left' | 'right' | 'bottom') {
    if (this.scrollElement) {
      switch (from) {
        case 'top':
          return this.scrollElement.scrollTop;
        case 'left':
          return this.scrollElement.scrollLeft;
        case 'right':
          return this.scrollElement.scrollWidth - this.scrollElement.clientWidth - this.scrollElement.scrollLeft;
        case 'bottom':
          return this.scrollElement.scrollHeight - this.scrollElement.clientHeight - this.scrollElement.scrollTop;
        default:
          return 0;
      }
    }
    return 0;
  }

  private toggleClass(name: string, value: boolean) {
    if (value) {
      this.scrollWrapperElement?.classList.add(name);
    } else {
      this.scrollWrapperElement?.classList.remove(name);
    }
  }
}
