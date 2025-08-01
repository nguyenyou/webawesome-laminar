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

/** Textareas collect data from the user and allow multiple lines of text.
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

  /** The textarea's size. Valid values: "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The textarea's visual appearance. Valid values: "filled", "outlined". */
  lazy val appearance: CommonKeys.FilledOutlineAppearance.type = CommonKeys.FilledOutlineAppearance

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

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    * the same document or shadow root for this to work.
    */
  lazy val form: HtmlAttr[String] = stringAttr("form")

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

  /** Indicates whether the browser's autocorrect feature is on or off. */
  lazy val autocorrect: HtmlAttr[String] = stringAttr("autocorrect")

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

  /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

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

    /** The label */
    lazy val label: String = "label"

    /** The input's wrapper. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** The internal `<textarea>` control. */
    lazy val textarea: String = "textarea"

    /** The wrapper around the `<textarea>` control. */
    lazy val base: String = "base"

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

    /** The textarea's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** The textarea's visual appearance. Valid values: "filled", "outlined". */
    var appearance: FilledOutlineAppearance

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

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be
      * in the same document or shadow root for this to work.
      */
    var form: String

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

    /** Indicates whether the browser's autocorrect feature is on or off. */
    var autocorrect: String

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

    /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
    var withLabel: Boolean

    /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
    var withHint: Boolean

    def handleRowsChange(): js.Any = js.native

    def handleValueChange(): js.Any = js.native

    /** Sets focus on the textarea. */
    def focus(options: js.UndefOr[js.Any]): js.Any = js.native

    /** Removes focus from the textarea. */
    def blur(): js.Any = js.native

    /** Selects all the text in the textarea. */
    def select(): js.Any = js.native

    /** Gets or sets the textarea's scroll position. */
    def scrollPosition(position: js.Object = js.Object()): js.Any = js.native

    /** Sets the start and end positions of the text selection (0-based). */
    def setSelectionRange(selectionStart: Double, selectionEnd: Double, selectionDirection: String): js.Any = js.native

    /** Replaces a range of text with a new string. */
    def setRangeText(
        replacement: String,
        start: js.UndefOr[Double],
        end: js.UndefOr[Double],
        selectMode: String
    ): js.Any = js.native

    def formResetCallback(): js.Any = js.native

  }
}
