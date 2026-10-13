package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.api.L.*
import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Switches toggle a single setting on or off and apply the change immediately, without requiring a form submission.
  *
  * [[https://webawesome.com/docs/components/switch WebAwesome docs]]
  */
object Switch extends WebComponent("wa-switch") {

  @JSImport("@awesome.me/webawesome/dist/components/switch/switch.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Switch.type

  type Ref = WaSwitchComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the control's checked state changes. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control receives input. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The name of the switch, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The value of the switch, submitted as a name/value pair with form data. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The switch's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Disables the switch. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The default value of the form control. Primarily used for resetting the form control. */
  object checked {
    def :=(value: Boolean) = {
      Seq(
        L.defaultChecked := value,
        L.checked        := value
      )
    }
    def <--(value: Source[Boolean]) = {
      Seq(
        L.defaultChecked <-- value,
        L.checked <-- value
      )
    }
  }

  /** Makes the switch a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

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

    /** Deprecated. Use the `switch` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val switch: String = "switch"

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

  @js.native
  trait WaSwitchComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The name of the switch, submitted as a name/value pair with form data. */
    var name: String

    /** The value of the switch, submitted as a name/value pair with form data. */
    var value: String

    /** The switch's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** Disables the switch. */
    var disabled: Boolean

    /** The default value of the form control. Primarily used for resetting the form control. */
    var checked: Boolean

    /** Makes the switch a required field. */
    var required: Boolean

    /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def handleValueOrCheckedChange(): Unit = js.native

    def handleStateChange(): Unit = js.native

    def handleDisabledChange(): Unit = js.native

    /** Simulates a click on the switch. */
    def click(): Unit = js.native

    /** Sets focus on the switch. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the switch. */
    def blur(): Unit = js.native

    def setValue(value: js.Any, stateValue: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    def formResetCallback(): Unit = js.native

    def getForm(): dom.html.Form | Null = js.native

    def checkValidity(): Boolean = js.native

    def reportValidity(): Boolean = js.native

    def setValidity(args: js.Any): Unit = js.native

    def setCustomStates(): Unit = js.native

    /** Do not use this when creating a "Validator". This is intended for end users of components. We track manually
      * defined custom errors so we don't clear them on accident in our validators.
      */
    def setCustomValidity(message: String): Unit = js.native

    def formDisabledCallback(isDisabled: Boolean): Unit = js.native

    /** Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
      * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case
      * of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
      */
    def formStateRestoreCallback(state: js.Any, reason: String): Unit = js.native

    /** Reset validity is a way of removing manual custom errors and native validation. */
    def resetValidity(): Unit = js.native

    def updateValidity(): Unit = js.native

  }
}
