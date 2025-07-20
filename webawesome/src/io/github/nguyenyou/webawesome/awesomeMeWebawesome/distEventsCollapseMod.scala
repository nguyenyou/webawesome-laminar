package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsCollapseMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/collapse", "WaCollapseEvent")
  @js.native
  open class WaCollapseEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-collapse`: WaCollapseEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-collapse`: WaCollapseEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-collapse")(`wa-collapse`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-collapse`(value: WaCollapseEvent): Self = StObject.set(x, "wa-collapse", value.asInstanceOf[js.Any])
      }
    }
  }
}
