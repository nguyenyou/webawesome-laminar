package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsAfterHideMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/after-hide", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-after-hide`: WaAfterHideEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-after-hide`: WaAfterHideEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-after-hide")(`wa-after-hide`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-after-hide`(value: WaAfterHideEvent): Self = StObject.set(x, "wa-after-hide", value.asInstanceOf[js.Any])
      }
    }
  }
}
