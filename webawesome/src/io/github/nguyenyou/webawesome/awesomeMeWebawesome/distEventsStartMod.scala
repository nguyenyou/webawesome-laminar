package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsStartMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/start", "WaStartEvent")
  @js.native
  open class WaStartEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-start`: WaStartEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-start`: WaStartEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-start")(`wa-start`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-start`(value: WaStartEvent): Self = StObject.set(x, "wa-start", value.asInstanceOf[js.Any])
      }
    }
  }
}
