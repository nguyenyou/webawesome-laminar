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

/** Textareas collect multi-line text input from the user, with optional resizing and character counting.
  *
  * [[https://webawesome.com/docs/components/textarea WebAwesome docs]]
  */
object Textarea extends WebComponent("wa-textarea") {

  @JSImport("@awesome.me/webawesome/dist/components/textarea/textarea.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Textarea.type

  type Ref = WaTextareaComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when an alteration to the control's value is committed by the user. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the control receives input. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The name of the textarea, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** The textarea's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The textarea's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
  lazy val appearance: CommonKeys.Appearance.type = CommonKeys.Appearance

  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Placeholder text to show as a hint when the input is empty. */
  lazy val placeholder: HtmlAttr[String] = stringAttr("placeholder")

  /** The number of rows to display by default. */
  lazy val rows: HtmlAttr[Double] = doubleAttr("rows")

  /** Controls how the textarea can be resized. Valid values: "none", "vertical", "horizontal", "both", "auto". */
  lazy val resize: CommonKeys.TextareaResize.type = CommonKeys.TextareaResize

  /** Disables the textarea. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Makes the textarea readonly. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** Makes the textarea a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The minimum length of input that will be considered valid. */
  lazy val minlength: HtmlAttr[Double] = doubleAttr("minlength")

  /** The maximum length of input that will be considered valid. */
  lazy val maxlength: HtmlAttr[Double] = doubleAttr("maxlength")

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. Valid values:
    * "off", "none", "on", "sentences", "words", "characters".
    */
  lazy val autocapitalize: CommonKeys.Autocapitalize.type = CommonKeys.Autocapitalize

  /** Indicates whether the browser's autocorrect feature is on or off. When set as an attribute, use `"off"` or `"on"`.
    * When set as a property, use `true` or `false`.
    */
  lazy val autocorrect: HtmlAttr[Boolean] = boolAttr("autocorrect")

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

  /** Enables spell checking on the textarea. */
  lazy val spellcheck: HtmlAttr[Boolean] = boolAttr("spellcheck")

  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
    * keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email",
    * "url".
    */
  lazy val inputmode: CommonKeys.Inputmode.type = CommonKeys.Inputmode

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
    * includes the label before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  /** Shows a character count below the textarea. When `maxlength` is set, shows remaining characters instead. */
  lazy val withCount: HtmlAttr[Boolean] = boolAttr("with-count")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The textarea's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

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

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** The internal `<textarea>` control. */
    lazy val textarea: String = "textarea"

    /** Deprecated. Use the `textarea-wrapper` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val textareaWrapper: String = "textarea-wrapper"

    /** The invisible sizer that grows the control to fit its content when `resize` is `auto`. */
    lazy val textareaAdjuster: String = "textarea-adjuster"

    /** The character count element, rendered when the `with-count` attribute is present. */
    lazy val count: String = "count"

  }

  // -- Element type --

  @js.native
  trait WaTextareaComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The name of the textarea, submitted as a name/value pair with form data. */
    var name: String

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** The textarea's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** The textarea's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
    var appearance: Appearance

    /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Placeholder text to show as a hint when the input is empty. */
    var placeholder: String

    /** The number of rows to display by default. */
    var rows: Double

    /** Controls how the textarea can be resized. Valid values: "none", "vertical", "horizontal", "both", "auto". */
    var resize: TextareaResize

    /** Disables the textarea. */
    var disabled: Boolean

    /** Makes the textarea readonly. */
    var readonly: Boolean

    /** Makes the textarea a required field. */
    var required: Boolean

    /** The minimum length of input that will be considered valid. */
    var minlength: Double

    /** The maximum length of input that will be considered valid. */
    var maxlength: Double

    /** Controls whether and how text input is automatically capitalized as it is entered by the user. Valid values:
      * "off", "none", "on", "sentences", "words", "characters".
      */
    var autocapitalize: Autocapitalize

    /** Indicates whether the browser's autocorrect feature is on or off. When set as an attribute, use `"off"` or
      * `"on"`. When set as a property, use `true` or `false`.
      */
    var autocorrect: Boolean

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

    /** Enables spell checking on the textarea. */
    var spellcheck: Boolean

    /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
      * keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email",
      * "url".
      */
    var inputmode: Inputmode

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
      * includes the label before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    /** Shows a character count below the textarea. When `maxlength` is set, shows remaining characters instead. */
    var withCount: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def handleRowsChange(): Unit = js.native

    def handleValueChange(): js.Promise[js.Any] = js.native

    /** Sets focus on the textarea. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the textarea. */
    def blur(): Unit = js.native

    /** Selects all the text in the textarea. */
    def select(): Unit = js.native

    /** Gets or sets the textarea's scroll position. */
    def scrollPosition(position: js.Object = js.Object()): js.Any = js.native

    /** Sets the start and end positions of the text selection (0-based). */
    def setSelectionRange(selectionStart: Double, selectionEnd: Double, selectionDirection: String): Unit = js.native

    /** Replaces a range of text with a new string. */
    def setRangeText(
        replacement: String,
        start: js.UndefOr[Double] = js.undefined,
        end: js.UndefOr[Double] = js.undefined,
        selectMode: String
    ): Unit = js.native

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
