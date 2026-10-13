package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Number inputs let users enter and edit numeric values, with optional stepper buttons for incrementing and
  * decrementing. Use them for quantities, measurements, and other numeric form fields.
  *
  * [[https://webawesome.com/docs/components/number-input WebAwesome docs]]
  */
object NumberInput extends WebComponent("wa-number-input") {

  @JSImport("@awesome.me/webawesome/dist/components/number-input/number-input.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = NumberInput.type

  type Ref = WaNumberInputComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the control receives input. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when an alteration to the control's value is committed by the user. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted before the value changes. Can be cancelled with `event.preventDefault()` to prevent the value from
    * changing.
    */
  lazy val onBeforeinput: EventProp[CustomEvent[Ref]] = eventProp("beforeinput")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** The input's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The input's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
  lazy val appearance: CommonKeys.Appearance.type = CommonKeys.Appearance

  /** Draws a pill-style input with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Placeholder text to show as a hint when the input is empty. */
  lazy val placeholder: HtmlAttr[String] = stringAttr("placeholder")

  /** Makes the input readonly. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** Makes the input a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The input's minimum value. */
  lazy val min: HtmlAttr[Double] = doubleAttr("min")

  /** The input's maximum value. */
  lazy val max: HtmlAttr[Double] = doubleAttr("max")

  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
    * implied, allowing any numeric value.
    */
  lazy val step: HtmlAttr[String] = stringAttr("step")

  /** Hides the increment/decrement stepper buttons. */
  lazy val withoutSteppers: HtmlAttr[Boolean] = boolAttr("without-steppers")

  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to [this
    * page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
    */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Indicates that the input should receive focus on page load. */
  lazy val autofocus: HtmlAttr[Boolean] = boolAttr("autofocus")

  /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go",
    * "next", "previous", "search", "send".
    */
  lazy val enterkeyhint: CommonKeys.Enterkeyhint.type = CommonKeys.Enterkeyhint

  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
    * keyboard on supportive devices. Valid values: "numeric", "decimal".
    */
  lazy val inputmode: CommonKeys.NumberInputInputmode.type = CommonKeys.NumberInputInputmode

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
    * includes the label before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  /** The name of the input, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Disables the form control. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The input's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** An element, such as `<wa-icon>`, placed at the start of the input control. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed at the end of the input control (before steppers). */
    lazy val end: Slot = Slot("end")

    /** An icon to use in lieu of the default increment icon. */
    lazy val incrementIcon: Slot = Slot("increment-icon")

    /** An icon to use in lieu of the default decrement icon. */
    lazy val decrementIcon: Slot = Slot("decrement-icon")

    /** Text that describes how to use the input. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The label. */
    lazy val formControlLabel: String = "form-control-label"

    /** Deprecated. Use the `form-control-label` part instead. */
    lazy val label: String = "label"

    /** The hint element. */
    lazy val hint: String = "hint"

    /** Deprecated. Use the `number-input` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val numberInput: String = "number-input"

    /** The internal `<input>` control. */
    lazy val input: String = "input"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

    /** Both stepper buttons (for shared styling). */
    lazy val stepper: String = "stepper"

    /** The increment (+) button on the end side. */
    lazy val stepperIncrement: String = "stepper-increment"

    /** The decrement (-) button on the start side. */
    lazy val stepperDecrement: String = "stepper-decrement"

  }

  // -- Element type --

  @js.native
  trait WaNumberInputComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** The input's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** The input's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
    var appearance: Appearance

    /** Draws a pill-style input with rounded edges. */
    var pill: Boolean

    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Placeholder text to show as a hint when the input is empty. */
    var placeholder: String

    /** Makes the input readonly. */
    var readonly: Boolean

    /** Makes the input a required field. */
    var required: Boolean

    /** The input's minimum value. */
    var min: Double

    /** The input's maximum value. */
    var max: Double

    /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
      * implied, allowing any numeric value.
      */
    var step: Double | "any"

    /** Hides the increment/decrement stepper buttons. */
    var withoutSteppers: Boolean

    /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to [this
      * page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
      */
    var autocomplete: String

    /** Indicates that the input should receive focus on page load. */
    var autofocus: Boolean

    /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go",
      * "next", "previous", "search", "send".
      */
    var enterkeyhint: Enterkeyhint

    /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
      * keyboard on supportive devices. Valid values: "numeric", "decimal".
      */
    var inputmode: NumberInputInputmode

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
      * includes the label before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    /** The name of the input, submitted as a name/value pair with form data. */
    var name: String

    /** Disables the form control. */
    var disabled: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def handleStepChange(): Unit = js.native

    /** Sets focus on the input. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the input. */
    def blur(): Unit = js.native

    /** Selects all the text in the input. */
    def select(): Unit = js.native

    /** Increments the value by the step amount. */
    def stepUp(): Unit = js.native

    /** Decrements the value by the step amount. */
    def stepDown(): Unit = js.native

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

    def setValue(args: js.Any): Unit = js.native

    /** Reset validity is a way of removing manual custom errors and native validation. */
    def resetValidity(): Unit = js.native

    def updateValidity(): Unit = js.native

  }
}
