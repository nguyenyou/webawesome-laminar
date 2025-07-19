package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Checkboxes allow the user to toggle an option on or off.
  *
  * [[https://backers.webawesome.com/docs/components/checkbox WebAwesome  docs]]
  */
object Checkbox extends WebComponent("wa-checkbox") {

  @JSImport("@awesome.me/webawesome/dist/components/checkbox/checkbox.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Checkbox.type

  type Ref = WaCheckboxComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the checked state changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the checkbox loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the checkbox gains focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the checkbox receives input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The value of the checkbox, submitted as a name/value pair with form data. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The checkbox's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

  /** Disables the checkbox. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
  all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  lazy val indeterminate: HtmlAttr[Boolean] = boolAttr("indeterminate")

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val checked: HtmlAttr[Boolean] = boolAttr("checked")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work. */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** Makes the checkbox a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The checkbox's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Slots --

  object slots {
    /** The checkbox's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** Text that describes how to use the checkbox. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The color of the checked and indeterminate icons. */
    lazy val checkedIconColor: String = "--checked-icon-color"

    /** The size of the checked and indeterminate icons relative to the checkbox. */
    lazy val checkedIconScale: String = "--checked-icon-scale"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's label . */
    lazy val base: String = "base"

    /** The square container that wraps the checkbox's checked state. */
    lazy val control: String = "control"

    /** The checked icon, a `<wa-icon>` element. */
    lazy val checkedIcon: String = "checked-icon"

    /** The indeterminate icon, a `<wa-icon>` element. */
    lazy val indeterminateIcon: String = "indeterminate-icon"

    /** The container that wraps the checkbox's label. */
    lazy val label: String = "label"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

  }

  // -- Element type --

  @js.native trait WaCheckboxComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The name of the checkbox, submitted as a name/value pair with form data. */
    var name: String

    /** The value of the checkbox, submitted as a name/value pair with form data. */
    var value: String

    /** The checkbox's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** Disables the checkbox. */
    var disabled: Boolean

    /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
    all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
    var indeterminate: Boolean

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultChecked: Boolean

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    the same document or shadow root for this to work. */
    var form: String

    /** Makes the checkbox a required field. */
    var required: Boolean

    /** The checkbox's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    def handleDefaultCheckedChange(): js.Any = js.native

    def handleValueOrCheckedChange(): js.Any = js.native

    def handleStateChange(): js.Any = js.native

    def handleDisabledChange(): js.Any = js.native

    def formResetCallback(): js.Any = js.native

    /** Simulates a click on the checkbox. */
    def click(): js.Any = js.native

    /** Sets focus on the checkbox. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the checkbox. */
    def blur(): js.Any = js.native

  }
}