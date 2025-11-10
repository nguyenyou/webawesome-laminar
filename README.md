# Button (/docs/button)
<Preview
  compiledSjsPath="button"
  exampleCode="Button(
  _.onClick --> Observer[dom.MouseEvent] { event =>
    dom.window.alert(s&#x22;Clicked at clientX ${event.clientX}, clientY ${event.clientY}&#x22;)
  }
)(&#x22;Button&#x22;)"
  exampleId="example1"
  height="h-[60px]"
/>

## Examples

### Variants

Use the `variant` attribute to set the button's semantic variant.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.variant.brand)(&#x22;Brand&#x22;)
Button(_.variant.danger)(&#x22;Danger&#x22;)
Button(_.variant.neutral)(&#x22;Neutral&#x22;)
Button(_.variant.success)(&#x22;Success&#x22;)
Button(_.variant.warning)(&#x22;Warning&#x22;)"
  exampleId="example2"
  height="h-[60px]"
/>

### Appearance

Use the `appearance` attribute to change the button's visual appearance.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.appearance.accent, _.variant.neutral)(&#x22;Accent&#x22;)
Button(_.appearance.filledOutlined, _.variant.neutral)(&#x22;Filled + Outlined&#x22;)
Button(_.appearance.filled, _.variant.neutral)(&#x22;Filled&#x22;)
Button(_.appearance.outlined, _.variant.neutral)(&#x22;Outlined&#x22;)
Button(_.appearance := &#x22;plain&#x22;, _.variant := &#x22;neutral&#x22;)(&#x22;Plain&#x22;)

Button(_.appearance.accent, _.variant.brand)(&#x22;Accent&#x22;)
Button(_.appearance.filledOutlined, _.variant.brand)(&#x22;Filled + Outlined&#x22;)
Button(_.appearance.filled, _.variant.brand)(&#x22;Filled&#x22;)
Button(_.appearance.outlined, _.variant.brand)(&#x22;Outlined&#x22;)
Button(_.appearance.plain, _.variant.brand)(&#x22;Plain&#x22;)

Button(_.appearance.accent, _.variant.success)(&#x22;Accent&#x22;)
Button(_.appearance.filledOutlined, _.variant.success)(&#x22;Filled + Outlined&#x22;)
Button(_.appearance.filled, _.variant.success)(&#x22;Filled&#x22;)
Button(_.appearance.outlined, _.variant.success)(&#x22;Outlined&#x22;)
Button(_.appearance.plain, _.variant.success)(&#x22;Plain&#x22;)

Button(_.appearance.accent, _.variant.warning)(&#x22;Accent&#x22;)
Button(_.appearance.filledOutlined, _.variant.warning)(&#x22;Filled + Outlined&#x22;)
Button(_.appearance.filled, _.variant.warning)(&#x22;Filled&#x22;)
Button(_.appearance.outlined, _.variant.warning)(&#x22;Outlined&#x22;)
Button(_.appearance.plain, _.variant.warning)(&#x22;Plain&#x22;)

Button(_.appearance.accent, _.variant.danger)(&#x22;Accent&#x22;)
Button(_.appearance.filledOutlined, _.variant.danger)(&#x22;Filled + Outlined&#x22;)
Button(_.appearance.filled, _.variant.danger)(&#x22;Filled&#x22;)
Button(_.appearance.outlined, _.variant.danger)(&#x22;Outlined&#x22;)
Button(_.appearance.plain, _.variant.danger)(&#x22;Plain&#x22;)"
  exampleId="example3"
  height="h-[263px]"
/>

### Sizes

Use the `size` attribute to change a button's size.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.size.small)(&#x22;Small&#x22;)
Button(_.size.medium)(&#x22;Medium&#x22;)
Button(_.size.large)(&#x22;Large&#x22;)"
  exampleId="example4"
  height="h-[70px]"
/>

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.size.small, _.pill := true)(&#x22;Small&#x22;)
Button(_.size.medium, _.pill := true)(&#x22;Medium&#x22;)
Button(_.size.large, _.pill := true)(&#x22;Large&#x22;)"
  exampleId="example5"
  height="h-[70px]"
/>

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. \[\[CMD/CTRL/SHIFT]] + \[\[CLICK]]) and exposes the `rel`, `target`, and `download` attributes.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.href := &#x22;https://example.com/&#x22;)(&#x22;Link&#x22;)
Button(_.href := &#x22;https://example.com/&#x22;, _.target := &#x22;_blank&#x22;)(&#x22;Link with target&#x22;)
Button(
  _.href     := &#x22;/assets/images/logo.svg&#x22;,
  _.download := &#x22;shoelace.svg&#x22;
)(&#x22;Download&#x22;)"
  exampleId="example6"
  height="h-[60px]"
/>

### Icon Buttons

When only an [icon](/docs/icon) is slotted into the `label` slot, the button becomes an icon button. In this case, it's important to give the icon a label for users with assistive devices. Icon buttons can use any appearance or variant.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.appearance.accent, _.variant.neutral)(
  Icon(_.name := &#x22;house&#x22;, _.label := &#x22;Home&#x22;)()
)
Button(_.appearance.filled, _.variant.neutral)(
  Icon(_.name := &#x22;house&#x22;, _.label := &#x22;Home&#x22;)()
)
Button(_.appearance.outlined, _.variant.neutral)(
  Icon(_.name := &#x22;house&#x22;, _.label := &#x22;Home&#x22;)()
)
Button(_.appearance.plain, _.variant.neutral)(
  Icon(_.name := &#x22;house&#x22;, _.label := &#x22;Home&#x22;)()
)"
  exampleId="example7"
  height="h-[60px]"
/>

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` CSS property. This is useful for making buttons span the full width of their container on smaller screens.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.size.small)(width.percent(100), &#x22;Small&#x22;)
Button(_.size.medium)(width.percent(100), &#x22;Medium&#x22;)
Button(_.size.large)(width.percent(100), &#x22;Large&#x22;)"
  exampleId="example8"
  height="h-[184px]"
/>

### Start & End Decorations

Use the `start` and `end` slots to add presentational elements like `<wa-icon>` next to the button label.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(
  _.size.small,
  _.slots.start(Icon(_.name := &#x22;gear&#x22;, _.label := &#x22;Settings&#x22;)())
)(&#x22;Settings&#x22;)
Button(
  _.size.small,
  _.slots.end(Icon(_.name := &#x22;undo&#x22;, _.label := &#x22;Refresh&#x22;)())
)(&#x22;Refresh&#x22;)
Button(
  _.size.small,
  _.slots.start(Icon(_.name := &#x22;link&#x22;, _.label := &#x22;Link&#x22;)()),
  _.slots.end(
    Icon(
      _.name  := &#x22;arrow-up-right-from-square&#x22;,
      _.label := &#x22;Open in new tab&#x22;
    )()
  )
)(&#x22;Open&#x22;)

Button(
  _.size.medium,
  _.slots.start(Icon(_.name := &#x22;gear&#x22;, _.label := &#x22;Settings&#x22;)())
)(&#x22;Settings&#x22;)
Button(
  _.size.medium,
  _.slots.end(Icon(_.name := &#x22;undo&#x22;, _.label := &#x22;Refresh&#x22;)())
)(&#x22;Refresh&#x22;)
Button(
  _.size.medium,
  _.slots.start(Icon(_.name := &#x22;link&#x22;, _.label := &#x22;Link&#x22;)()),
  _.slots.end(
    Icon(
      _.name  := &#x22;arrow-up-right-from-square&#x22;,
      _.label := &#x22;Open in new tab&#x22;
    )()
  )
)(&#x22;Open&#x22;)

Button(
  _.size.large,
  _.slots.start(Icon(_.name := &#x22;gear&#x22;, _.label := &#x22;Settings&#x22;)())
)(&#x22;Settings&#x22;)
Button(
  _.size.large,
  _.slots.end(Icon(_.name := &#x22;undo&#x22;, _.label := &#x22;Refresh&#x22;)())
)(&#x22;Refresh&#x22;)
Button(
  _.size.large,
  _.slots.start(Icon(_.name := &#x22;link&#x22;, _.label := &#x22;Link&#x22;)()),
  _.slots.end(
    Icon(
      _.name  := &#x22;arrow-up-right-from-square&#x22;,
      _.label := &#x22;Open in new tab&#x22;
    )()
  )
)(&#x22;Open&#x22;)"
  exampleId="example9"
  height="h-[167px]"
/>

### Caret

Use the `with-caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.size.small, _.withCaret := true)(&#x22;Small&#x22;)
Button(_.size.medium, _.withCaret := true)(&#x22;Medium&#x22;)
Button(_.size.large, _.withCaret := true)(&#x22;Large&#x22;)"
  exampleId="example10"
  height="h-[70px]"
/>

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.variant.brand, _.loading := true)(&#x22;Brand&#x22;)
Button(_.variant.danger, _.loading := true)(&#x22;Danger&#x22;)
Button(_.variant.neutral, _.loading := true)(&#x22;Neutral&#x22;)
Button(_.variant.success, _.loading := true)(&#x22;Success&#x22;)
Button(_.variant.warning, _.loading := true)(&#x22;Warning&#x22;)"
  exampleId="example11"
  height="h-[62px]"
/>

### Disabled

Use the `disabled` attribute to disable a button.

<Preview
  compiledSjsPath="button"
  exampleCode="Button(_.variant.brand, _.disabled := true)(&#x22;Brand&#x22;)
Button(_.variant.danger, _.disabled := true)(&#x22;Danger&#x22;)
Button(_.variant.neutral, _.disabled := true)(&#x22;Neutral&#x22;)
Button(_.variant.success, _.disabled := true)(&#x22;Success&#x22;)
Button(_.variant.warning, _.disabled := true)(&#x22;Warning&#x22;)"
  exampleId="example12"
  height="h-[62px]"
/>

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `wa-button[variant="brand"]`).

<div />

<Preview
  compiledSjsPath="button"
  exampleCode="Button()(cls := &#x22;pink&#x22;, &#x22;Pink Button&#x22;)"
  exampleId="example13"
  height="h-[68px]"
  css="wa-button.pink::part(base) {
  border-radius: 6px;
  border: solid 2px;
  background: #ff1493;
  border-top-color: #ff7ac1;
  border-left-color: #ff7ac1;
  border-bottom-color: #ad005c;
  border-right-color: #ad005c;
  color: white;
  font-size: 1.125rem;
  box-shadow: 0 2px 10px #0002;
  transition: all var(--wa-transition-slow) var(--wa-transition-easing);
}

wa-button.pink::part(base):hover {
  transform: scale(1.05);
}

wa-button.pink::part(base):active {
  border-top-color: #ad005c;
  border-right-color: #ff7ac1;
  border-bottom-color: #ff7ac1;
  border-left-color: #ad005c;
  transform: translateY(1px);
}

wa-button.pink::part(base):focus-visible {
  outline: dashed 2px deeppink;
  outline-offset: 4px;
}"
  showCss="wa-button.pink::part(base) {
  border-radius: 6px;
  border: solid 2px;
  background: #ff1493;
  border-top-color: #ff7ac1;
  border-left-color: #ff7ac1;
  border-bottom-color: #ad005c;
  border-right-color: #ad005c;
  color: white;
  font-size: 1.125rem;
  box-shadow: 0 2px 10px #0002;
  transition: all var(--wa-transition-slow) var(--wa-transition-easing);
}

wa-button.pink::part(base):hover {
  transform: scale(1.05);
}

wa-button.pink::part(base):active {
  border-top-color: #ad005c;
  border-right-color: #ff7ac1;
  border-bottom-color: #ff7ac1;
  border-left-color: #ad005c;
  transform: translateY(1px);
}

wa-button.pink::part(base):focus-visible {
  outline: dashed 2px deeppink;
  outline-offset: 4px;
}"
/>
