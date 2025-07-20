package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsInvalidMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/invalid", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-invalid`: WaInvalidEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-invalid`: WaInvalidEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-invalid")(`wa-invalid`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-invalid`(value: WaInvalidEvent): Self = StObject.set(x, "wa-invalid", value.asInstanceOf[js.Any])
      }
    }
  }
}
