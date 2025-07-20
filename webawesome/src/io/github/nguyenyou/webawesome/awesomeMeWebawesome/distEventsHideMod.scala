package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsHideMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/hide", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends StObject
       with Event {
    def this(detail: WaHideEventDetails) = this()
    
    val detail: js.UndefOr[WaHideEventDetails] = js.native
  }
  
  trait WaHideEventDetails extends StObject {
    
    var source: Element
  }
  object WaHideEventDetails {
    
    inline def apply(source: Element): WaHideEventDetails = {
      val __obj = js.Dynamic.literal(source = source.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaHideEventDetails]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaHideEventDetails] (val x: Self) extends AnyVal {
      
      inline def setSource(value: Element): Self = StObject.set(x, "source", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-hide`: WaHideEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-hide`: WaHideEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-hide")(`wa-hide`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-hide`(value: WaHideEvent): Self = StObject.set(x, "wa-hide", value.asInstanceOf[js.Any])
      }
    }
  }
}
