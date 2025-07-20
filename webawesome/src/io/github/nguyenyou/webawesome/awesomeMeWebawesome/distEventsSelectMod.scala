package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsSelectMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/select", "WaSelectEvent")
  @js.native
  open class WaSelectEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaSelectEventDetail) = this()
    
    val detail: WaSelectEventDetail = js.native
  }
  
  trait WaSelectEventDetail extends StObject {
    
    var item: Element
  }
  object WaSelectEventDetail {
    
    inline def apply(item: Element): WaSelectEventDetail = {
      val __obj = js.Dynamic.literal(item = item.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaSelectEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaSelectEventDetail] (val x: Self) extends AnyVal {
      
      inline def setItem(value: Element): Self = StObject.set(x, "item", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-select`: WaSelectEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-select`: WaSelectEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-select")(`wa-select`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-select`(value: WaSelectEvent): Self = StObject.set(x, "wa-select", value.asInstanceOf[js.Any])
      }
    }
  }
}
