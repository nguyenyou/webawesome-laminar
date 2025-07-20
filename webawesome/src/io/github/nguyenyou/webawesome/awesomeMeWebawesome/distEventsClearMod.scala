package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsClearMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/clear", "WaClearEvent")
  @js.native
  open class WaClearEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-clear`: WaClearEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-clear`: WaClearEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-clear")(`wa-clear`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-clear`(value: WaClearEvent): Self = StObject.set(x, "wa-clear", value.asInstanceOf[js.Any])
      }
    }
  }
}
