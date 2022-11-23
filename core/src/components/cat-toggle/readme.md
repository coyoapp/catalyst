# cat-toggle



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                               | Type                              | Default     |
| ------------- | -------------- | ----------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `checked`     | `checked`      | Checked state of the toggle.                                                              | `boolean`                         | `false`     |
| `disabled`    | `disabled`     | Disabled state of the toggle.                                                             | `boolean`                         | `false`     |
| `hint`        | `hint`         | Optional hint text(s) to be displayed with the toggle.                                    | `string \| string[] \| undefined` | `undefined` |
| `identifier`  | `identifier`   | A unique identifier for the input.                                                        | `string \| undefined`             | `undefined` |
| `label`       | `label`        | The label of the toggle that is visible.                                                  | `string`                          | `''`        |
| `labelHidden` | `label-hidden` | Visually hide the label, but still show it to assistive technologies like screen readers. | `boolean`                         | `false`     |
| `labelLeft`   | `label-left`   | Whether the label should appear to the left of the toggle.                                | `boolean`                         | `false`     |
| `name`        | `name`         | The name of the input                                                                     | `string \| undefined`             | `undefined` |
| `required`    | `required`     | Required state of the toggle.                                                             | `boolean`                         | `false`     |
| `value`       | `value`        | The value of the toggle                                                                   | `boolean \| string \| undefined`  | `undefined` |


## Events

| Event       | Description                                               | Type                      |
| ----------- | --------------------------------------------------------- | ------------------------- |
| `catBlur`   | Emitted when the toggle loses focus.                      | `CustomEvent<FocusEvent>` |
| `catChange` | Emitted when the checked status of the toggle is changed. | `CustomEvent<any>`        |
| `catFocus`  | Emitted when the toggle received focus.                   | `CustomEvent<FocusEvent>` |


## Methods

### `doBlur() => Promise<void>`

Programmatically remove focus from the toggle. Use this method instead of
`input.blur()`.

#### Returns

Type: `Promise<void>`



### `doClick() => Promise<void>`

Programmatically simulate a click on the toggle.

#### Returns

Type: `Promise<void>`



### `doFocus(options?: FocusOptions | undefined) => Promise<void>`

Programmatically move focus to the toggle. Use this method instead of
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| `"hint"`  | Optional hint element to be displayed with the toggle.                                                               |
| `"label"` | The slotted label. If both the label property and the label slot are present, only the label slot will be displayed. |


## Shadow Parts

| Part       | Description         |
| ---------- | ------------------- |
| `"label"`  | The label content.  |
| `"toggle"` | The toggle element. |


----------------------------------------------

Made with love in Hamburg, Germany
