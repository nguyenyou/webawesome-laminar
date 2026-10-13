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

/** OTP inputs collect one-time passcodes, PINs, and other fixed-length codes, one character per segment. Use them for
  * SMS verification, two-factor authentication, and invite codes.
  *
  * [[https://webawesome.com/docs/components/otp-input WebAwesome docs]]
  */
object OtpInput extends WebComponent("wa-otp-input") {

  @JSImport("@awesome.me/webawesome/dist/components/otp-input/otp-input.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = OtpInput.type

  type Ref = WaOtpInputComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when a character is entered or removed. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the value changes and the field loses focus. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted once when all segments are filled. Cancelable — call `preventDefault()` to stop `autosubmit` from
    * submitting the form for this completion.
    */
  lazy val onComplete: EventProp[CustomEvent[Ref]] = eventProp("wa-complete")

  /** Emitted when the control's value is cleared. */
  lazy val onClear: EventProp[CustomEvent[Ref]] = eventProp("wa-clear")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  /** The default value. Used to restore the field on form reset. Reflects the `value` HTML attribute. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** Number of character segments to display. Overridden by `format` when set. */
  lazy val length: HtmlAttr[Double] = doubleAttr("length")

  /** Visual appearance of the segments. Valid values: "outlined", "filled", "filled-outlined", "contained". */
  lazy val appearance: CommonKeys.OtpInputAppearance.type = CommonKeys.OtpInputAppearance

  /** Allowed character class. Valid values: "numeric", "alpha", "alphanumeric". */
  lazy val `type`: CommonKeys.OtpInputElementType.type = CommonKeys.OtpInputElementType

  lazy val typ: CommonKeys.OtpInputElementType.type = `type`

  lazy val tpe: CommonKeys.OtpInputElementType.type = `type`

  /** When true, entered characters are displayed as `--mask-char` instead of their real value. */
  lazy val mask: HtmlAttr[Boolean] = boolAttr("mask")

  /** Case transformation applied to entered characters. Valid values: "preserve", "upper", "lower". */
  lazy val `case`: CommonKeys.OtpInputCase.type = CommonKeys.OtpInputCase

  /** The size of each segment. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** A label shown above the segments. Use the `label` slot for HTML content. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** Hint text shown below the segments. Use the `hint` slot for HTML content. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Segment format string using `#` as a segment placeholder and any other character as a literal separator. Setting
    * `format` overrides `length` (the segment count is derived from the number of `#` characters).
    */
  lazy val format: HtmlAttr[String] = stringAttr("format")

  /** The `autocomplete` attribute forwarded to the underlying input. */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Makes the field required. A partially-filled field is always invalid regardless of this attribute. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Makes the field readonly — the value displays but cannot be edited by the user. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** When true, the form is submitted automatically once all segments are filled. */
  lazy val autosubmit: HtmlAttr[Boolean] = boolAttr("autosubmit")

  /** Automatically focuses the field when the page loads. */
  lazy val autofocus: HtmlAttr[Boolean] = boolAttr("autofocus")

  /** When true, empty segments show `--mask-char` as a hint instead of appearing blank, similar to how a password field
    * communicates its expected length before anything is typed.
    */
  lazy val withMask: HtmlAttr[Boolean] = boolAttr("with-mask")

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

    /** An optional label. Use this for labels that contain HTML. When `label` attribute is set it takes priority. */
    lazy val label: Slot = Slot("label")

    /** Optional hint text. Use this for hints that contain HTML. When `hint` attribute is set it takes priority. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** Width and height of each segment cell. Default: 2.5em */
    lazy val segmentSize: String = "--segment-size"

    /** Gap between segments (not used in `contained` appearance). Default: var(--wa-space-xs) */
    lazy val segmentGap: String = "--segment-gap"

    /** Corner radius of each segment. Default: var(--wa-form-control-border-radius) */
    lazy val segmentBorderRadius: String = "--segment-border-radius"

    /** Character shown in place of entered values when `mask` is set, and as a hint in empty segments when `with-mask`
      * is set. Default: '•'
      */
    lazy val maskChar: String = "--mask-char"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The label element. */
    lazy val label: String = "label"

    /** The hint element. */
    lazy val hint: String = "hint"

    /** The wrapper around all segment cells and separators. */
    lazy val segments: String = "segments"

    /** An individual character segment cell. */
    lazy val segment: String = "segment"

    /** Inert literal text between segment groups (e.g. space or dash). */
    lazy val segmentLiteral: String = "segment-literal"

  }

  // -- Element type --

  @js.native
  trait WaOtpInputComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The default value. Used to restore the field on form reset. Reflects the `value` HTML attribute. */
    var defaultValue: String

    /** Number of character segments to display. Overridden by `format` when set. */
    var length: Double

    /** Visual appearance of the segments. Valid values: "outlined", "filled", "filled-outlined", "contained". */
    var appearance: OtpInputAppearance

    /** Allowed character class. Valid values: "numeric", "alpha", "alphanumeric". */
    var `type`: OtpInputElementType

    /** When true, entered characters are displayed as `--mask-char` instead of their real value. */
    var mask: Boolean

    /** Case transformation applied to entered characters. Valid values: "preserve", "upper", "lower". */
    var `case`: OtpInputCase

    /** The size of each segment. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** A label shown above the segments. Use the `label` slot for HTML content. */
    var label: String

    /** Hint text shown below the segments. Use the `hint` slot for HTML content. */
    var hint: String

    /** Segment format string using `#` as a segment placeholder and any other character as a literal separator. Setting
      * `format` overrides `length` (the segment count is derived from the number of `#` characters).
      */
    var format: String

    /** The `autocomplete` attribute forwarded to the underlying input. */
    var autocomplete: String

    /** Makes the field required. A partially-filled field is always invalid regardless of this attribute. */
    var required: Boolean

    /** Makes the field readonly — the value displays but cannot be edited by the user. */
    var readonly: Boolean

    /** When true, the form is submitted automatically once all segments are filled. */
    var autosubmit: Boolean

    /** Automatically focuses the field when the page loads. */
    var autofocus: Boolean

    /** When true, empty segments show `--mask-char` as a hint instead of appearing blank, similar to how a password
      * field communicates its expected length before anything is typed.
      */
    var withMask: Boolean

    /** The name of the input, submitted as a name/value pair with form data. */
    var name: String

    /** Disables the form control. */
    var disabled: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def formResetCallback(): Unit = js.native

    /** Clears the current value and returns focus to the field. */
    def clear(): Unit = js.native

    /** Focuses the field. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the field. */
    def blur(): Unit = js.native

    /** Selects all entered characters in the hidden input. */
    def select(): Unit = js.native

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
