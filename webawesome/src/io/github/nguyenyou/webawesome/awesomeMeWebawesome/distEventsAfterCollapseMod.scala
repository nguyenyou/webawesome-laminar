package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsAfterCollapseMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/after-collapse", "WaAfterCollapseEvent")
  @js.native
  open class WaAfterCollapseEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-after-collapse`: WaAfterCollapseEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-after-collapse`: WaAfterCollapseEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-after-collapse")(`wa-after-collapse`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-after-collapse`(value: WaAfterCollapseEvent): Self = StObject.set(x, "wa-after-collapse", value.asInstanceOf[js.Any])
      }
    }
  }
}
