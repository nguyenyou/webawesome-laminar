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

/** Ranges allow the user to select a single value within a given range using a slider.
  *
  * [[https://webawesome.com/docs/components/range WebAwesome docs]]
  */
object Slider extends WebComponent("wa-slider") with ControlledInput {

  @JSImport("@awesome.me/webawesome/dist/components/slider/slider.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Slider.type

  type Ref = WaSliderComponent & dom.HTMLElement

  // -- Controlled Component --

  override protected lazy val tag: CustomHtmlTag[Ref] = {
    tagWithControlledInput(value, initial = "", onInput)
  }

  // -- Events --

  /** Emitted when an alteration to the control's value is committed by the user. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the control receives input. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Props --

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  /** The slider's label. If you need to provide HTML in the label, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The slider hint. If you need to display HTML, use the hint slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** The name of the slider. This will be submitted with the form as a name/value pair. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The minimum value of a range selection. Used only when range attribute is set. */
  lazy val minValue: HtmlAttr[Double] = doubleAttr("min-value")

  /** The maximum value of a range selection. Used only when range attribute is set. */
  lazy val maxValue: HtmlAttr[Double] = doubleAttr("max-value")

  /** Converts the slider to a range slider with two thumbs. */
  lazy val range: HtmlAttr[Boolean] = boolAttr("range")

  /** Disables the slider. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Makes the slider a read-only field. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** The orientation of the slider. Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  /** The slider's size. Valid values: "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  lazy val indicatorOffset: HtmlAttr[Double] = doubleAttr("indicator-offset")

  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
    * this attribute must be an ID of a form in the same document or shadow root.
    */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** The minimum value allowed. */
  lazy val min: HtmlAttr[Double] = doubleAttr("min")

  /** The maximum value allowed. */
  lazy val max: HtmlAttr[Double] = doubleAttr("max")

  /** The granularity the value must adhere to when incrementing and decrementing. */
  lazy val step: HtmlAttr[Double] = doubleAttr("step")

  /** Makes the slider a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
  lazy val autofocus: HtmlAttr[Boolean] = boolAttr("autofocus")

  /** The distance of the tooltip from the slider's thumb. */
  lazy val tooltipDistance: HtmlAttr[Double] = doubleAttr("tooltip-distance")

  /** The placement of the tooltip in reference to the slider's thumb. Valid values: "top", "right", "bottom", "left".
    */
  lazy val tooltipPlacement: CommonKeys.TooltipPlacement.type = CommonKeys.TooltipPlacement

  /** Draws markers at each step along the slider. */
  lazy val withMarkers: HtmlAttr[Boolean] = boolAttr("with-markers")

  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  lazy val withTooltip: HtmlAttr[Boolean] = boolAttr("with-tooltip")

  // -- Slots --

  object slots {

    /** The slider label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Text that describes how to use the input. Alternatively, you can use the `hint` attribute. instead. */
    lazy val hint: Slot = Slot("hint")

    /** One or more reference labels to show visually below the slider. */
    lazy val reference: Slot = Slot("reference")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The height or width of the slider's track. Default: 0.75em */
    lazy val trackSize: String = "--track-size"

    /** The width of each individual marker. Default: 0.1875em */
    lazy val markerWidth: String = "--marker-width"

    /** The height of each individual marker. Default: 0.1875em */
    lazy val markerHeight: String = "--marker-height"

    /** The width of the thumb. Default: 1.25em */
    lazy val thumbWidth: String = "--thumb-width"

    /** The height of the thumb. Default: 1.25em */
    lazy val thumbHeight: String = "--thumb-height"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The element that contains the sliders's label. */
    lazy val label: String = "label"

    /** The element that contains the slider's description. */
    lazy val hint: String = "hint"

    /** The focusable element with `role="slider"`. Contains the track and reference slot. */
    lazy val slider: String = "slider"

    /** The slider's track. */
    lazy val track: String = "track"

    /** The colored indicator that shows from the start of the slider to the current value. */
    lazy val indicator: String = "indicator"

    /** The container that holds all the markers when `with-markers` is used. */
    lazy val markers: String = "markers"

    /** The individual markers that are shown when `with-markers` is used. */
    lazy val marker: String = "marker"

    /** The container that holds references that get slotted in. */
    lazy val references: String = "references"

    /** The slider's thumb. */
    lazy val thumb: String = "thumb"

    /** The min value thumb in a range slider. */
    lazy val thumbMin: String = "thumb-min"

    /** The max value thumb in a range slider. */
    lazy val thumbMax: String = "thumb-max"

    /** The tooltip, a `<wa-tooltip>` element. */
    lazy val tooltip: String = "tooltip"

    /** The tooltip's `tooltip` part. */
    lazy val tooltip__tooltip: String = "tooltip__tooltip"

    /** The tooltip's `content` part. */
    lazy val tooltip__content: String = "tooltip__content"

    /** The tooltip's `arrow` part. */
    lazy val tooltip__arrow: String = "tooltip__arrow"

  }

  // -- Element type --

  @js.native
  trait WaSliderComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The slider's label. If you need to provide HTML in the label, use the `label` slot instead. */
    var label: String

    /** The slider hint. If you need to display HTML, use the hint slot instead. */
    var hint: String

    /** The name of the slider. This will be submitted with the form as a name/value pair. */
    var name: String

    /** The minimum value of a range selection. Used only when range attribute is set. */
    var minValue: Double

    /** The maximum value of a range selection. Used only when range attribute is set. */
    var maxValue: Double

    /** Converts the slider to a range slider with two thumbs. */
    var range: Boolean

    /** Disables the slider. */
    var disabled: Boolean

    /** Makes the slider a read-only field. */
    var readonly: Boolean

    /** The orientation of the slider. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** The slider's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** The starting value from which to draw the slider's fill, which is based on its current value. */
    var indicatorOffset: Double

    /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
      * this attribute must be an ID of a form in the same document or shadow root.
      */
    var form: String

    /** The minimum value allowed. */
    var min: Double

    /** The maximum value allowed. */
    var max: Double

    /** The granularity the value must adhere to when incrementing and decrementing. */
    var step: Double

    /** Makes the slider a required field. */
    var required: Boolean

    /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
    var autofocus: Boolean

    /** The distance of the tooltip from the slider's thumb. */
    var tooltipDistance: Double

    /** The placement of the tooltip in reference to the slider's thumb. Valid values: "top", "right", "bottom", "left".
      */
    var tooltipPlacement: TooltipPlacement

    /** Draws markers at each step along the slider. */
    var withMarkers: Boolean

    /** Draws a tooltip above the thumb when the control has focus or is dragged. */
    var withTooltip: Boolean

    var value: Double

    /** Sets focus to the slider. */
    def focus(): js.Any = js.native

    /** Removes focus from the slider. */
    def blur(): js.Any = js.native

    /** Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not
      * be emitted when this is called.
      */
    def stepDown(): js.Any = js.native

    /** Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not
      * be emitted when this is called.
      */
    def stepUp(): js.Any = js.native

  }
}
