package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsFinishMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/finish", "WaFinishEvent")
  @js.native
  open class WaFinishEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-finish`: WaFinishEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-finish`: WaFinishEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-finish")(`wa-finish`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-finish`(value: WaFinishEvent): Self = StObject.set(x, "wa-finish", value.asInstanceOf[js.Any])
      }
    }
  }
}
