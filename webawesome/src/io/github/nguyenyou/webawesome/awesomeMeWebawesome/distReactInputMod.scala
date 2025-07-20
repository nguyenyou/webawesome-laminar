package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactInputMod extends Shortcut {
  
  /**
    * @summary Inputs collect data from the user.
    * @documentation https://webawesome.com/docs/components/input
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot label - The input's label. Alternatively, you can use the `label` attribute.
    * @slot start - An element, such as `<wa-icon>`, placed at the start of the input control.
    * @slot end - An element, such as `<wa-icon>`, placed at the end of the input control.
    * @slot clear-icon - An icon to use in lieu of the default clear icon.
    * @slot show-password-icon - An icon to use in lieu of the default show password icon.
    * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
    * @slot hint - Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when an alteration to the control's value is committed by the user.
    * @event focus - Emitted when the control gains focus.
    * @event input - Emitted when the control receives input.
    * @event wa-clear - Emitted when the clear button is activated.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart label - The label
    * @csspart hint - The hint's wrapper.
    * @csspart input - The wrapper being rendered as an input
    * @csspart base - The internal `<input>` control.
    * @csspart start - The container that wraps the `start` slot.
    * @csspart clear-button - The clear button.
    * @csspart password-toggle-button - The password toggle button.
    * @csspart end - The container that wraps the `end` slot.
    *
    * @cssstate blank - The input is empty.
    */
  @JSImport("@awesome.me/webawesome/dist/react/input", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/input", "WaClearEvent")
  @js.native
  open class WaClearEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaClearEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/input", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactInputMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
