package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactTextareaMod extends Shortcut {
  
  /**
    * @summary Textareas collect data from the user and allow multiple lines of text.
    * @documentation https://webawesome.com/docs/components/textarea
    * @status stable
    * @since 2.0
    *
    * @slot label - The textarea's label. Alternatively, you can use the `label` attribute.
    * @slot hint - Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when an alteration to the control's value is committed by the user.
    * @event focus - Emitted when the control gains focus.
    * @event input - Emitted when the control receives input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart label - The label
    * @csspart form-control-input - The input's wrapper.
    * @csspart hint - The hint's wrapper.
    * @csspart textarea - The internal `<textarea>` control.
    * @csspart base - The wrapper around the `<textarea>` control.
    *
    * @cssstate blank - The textarea is empty.
    */
  @JSImport("@awesome.me/webawesome/dist/react/textarea", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/textarea", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactTextareaMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
