package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactTagMod extends Shortcut {
  
  /**
    * @summary Tags are used as labels to organize things or to indicate a selection.
    * @documentation https://webawesome.com/docs/components/tag
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    *
    * @slot - The tag's content.
    *
    * @event wa-remove - Emitted when the remove button is activated.
    *
    * @csspart base - The component's base wrapper.
    * @csspart content - The tag's content.
    * @csspart remove-button - The tag's remove button, a `<wa-button>`.
    * @csspart remove-button__base - The remove button's exported `base` part.
    */
  @JSImport("@awesome.me/webawesome/dist/react/tag", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaRemove :EventName<WaRemoveEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/tag", "WaRemoveEvent")
  @js.native
  open class WaRemoveEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaRemoveEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaRemove :EventName<WaRemoveEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactTagMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaRemove :EventName<WaRemoveEvent>}> */ Any = default
}
