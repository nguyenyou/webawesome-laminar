package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.DelegatesFocus
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.hex
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.hexa
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.hsl
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.hsla
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.hsv
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.hsva
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.rgb
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.rgba
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.FocusOptions
import org.scalajs.dom.HTMLButtonElement
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.KeyboardEvent
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsColorPickerColorPickerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/color-picker/color-picker", JSImport.Default)
  @js.native
  open class default () extends WaColorPicker
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/color-picker/color-picker", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/color-picker/color-picker", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/color-picker/color-picker", "default.shadowRootOptions")
    @js.native
    def shadowRootOptions: DelegatesFocus = js.native
    inline def shadowRootOptions_=(x: DelegatesFocus): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("shadowRootOptions")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaColorPicker extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    def addOpenListeners(): Unit = js.native
    
    /* private */ var alpha: Any = js.native
    
    var base: HTMLElement = js.native
    
    /** Removes focus from the color picker. */
    def blur(): Unit = js.native
    
    /* private */ var brightness: Any = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultValue")
    var defaultValue_WaColorPicker: String | Null = js.native
    
    def firstUpdated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** Sets focus on the color picker. */
    override def focus(): Unit = js.native
    override def focus(options: FocusOptions): Unit = js.native
    
    /**
      * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
      * the same document or shadow root for this to work.
      */
    @JSName("form")
    var form_WaColorPicker: Null = js.native
    
    /**
      * The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
      * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
      */
    var format: hex | rgb | hsl | hsv = js.native
    
    /** Returns the current value as a string in the specified format. */
    def getFormattedValue(): String = js.native
    def getFormattedValue(format: hex | hexa | rgb | rgba | hsl | hsla | hsv | hsva): String = js.native
    
    /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
    def getHexString(hue: Double, saturation: Double, brightness: Double): String = js.native
    def getHexString(hue: Double, saturation: Double, brightness: Double, alpha: Double): String = js.native
    
    /* private */ var handleAfterHide: Any = js.native
    
    /* private */ var handleAfterShow: Any = js.native
    
    /* private */ var handleAlphaDrag: Any = js.native
    
    /* private */ var handleAlphaKeyDown: Any = js.native
    
    /* private */ var handleCopy: Any = js.native
    
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    /* private */ var handleDocumentMouseDown: Any = js.native
    
    /* private */ var handleEyeDropper: Any = js.native
    
    /* private */ var handleFocusIn: Any = js.native
    
    /* private */ var handleFocusOut: Any = js.native
    
    def handleFormatChange(): Unit = js.native
    
    /* private */ var handleFormatToggle: Any = js.native
    
    /* private */ var handleGridDrag: Any = js.native
    
    /* private */ var handleGridKeyDown: Any = js.native
    
    /* private */ var handleHueDrag: Any = js.native
    
    /* private */ var handleHueKeyDown: Any = js.native
    
    /* private */ var handleInputChange: Any = js.native
    
    /* private */ var handleInputInput: Any = js.native
    
    /* private */ var handleInputKeyDown: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    def handleOpacityChange(): Unit = js.native
    
    def handleOpenChange(): js.Promise[Unit] = js.native
    
    /* private */ var handleTouchMove: Any = js.native
    
    def handleTriggerClick(): Unit = js.native
    
    def handleTriggerKeyDown(event: KeyboardEvent): js.Promise[Unit] = js.native
    
    def handleTriggerKeyUp(event: KeyboardEvent): Unit = js.native
    
    def handleValueChange(oldValue: String, newValue: String): Unit = js.native
    def handleValueChange(oldValue: Unit, newValue: String): Unit = js.native
    
    /* private */ var hasEyeDropper: Any = js.native
    
    /* private */ var hasFocus: Any = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** Hides the color picker panel */
    def hide(): js.Promise[Unit] = js.native
    
    /**
      * The color picker's hint. If you need to display HTML, use the `hint` slot instead.
      */
    var hint: String = js.native
    
    /* private */ var hue: Any = js.native
    
    /* private */ var inputValue: Any = js.native
    
    @JSName("input")
    var input_WaColorPicker: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsInputInputMod.default = js.native
    
    /* private */ var isDraggingGridHandle: Any = js.native
    
    /* private */ var isEmpty: Any = js.native
    
    /* private */ var isSafeValue: Any = js.native
    
    /**
      * The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
      * display HTML, you can use the `label` slot` instead.
      */
    var label: String = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
    var opacity: Boolean = js.native
    
    /**
      * Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you
      * can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state.
      */
    var open: Boolean = js.native
    
    /* private */ var parseColor: Any = js.native
    
    var popup: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsPopupPopupMod.default = js.native
    
    var previewButton: HTMLButtonElement = js.native
    
    def removeOpenListeners(): Unit = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var reportValidityAfterShow: Any = js.native
    
    /* private */ var saturation: Any = js.native
    
    /* private */ var selectSwatch: Any = js.native
    
    /* private */ var setColor: Any = js.native
    
    /* private */ var setLetterCase: Any = js.native
    
    /** Shows the color picker panel. */
    def show(): js.Promise[Unit] = js.native
    
    /** Determines the size of the color picker's trigger */
    var size: small | medium | large = js.native
    
    /* private */ var stopNestedEventPropagation: Any = js.native
    
    /**
      * One or more predefined color swatches to display as presets in the color picker. Can include any format the color
      * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
      * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
      */
    var swatches: String | js.Array[String] = js.native
    
    /* private */ var syncValues: Any = js.native
    
    var trigger: HTMLButtonElement = js.native
    
    var triggerButton: HTMLButtonElement = js.native
    
    var triggerLabel: HTMLElement = js.native
    
    def updateAccessibleTrigger(): Unit = js.native
    
    /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
    var uppercase: Boolean = js.native
    
    /** The current value of the input, submitted as a name/value pair with form data. */
    @JSName("value")
    def value_MWaColorPicker: String | Null = js.native
    
    /* protected */ def willUpdate(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    var withHint: Boolean = js.native
    
    var withLabel: Boolean = js.native
    
    /** Removes the button that lets users toggle between format.   */
    var withoutFormatToggle: Boolean = js.native
  }
}
