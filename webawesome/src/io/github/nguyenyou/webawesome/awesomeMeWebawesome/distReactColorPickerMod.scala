package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactColorPickerMod extends Shortcut {
  
  /**
    * @summary Color pickers allow the user to select a color.
    * @documentation https://webawesome.com/docs/components/color-picker
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    * @dependency wa-button-group
    * @dependency wa-input
    * @dependency wa-popup
    * @dependency wa-visually-hidden
    *
    * @slot label - The color picker's form label. Alternatively, you can use the `label` attribute.
    * @slot hint - The color picker's form hint. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the color picker loses focus.
    * @event change - Emitted when the color picker's value changes.
    * @event focus - Emitted when the color picker receives focus.
    * @event input - Emitted when the color picker receives input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart base - The component's base wrapper.
    * @csspart trigger - The color picker's dropdown trigger.
    * @csspart swatches - The container that holds the swatches.
    * @csspart swatch - Each individual swatch.
    * @csspart grid - The color grid.
    * @csspart grid-handle - The color grid's handle.
    * @csspart slider - Hue and opacity sliders.
    * @csspart slider-handle - Hue and opacity slider handles.
    * @csspart hue-slider - The hue slider.
    * @csspart hue-slider-handle - The hue slider's handle.
    * @csspart opacity-slider - The opacity slider.
    * @csspart opacity-slider-handle - The opacity slider's handle.
    * @csspart preview - The preview color.
    * @csspart input - The text input.
    * @csspart eyedropper-button - The eye dropper button.
    * @csspart eyedropper-button__base - The eye dropper button's exported `button` part.
    * @csspart eyedropper-button__start - The eye dropper button's exported `start` part.
    * @csspart eyedropper-button__label - The eye dropper button's exported `label` part.
    * @csspart eyedropper-button__end - The eye dropper button's exported `end` part.
    * @csspart eyedropper-button__caret - The eye dropper button's exported `caret` part.
    * @csspart format-button - The format button.
    * @csspart format-button__base - The format button's exported `button` part.
    * @csspart format-button__start - The format button's exported `start` part.
    * @csspart format-button__label - The format button's exported `label` part.
    * @csspart format-button__end - The format button's exported `end` part.
    * @csspart format-button__caret - The format button's exported `caret` part.
    *
    * @cssproperty --grid-width - The width of the color grid.
    * @cssproperty --grid-height - The height of the color grid.
    * @cssproperty --grid-handle-size - The size of the color grid's handle.
    * @cssproperty --slider-height - The height of the hue and alpha sliders.
    * @cssproperty --slider-handle-size - The diameter of the slider's handle.
    */
  @JSImport("@awesome.me/webawesome/dist/react/color-picker", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/color-picker", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/color-picker", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/color-picker", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/color-picker", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/color-picker", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactColorPickerMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
