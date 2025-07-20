package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactAnimatedImageMod extends Shortcut {
  
  /**
    * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
    * @documentation https://webawesome.com/docs/components/animated-image
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @event wa-load - Emitted when the image loads successfully.
    * @event wa-error - Emitted when the image fails to load.
    *
    * @slot play-icon - Optional play icon to use instead of the default. Works best with `<wa-icon>`.
    * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<wa-icon>`.
    *
    * @csspart control-box - The container that surrounds the pause/play icons and provides their background.
    *
    * @cssproperty --control-box-size - The size of the icon box.
    * @cssproperty --icon-size - The size of the play/pause icons.
    */
  @JSImport("@awesome.me/webawesome/dist/react/animated-image", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/animated-image", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaErrorEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/animated-image", "WaLoadEvent")
  @js.native
  open class WaLoadEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaLoadEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactAnimatedImageMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = default
}
