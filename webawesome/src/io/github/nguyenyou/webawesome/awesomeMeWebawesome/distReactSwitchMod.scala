package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactSwitchMod extends Shortcut {
  
  /**
    * @summary Switches allow the user to toggle an option on or off.
    * @documentation https://webawesome.com/docs/components/switch
    * @status stable
    * @since 2.0
    *
    * @slot - The switch's label.
    * @slot hint - Text that describes how to use the switch. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when the control's checked state changes.
    * @event input - Emitted when the control receives input.
    * @event focus - Emitted when the control gains focus.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart base - The component's base wrapper.
    * @csspart control - The control that houses the switch's thumb.
    * @csspart thumb - The switch's thumb.
    * @csspart label - The switch's label.
    * @csspart hint - The hint's wrapper.
    *
    * @cssproperty --width - The width of the switch.
    * @cssproperty --height - The height of the switch.
    * @cssproperty --thumb-size - The size of the thumb.
    */
  @JSImport("@awesome.me/webawesome/dist/react/switch", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/switch", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactSwitchMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
