package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.move
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsHoverMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/hover", "WaHoverEvent")
  @js.native
  open class WaHoverEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaHoverEventDetail) = this()
    
    val detail: WaHoverEventDetail = js.native
  }
  
  trait WaHoverEventDetail extends StObject {
    
    var phase: start | move | end
    
    var value: Double
  }
  object WaHoverEventDetail {
    
    inline def apply(phase: start | move | end, value: Double): WaHoverEventDetail = {
      val __obj = js.Dynamic.literal(phase = phase.asInstanceOf[js.Any], value = value.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaHoverEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaHoverEventDetail] (val x: Self) extends AnyVal {
      
      inline def setPhase(value: start | move | end): Self = StObject.set(x, "phase", value.asInstanceOf[js.Any])
      
      inline def setValue(value: Double): Self = StObject.set(x, "value", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-hover`: WaHoverEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-hover`: WaHoverEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-hover")(`wa-hover`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-hover`(value: WaHoverEvent): Self = StObject.set(x, "wa-hover", value.asInstanceOf[js.Any])
      }
    }
  }
}
