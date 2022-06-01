# cat-avatar



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                         | Type                                | Default     |
| ----------- | ------------ | ------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `icon`      | `icon`       | An icon to be used instead of the initials.                         | `string \| undefined`               | `undefined` |
| `initials`  | `initials`   | Custom initials for the avatar.                                     | `string \| undefined`               | `undefined` |
| `label`     | `label`      | The label of the avatar.                                            | `string`                            | `''`        |
| `round`     | `round`      | Use round avatar edges.                                             | `boolean`                           | `false`     |
| `size`      | `size`       | The size of the avatar.                                             | `"l" \| "m" \| "s" \| "xl" \| "xs"` | `'m'`       |
| `src`       | `src`        | An optional avatar image.                                           | `string \| undefined`               | `undefined` |
| `url`       | `url`        | A destination to link to, rendered in the href attribute of a link. | `string \| undefined`               | `undefined` |
| `urlTarget` | `url-target` | Specifies where to open the linked document.                        | `"_blank" \| "_self" \| undefined`  | `undefined` |


## Dependencies

### Depends on

- [cat-icon](../cat-icon)

### Graph
```mermaid
graph TD;
  cat-avatar --> cat-icon
  style cat-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Made with love in Hamburg, Germany
