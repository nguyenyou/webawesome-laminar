package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsRepositionMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/reposition", "WaRepositionEvent")
  @js.native
  open class WaRepositionEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-reposition`: WaRepositionEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-reposition`: WaRepositionEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-reposition")(`wa-reposition`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-reposition`(value: WaRepositionEvent): Self = StObject.set(x, "wa-reposition", value.asInstanceOf[js.Any])
      }
    }
  }
}
