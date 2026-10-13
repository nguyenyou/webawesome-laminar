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

/** Known dates let users enter dates they already know - birthdays, expirations, document dates - through three
  * separate day, month, and year fields shown in the locale's natural order.
  *
  * [[https://webawesome.com/docs/components/known-date WebAwesome docs]]
  */
object KnownDate extends WebComponent("wa-known-date") {

  @JSImport("@awesome.me/webawesome/dist/components/known-date/known-date.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = KnownDate.type

  type Ref = WaKnownDateComponent & dom.HTMLElement

  // -- Events --

  /** Emitted as the user types in any field. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the committed value transitions to a new ISO date. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  /** The name submitted with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The default value used for form reset. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** Disables the known date. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Makes the known date required for form submission. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Makes the fields non-editable. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** The known date's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The known date's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
  lazy val appearance: CommonKeys.Appearance.type = CommonKeys.Appearance

  /** Draws pill-style fields with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** The known date's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The known date's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Browser autofill family. When set to `bday`, the three fields receive `bday-day`, `bday-month`, and `bday-year`
    * respectively. The field-agnostic directives `off` and `on` are applied to all three fields. Any other value is
    * forwarded only to the year field.
    */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Earliest selectable date as `YYYY-MM-DD`. */
  lazy val min: HtmlAttr[String] = stringAttr("min")

  /** Latest selectable date as `YYYY-MM-DD`. */
  lazy val max: HtmlAttr[String] = stringAttr("max")

  /** BCP-47 locale override. When empty, the inherited `lang` attribute is used. */
  lazy val locale: HtmlAttr[String] = stringAttr("locale")

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The known date's group label. Alternatively, use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Text that describes how to use the known date. Alternatively, use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The form control's outer wrapper. */
    lazy val formControl: String = "form-control"

    /** The wrapper inside the legend that styles the visible label text. */
    lazy val formControlLabel: String = "form-control-label"

    /** Alias on the fields row matching other form controls. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** Deprecated. Use the `form-control-label` part instead. */
    lazy val label: String = "label"

    /** Deprecated. Use the `known-date` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val knownDate: String = "known-date"

    /** The `<fieldset>` element grouping the three fields (or a `role="group"` div). */
    lazy val fieldset: String = "fieldset"

    /** The `<legend>` element (when a label is present). */
    lazy val legend: String = "legend"

    /** The flex row holding the three field blocks. */
    lazy val fields: String = "fields"

    /** Each field block (label + input). */
    lazy val field: String = "field"

    /** Added to the day field block. */
    lazy val fieldDay: String = "field-day"

    /** Added to the month field block. */
    lazy val fieldMonth: String = "field-month"

    /** Added to the year field block. */
    lazy val fieldYear: String = "field-year"

    /** The text label above each field's input. */
    lazy val fieldLabel: String = "field-label"

    /** The native `<input>` inside a field. */
    lazy val fieldInput: String = "field-input"

  }

  // -- Element type --

  @js.native
  trait WaKnownDateComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name submitted with form data. */
    var name: String

    /** The default value used for form reset. */
    var defaultValue: String

    /** Disables the known date. */
    var disabled: Boolean

    /** Makes the known date required for form submission. */
    var required: Boolean

    /** Makes the fields non-editable. */
    var readonly: Boolean

    /** The known date's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** The known date's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
    var appearance: Appearance

    /** Draws pill-style fields with rounded edges. */
    var pill: Boolean

    /** The known date's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The known date's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Browser autofill family. When set to `bday`, the three fields receive `bday-day`, `bday-month`, and `bday-year`
      * respectively. The field-agnostic directives `off` and `on` are applied to all three fields. Any other value is
      * forwarded only to the year field.
      */
    var autocomplete: String

    /** Earliest selectable date as `YYYY-MM-DD`. */
    var min: String

    /** Latest selectable date as `YYYY-MM-DD`. */
    var max: String

    /** BCP-47 locale override. When empty, the inherited `lang` attribute is used. */
    var locale: String

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element. */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element. */
    var withHint: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    /** Focuses the first empty field, or the first field when all are filled. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the known date. */
    def blur(): Unit = js.native

    def formResetCallback(): Unit = js.native

    /** Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
      * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case
      * of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
      */
    def formStateRestoreCallback(state: js.Any): Unit = js.native

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

    def setValue(args: js.Any): Unit = js.native

    /** Reset validity is a way of removing manual custom errors and native validation. */
    def resetValidity(): Unit = js.native

    def updateValidity(): Unit = js.native

  }
}
