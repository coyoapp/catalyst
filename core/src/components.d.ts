/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Breakpoint } from "./utils/breakpoints";
import { Placement } from "@floating-ui/dom";
export namespace Components {
    interface CatAlert {
        /**
          * The color palette of the alert.
         */
        "color": 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    }
    interface CatBadge {
        /**
          * The color palette of the badge.
         */
        "color": 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Draw attention to the badge with a subtle animation.
         */
        "pulse": boolean;
        /**
          * Use round badge edges.
         */
        "round": boolean;
        /**
          * The size of the badge.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the badge.
         */
        "variant": 'filled' | 'outlined';
    }
    interface CatButton {
        /**
          * Adds accessible label for the button that is only shown for screen readers. Typically, this label text replaces the visible text on the button for users who use assistive technology.
         */
        "a11yLabel"?: string;
        /**
          * Show an active status indicator on the left side of the button.
         */
        "active": boolean;
        /**
          * Adds a unique identifier for the button. Please note that with this particular component this ID is added inside the web component. If you need an ID on the HTML element, use the regular `id` attribute instead.
         */
        "buttonId"?: string;
        /**
          * The color palette of the button.
         */
        "color": 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Specifies that the button should be disabled. A disabled button is unusable and un-clickable. Corresponds with the native HTML disabled attribute.
         */
        "disabled": boolean;
        /**
          * The name of an icon to be displayed in the button.
         */
        "icon"?: string;
        /**
          * Hide the actual button content and only display the icon.
         */
        "iconOnly": boolean | Breakpoint;
        /**
          * Display the icon on the right.
         */
        "iconRight": boolean;
        /**
          * Displays the button in a loading state with a spinner. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "loading": boolean;
        /**
          * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute.
         */
        "name"?: string;
        /**
          * Ellipse overflowing button content.
         */
        "noEllipsed": boolean;
        /**
          * Use round button edges.
         */
        "round": boolean;
        /**
          * Sets focus on the button. Use this method instead of `button.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The size of the button.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * Allows the button to submit a form.
         */
        "submit": boolean;
        /**
          * A destination to link to, rendered in the href attribute of a link.
         */
        "url"?: string;
        /**
          * Specifies where to open the linked document.
         */
        "urlTarget"?: '_blank' | '_self';
        /**
          * The value of the button, which gets paired with the button's name when submitted as part of a form. Corresponds with the native HTML value attribute.
         */
        "value"?: string;
        /**
          * The rendering style of the button.
         */
        "variant": 'filled' | 'outlined' | 'text';
    }
    interface CatCard {
    }
    interface CatCheckbox {
        /**
          * Checked state of the checkbox
         */
        "checked": boolean;
        /**
          * Disabled state of the checkbox
         */
        "disabled": boolean;
        /**
          * Indeterminate state of the checkbox
         */
        "indeterminate": boolean;
        /**
          * Label of the checkbox which is presented in the UI
         */
        "label": string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden": boolean;
        /**
          * The name of the input
         */
        "name"?: string;
        /**
          * Required state of the checkbox
         */
        "required": boolean;
        /**
          * Sets focus on the checkbox. Use this method instead of `checkbox.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The value of the checkbox
         */
        "value"?: string;
    }
    interface CatIcon {
        /**
          * Adds accessible label for the icon that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The name of the icon.
         */
        "icon": string;
        /**
          * The size of the icon.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatInput {
        /**
          * Hint for form autofill feature.
         */
        "autoComplete"?: string;
        /**
          * Clear the input.
         */
        "clear": () => Promise<void>;
        /**
          * Whether the input should show a clear button.
         */
        "clearable": boolean;
        /**
          * Whether the input is disabled.
         */
        "disabled": boolean;
        /**
          * Optional hint text to be displayed with the input.
         */
        "hint"?: string;
        /**
          * The name of an icon to be displayed in the input.
         */
        "icon"?: string;
        /**
          * Display the icon on the right.
         */
        "iconRight": boolean;
        /**
          * The label for the input.
         */
        "label": string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden": boolean;
        /**
          * A maximum value for numeric values.
         */
        "max"?: number;
        /**
          * A maximum length (number of characters) for textual values.
         */
        "maxLength"?: number;
        /**
          * A minimum value for numeric values.
         */
        "min"?: number;
        /**
          * A minimum length (number of characters) for textual values.
         */
        "minLength"?: number;
        /**
          * The name of the form control. Submitted with the form as part of a name/value pair.
         */
        "name": string;
        /**
          * The placeholder text to display within the input.
         */
        "placeholder"?: string;
        /**
          * The value is not editable.
         */
        "readonly": boolean;
        /**
          * A value is required or must be check for the form to be submittable.
         */
        "required": boolean;
        /**
          * Use round input edges.
         */
        "round": boolean;
        /**
          * Sets focus on the input. Use this method instead of `input.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * A textual prefix to be displayed in the input.
         */
        "textPrefix"?: string;
        /**
          * A textual suffix to be displayed in the input.
         */
        "textSuffix"?: string;
        /**
          * Type of form control.
         */
        "type": 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
        /**
          * The initial value of the control.
         */
        "value"?: string | number;
    }
    interface CatMenu {
        /**
          * The placement of the menu.
         */
        "placement": Placement;
    }
    interface CatRadio {
        /**
          * Whether this radio is checked.
         */
        "checked": boolean;
        /**
          * Whether this radio is disabled.
         */
        "disabled": boolean;
        /**
          * The label of the radio that is visible.
         */
        "label": string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden": boolean;
        /**
          * The name of the radio component.
         */
        "name"?: string;
        /**
          * Whether the radio is required.
         */
        "required": boolean;
        /**
          * Sets focus on the radio. Use this method instead of `radio.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The value of the radio component.
         */
        "value"?: string;
    }
    interface CatScrollable {
        /**
          * Flags to enable/disable overflowX.
         */
        "noOverflowX": boolean;
        /**
          * Flags to enable/disable overflowY.
         */
        "noOverflowY": boolean;
        /**
          * Flag to enable/disable overscroll behavior.
         */
        "noOverscroll": boolean;
        /**
          * Flag to fire an initial event after content initialization.
         */
        "noScrolledInit": boolean;
        /**
          * Flags to enable/disable scroll shadowX.
         */
        "noShadowX": boolean;
        /**
          * Flags to enable/disable scroll shadowY.
         */
        "noShadowY": boolean;
        /**
          * Buffer to be used to calculate the scroll distance.
         */
        "scrolledBuffer": number;
    }
    interface CatSkeleton {
        /**
          * The animation style of the skeleton.
         */
        "effect": 'plain' | 'sheen' | 'pulse';
        /**
          * The number of text lines to be rendered for "head" and "body" variants. Defaults to 1 for "head" and 3 for "body". Will be ignored for other variants.
         */
        "lines"?: number;
        /**
          * The size of the skeleton. If the variant is set to "head", the size values "xs" to "xl" translate to the head levels `h1` to `h5`.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the skeleton.
         */
        "variant": 'rectangle' | 'square' | 'circle' | 'head' | 'body';
    }
    interface CatSpinner {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The size of the spinner.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatTextarea {
        /**
          * Whether the textarea is disabled.
         */
        "disabled": boolean;
        /**
          * Optional hint text to be displayed with the textarea.
         */
        "hint"?: string;
        /**
          * The label for the textarea.
         */
        "label": string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden": boolean;
        /**
          * A maximum length (number of characters) for textual values.
         */
        "maxLength"?: number;
        /**
          * A minimum length (number of characters) for textual values.
         */
        "minLength"?: number;
        /**
          * The name of the form control. Submitted with the form as part of a name/value pair.
         */
        "name": string;
        /**
          * The placeholder text to display within the input.
         */
        "placeholder"?: string;
        /**
          * The value is not editable.
         */
        "readonly": boolean;
        /**
          * A value is required or must be check for the form to be submittable.
         */
        "required": boolean;
        /**
          * Specifies the initial number of lines in the textarea.
         */
        "rows": number;
        /**
          * Sets focus on the textarea. Use this method instead of `textarea.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The initial value of the control.
         */
        "value"?: string | number;
    }
    interface CatToastDemo {
    }
    interface CatToggle {
        /**
          * Checked state of the toggle.
         */
        "checked": boolean;
        /**
          * Disabled state of the toggle.
         */
        "disabled": boolean;
        /**
          * The label of the toggle that is visible.
         */
        "label": string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden": boolean;
        /**
          * The name of the input
         */
        "name"?: string;
        /**
          * Required state of the toggle
         */
        "required": boolean;
        /**
          * Sets focus on the toggle. Use this method instead of `toggle.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The value of the toggle
         */
        "value"?: string;
    }
    interface CatTooltip {
        /**
          * The content of the tooltip.
         */
        "content": string;
        /**
          * Specifies that the tooltip should be disabled. A disabled tooltip is unusable, and invisible. Corresponds with the native HTML disabled attribute.
         */
        "disabled": boolean;
        /**
          * The delay time for hiding tooltip in ms.
         */
        "hideDelay": number;
        /**
          * The duration of tap to show the tooltip.
         */
        "longTouchDuration": number;
        /**
          * The placement of the tooltip.
         */
        "placement": Placement;
        /**
          * The delay time for showing tooltip in ms.
         */
        "showDelay": number;
    }
}
declare global {
    interface HTMLCatAlertElement extends Components.CatAlert, HTMLStencilElement {
    }
    var HTMLCatAlertElement: {
        prototype: HTMLCatAlertElement;
        new (): HTMLCatAlertElement;
    };
    interface HTMLCatBadgeElement extends Components.CatBadge, HTMLStencilElement {
    }
    var HTMLCatBadgeElement: {
        prototype: HTMLCatBadgeElement;
        new (): HTMLCatBadgeElement;
    };
    interface HTMLCatButtonElement extends Components.CatButton, HTMLStencilElement {
    }
    var HTMLCatButtonElement: {
        prototype: HTMLCatButtonElement;
        new (): HTMLCatButtonElement;
    };
    interface HTMLCatCardElement extends Components.CatCard, HTMLStencilElement {
    }
    var HTMLCatCardElement: {
        prototype: HTMLCatCardElement;
        new (): HTMLCatCardElement;
    };
    interface HTMLCatCheckboxElement extends Components.CatCheckbox, HTMLStencilElement {
    }
    var HTMLCatCheckboxElement: {
        prototype: HTMLCatCheckboxElement;
        new (): HTMLCatCheckboxElement;
    };
    interface HTMLCatIconElement extends Components.CatIcon, HTMLStencilElement {
    }
    var HTMLCatIconElement: {
        prototype: HTMLCatIconElement;
        new (): HTMLCatIconElement;
    };
    interface HTMLCatInputElement extends Components.CatInput, HTMLStencilElement {
    }
    var HTMLCatInputElement: {
        prototype: HTMLCatInputElement;
        new (): HTMLCatInputElement;
    };
    interface HTMLCatMenuElement extends Components.CatMenu, HTMLStencilElement {
    }
    var HTMLCatMenuElement: {
        prototype: HTMLCatMenuElement;
        new (): HTMLCatMenuElement;
    };
    interface HTMLCatRadioElement extends Components.CatRadio, HTMLStencilElement {
    }
    var HTMLCatRadioElement: {
        prototype: HTMLCatRadioElement;
        new (): HTMLCatRadioElement;
    };
    interface HTMLCatScrollableElement extends Components.CatScrollable, HTMLStencilElement {
    }
    var HTMLCatScrollableElement: {
        prototype: HTMLCatScrollableElement;
        new (): HTMLCatScrollableElement;
    };
    interface HTMLCatSkeletonElement extends Components.CatSkeleton, HTMLStencilElement {
    }
    var HTMLCatSkeletonElement: {
        prototype: HTMLCatSkeletonElement;
        new (): HTMLCatSkeletonElement;
    };
    interface HTMLCatSpinnerElement extends Components.CatSpinner, HTMLStencilElement {
    }
    var HTMLCatSpinnerElement: {
        prototype: HTMLCatSpinnerElement;
        new (): HTMLCatSpinnerElement;
    };
    interface HTMLCatTextareaElement extends Components.CatTextarea, HTMLStencilElement {
    }
    var HTMLCatTextareaElement: {
        prototype: HTMLCatTextareaElement;
        new (): HTMLCatTextareaElement;
    };
    interface HTMLCatToastDemoElement extends Components.CatToastDemo, HTMLStencilElement {
    }
    var HTMLCatToastDemoElement: {
        prototype: HTMLCatToastDemoElement;
        new (): HTMLCatToastDemoElement;
    };
    interface HTMLCatToggleElement extends Components.CatToggle, HTMLStencilElement {
    }
    var HTMLCatToggleElement: {
        prototype: HTMLCatToggleElement;
        new (): HTMLCatToggleElement;
    };
    interface HTMLCatTooltipElement extends Components.CatTooltip, HTMLStencilElement {
    }
    var HTMLCatTooltipElement: {
        prototype: HTMLCatTooltipElement;
        new (): HTMLCatTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "cat-alert": HTMLCatAlertElement;
        "cat-badge": HTMLCatBadgeElement;
        "cat-button": HTMLCatButtonElement;
        "cat-card": HTMLCatCardElement;
        "cat-checkbox": HTMLCatCheckboxElement;
        "cat-icon": HTMLCatIconElement;
        "cat-input": HTMLCatInputElement;
        "cat-menu": HTMLCatMenuElement;
        "cat-radio": HTMLCatRadioElement;
        "cat-scrollable": HTMLCatScrollableElement;
        "cat-skeleton": HTMLCatSkeletonElement;
        "cat-spinner": HTMLCatSpinnerElement;
        "cat-textarea": HTMLCatTextareaElement;
        "cat-toast-demo": HTMLCatToastDemoElement;
        "cat-toggle": HTMLCatToggleElement;
        "cat-tooltip": HTMLCatTooltipElement;
    }
}
declare namespace LocalJSX {
    interface CatAlert {
        /**
          * The color palette of the alert.
         */
        "color"?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    }
    interface CatBadge {
        /**
          * The color palette of the badge.
         */
        "color"?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Draw attention to the badge with a subtle animation.
         */
        "pulse"?: boolean;
        /**
          * Use round badge edges.
         */
        "round"?: boolean;
        /**
          * The size of the badge.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the badge.
         */
        "variant"?: 'filled' | 'outlined';
    }
    interface CatButton {
        /**
          * Adds accessible label for the button that is only shown for screen readers. Typically, this label text replaces the visible text on the button for users who use assistive technology.
         */
        "a11yLabel"?: string;
        /**
          * Show an active status indicator on the left side of the button.
         */
        "active"?: boolean;
        /**
          * Adds a unique identifier for the button. Please note that with this particular component this ID is added inside the web component. If you need an ID on the HTML element, use the regular `id` attribute instead.
         */
        "buttonId"?: string;
        /**
          * The color palette of the button.
         */
        "color"?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
        /**
          * Specifies that the button should be disabled. A disabled button is unusable and un-clickable. Corresponds with the native HTML disabled attribute.
         */
        "disabled"?: boolean;
        /**
          * The name of an icon to be displayed in the button.
         */
        "icon"?: string;
        /**
          * Hide the actual button content and only display the icon.
         */
        "iconOnly"?: boolean | Breakpoint;
        /**
          * Display the icon on the right.
         */
        "iconRight"?: boolean;
        /**
          * Displays the button in a loading state with a spinner. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "loading"?: boolean;
        /**
          * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute.
         */
        "name"?: string;
        /**
          * Ellipse overflowing button content.
         */
        "noEllipsed"?: boolean;
        /**
          * Emitted when the button loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the button is clicked.
         */
        "onCatClick"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * Emitted when the button received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Use round button edges.
         */
        "round"?: boolean;
        /**
          * The size of the button.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * Allows the button to submit a form.
         */
        "submit"?: boolean;
        /**
          * A destination to link to, rendered in the href attribute of a link.
         */
        "url"?: string;
        /**
          * Specifies where to open the linked document.
         */
        "urlTarget"?: '_blank' | '_self';
        /**
          * The value of the button, which gets paired with the button's name when submitted as part of a form. Corresponds with the native HTML value attribute.
         */
        "value"?: string;
        /**
          * The rendering style of the button.
         */
        "variant"?: 'filled' | 'outlined' | 'text';
    }
    interface CatCard {
    }
    interface CatCheckbox {
        /**
          * Checked state of the checkbox
         */
        "checked"?: boolean;
        /**
          * Disabled state of the checkbox
         */
        "disabled"?: boolean;
        /**
          * Indeterminate state of the checkbox
         */
        "indeterminate"?: boolean;
        /**
          * Label of the checkbox which is presented in the UI
         */
        "label"?: string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden"?: boolean;
        /**
          * The name of the input
         */
        "name"?: string;
        /**
          * Emitted when the checkbox loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the checked status of the checkbox is changed.
         */
        "onCatChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the checkbox received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Required state of the checkbox
         */
        "required"?: boolean;
        /**
          * The value of the checkbox
         */
        "value"?: string;
    }
    interface CatIcon {
        /**
          * Adds accessible label for the icon that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The name of the icon.
         */
        "icon"?: string;
        /**
          * The size of the icon.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatInput {
        /**
          * Hint for form autofill feature.
         */
        "autoComplete"?: string;
        /**
          * Whether the input should show a clear button.
         */
        "clearable"?: boolean;
        /**
          * Whether the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * Optional hint text to be displayed with the input.
         */
        "hint"?: string;
        /**
          * The name of an icon to be displayed in the input.
         */
        "icon"?: string;
        /**
          * Display the icon on the right.
         */
        "iconRight"?: boolean;
        /**
          * The label for the input.
         */
        "label"?: string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden"?: boolean;
        /**
          * A maximum value for numeric values.
         */
        "max"?: number;
        /**
          * A maximum length (number of characters) for textual values.
         */
        "maxLength"?: number;
        /**
          * A minimum value for numeric values.
         */
        "min"?: number;
        /**
          * A minimum length (number of characters) for textual values.
         */
        "minLength"?: number;
        /**
          * The name of the form control. Submitted with the form as part of a name/value pair.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the value is changed.
         */
        "onCatChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * The placeholder text to display within the input.
         */
        "placeholder"?: string;
        /**
          * The value is not editable.
         */
        "readonly"?: boolean;
        /**
          * A value is required or must be check for the form to be submittable.
         */
        "required"?: boolean;
        /**
          * Use round input edges.
         */
        "round"?: boolean;
        /**
          * A textual prefix to be displayed in the input.
         */
        "textPrefix"?: string;
        /**
          * A textual suffix to be displayed in the input.
         */
        "textSuffix"?: string;
        /**
          * Type of form control.
         */
        "type"?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
        /**
          * The initial value of the control.
         */
        "value"?: string | number;
    }
    interface CatMenu {
        /**
          * Emitted when the menu is closed.
         */
        "onCatClose"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the menu is opened.
         */
        "onCatOpen"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * The placement of the menu.
         */
        "placement"?: Placement;
    }
    interface CatRadio {
        /**
          * Whether this radio is checked.
         */
        "checked"?: boolean;
        /**
          * Whether this radio is disabled.
         */
        "disabled"?: boolean;
        /**
          * The label of the radio that is visible.
         */
        "label"?: string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden"?: boolean;
        /**
          * The name of the radio component.
         */
        "name"?: string;
        /**
          * Emitted when the radio loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the radio is changed.
         */
        "onCatChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the radio received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Whether the radio is required.
         */
        "required"?: boolean;
        /**
          * The value of the radio component.
         */
        "value"?: string;
    }
    interface CatScrollable {
        /**
          * Flags to enable/disable overflowX.
         */
        "noOverflowX"?: boolean;
        /**
          * Flags to enable/disable overflowY.
         */
        "noOverflowY"?: boolean;
        /**
          * Flag to enable/disable overscroll behavior.
         */
        "noOverscroll"?: boolean;
        /**
          * Flag to fire an initial event after content initialization.
         */
        "noScrolledInit"?: boolean;
        /**
          * Flags to enable/disable scroll shadowX.
         */
        "noShadowX"?: boolean;
        /**
          * Flags to enable/disable scroll shadowY.
         */
        "noShadowY"?: boolean;
        /**
          * Emitted when the content is fully scrolled to the bottom.
         */
        "onScrolledBottom"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the content is fully scrolled to the left.
         */
        "onScrolledLeft"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the content is fully scrolled to the right.
         */
        "onScrolledRight"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the content is fully scrolled to the top.
         */
        "onScrolledTop"?: (event: CustomEvent<void>) => void;
        /**
          * Buffer to be used to calculate the scroll distance.
         */
        "scrolledBuffer"?: number;
    }
    interface CatSkeleton {
        /**
          * The animation style of the skeleton.
         */
        "effect"?: 'plain' | 'sheen' | 'pulse';
        /**
          * The number of text lines to be rendered for "head" and "body" variants. Defaults to 1 for "head" and 3 for "body". Will be ignored for other variants.
         */
        "lines"?: number;
        /**
          * The size of the skeleton. If the variant is set to "head", the size values "xs" to "xl" translate to the head levels `h1` to `h5`.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * The rendering style of the skeleton.
         */
        "variant"?: 'rectangle' | 'square' | 'circle' | 'head' | 'body';
    }
    interface CatSpinner {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The size of the spinner.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatTextarea {
        /**
          * Whether the textarea is disabled.
         */
        "disabled"?: boolean;
        /**
          * Optional hint text to be displayed with the textarea.
         */
        "hint"?: string;
        /**
          * The label for the textarea.
         */
        "label"?: string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden"?: boolean;
        /**
          * A maximum length (number of characters) for textual values.
         */
        "maxLength"?: number;
        /**
          * A minimum length (number of characters) for textual values.
         */
        "minLength"?: number;
        /**
          * The name of the form control. Submitted with the form as part of a name/value pair.
         */
        "name"?: string;
        /**
          * Emitted when the textarea loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the value is changed.
         */
        "onCatChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the textarea received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * The placeholder text to display within the input.
         */
        "placeholder"?: string;
        /**
          * The value is not editable.
         */
        "readonly"?: boolean;
        /**
          * A value is required or must be check for the form to be submittable.
         */
        "required"?: boolean;
        /**
          * Specifies the initial number of lines in the textarea.
         */
        "rows"?: number;
        /**
          * The initial value of the control.
         */
        "value"?: string | number;
    }
    interface CatToastDemo {
    }
    interface CatToggle {
        /**
          * Checked state of the toggle.
         */
        "checked"?: boolean;
        /**
          * Disabled state of the toggle.
         */
        "disabled"?: boolean;
        /**
          * The label of the toggle that is visible.
         */
        "label"?: string;
        /**
          * Visually hide the label, but still show it to assistive technologies like screen readers.
         */
        "labelHidden"?: boolean;
        /**
          * The name of the input
         */
        "name"?: string;
        /**
          * Emitted when the toggle loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the checked status of the toggle is changed.
         */
        "onCatChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the toggle received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Required state of the toggle
         */
        "required"?: boolean;
        /**
          * The value of the toggle
         */
        "value"?: string;
    }
    interface CatTooltip {
        /**
          * The content of the tooltip.
         */
        "content"?: string;
        /**
          * Specifies that the tooltip should be disabled. A disabled tooltip is unusable, and invisible. Corresponds with the native HTML disabled attribute.
         */
        "disabled"?: boolean;
        /**
          * The delay time for hiding tooltip in ms.
         */
        "hideDelay"?: number;
        /**
          * The duration of tap to show the tooltip.
         */
        "longTouchDuration"?: number;
        /**
          * The placement of the tooltip.
         */
        "placement"?: Placement;
        /**
          * The delay time for showing tooltip in ms.
         */
        "showDelay"?: number;
    }
    interface IntrinsicElements {
        "cat-alert": CatAlert;
        "cat-badge": CatBadge;
        "cat-button": CatButton;
        "cat-card": CatCard;
        "cat-checkbox": CatCheckbox;
        "cat-icon": CatIcon;
        "cat-input": CatInput;
        "cat-menu": CatMenu;
        "cat-radio": CatRadio;
        "cat-scrollable": CatScrollable;
        "cat-skeleton": CatSkeleton;
        "cat-spinner": CatSpinner;
        "cat-textarea": CatTextarea;
        "cat-toast-demo": CatToastDemo;
        "cat-toggle": CatToggle;
        "cat-tooltip": CatTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cat-alert": LocalJSX.CatAlert & JSXBase.HTMLAttributes<HTMLCatAlertElement>;
            "cat-badge": LocalJSX.CatBadge & JSXBase.HTMLAttributes<HTMLCatBadgeElement>;
            "cat-button": LocalJSX.CatButton & JSXBase.HTMLAttributes<HTMLCatButtonElement>;
            "cat-card": LocalJSX.CatCard & JSXBase.HTMLAttributes<HTMLCatCardElement>;
            "cat-checkbox": LocalJSX.CatCheckbox & JSXBase.HTMLAttributes<HTMLCatCheckboxElement>;
            "cat-icon": LocalJSX.CatIcon & JSXBase.HTMLAttributes<HTMLCatIconElement>;
            "cat-input": LocalJSX.CatInput & JSXBase.HTMLAttributes<HTMLCatInputElement>;
            "cat-menu": LocalJSX.CatMenu & JSXBase.HTMLAttributes<HTMLCatMenuElement>;
            "cat-radio": LocalJSX.CatRadio & JSXBase.HTMLAttributes<HTMLCatRadioElement>;
            "cat-scrollable": LocalJSX.CatScrollable & JSXBase.HTMLAttributes<HTMLCatScrollableElement>;
            "cat-skeleton": LocalJSX.CatSkeleton & JSXBase.HTMLAttributes<HTMLCatSkeletonElement>;
            "cat-spinner": LocalJSX.CatSpinner & JSXBase.HTMLAttributes<HTMLCatSpinnerElement>;
            "cat-textarea": LocalJSX.CatTextarea & JSXBase.HTMLAttributes<HTMLCatTextareaElement>;
            "cat-toast-demo": LocalJSX.CatToastDemo & JSXBase.HTMLAttributes<HTMLCatToastDemoElement>;
            "cat-toggle": LocalJSX.CatToggle & JSXBase.HTMLAttributes<HTMLCatToggleElement>;
            "cat-tooltip": LocalJSX.CatTooltip & JSXBase.HTMLAttributes<HTMLCatTooltipElement>;
        }
    }
}
