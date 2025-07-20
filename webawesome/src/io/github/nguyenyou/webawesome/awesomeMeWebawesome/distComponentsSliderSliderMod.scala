package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.right
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.Node
import org.scalajs.dom.NodeList
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsSliderSliderMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/slider/slider", JSImport.Default)
  @js.native
  open class default () extends WaSlider
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/slider/slider", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/slider/slider", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/slider/slider", "default.formAssociated")
    @js.native
    def formAssociated: Boolean = js.native
    inline def formAssociated_=(x: Boolean): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("formAssociated")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/slider/slider", "default.observeSlots")
    @js.native
    def observeSlots: Boolean = js.native
    inline def observeSlots_=(x: Boolean): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("observeSlots")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaSlider extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    /* private */ var activeThumb: Any = js.native
    
    /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
    var autofocus: Boolean = js.native
    
    /** Removes focus from the slider. */
    def blur(): Unit = js.native
    
    /** Clamps a number to min/max while ensuring it's a valid step interval. */
    /* private */ var clampAndRoundToStep: Any = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultValue")
    var defaultValue_WaSlider: Double = js.native
    
    /* private */ var draggableThumbMax: Any = js.native
    
    /* private */ var draggableThumbMin: Any = js.native
    
    /* private */ var draggableTrack: Any = js.native
    
    def firstUpdated(): Unit = js.native
    
    /** Sets focus to the slider. */
    def focus(): Unit = js.native
    
    /* protected */ def focusableAnchor: HTMLElement = js.native
    
    /**
      * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
      * this attribute must be an ID of a form in the same document or shadow root.
      */
    @JSName("form")
    var form_WaSlider: Null = js.native
    
    /** Given a value, returns its percentage within a range of min/max. */
    /* private */ var getPercentageFromValue: Any = js.native
    
    /** Converts coordinates to slider value */
    /* private */ var getValueFromCoordinates: Any = js.native
    
    /* private */ var handleBlur: Any = js.native
    
    /* private */ var handleFocus: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleLabelPointerDown: Any = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /* private */ var hideRangeTooltips: Any = js.native
    
    /* private */ var hideTooltip: Any = js.native
    
    /** The slider hint. If you need to display HTML, use the hint slot instead. */
    var hint: String = js.native
    
    /** The starting value from which to draw the slider's fill, which is based on its current value. */
    var indicatorOffset: Double = js.native
    
    /** Get if this is a range slider */
    def isRange: Boolean = js.native
    
    /**
      * The slider's label. If you need to provide HTML in the label, use the `label` slot instead.
      */
    var label: String = js.native
    
    /* private */ var lastTrackPosition: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The maximum value of a range selection. Used only when range attribute is set. */
    var maxValue: Double = js.native
    
    /** The maximum value allowed. */
    @JSName("max")
    var max_WaSlider: Double = js.native
    
    /** The minimum value of a range selection. Used only when range attribute is set. */
    var minValue: Double = js.native
    
    /** The minimum value allowed. */
    @JSName("min")
    var min_WaSlider: Double = js.native
    
    /** The name of the slider. This will be submitted with the form as a name/value pair. */
    @JSName("name")
    var name_WaSlider: String = js.native
    
    /** The orientation of the slider. */
    var orientation: horizontal | vertical = js.native
    
    /** Converts the slider to a range slider with two thumbs. */
    var range: Boolean = js.native
    
    /** Makes the slider a read-only field. */
    var readonly: Boolean = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var setThumbValueFromCoordinates: Any = js.native
    
    /* private */ var setValueFromCoordinates: Any = js.native
    
    /* private */ var showRangeTooltips: Any = js.native
    
    /* private */ var showTooltip: Any = js.native
    
    /** The slider's size. */
    var size: small | medium | large = js.native
    
    var slider: HTMLElement = js.native
    
    /**
      * Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
      * emitted when this is called.
      */
    def stepDown(): Unit = js.native
    
    /**
      * Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
      * emitted when this is called.
      */
    def stepUp(): Unit = js.native
    
    /** The granularity the value must adhere to when incrementing and decrementing. */
    @JSName("step")
    var step_WaSlider: Double = js.native
    
    var thumb: HTMLElement = js.native
    
    var thumbMax: HTMLElement = js.native
    
    var thumbMin: HTMLElement = js.native
    
    var tooltip: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsTooltipTooltipMod.default = js.native
    
    /** The distance of the tooltip from the slider's thumb. */
    var tooltipDistance: Double = js.native
    
    /** The placement of the tooltip in reference to the slider's thumb. */
    var tooltipPlacement: top | right | bottom | left = js.native
    
    var tooltips: NodeList[
        io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsTooltipTooltipMod.default & Node
      ] = js.native
    
    var track: HTMLElement = js.native
    
    /* private */ var trackBoundingClientRect: Any = js.native
    
    /** Updates the form value submission for range sliders */
    /* private */ var updateFormValue: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /**
      * A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
      * readers. Must be set with JavaScript. Property only.
      */
    def valueFormatter(value: Double): String = js.native
    
    /* private */ var valueWhenDraggingStarted: Any = js.native
    
    /** The current value of the slider, submitted as a name/value pair with form data. */
    @JSName("value")
    def value_MWaSlider: Double = js.native
    
    /** Draws markers at each step along the slider. */
    var withMarkers: Boolean = js.native
    
    /** Draws a tooltip above the thumb when the control has focus or is dragged. */
    var withTooltip: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-slider`: WaSlider
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-slider`: WaSlider): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-slider")(`wa-slider`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-slider`(value: WaSlider): Self = StObject.set(x, "wa-slider", value.asInstanceOf[js.Any])
      }
    }
  }
}
