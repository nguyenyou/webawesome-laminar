package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsTreeItemTreeItemMod.default
import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsSelectionChangeMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/selection-change", "WaSelectionChangeEvent")
  @js.native
  open class WaSelectionChangeEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaSelectionChangeEventDetail) = this()
    
    val detail: WaSelectionChangeEventDetail = js.native
  }
  
  trait WaSelectionChangeEventDetail extends StObject {
    
    var selection: js.Array[default]
  }
  object WaSelectionChangeEventDetail {
    
    inline def apply(selection: js.Array[default]): WaSelectionChangeEventDetail = {
      val __obj = js.Dynamic.literal(selection = selection.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaSelectionChangeEventDetail]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaSelectionChangeEventDetail] (val x: Self) extends AnyVal {
      
      inline def setSelection(value: js.Array[default]): Self = StObject.set(x, "selection", value.asInstanceOf[js.Any])
      
      inline def setSelectionVarargs(value: default*): Self = StObject.set(x, "selection", js.Array(value*))
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-selection-change`: WaSelectionChangeEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-selection-change`: WaSelectionChangeEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-selection-change")(`wa-selection-change`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-selection-change`(value: WaSelectionChangeEvent): Self = StObject.set(x, "wa-selection-change", value.asInstanceOf[js.Any])
      }
    }
  }
}
