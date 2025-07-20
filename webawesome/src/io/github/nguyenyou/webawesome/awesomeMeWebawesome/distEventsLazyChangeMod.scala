package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsLazyChangeMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/lazy-change", "WaLazyChangeEvent")
  @js.native
  open class WaLazyChangeEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-lazy-change`: WaLazyChangeEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-lazy-change`: WaLazyChangeEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-lazy-change")(`wa-lazy-change`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-lazy-change`(value: WaLazyChangeEvent): Self = StObject.set(x, "wa-lazy-change", value.asInstanceOf[js.Any])
      }
    }
  }
}
