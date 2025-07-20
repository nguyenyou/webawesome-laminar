package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactIconMod extends Shortcut {
  
  /**
    * @summary Icons are symbols that can be used to represent various options within an application.
    * @documentation https://webawesome.com/docs/components/icon
    * @status stable
    * @since 2.0
    *
    * @event wa-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
    * @event wa-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
    *
    * @csspart svg - The internal SVG element.
    * @csspart use - The `<use>` element generated when using `spriteSheet: true`
    *
    * @cssproperty [--primary-color=currentColor] - Sets a duotone icon's primary color.
    * @cssproperty [--primary-opacity=1] - Sets a duotone icon's primary opacity.
    * @cssproperty [--secondary-color=currentColor] - Sets a duotone icon's secondary color.
    * @cssproperty [--secondary-opacity=0.4] - Sets a duotone icon's secondary opacity.
    */
  @JSImport("@awesome.me/webawesome/dist/react/icon", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/icon", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaErrorEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/icon", "WaLoadEvent")
  @js.native
  open class WaLoadEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaLoadEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactIconMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = default
}
