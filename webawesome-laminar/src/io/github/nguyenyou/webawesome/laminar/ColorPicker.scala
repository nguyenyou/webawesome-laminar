package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Color pickers let users choose a color from a visual palette or by entering a value. They support HEX, RGB, HSL, and
  * HSV formats with optional alpha channel and swatch presets.
  *
  * [[https://webawesome.com/docs/components/color-picker WebAwesome docs]]
  */
object ColorPicker extends WebComponent("wa-color-picker") {

  @JSImport("@awesome.me/webawesome/dist/components/color-picker/color-picker.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ColorPicker.type

  type Ref = WaColorPickerComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the color picker's value changes. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the color picker receives input. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  lazy val onShow: EventProp[CustomEvent[Ref]] = eventProp("wa-show")

  lazy val onAfterShow: EventProp[CustomEvent[Ref]] = eventProp("wa-after-show")

  lazy val onHide: EventProp[CustomEvent[Ref] & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  lazy val onAfterHide: EventProp[CustomEvent[Ref]] = eventProp("wa-after-hide")

  /** Emitted when the color picker loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the color picker receives focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
    * includes the label before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need
    * to display HTML, you can use the `label` slot` instead.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The color picker's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The
    * color picker will accept user input in any format (including CSS color names) and convert it to the desired
    * format. Valid values: "hex", "rgb", "hsl", "hsv".
    */
  lazy val format: CommonKeys.ColorPickerFormat.type = CommonKeys.ColorPickerFormat

  /** Determines the size of the color picker's trigger Valid values: "xs", "s", "m", "l", "xl", "small", "medium",
    * "large".
    */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The preferred placement of the color picker's popup. Note that the actual placement will vary as configured to
    * keep the panel inside of the viewport. Valid values: "top", "top-start", "top-end", "bottom", "bottom-start",
    * "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end".
    */
  lazy val placement: CommonKeys.Placement.type = CommonKeys.Placement

  /** Removes the button that lets users toggle between format. */
  lazy val withoutFormatToggle: HtmlAttr[Boolean] = boolAttr("without-format-toggle")

  /** The name of the form control, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Disables the color picker. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you can
    * use the `show()` and `hide()` methods and this attribute will reflect the popup's open state.
    */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  lazy val opacity: HtmlAttr[Boolean] = boolAttr("opacity")

  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  lazy val uppercase: HtmlAttr[Boolean] = boolAttr("uppercase")

  /** One or more predefined color swatches to display as presets in the color picker. Can include any format the color
    * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
    * semicolon (`;`). Alternatively, you can pass an array of color values or an array of `{ color, label }` objects to
    * this property using JavaScript. When using objects with labels, the label will be used for the swatch's accessible
    * name instead of the raw color value.
    */
  lazy val swatches: HtmlAttr[String] = stringAttr("swatches")

  lazy val swatchesProp: HtmlProp[String | js.Array[String] | js.Array[ColorPicker.Swatch], ?] = asIsProp("swatches")

  /** Makes the color picker a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The color picker's form label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** The color picker's form hint. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The width of the color grid. */
    lazy val gridWidth: String = "--grid-width"

    /** The height of the color grid. */
    lazy val gridHeight: String = "--grid-height"

    /** The size of the color grid's handle. */
    lazy val gridHandleSize: String = "--grid-handle-size"

    /** The height of the hue and alpha sliders. */
    lazy val sliderHeight: String = "--slider-height"

    /** The diameter of the slider's handle. */
    lazy val sliderHandleSize: String = "--slider-handle-size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `color-picker` part instead. */
    lazy val base: String = "base"

    /** The dropdown panel that holds the grid, sliders, and swatches. */
    lazy val colorPicker: String = "color-picker"

    /** The color picker's dropdown trigger. */
    lazy val trigger: String = "trigger"

    /** The container that wraps the color picker's trigger. */
    lazy val triggerContainer: String = "trigger-container"

    /** The form control that wraps the label, input, and hint. */
    lazy val formControl: String = "form-control"

    /** The label. */
    lazy val formControlLabel: String = "form-control-label"

    /** The color picker's trigger button. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

    /** The container that holds the swatches. */
    lazy val swatches: String = "swatches"

    /** Each individual swatch. */
    lazy val swatch: String = "swatch"

    /** The color grid. */
    lazy val grid: String = "grid"

    /** The color grid's handle. */
    lazy val gridHandle: String = "grid-handle"

    /** Hue and opacity sliders. */
    lazy val slider: String = "slider"

    /** Hue and opacity slider handles. */
    lazy val sliderHandle: String = "slider-handle"

    /** The hue slider. */
    lazy val hueSlider: String = "hue-slider"

    /** The hue slider's handle. */
    lazy val hueSliderHandle: String = "hue-slider-handle"

    /** The opacity slider. */
    lazy val opacitySlider: String = "opacity-slider"

    /** The opacity slider's handle. */
    lazy val opacitySliderHandle: String = "opacity-slider-handle"

    /** The preview color. */
    lazy val preview: String = "preview"

    /** The text input. */
    lazy val input: String = "input"

    /** The eye dropper button. */
    lazy val eyedropperButton: String = "eyedropper-button"

    /** The eye dropper button's exported `button` part. */
    lazy val eyedropperButton__base: String = "eyedropper-button__base"

    /** The eye dropper button's exported `start` part. */
    lazy val eyedropperButton__start: String = "eyedropper-button__start"

    /** The eye dropper button's exported `label` part. */
    lazy val eyedropperButton__label: String = "eyedropper-button__label"

    /** The eye dropper button's exported `end` part. */
    lazy val eyedropperButton__end: String = "eyedropper-button__end"

    /** The eye dropper button's exported `caret` part. */
    lazy val eyedropperButton__caret: String = "eyedropper-button__caret"

    /** The format button. */
    lazy val formatButton: String = "format-button"

    /** The format button's exported `button` part. */
    lazy val formatButton__base: String = "format-button__base"

    /** The format button's exported `start` part. */
    lazy val formatButton__start: String = "format-button__start"

    /** The format button's exported `label` part. */
    lazy val formatButton__label: String = "format-button__label"

    /** The format button's exported `end` part. */
    lazy val formatButton__end: String = "format-button__end"

    /** The format button's exported `caret` part. */
    lazy val formatButton__caret: String = "format-button__caret"

  }

  @js.native
  trait Swatch extends js.Object {
    var color: String
    var label: String
  }

  // -- Element type --

  @js.native
  trait WaColorPickerComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
      * includes the label before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need
      * to display HTML, you can use the `label` slot` instead.
      */
    var label: String

    /** The color picker's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The
      * color picker will accept user input in any format (including CSS color names) and convert it to the desired
      * format. Valid values: "hex", "rgb", "hsl", "hsv".
      */
    var format: ColorPickerFormat

    /** Determines the size of the color picker's trigger Valid values: "xs", "s", "m", "l", "xl", "small", "medium",
      * "large".
      */
    var size: ComponentSize

    /** The preferred placement of the color picker's popup. Note that the actual placement will vary as configured to
      * keep the panel inside of the viewport. Valid values: "top", "top-start", "top-end", "bottom", "bottom-start",
      * "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end".
      */
    var placement: Placement

    /** Removes the button that lets users toggle between format. */
    var withoutFormatToggle: Boolean

    /** The name of the form control, submitted as a name/value pair with form data. */
    var name: String

    /** Disables the color picker. */
    var disabled: Boolean

    /** Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you can
      * use the `show()` and `hide()` methods and this attribute will reflect the popup's open state.
      */
    var open: Boolean

    /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
    var opacity: Boolean

    /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
    var uppercase: Boolean

    /** One or more predefined color swatches to display as presets in the color picker. Can include any format the
      * color picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be
      * separated by a semicolon (`;`). Alternatively, you can pass an array of color values or an array of `{ color,
      * label }` objects to this property using JavaScript. When using objects with labels, the label will be used for
      * the swatch's accessible name instead of the raw color value.
      */
    var swatches: String | js.Array[String] | js.Array[ColorPicker.Swatch]

    /** Makes the color picker a required field. */
    var required: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
    def getHexString(hue: Double, saturation: Double, brightness: Double, alpha: js.Any): String = js.native

    def handleFormatChange(): Unit = js.native

    def handleOpacityChange(): Unit = js.native

    def handleValueChange(oldValue: js.Any, newValue: String): Unit = js.native

    /** Sets focus on the color picker. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

    /** Removes focus from the color picker. */
    def blur(): Unit = js.native

    /** Returns the current value as a string in the specified format. */
    def getFormattedValue(format: String): String = js.native

    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    def reportValidity(): Boolean = js.native

    def formResetCallback(): Unit = js.native

    def handleTriggerClick(): Unit = js.native

    def handleTriggerKeyDown(event: js.Any): js.Promise[js.Any] = js.native

    def handleTriggerKeyUp(event: js.Any): Unit = js.native

    def updateAccessibleTrigger(): Unit = js.native

    /** Shows the color picker panel. */
    def show(): js.Promise[js.Any] = js.native

    /** Hides the color picker panel */
    def hide(): js.Promise[js.Any] = js.native

    def addOpenListeners(): Unit = js.native

    def removeOpenListeners(): Unit = js.native

    def handleOpenChange(): js.Promise[js.Any] = js.native

    def getForm(): dom.html.Form | Null = js.native

    def checkValidity(): Boolean = js.native

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
