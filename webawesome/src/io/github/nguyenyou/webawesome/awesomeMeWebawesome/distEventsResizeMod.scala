package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import io.github.nguyenyou.webawesome.std.ResizeObserverEntry
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsResizeMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/resize", "WaResizeEvent")
  @js.native
  open class WaResizeEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaResizeEventDetail) = this()
    
    val detail: WaResizeEventDetail = js.native
  }
  
  trait WaResizeEventDetail extends StObject {
    
    var entries: js.Array[ResizeObserverEntry]
  }
  object WaResizeEventDetail {
    
    inline def apply(entries: js.Array[ResizeObserverEntry]): WaResizeEventDetail = {
      val __obj = js.Dynamic.literal(entries = entries.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaResizeEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaResizeEventDetail] (val x: Self) extends AnyVal {
      
      inline def setEntries(value: js.Array[ResizeObserverEntry]): Self = StObject.set(x, "entries", value.asInstanceOf[js.Any])
      
      inline def setEntriesVarargs(value: ResizeObserverEntry*): Self = StObject.set(x, "entries", js.Array(value*))
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-resize`: WaResizeEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-resize`: WaResizeEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-resize")(`wa-resize`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-resize`(value: WaResizeEvent): Self = StObject.set(x, "wa-resize", value.asInstanceOf[js.Any])
      }
    }
  }
}
