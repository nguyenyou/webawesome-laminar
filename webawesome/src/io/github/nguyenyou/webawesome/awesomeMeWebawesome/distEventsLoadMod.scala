package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsLoadMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/load", "WaLoadEvent")
  @js.native
  open class WaLoadEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-load`: WaLoadEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-load`: WaLoadEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-load")(`wa-load`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-load`(value: WaLoadEvent): Self = StObject.set(x, "wa-load", value.asInstanceOf[js.Any])
      }
    }
  }
}
