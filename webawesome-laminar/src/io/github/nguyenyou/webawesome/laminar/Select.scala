package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/**
  * Selects allow you to choose items from a menu of predefined options.
  *
  * [[https://backers.webawesome.com/docs/components/select WebAwesome  docs]]
  */
object Select extends WebComponent("wa-select") {

  @JSImport("@awesome.me/webawesome/dist/components/select/select.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Select.type

  type Ref = WaSelectComponent & dom.HTMLElement

  // -- Union Types --

  type SelectSize = "small" | "medium" | "large"

  type SelectAppearance = "filled" | "outlined"

  type SelectPlacement = "top" | "bottom"

  // -- Events --

  /** Emitted when the control receives input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  /** Emitted when the control's value changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the control gains focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the control loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the control's value is cleared. */
  lazy val onClear: EventProp[dom.Event] = eventProp("wa-clear")

  /** Emitted when the select's menu opens. */
  lazy val onShow: EventProp[dom.Event] = eventProp("wa-show")

  /** Emitted after the select's menu opens and all animations are complete. */
  lazy val onAfterShow: EventProp[dom.Event] = eventProp("wa-after-show")

  /** Emitted when the select's menu closes. */
  lazy val onHide: EventProp[dom.Event] = eventProp("wa-hide")

  /** Emitted after the select's menu closes and all animations are complete. */
  lazy val onAfterHide: EventProp[dom.Event] = eventProp("wa-after-hide")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Attributes --

  /** The name of the select, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The select's value. This will be a string for single select or an array for multi-select. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The select's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[SelectSize] = unionAttr("size")

  /** Placeholder text to show as a hint when the select is empty. */
  lazy val placeholder: HtmlAttr[String] = stringAttr("placeholder")

  /** Allows more than one option to be selected. */
  lazy val multiple: HtmlAttr[Boolean] = boolAttr("multiple")

  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
  indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  lazy val maxOptionsVisible: HtmlAttr[Double] = doubleAttr("max-options-visible")

  /** Disables the select control. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Adds a clear button when the select is not empty. */
  lazy val withClear: HtmlAttr[Boolean] = boolAttr("with-clear")

  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
  use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The select's visual appearance. Valid values: "filled", "outlined". */
  lazy val appearance: HtmlAttr[SelectAppearance] = unionAttr("appearance")

  /** Draws a pill-style select with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
  inside of the viewport. Valid values: "top", "bottom". */
  lazy val placement: HtmlAttr[SelectPlacement] = unionAttr("placement")

  /** The select's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Used for SSR purposes when a label is slotted in. Will show the label on first render. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Used for SSR purposes when hint is slotted in. Will show the hint on first render. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work. */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** The select's required attribute. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Slots --

  object slots {
    /** The listbox options. Must be `<wa-option>` elements. You can use `<wa-divider>` to group items visually. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The input's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** An element, such as `<wa-icon>`, placed at the start of the combobox. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed at the end of the combobox. */
    lazy val end: Slot = Slot("end")

    /** An icon to use in lieu of the default clear icon. */
    lazy val clearIcon: Slot = Slot("clear-icon")

    /** The icon to show when the control is expanded and collapsed. Rotates on open and close. */
    lazy val expandIcon: Slot = Slot("expand-icon")

    /** Text that describes how to use the input. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** When using `multiple`, the max size of tags before their content is truncated. Default: 10ch */
    lazy val tagMaxSize: String = "--tag-max-size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The form control that wraps the label, input, and hint. */
    lazy val formControl: String = "form-control"

    /** The label's wrapper. */
    lazy val formControlLabel: String = "form-control-label"

    /** The select's wrapper. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** The container the wraps the start, end, value, clear icon, and expand button. */
    lazy val combobox: String = "combobox"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

    /** The element that displays the selected option's label, an `<input>` element. */
    lazy val displayInput: String = "display-input"

    /** The listbox container where options are slotted. */
    lazy val listbox: String = "listbox"

    /** The container that houses option tags when `multiselect` is used. */
    lazy val tags: String = "tags"

    /** The individual tags that represent each multiselect option. */
    lazy val tag: String = "tag"

    /** The tag's content part. */
    lazy val tag__content: String = "tag__content"

    /** The tag's remove button. */
    lazy val tag__removeButton: String = "tag__remove-button"

    /** The tag's remove button base part. */
    lazy val tag__removeButton__base: String = "tag__remove-button__base"

    /** The clear button. */
    lazy val clearButton: String = "clear-button"

    /** The container that wraps the expand icon. */
    lazy val expandIcon: String = "expand-icon"

  }

  // -- Element type --

  @js.native trait WaSelectComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name of the select, submitted as a name/value pair with form data. */
    var name: String

    /** The select's value. This will be a string for single select or an array for multi-select. */
    var value: String

    /** The select's size. Valid values: "small", "medium", "large". */
    var size: "small" | "medium" | "large"

    /** Placeholder text to show as a hint when the select is empty. */
    var placeholder: String

    /** Allows more than one option to be selected. */
    var multiple: Boolean

    /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
    indicate the number of additional items that are selected. Set to 0 to remove the limit. */
    var maxOptionsVisible: Double

    /** Disables the select control. */
    var disabled: Boolean

    /** Adds a clear button when the select is not empty. */
    var withClear: Boolean

    /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
    use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
    var open: Boolean

    /** The select's visual appearance. Valid values: "filled", "outlined". */
    var appearance: "filled" | "outlined"

    /** Draws a pill-style select with rounded edges. */
    var pill: Boolean

    /** The select's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
    inside of the viewport. Valid values: "top", "bottom". */
    var placement: "top" | "bottom"

    /** The select's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Used for SSR purposes when a label is slotted in. Will show the label on first render. */
    var withLabel: Boolean

    /** Used for SSR purposes when hint is slotted in. Will show the hint on first render. */
    var withHint: Boolean

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    the same document or shadow root for this to work. */
    var form: String

    /** The select's required attribute. */
    var required: Boolean

    def handleDefaultSlotChange(): js.Any = js.native

    def selectionChanged(): js.Any = js.native

    def handleDisabledChange(): js.Any = js.native

    def handleValueChange(): js.Any = js.native

    def handleOpenChange(): js.Any = js.native

    /** Shows the listbox. */
    def show(): js.Any = js.native

    /** Hides the listbox. */
    def hide(): js.Any = js.native

    /** Sets focus on the control. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the control. */
    def blur(): js.Any = js.native

    def formResetCallback(): js.Any = js.native

  }
}