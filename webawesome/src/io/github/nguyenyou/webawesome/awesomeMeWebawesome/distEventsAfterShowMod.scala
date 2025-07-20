package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsAfterShowMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/after-show", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-after-show`: WaAfterShowEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-after-show`: WaAfterShowEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-after-show")(`wa-after-show`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-after-show`(value: WaAfterShowEvent): Self = StObject.set(x, "wa-after-show", value.asInstanceOf[js.Any])
      }
    }
  }
}
