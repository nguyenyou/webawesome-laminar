package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsAfterExpandMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/after-expand", "WaAfterExpandEvent")
  @js.native
  open class WaAfterExpandEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-after-expand`: WaAfterExpandEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-after-expand`: WaAfterExpandEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-after-expand")(`wa-after-expand`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-after-expand`(value: WaAfterExpandEvent): Self = StObject.set(x, "wa-after-expand", value.asInstanceOf[js.Any])
      }
    }
  }
}
