package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Switches allow the user to toggle an option on or off.
  *
  * [[https://backers.webawesome.com/docs/components/switch WebAwesome  docs]]
  */
object Switch extends WebComponent("wa-switch") {

  @JSImport("@awesome.me/webawesome/dist/components/switch/switch.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Switch.type

  type Ref = WaSwitchComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the control's checked state changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the control receives input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  /** Emitted when the control loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The name of the switch, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The value of the switch, submitted as a name/value pair with form data. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The switch's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

  /** Disables the switch. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val checked: HtmlAttr[Boolean] = boolAttr("checked")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work. */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** Makes the switch a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Slots --

  object slots {
    /** The switch's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** Text that describes how to use the switch. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The width of the switch. */
    lazy val width: String = "--width"

    /** The height of the switch. */
    lazy val height: String = "--height"

    /** The size of the thumb. */
    lazy val thumbSize: String = "--thumb-size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

    /** The control that houses the switch's thumb. */
    lazy val control: String = "control"

    /** The switch's thumb. */
    lazy val thumb: String = "thumb"

    /** The switch's label. */
    lazy val label: String = "label"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

  }

  // -- Element type --

  @js.native trait WaSwitchComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The name of the switch, submitted as a name/value pair with form data. */
    var name: String

    /** The value of the switch, submitted as a name/value pair with form data. */
    var value: String

    /** The switch's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** Disables the switch. */
    var disabled: Boolean

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultChecked: Boolean

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    the same document or shadow root for this to work. */
    var form: String

    /** Makes the switch a required field. */
    var required: Boolean

    /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. */
    var withHint: Boolean

    def handleValueOrCheckedChange(): js.Any = js.native

    def handleDefaultCheckedChange(): js.Any = js.native

    def handleStateChange(): js.Any = js.native

    def handleDisabledChange(): js.Any = js.native

    /** Simulates a click on the switch. */
    def click(): js.Any = js.native

    /** Sets focus on the switch. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the switch. */
    def blur(): js.Any = js.native

    def setValue(value: js.Any, stateValue: js.Any = js.undefined): Unit = js.native

    def formResetCallback(): Unit = js.native

  }
}