package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.nodes.Slot
import com.raquo.laminar.tags.CustomHtmlTag
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Color pickers allow the user to select a color.
  *
  * [[https://webawesome.com/docs/components/color-picker WebAwesome docs]]
  */
object ColorPicker extends WebComponent("wa-color-picker") {

  @JSImport("@awesome.me/webawesome/dist/components/color-picker/color-picker.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ColorPicker.type

  type Ref = WaColorPickerComponent & dom.HTMLElement

  // -- Controlled Component --

  override protected lazy val tag: CustomHtmlTag[Ref] = {
    tagWithControlledInput(value, initial = "", input)
  }

  // -- Events --

  /** Emitted when the color picker's value changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the color picker receives input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  lazy val onShow: EventProp[dom.Event] = eventProp("wa-show")

  lazy val onAfterShow: EventProp[dom.Event] = eventProp("wa-after-show")

  lazy val onHide: EventProp[dom.Event & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  lazy val onAfterHide: EventProp[dom.Event] = eventProp("wa-after-hide")

  /** Emitted when the color picker loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the color picker receives focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Props --

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

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
  lazy val format: HtmlAttr[ColorPickerFormat] = unionAttr("format")

  /** Determines the size of the color picker's trigger Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

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
    * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
    */
  lazy val swatches: HtmlAttr[String] = stringAttr("swatches")

  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
    * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
    * the same document or shadow root for this to work.
    */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** Makes the color picker a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

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

    /** The component's base wrapper. */
    lazy val base: String = "base"

    /** The color picker's dropdown trigger. */
    lazy val trigger: String = "trigger"

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

  // -- Element type --

  @js.native
  trait WaColorPickerComponent extends js.Object {
    this: dom.HTMLElement =>

    var withLabel: Boolean

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

    /** Determines the size of the color picker's trigger Valid values: "small", "medium", "large". */
    var size: ComponentSize

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
      * separated by a semicolon (`;`). Alternatively, you can pass an array of color values to this property using
      * JavaScript.
      */
    var swatches: String

    /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be
      * in the same document or shadow root for this to work.
      */
    var form: String

    /** Makes the color picker a required field. */
    var required: Boolean

    /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
    def getHexString(hue: js.Any, saturation: js.Any, brightness: js.Any, alpha: js.Any): js.Any = js.native

    def handleFormatChange(): js.Any = js.native

    def handleOpacityChange(): js.Any = js.native

    def handleValueChange(oldValue: js.Any, newValue: js.Any): js.Any = js.native

    /** Sets focus on the color picker. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the color picker. */
    def blur(): js.Any = js.native

    /** Returns the current value as a string in the specified format. */
    def getFormattedValue(format: js.Any): js.Any = js.native

    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    def reportValidity(): js.Any = js.native

    def formResetCallback(): js.Any = js.native

    def handleTriggerClick(): js.Any = js.native

    def handleTriggerKeyDown(event: js.Any): js.Any = js.native

    def handleTriggerKeyUp(event: js.Any): js.Any = js.native

    def updateAccessibleTrigger(): js.Any = js.native

    /** Shows the color picker panel. */
    def show(): js.Any = js.native

    /** Hides the color picker panel */
    def hide(): js.Any = js.native

    def addOpenListeners(): js.Any = js.native

    def removeOpenListeners(): js.Any = js.native

    def handleOpenChange(): js.Any = js.native

  }
}
