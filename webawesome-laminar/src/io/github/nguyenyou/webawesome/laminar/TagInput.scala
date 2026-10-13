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

/** Tag inputs collect a list of short values, such as keywords, email addresses, or labels, as removable tags. Users
  * add a tag by typing and pressing Enter or a delimiter, and each tag is submitted as its own form value.
  *
  * [[https://webawesome.com/docs/components/tag-input WebAwesome docs]]
  */
object TagInput extends WebComponent("wa-tag-input") {

  @JSImport("@awesome.me/webawesome/dist/components/tag-input/tag-input.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = TagInput.type

  type Ref = WaTagInputComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the user types in the text box or when a tag is added or removed. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when a tag is added, removed, or all tags are cleared by the user. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted before typed text becomes a tag. Call `event.preventDefault()` to reject it. The event `detail` contains
    * `{ inputValue: string }`, the text that would become the tag.
    */
  lazy val onCreate: EventProp[CustomEvent[Ref] & EventDetail[WaCreateEvent]] = eventProp("wa-create")

  /** Emitted when the clear button is activated. */
  lazy val onClear: EventProp[CustomEvent[Ref]] = eventProp("wa-clear")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  /** The default value of the form control as a delimiter-separated string. Primarily used for resetting the form
    * control.
    */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** The characters that turn typed text into a tag. Each character is a separate delimiter, so `",;"` accepts both
    * commas and semicolons. Pasted text is split on the same characters. Set to an empty string so only Enter adds a
    * tag. Also used to parse the `value` attribute, which falls back to a comma when the delimiter is empty.
    */
  lazy val delimiter: HtmlAttr[String] = stringAttr("delimiter")

  /** The maximum number of tags that can be added. Once reached, no more tags can be added until one is removed. */
  lazy val maxTags: HtmlAttr[Double] = doubleAttr("max-tags")

  /** The minimum number of tags required for the control to be valid. Has no effect when there are no tags. */
  lazy val minTags: HtmlAttr[Double] = doubleAttr("min-tags")

  /** Allows the same tag to be added more than once. By default, duplicates are ignored. */
  lazy val allowDuplicates: HtmlAttr[Boolean] = boolAttr("allow-duplicates")

  /** Adds a clear button that removes all tags. */
  lazy val withClear: HtmlAttr[Boolean] = boolAttr("with-clear")

  /** Placeholder text to show in the text box. Hidden once the maximum number of tags is reached. */
  lazy val placeholder: HtmlAttr[String] = stringAttr("placeholder")

  /** The tag input's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The tag input's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
    * includes the label before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  /** The tag input's size. Also applied to each tag. Valid values: "xs", "s", "m", "l", "xl", "small", "medium",
    * "large".
    */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The tag input's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
  lazy val appearance: CommonKeys.Appearance.type = CommonKeys.Appearance

  /** Draws a pill-style tag input, and pill-style tags, with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** Makes the tag input readonly. Tags stay visible and are still submitted, but can't be added or removed. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** Makes the tag input a required field, so at least one tag must be added. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

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
    * Defaults to `off`.
    */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go",
    * "next", "previous", "search", "send".
    */
  lazy val enterkeyhint: CommonKeys.Enterkeyhint.type = CommonKeys.Enterkeyhint

  /** Enables spell checking on the text box. */
  lazy val spellcheck: HtmlAttr[Boolean] = boolAttr("spellcheck")

  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
    * keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email",
    * "url".
    */
  lazy val inputmode: CommonKeys.Inputmode.type = CommonKeys.Inputmode

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

    /** The tag input's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** An element, such as `<wa-icon>`, placed at the start of the control. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed at the end of the control. */
    lazy val end: Slot = Slot("end")

    /** An icon to use in lieu of the default clear icon. */
    lazy val clearIcon: Slot = Slot("clear-icon")

    /** Text that describes how to use the tag input. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The label. */
    lazy val formControlLabel: String = "form-control-label"

    /** The component's outer wrapper, the bordered box that holds the tags and text box. */
    lazy val tagInput: String = "tag-input"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The list that holds the tags. */
    lazy val tags: String = "tags"

    /** Each tag, a `<wa-tag>`. */
    lazy val tag: String = "tag"

    /** The tag's content part. */
    lazy val tag__content: String = "tag__content"

    /** The tag's remove button. */
    lazy val tag__removeButton: String = "tag__remove-button"

    /** The tag's remove button base part. */
    lazy val tag__removeButton__base: String = "tag__remove-button__base"

    /** The internal text box, an `<input>` element. */
    lazy val input: String = "input"

    /** The clear button. */
    lazy val clearButton: String = "clear-button"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

  }

  // -- Element type --

  @js.native
  trait WaTagInputComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The default value of the form control as a delimiter-separated string. Primarily used for resetting the form
      * control.
      */
    var defaultValue: String

    /** The characters that turn typed text into a tag. Each character is a separate delimiter, so `",;"` accepts both
      * commas and semicolons. Pasted text is split on the same characters. Set to an empty string so only Enter adds a
      * tag. Also used to parse the `value` attribute, which falls back to a comma when the delimiter is empty.
      */
    var delimiter: String

    /** The maximum number of tags that can be added. Once reached, no more tags can be added until one is removed. */
    var maxTags: Double

    /** The minimum number of tags required for the control to be valid. Has no effect when there are no tags. */
    var minTags: Double

    /** Allows the same tag to be added more than once. By default, duplicates are ignored. */
    var allowDuplicates: Boolean

    /** Adds a clear button that removes all tags. */
    var withClear: Boolean

    /** Placeholder text to show in the text box. Hidden once the maximum number of tags is reached. */
    var placeholder: String

    /** The tag input's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The tag input's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
      * includes the label before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    /** The tag input's size. Also applied to each tag. Valid values: "xs", "s", "m", "l", "xl", "small", "medium",
      * "large".
      */
    var size: ComponentSize

    /** The tag input's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
    var appearance: Appearance

    /** Draws a pill-style tag input, and pill-style tags, with rounded edges. */
    var pill: Boolean

    /** Makes the tag input readonly. Tags stay visible and are still submitted, but can't be added or removed. */
    var readonly: Boolean

    /** Makes the tag input a required field, so at least one tag must be added. */
    var required: Boolean

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
      * Defaults to `off`.
      */
    var autocomplete: String

    /** Used to customize the label or icon of the Enter key on virtual keyboards. Valid values: "enter", "done", "go",
      * "next", "previous", "search", "send".
      */
    var enterkeyhint: Enterkeyhint

    /** Enables spell checking on the text box. */
    var spellcheck: Boolean

    /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
      * keyboard on supportive devices. Valid values: "none", "text", "decimal", "numeric", "tel", "search", "email",
      * "url".
      */
    var inputmode: Inputmode

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

    /** Sets focus on the text box. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the text box. */
    def blur(): Unit = js.native

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
