package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsShowMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/show", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-show`: WaShowEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-show`: WaShowEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-show")(`wa-show`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-show`(value: WaShowEvent): Self = StObject.set(x, "wa-show", value.asInstanceOf[js.Any])
      }
    }
  }
}
