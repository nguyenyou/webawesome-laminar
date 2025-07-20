package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsIncludeErrorMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/include-error", "WaIncludeErrorEvent")
  @js.native
  open class WaIncludeErrorEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaIncludeErrorDetail) = this()
    
    val detail: WaIncludeErrorDetail = js.native
  }
  
  trait WaIncludeErrorDetail extends StObject {
    
    var status: Double
  }
  object WaIncludeErrorDetail {
    
    inline def apply(status: Double): WaIncludeErrorDetail = {
      val __obj = js.Dynamic.literal(status = status.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaIncludeErrorDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaIncludeErrorDetail] (val x: Self) extends AnyVal {
      
      inline def setStatus(value: Double): Self = StObject.set(x, "status", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-include-error`: WaIncludeErrorEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-include-error`: WaIncludeErrorEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-include-error")(`wa-include-error`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-include-error`(value: WaIncludeErrorEvent): Self = StObject.set(x, "wa-include-error", value.asInstanceOf[js.Any])
      }
    }
  }
}
