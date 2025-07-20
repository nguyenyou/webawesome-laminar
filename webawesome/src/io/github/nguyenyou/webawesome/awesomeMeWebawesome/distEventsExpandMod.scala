package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsExpandMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/expand", "WaExpandEvent")
  @js.native
  open class WaExpandEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-expand`: WaExpandEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-expand`: WaExpandEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-expand")(`wa-expand`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-expand`(value: WaExpandEvent): Self = StObject.set(x, "wa-expand", value.asInstanceOf[js.Any])
      }
    }
  }
}
