package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsTabShowMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/tab-show", "WaTabShowEvent")
  @js.native
  open class WaTabShowEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaTabShowEventDetail) = this()
    
    val detail: WaTabShowEventDetail = js.native
  }
  
  trait WaTabShowEventDetail extends StObject {
    
    var name: String
  }
  object WaTabShowEventDetail {
    
    inline def apply(name: String): WaTabShowEventDetail = {
      val __obj = js.Dynamic.literal(name = name.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaTabShowEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaTabShowEventDetail] (val x: Self) extends AnyVal {
      
      inline def setName(value: String): Self = StObject.set(x, "name", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-tab-show`: WaTabShowEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-tab-show`: WaTabShowEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tab-show")(`wa-tab-show`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tab-show`(value: WaTabShowEvent): Self = StObject.set(x, "wa-tab-show", value.asInstanceOf[js.Any])
      }
    }
  }
}
