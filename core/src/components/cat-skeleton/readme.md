# cat-skeleton



<!-- Auto Generated Below -->


## Overview

Skeletons are used to show where content will eventually be drawn.

## Properties

| Property  | Attribute | Description                                                                                                                                            | Type                                                      | Default       |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ------------- |
| `effect`  | `effect`  | The animation style of the skeleton.                                                                                                                   | `"plain" \| "pulse" \| "sheen"`                           | `'sheen'`     |
| `lines`   | `lines`   | The number of text lines to be rendered for "head" and "body" variants. Defaults to 1 for "head" and 3 for "body". Will be ignored for other variants. | `number \| undefined`                                     | `undefined`   |
| `size`    | `size`    | The size of the skeleton. If the variant is set to "head", the size values "xs" to "xl" translate to the head levels `h1` to `h5`.                     | `"l" \| "m" \| "s" \| "xl" \| "xs"`                       | `'m'`         |
| `variant` | `variant` | The rendering style of the skeleton.                                                                                                                   | `"body" \| "circle" \| "head" \| "rectangle" \| "square"` | `'rectangle'` |


## CSS Custom Properties

| Name           | Description                           |
| -------------- | ------------------------------------- |
| `--background` | The background color of the skeleton. |
| `--highlight`  | The highlight color of the skeleton.  |
| `--speed`      | The animation speed.                  |


## Dependencies

### Used by

 - [cat-select](../cat-select)

### Graph
```mermaid
graph TD;
  cat-select --> cat-skeleton
  style cat-skeleton fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Made with love in Hamburg, Germany
