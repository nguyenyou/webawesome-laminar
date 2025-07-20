package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsCopyMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/copy", "WaCopyEvent")
  @js.native
  open class WaCopyEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaCopyErrorEventDetail) = this()
    
    val detail: WaCopyErrorEventDetail = js.native
  }
  
  trait WaCopyErrorEventDetail extends StObject {
    
    /** The value  that occurred while copying. */
    var value: String
  }
  object WaCopyErrorEventDetail {
    
    inline def apply(value: String): WaCopyErrorEventDetail = {
      val __obj = js.Dynamic.literal(value = value.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaCopyErrorEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaCopyErrorEventDetail] (val x: Self) extends AnyVal {
      
      inline def setValue(value: String): Self = StObject.set(x, "value", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-copy`: WaCopyEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-copy`: WaCopyEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-copy")(`wa-copy`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-copy`(value: WaCopyEvent): Self = StObject.set(x, "wa-copy", value.asInstanceOf[js.Any])
      }
    }
  }
}
