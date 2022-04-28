import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import log from "loglevel";

let nextUniqueId = 0;

@Component({
  tag: 'cat-toggle',
  styleUrls: ['../form-check.scss', 'cat-toggle.scss'],
  shadow: true
})
export class CatToggle {
  private readonly id = `cat-toggle-${nextUniqueId++}`;

  /**
   * Checked state of the toggle
   */
  @Prop() checked = false;

  /**
   * The value of the toggle
   */
  @Prop() value?: string;

  /**
   * Label of the toggle which is presented in the UI
   */
  @Prop() label = '';

  /**
   * Flag to show/hide the label
   */
  @Prop() hideLabel = false;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
   * Required state of the toggle
   */
  @Prop() required = false;

  /**
   * Disabled state of the toggle
   */
  @Prop() disabled = false;

  /**
   * Emitted when the checked status of the toggle is changed
   */
  @Event() toggleChange!: EventEmitter;

  componentWillRender(): void {
    if (!this.label) {
      log.error('Missing label on radio element', this);
    }
  }

  render() {
    return (
      <div class="form-check form-switch">
        <input
          onInput={event => this.handleChange(event)}
          id={this.id}
          type="checkbox"
          name={this.name}
          value={this.value}
          required={this.required}
          checked={this.checked}
          disabled={this.disabled}
          class="form-check-input"
          role="switch"
        />
        {!this.hideLabel && (
          <label class="form-check-label" htmlFor={this.id}>
            {this.label}
          </label>
        )}
      </div>
    );
  }

  private handleChange(event: Event) {
    this.toggleChange.emit(event);
  }
}
