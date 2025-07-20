package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsRemoveMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/remove", "WaRemoveEvent")
  @js.native
  open class WaRemoveEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-remove`: WaRemoveEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-remove`: WaRemoveEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-remove")(`wa-remove`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-remove`(value: WaRemoveEvent): Self = StObject.set(x, "wa-remove", value.asInstanceOf[js.Any])
      }
    }
  }
}
