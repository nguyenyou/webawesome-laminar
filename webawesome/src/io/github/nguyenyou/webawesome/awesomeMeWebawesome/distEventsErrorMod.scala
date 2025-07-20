package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsErrorMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/error", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-error`: WaErrorEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-error`: WaErrorEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-error")(`wa-error`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-error`(value: WaErrorEvent): Self = StObject.set(x, "wa-error", value.asInstanceOf[js.Any])
      }
    }
  }
}
