package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.lit.mod.ReactiveElement
import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveController
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.PointerEvent
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCarouselScrollControllerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/carousel/scroll-controller", "ScrollController")
  @js.native
  open class ScrollController[T /* <: ScrollHost */] protected ()
    extends StObject
       with ReactiveController {
    def this(host: T) = this()
    
    var dragging: Boolean = js.native
    
    def handleDrag(event: PointerEvent): Unit = js.native
    
    def handleDragEnd(): Unit = js.native
    
    def handleDragStart(): Unit = js.native
    
    def handlePointerDown(event: PointerEvent): Unit = js.native
    
    def handlePointerMove(event: PointerEvent): Unit = js.native
    
    def handlePointerUp(event: PointerEvent): Unit = js.native
    
    def handleScroll(): Unit = js.native
    
    def handleScrollEnd(): Unit = js.native
    
    /* private */ var host: Any = js.native
    
    @JSName("hostConnected")
    def hostConnected_MScrollController(): js.Promise[Unit] = js.native
    
    @JSName("hostDisconnected")
    def hostDisconnected_MScrollController(): Unit = js.native
    
    var mouseDragging: Boolean = js.native
    
    var scrolling: Boolean = js.native
  }
  
  @js.native
  trait ScrollHost extends ReactiveElement {
    
    var scrollContainer: HTMLElement = js.native
  }
}
