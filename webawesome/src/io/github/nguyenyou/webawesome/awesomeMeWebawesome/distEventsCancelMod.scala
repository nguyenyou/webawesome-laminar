package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsCancelMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/cancel", "WaCancelEvent")
  @js.native
  open class WaCancelEvent ()
    extends StObject
       with Event
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-cancel`: WaCancelEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-cancel`: WaCancelEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-cancel")(`wa-cancel`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-cancel`(value: WaCancelEvent): Self = StObject.set(x, "wa-cancel", value.asInstanceOf[js.Any])
      }
    }
  }
}
