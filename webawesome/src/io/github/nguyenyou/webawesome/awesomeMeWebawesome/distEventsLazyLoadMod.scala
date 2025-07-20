package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsLazyLoadMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/lazy-load", "WaLazyLoadEvent")
  @js.native
  open class WaLazyLoadEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-lazy-load`: WaLazyLoadEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-lazy-load`: WaLazyLoadEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-lazy-load")(`wa-lazy-load`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-lazy-load`(value: WaLazyLoadEvent): Self = StObject.set(x, "wa-lazy-load", value.asInstanceOf[js.Any])
      }
    }
  }
}
