package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactRadioGroupMod extends Shortcut {
  
  /**
    * @summary Radio groups are used to group multiple [radios](/docs/components/radio) so they function as a single form control.
    * @documentation https://webawesome.com/docs/components/radio-group
    * @status stable
    * @since 2.0
    *
    * @dependency wa-radio
    *
    * @slot - The default slot where `<wa-radio>` elements are placed.
    * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
    *  attribute.
    * @slot hint - Text that describes how to use the radio group. Alternatively, you can use the `hint` attribute.
    *
    * @event change - Emitted when the radio group's selected value changes.
    * @event input - Emitted when the radio group receives user input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart form-control - The form control that wraps the label, input, and hint.
    * @csspart form-control-label - The label's wrapper.
    * @csspart form-control-input - The input's wrapper.
    * @csspart radios - The wrapper than surrounds radio items, styled as a flex container by default.
    * @csspart hint - The hint's wrapper.
    */
  @JSImport("@awesome.me/webawesome/dist/react/radio-group", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/radio-group", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactRadioGroupMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
