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

/** Time pickers let users enter a time through a segmented field or select one visually from a popup column picker.
  * They support 12- and 24-hour formats, optional seconds, and locale-aware segment order.
  *
  * [[https://webawesome.com/docs/components/time-input WebAwesome docs]]
  */
object TimeInput extends WebComponent("wa-time-input") {

  @JSImport("@awesome.me/webawesome/dist/components/time-input/time-input.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = TimeInput.type

  type Ref = WaTimeInputComponent & dom.HTMLElement

  // -- Events --

  /** Emitted as the user types into a segment or interacts with the popup columns. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the committed value changes. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control receives focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the clear button is activated. */
  lazy val onClear: EventProp[CustomEvent[Ref]] = eventProp("wa-clear")

  /** Emitted when the popup is about to open. Cancelable. */
  lazy val onShow: EventProp[CustomEvent[Ref]] = eventProp("wa-show")

  /** Emitted after the popup opens and animations complete. */
  lazy val onAfterShow: EventProp[CustomEvent[Ref]] = eventProp("wa-after-show")

  /** Emitted when the popup is about to close. Cancelable. */
  lazy val onHide: EventProp[CustomEvent[Ref] & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the popup closes and animations complete. */
  lazy val onAfterHide: EventProp[CustomEvent[Ref]] = eventProp("wa-after-hide")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  /** The time picker's name, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The default value of the form control. Used for form reset. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** Disables the time picker. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Makes the time picker required for form submission. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Makes the input non-editable. The popup still opens for browsing. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** The time picker's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The time picker's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
  lazy val appearance: CommonKeys.Appearance.type = CommonKeys.Appearance

  /** Draws a pill-style time picker with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** The time picker's label. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The time picker's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** Forwarded to the hidden form input to enable browser autofill (`on`/`off`/custom tokens). */
  lazy val autocomplete: HtmlAttr[String] = stringAttr("autocomplete")

  /** Shows a clear button when the time picker has a value. */
  lazy val withClear: HtmlAttr[Boolean] = boolAttr("with-clear")

  /** Renders a "Now" button in the popup footer. */
  lazy val withNow: HtmlAttr[Boolean] = boolAttr("with-now")

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  /** The earliest selectable time in wire format. May be later than `max` to represent an overnight range. The picker
    * delegates reversed-range semantics to the mirrored native `<input type="time">`.
    */
  lazy val min: HtmlAttr[String] = stringAttr("min")

  /** The latest selectable time in wire format. */
  lazy val max: HtmlAttr[String] = stringAttr("max")

  /** The granularity, in seconds, matching HTML `<input type="time">`. Default `60` hides the seconds segment. Values
    * below 60 reveal the seconds segment. `'any'` disables `stepMismatch` enforcement.
    */
  lazy val step: HtmlAttr[String] = stringAttr("step")

  /** Whether the UI uses a 12-hour or 24-hour clock. `auto` follows the resolved locale. Valid values: "auto", "12",
    * "24".
    */
  lazy val hourFormat: CommonKeys.HourFormat.type = CommonKeys.HourFormat

  /** Whether the popup is open. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** Preferred popup placement. Valid values: "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end". */
  lazy val placement: CommonKeys.TimeInputPlacement.type = CommonKeys.TimeInputPlacement

  /** Distance in pixels between the popup and the input. */
  lazy val distance: HtmlAttr[Double] = doubleAttr("distance")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The time picker's label. Alternatively, use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Text that describes how to use the time picker. Alternatively, use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

    /** An element placed at the start of the input. */
    lazy val start: Slot = Slot("start")

    /** An element placed at the end of the input. */
    lazy val end: Slot = Slot("end")

    /** An icon to use in lieu of the default clear icon. */
    lazy val clearIcon: Slot = Slot("clear-icon")

    /** The icon to show on the popup toggle button. Defaults to a clock icon. */
    lazy val expandIcon: Slot = Slot("expand-icon")

    /** Content shown below the column picker in the popup. Replaces the default Now button when present. */
    lazy val footer: Slot = Slot("footer")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The duration of the show animation. Default: var(--wa-transition-fast) */
    lazy val showDuration: String = "--show-duration"

    /** The duration of the hide animation. Default: var(--wa-transition-fast) */
    lazy val hideDuration: String = "--hide-duration"

    /** Height of each option inside a popup column. Default: 2.25em */
    lazy val columnItemHeight: String = "--column-item-height"

    /** Width of each popup column. Default: 3em */
    lazy val columnWidth: String = "--column-width"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The form control that wraps the label, input, and hint. */
    lazy val formControl: String = "form-control"

    /** The label. */
    lazy val formControlLabel: String = "form-control-label"

    /** Deprecated. Use the `form-control-label` part instead. */
    lazy val label: String = "label"

    /** The input's wrapper. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** Deprecated. Use the `time-input` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val timeInput: String = "time-input"

    /** The container around the start slot, segmented input, clear button, and expand button. */
    lazy val inputWrapper: String = "input-wrapper"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

    /** The segmented input group. */
    lazy val input: String = "input"

    /** Each editable segment (hour/minute/second/AM-PM spinbutton). Use `[part~="segment"]` to style all. */
    lazy val segment: String = "segment"

    /** Inert literal text between segments (separators). */
    lazy val segmentLiteral: String = "segment-literal"

    /** The clear button. */
    lazy val clearButton: String = "clear-button"

    /** The popup toggle button. */
    lazy val expandButton: String = "expand-button"

    /** The expand icon wrapper. */
    lazy val expandIcon: String = "expand-icon"

    /** The popup container. */
    lazy val popup: String = "popup"

    /** The row of column listboxes inside the popup. */
    lazy val columns: String = "columns"

    /** Each column listbox. */
    lazy val column: String = "column"

    /** Each option inside a column. */
    lazy val columnItem: String = "column-item"

    /** The currently selected option inside a column. */
    lazy val columnItemSelected: String = "column-item-selected"

    /** The default "Now" button rendered in the popup footer when `with-now` is set. */
    lazy val nowButton: String = "now-button"

  }

  // -- Element type --

  @js.native
  trait WaTimeInputComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The time picker's name, submitted as a name/value pair with form data. */
    var name: String

    /** The default value of the form control. Used for form reset. */
    var defaultValue: String

    /** Disables the time picker. */
    var disabled: Boolean

    /** Makes the time picker required for form submission. */
    var required: Boolean

    /** Makes the input non-editable. The popup still opens for browsing. */
    var readonly: Boolean

    /** The time picker's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** The time picker's visual appearance. Valid values: "filled", "outlined", "filled-outlined". */
    var appearance: Appearance

    /** Draws a pill-style time picker with rounded edges. */
    var pill: Boolean

    /** The time picker's label. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The time picker's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** Forwarded to the hidden form input to enable browser autofill (`on`/`off`/custom tokens). */
    var autocomplete: String

    /** Shows a clear button when the time picker has a value. */
    var withClear: Boolean

    /** Renders a "Now" button in the popup footer. */
    var withNow: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element. */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element. */
    var withHint: Boolean

    /** The earliest selectable time in wire format. May be later than `max` to represent an overnight range. The picker
      * delegates reversed-range semantics to the mirrored native `<input type="time">`.
      */
    var min: String

    /** The latest selectable time in wire format. */
    var max: String

    /** The granularity, in seconds, matching HTML `<input type="time">`. Default `60` hides the seconds segment. Values
      * below 60 reveal the seconds segment. `'any'` disables `stepMismatch` enforcement.
      */
    var step: Double | "any"

    /** Whether the UI uses a 12-hour or 24-hour clock. `auto` follows the resolved locale. Valid values: "auto", "12",
      * "24".
      */
    var hourFormat: HourFormat

    /** Whether the popup is open. */
    var open: Boolean

    /** Preferred popup placement. Valid values: "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end".
      */
    var placement: TimeInputPlacement

    /** Distance in pixels between the popup and the input. */
    var distance: Double

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def handleDisabledChange(): Unit = js.native

    def handleOpenChange(): js.Promise[js.Any] = js.native

    /** Sets focus on the first empty (else first) segment. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the time picker. */
    def blur(): Unit = js.native

    /** Opens the popup. */
    def show(): js.Promise[js.Any] = js.native

    /** Closes the popup. */
    def hide(): js.Promise[js.Any] = js.native

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
