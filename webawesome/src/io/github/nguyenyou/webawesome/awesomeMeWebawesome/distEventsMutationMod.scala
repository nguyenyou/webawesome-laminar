package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Event
import org.scalajs.dom.MutationRecord
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsMutationMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/mutation", "WaMutationEvent")
  @js.native
  open class WaMutationEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaMutationEventDetail) = this()
    
    val detail: WaMutationEventDetail = js.native
  }
  
  trait WaMutationEventDetail extends StObject {
    
    var mutationList: js.Array[MutationRecord]
  }
  object WaMutationEventDetail {
    
    inline def apply(mutationList: js.Array[MutationRecord]): WaMutationEventDetail = {
      val __obj = js.Dynamic.literal(mutationList = mutationList.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaMutationEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaMutationEventDetail] (val x: Self) extends AnyVal {
      
      inline def setMutationList(value: js.Array[MutationRecord]): Self = StObject.set(x, "mutationList", value.asInstanceOf[js.Any])
      
      inline def setMutationListVarargs(value: MutationRecord*): Self = StObject.set(x, "mutationList", js.Array(value*))
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-mutation`: WaMutationEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-mutation`: WaMutationEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-mutation")(`wa-mutation`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-mutation`(value: WaMutationEvent): Self = StObject.set(x, "wa-mutation", value.asInstanceOf[js.Any])
      }
    }
  }
}
