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
  * Textareas collect data from the user and allow multiple lines of text.
  *
  * [[https://backers.webawesome.com/docs/components/textarea WebAwesome  docs]]
  */
object Textarea extends WebComponent("wa-textarea") {

  @JSImport("@awesome.me/webawesome/dist/components/textarea/textarea.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Textarea.type

  type Ref = WaTextareaComponent & dom.HTMLElement

  // -- Union Types --

  type TextareaSize = "small" | "medium" | "large"

  type TextareaAppearance = "filled" | "outlined"

  type TextareaResize = "none" | "vertical" | "horizontal" | "both" | "auto"

  type TextareaAutocapitalize = "off" | "none" | "on" | "sentences" | "words" | "characters"

  type TextareaEnterkeyhint = "enter" | "done" | "go" | "next" | "previous" | "search" | "send"

  type TextareaInputmode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"

  // -- Events --

  /** Emitted when the control loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when an alteration to the control's value is committed by the user. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the control gains focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the control receives input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The name of the textarea, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The textarea's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[TextareaSize] = unionAttr("size")

  /** The textarea's visual appearance. Valid values: "filled", "outlined". */
  lazy val appearance: HtmlAttr[TextareaAppearance] = unionAttr("appearance")

  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Placeholder text to show as a hint when the input is empty. */
  lazy val placeholder: HtmlAttr[String] = stringAttr("placeholder")

  /** The number of rows to display by default. */
  lazy val rows: HtmlAttr[Double] = doubleAttr("rows")

  /** Controls how the textarea can be resized. Valid values: "none", "vertical", "horizontal", "both", "auto". */
  lazy val resize: HtmlAttr[TextareaResize] = unionAttr("resize")

  /** Disables the textarea. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Makes the textarea readonly. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work. */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** Makes the textarea a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** The minimum length of input that will be considered valid. */
  lazy val minlength: HtmlAttr[Double] = doubleAttr("minlength")

  /** The maximum length of input that will be considered valid. */
  lazy val maxlength: HtmlAttr[Double] = doubleAttr("maxlength")

  /** Controls whether and how text input is automatically capitalized as it is entered by the user. Valid values: "off", "none", "on", "sentences", "words", "characters". */
  lazy val autocapitalize: HtmlAttr[TextareaAutocapitalize] = unionAttr("autocapitalize")

  /** Indicates whether the browser's autocorrect feature is on or off. */
  lazy val autocorrect: HtmlAttr[String] = stringAttr("autocorrect")

  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
  [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Indicates that the input should receive focus on page load. */
  lazy val autofocus: HtmlAttr[Boolean] = boolAttr("autofocus")

  /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go", "next", "previous", "search", "send". */
  lazy val enterkeyhint: HtmlAttr[TextareaEnterkeyhint] = unionAttr("enterkeyhint")

  /** Enables spell checking on the textarea. */
  lazy val spellcheck: HtmlAttr[Boolean] = boolAttr("spellcheck")

  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
  keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email", "url". */
  lazy val inputmode: HtmlAttr[TextareaInputmode] = unionAttr("inputmode")

  /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

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

  @js.native trait WaTextareaComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The name of the textarea, submitted as a name/value pair with form data. */
    var name: String

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** The textarea's size. Valid values: "small", "medium", "large". */
    var size: "small" | "medium" | "large"

    /** The textarea's visual appearance. Valid values: "filled", "outlined". */
    var appearance: "filled" | "outlined"

    /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Placeholder text to show as a hint when the input is empty. */
    var placeholder: String

    /** The number of rows to display by default. */
    var rows: Double

    /** Controls how the textarea can be resized. Valid values: "none", "vertical", "horizontal", "both", "auto". */
    var resize: "none" | "vertical" | "horizontal" | "both" | "auto"

    /** Disables the textarea. */
    var disabled: Boolean

    /** Makes the textarea readonly. */
    var readonly: Boolean

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    the same document or shadow root for this to work. */
    var form: String

    /** Makes the textarea a required field. */
    var required: Boolean

    /** The minimum length of input that will be considered valid. */
    var minlength: Double

    /** The maximum length of input that will be considered valid. */
    var maxlength: Double

    /** Controls whether and how text input is automatically capitalized as it is entered by the user. Valid values: "off", "none", "on", "sentences", "words", "characters". */
    var autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters"

    /** Indicates whether the browser's autocorrect feature is on or off. */
    var autocorrect: String

    /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
    [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
    var autocomplete: String

    /** Indicates that the input should receive focus on page load. */
    var autofocus: Boolean

    /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go", "next", "previous", "search", "send". */
    var enterkeyhint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send"

    /** Enables spell checking on the textarea. */
    var spellcheck: Boolean

    /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
    keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email", "url". */
    var inputmode: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"

    /** Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. */
    var withLabel: Boolean

    /** Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. */
    var withHint: Boolean

    def handleRowsChange(): js.Any = js.native

    def handleValueChange(): js.Any = js.native

    /** Sets focus on the textarea. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the textarea. */
    def blur(): js.Any = js.native

    /** Selects all the text in the textarea. */
    def select(): js.Any = js.native

    /** Gets or sets the textarea's scroll position. */
    def scrollPosition(position: js.Object = js.Object()): js.Any = js.native

    /** Sets the start and end positions of the text selection (0-based). */
    def setSelectionRange(selectionStart: js.Any, selectionEnd: js.Any, selectionDirection: js.Any): js.Any = js.native

    /** Replaces a range of text with a new string. */
    def setRangeText(replacement: js.Any, start: js.Any = js.undefined, end: js.Any = js.undefined, selectMode: js.Any): js.Any = js.native

    def formResetCallback(): js.Any = js.native

  }
}