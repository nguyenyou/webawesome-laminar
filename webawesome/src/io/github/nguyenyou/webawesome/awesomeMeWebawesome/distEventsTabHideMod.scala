package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsTabHideMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/tab-hide", "WaTabHideEvent")
  @js.native
  open class WaTabHideEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaTabHideEventDetail) = this()
    
    val detail: WaTabHideEventDetail = js.native
  }
  
  trait WaTabHideEventDetail extends StObject {
    
    var name: String
  }
  object WaTabHideEventDetail {
    
    inline def apply(name: String): WaTabHideEventDetail = {
      val __obj = js.Dynamic.literal(name = name.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaTabHideEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaTabHideEventDetail] (val x: Self) extends AnyVal {
      
      inline def setName(value: String): Self = StObject.set(x, "name", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-tab-hide`: WaTabHideEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-tab-hide`: WaTabHideEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tab-hide")(`wa-tab-hide`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tab-hide`(value: WaTabHideEvent): Self = StObject.set(x, "wa-tab-hide", value.asInstanceOf[js.Any])
      }
    }
  }
}
