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
  * Inputs collect data from the user.
  *
  * [[https://backers.webawesome.com/docs/components/input WebAwesome  docs]]
  */
object Input extends WebComponent("wa-input") {

  @JSImport("@awesome.me/webawesome/dist/components/input/input.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Input.type

  type Ref = WaInputComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the control receives input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  /** Emitted when an alteration to the control's value is committed by the user. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the control loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the clear button is activated. */
  lazy val onClear: EventProp[dom.Event] = eventProp("wa-clear")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
  to `text`. */
  lazy val `type`: HtmlAttr[String] = stringAttr("type")

  lazy val typ: HtmlAttr[String] = `type`

  lazy val tpe: HtmlAttr[String] = `type`

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The input's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

  /** The input's visual appearance. Valid values: "filled", "outlined". */
  lazy val appearance: HtmlAttr[FilledOutlineAppearance] = unionAttr("appearance")

  /** Draws a pill-style input with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Adds a clear button when the input is not empty. */
  lazy val withClear: HtmlAttr[Boolean] = boolAttr("with-clear")

  /** Placeholder text to show as a hint when the input is empty. */
  lazy val placeholder: HtmlAttr[String] = stringAttr("placeholder")

  /** Makes the input readonly. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  lazy val passwordToggle: HtmlAttr[Boolean] = boolAttr("password-toggle")

  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  lazy val passwordVisible: HtmlAttr[Boolean] = boolAttr("password-visible")

  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  lazy val withoutSpinButtons: HtmlAttr[Boolean] = boolAttr("without-spin-buttons")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work. */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** Makes the input a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** A regular expression pattern to validate input against. */
  lazy val pattern: HtmlAttr[String] = stringAttr("pattern")

  /** The minimum length of input that will be considered valid. */
  lazy val minlength: HtmlAttr[Double] = doubleAttr("minlength")

  /** The maximum length of input that will be considered valid. */
  lazy val maxlength: HtmlAttr[Double] = doubleAttr("maxlength")

  /** The input's minimum value. Only applies to date and number input types. */
  lazy val min: HtmlAttr[String] = stringAttr("min")

  /** The input's maximum value. Only applies to date and number input types. */
  lazy val max: HtmlAttr[String] = stringAttr("max")

  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
  implied, allowing any numeric value. Only applies to date and number input types. */
  lazy val step: HtmlAttr[String] = stringAttr("step")

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. Valid values: "off", "none", "on", "sentences", "words", "characters". */
  lazy val autocapitalize: HtmlAttr[Autocapitalize] = unionAttr("autocapitalize")

  /** Indicates whether the browser's autocorrect feature is on or off. Valid values: "off", "on". */
  lazy val autocorrect: HtmlAttr[InputAutocorrect] = unionAttr("autocorrect")

  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
  [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Indicates that the input should receive focus on page load. */
  lazy val autofocus: HtmlAttr[Boolean] = boolAttr("autofocus")

  /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go", "next", "previous", "search", "send". */
  lazy val enterkeyhint: HtmlAttr[Enterkeyhint] = unionAttr("enterkeyhint")

  /** Enables spell checking on the input. */
  lazy val spellcheck: HtmlAttr[Boolean] = boolAttr("spellcheck")

  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
  keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email", "url". */
  lazy val inputmode: HtmlAttr[Inputmode] = unionAttr("inputmode")

  /** Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Slots --

  object slots {
    /** The input's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** An element, such as `<wa-icon>`, placed at the start of the input control. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed at the end of the input control. */
    lazy val end: Slot = Slot("end")

    /** An icon to use in lieu of the default clear icon. */
    lazy val clearIcon: Slot = Slot("clear-icon")

    /** An icon to use in lieu of the default show password icon. */
    lazy val showPasswordIcon: Slot = Slot("show-password-icon")

    /** An icon to use in lieu of the default hide password icon. */
    lazy val hidePasswordIcon: Slot = Slot("hide-password-icon")

    /** Text that describes how to use the input. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The label */
    lazy val label: String = "label"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** The wrapper being rendered as an input */
    lazy val input: String = "input"

    /** The internal `<input>` control. */
    lazy val base: String = "base"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The clear button. */
    lazy val clearButton: String = "clear-button"

    /** The password toggle button. */
    lazy val passwordToggleButton: String = "password-toggle-button"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

  }

  // -- Element type --

  @js.native trait WaInputComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
    to `text`. */
    var `type`: Double

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** The input's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** The input's visual appearance. Valid values: "filled", "outlined". */
    var appearance: FilledOutlineAppearance

    /** Draws a pill-style input with rounded edges. */
    var pill: Boolean

    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Adds a clear button when the input is not empty. */
    var withClear: Boolean

    /** Placeholder text to show as a hint when the input is empty. */
    var placeholder: String

    /** Makes the input readonly. */
    var readonly: Boolean

    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    var passwordToggle: Boolean

    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    var passwordVisible: Boolean

    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    var withoutSpinButtons: Boolean

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    the same document or shadow root for this to work. */
    var form: String

    /** Makes the input a required field. */
    var required: Boolean

    /** A regular expression pattern to validate input against. */
    var pattern: String

    /** The minimum length of input that will be considered valid. */
    var minlength: Double

    /** The maximum length of input that will be considered valid. */
    var maxlength: Double

    /** The input's minimum value. Only applies to date and number input types. */
    var min: String

    /** The input's maximum value. Only applies to date and number input types. */
    var max: String

    /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
    implied, allowing any numeric value. Only applies to date and number input types. */
    var step: Double

    /** Controls whether and how text input is automatically capitalized as it is entered by the user. Valid values: "off", "none", "on", "sentences", "words", "characters". */
    var autocapitalize: Autocapitalize

    /** Indicates whether the browser's autocorrect feature is on or off. Valid values: "off", "on". */
    var autocorrect: InputAutocorrect

    /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
    [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
    var autocomplete: String

    /** Indicates that the input should receive focus on page load. */
    var autofocus: Boolean

    /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go", "next", "previous", "search", "send". */
    var enterkeyhint: Enterkeyhint

    /** Enables spell checking on the input. */
    var spellcheck: Boolean

    /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
    keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email", "url". */
    var inputmode: Inputmode

    /** Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. */
    var withLabel: Boolean

    /** Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. */
    var withHint: Boolean

    def handleStepChange(): js.Any = js.native

    /** Sets focus on the input. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the input. */
    def blur(): js.Any = js.native

    /** Selects all the text in the input. */
    def select(): js.Any = js.native

    /** Sets the start and end positions of the text selection (0-based). */
    def setSelectionRange(selectionStart: js.Any, selectionEnd: js.Any, selectionDirection: js.Any): js.Any = js.native

    /** Replaces a range of text with a new string. */
    def setRangeText(replacement: js.Any, start: js.Any = js.undefined, end: js.Any = js.undefined, selectMode: js.Any): js.Any = js.native

    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    def showPicker(): js.Any = js.native

    /** Increments the value of a numeric input type by the value of the step attribute. */
    def stepUp(): js.Any = js.native

    /** Decrements the value of a numeric input type by the value of the step attribute. */
    def stepDown(): js.Any = js.native

    def formResetCallback(): js.Any = js.native

  }
}