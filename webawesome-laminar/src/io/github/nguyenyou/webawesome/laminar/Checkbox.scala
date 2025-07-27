package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.nodes.Slot
import com.raquo.laminar.tags.CustomHtmlTag
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Checkboxes allow the user to toggle an option on or off.
  *
  * [[https://webawesome.com/docs/components/checkbox WebAwesome docs]]
  */
object Checkbox extends WebComponent("wa-checkbox") with ControlledInput {

  @JSImport("@awesome.me/webawesome/dist/components/checkbox/checkbox.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Checkbox.type

  type Ref = WaCheckboxComponent & dom.HTMLElement

  // -- Controlled Component --

  override protected lazy val tag: CustomHtmlTag[Ref] = {
    tagWithControlledInput(checked, initial = false, onInput)
  }

  // -- Events --

  /** Emitted when the checked state changes. */
  lazy val onChange: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the checkbox loses focus. */
  lazy val onBlur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the checkbox gains focus. */
  lazy val onFocus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the checkbox receives input. */
  lazy val onInput: EventProp[dom.Event] = eventProp("input")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Props --

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val checked: HtmlProp[Boolean, ?] = L.checked

  /** The value of the checkbox, submitted as a name/value pair with form data. */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The checkbox's size. Valid values: "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Disables the checkbox. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
    * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
    */
  lazy val indeterminate: HtmlAttr[Boolean] = boolAttr("indeterminate")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    * the same document or shadow root for this to work.
    */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** Makes the checkbox a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The checkbox's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

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

  @js.native
  trait WaCheckboxComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The name of the checkbox, submitted as a name/value pair with form data. */
    var name: String

    /** The checkbox's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** Disables the checkbox. */
    var disabled: Boolean

    /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
      * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
      */
    var indeterminate: Boolean

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be
      * in the same document or shadow root for this to work.
      */
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
