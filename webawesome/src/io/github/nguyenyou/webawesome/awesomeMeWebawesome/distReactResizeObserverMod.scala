package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsResizeMod.WaResizeEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactResizeObserverMod extends Shortcut {
  
  /**
    * @summary The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
    * @documentation https://webawesome.com/docs/components/resize-observer
    * @status stable
    * @since 2.0
    *
    * @slot - One or more elements to watch for resizing.
    *
    * @event {{ entries: ResizeObserverEntry[] }} wa-resize - Emitted when the element is resized.
    */
  @JSImport("@awesome.me/webawesome/dist/react/resize-observer", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaResize :EventName<WaResizeEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/resize-observer", "WaResizeEvent")
  @js.native
  open class WaResizeEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaResizeEvent {
    def this(detail: WaResizeEventDetail) = this()
  }
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaResize :EventName<WaResizeEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactResizeObserverMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaResize :EventName<WaResizeEvent>}> */ Any = default
}
