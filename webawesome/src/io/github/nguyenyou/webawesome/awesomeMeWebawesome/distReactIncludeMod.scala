package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactIncludeMod extends Shortcut {
  
  /**
    * @summary Includes give you the power to embed external HTML files into the page.
    * @documentation https://webawesome.com/docs/components/include
    * @status stable
    * @since 2.0
    *
    * @event wa-load - Emitted when the included file is loaded.
    * @event {{ status: number }} wa-error - Emitted when the included file fails to load due to an error.
    */
  @JSImport("@awesome.me/webawesome/dist/react/include", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/include", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaErrorEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/include", "WaLoadEvent")
  @js.native
  open class WaLoadEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaLoadEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactIncludeMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = default
}
