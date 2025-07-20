package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.PartialDragOptions
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.PartialDraggableElementOp
import org.scalajs.dom.Element
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.PointerEvent
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalDragMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/drag", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/internal/drag", "DraggableElement")
  @js.native
  open class DraggableElement protected () extends StObject {
    def this(el: Element, options: PartialDraggableElementOp) = this()
    
    /* private */ var element: Any = js.native
    
    /* private */ var handleDragMove: Any = js.native
    
    /* private */ var handleDragStart: Any = js.native
    
    /* private */ var handleDragStop: Any = js.native
    
    /* private */ var isActive: Any = js.native
    
    /* private */ var isDragging: Any = js.native
    
    /* private */ var options: Any = js.native
    
    /** Start listening to drags. */
    def start(): Unit = js.native
    
    /** Stop listening to drags. */
    def stop(): Unit = js.native
    
    /** Starts or stops the drag listeners. */
    def toggle(): Unit = js.native
    def toggle(isActive: Boolean): Unit = js.native
  }
  
  inline def drag(container: HTMLElement): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("drag")(container.asInstanceOf[js.Any]).asInstanceOf[Unit]
  inline def drag(container: HTMLElement, options: PartialDragOptions): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("drag")(container.asInstanceOf[js.Any], options.asInstanceOf[js.Any])).asInstanceOf[Unit]
  
  trait DragOptions extends StObject {
    
    /**
      * When an initial event is passed, the first drag will be triggered immediately using the coordinates therein. This
      * is useful when the drag is initiated by a mousedown/touchstart event but you want the initial "click" to activate
      * a drag (e.g. positioning a handle initially at the click target).
      */
    var initialEvent: PointerEvent
    
    /** Callback that runs as dragging occurs. */
    def onMove(x: Double, y: Double): Unit
    
    /** Callback that runs when dragging stops. */
    def onStop(): Unit
  }
  object DragOptions {
    
    inline def apply(initialEvent: PointerEvent, onMove: (Double, Double) => Unit, onStop: () => Unit): DragOptions = {
      val __obj = js.Dynamic.literal(initialEvent = initialEvent.asInstanceOf[js.Any], onMove = js.Any.fromFunction2(onMove), onStop = js.Any.fromFunction0(onStop))
      __obj.asInstanceOf[DragOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: DragOptions] (val x: Self) extends AnyVal {
      
      inline def setInitialEvent(value: PointerEvent): Self = StObject.set(x, "initialEvent", value.asInstanceOf[js.Any])
      
      inline def setOnMove(value: (Double, Double) => Unit): Self = StObject.set(x, "onMove", js.Any.fromFunction2(value))
      
      inline def setOnStop(value: () => Unit): Self = StObject.set(x, "onStop", js.Any.fromFunction0(value))
    }
  }
  
  trait DraggableElementOptions extends StObject {
    
    /** Runs as the user is dragging. This may execute often, so avoid expensive operations. */
    def move(clientX: Double, clientY: Double): Unit
    
    /** Runs when dragging starts. */
    def start(clientX: Double, clientY: Double): Unit
    
    /** Runs when dragging ends. */
    def stop(clientX: Double, clientY: Double): Unit
  }
  object DraggableElementOptions {
    
    inline def apply(move: (Double, Double) => Unit, start: (Double, Double) => Unit, stop: (Double, Double) => Unit): DraggableElementOptions = {
      val __obj = js.Dynamic.literal(move = js.Any.fromFunction2(move), start = js.Any.fromFunction2(start), stop = js.Any.fromFunction2(stop))
      __obj.asInstanceOf[DraggableElementOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: DraggableElementOptions] (val x: Self) extends AnyVal {
      
      inline def setMove(value: (Double, Double) => Unit): Self = StObject.set(x, "move", js.Any.fromFunction2(value))
      
      inline def setStart(value: (Double, Double) => Unit): Self = StObject.set(x, "start", js.Any.fromFunction2(value))
      
      inline def setStop(value: (Double, Double) => Unit): Self = StObject.set(x, "stop", js.Any.fromFunction2(value))
    }
  }
}
