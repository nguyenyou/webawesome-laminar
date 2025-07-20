package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsCarouselItemCarouselItemMod.default
import io.github.nguyenyou.webawesome.std.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distEventsSlideChangeMod {
  
  @JSImport("@awesome.me/webawesome/dist/events/slide-change", "WaSlideChangeEvent")
  @js.native
  open class WaSlideChangeEvent protected ()
    extends StObject
       with Event {
    def this(detail: WaSlideChangeEventDetails) = this()
    
    val detail: WaSlideChangeEventDetails = js.native
  }
  
  trait WaSlideChangeEventDetails extends StObject {
    
    var index: Double
    
    var slide: default
  }
  object WaSlideChangeEventDetails {
    
    inline def apply(index: Double, slide: default): WaSlideChangeEventDetails = {
      val __obj = js.Dynamic.literal(index = index.asInstanceOf[js.Any], slide = slide.asInstanceOf[js.Any])
      __obj.asInstanceOf[WaSlideChangeEventDetails]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WaSlideChangeEventDetails] (val x: Self) extends AnyVal {
      
      inline def setIndex(value: Double): Self = StObject.set(x, "index", value.asInstanceOf[js.Any])
      
      inline def setSlide(value: default): Self = StObject.set(x, "slide", value.asInstanceOf[js.Any])
    }
  }
  
  object global {
    
    trait GlobalEventHandlersEventMap extends StObject {
      
      var `wa-slide-change`: WaSlideChangeEvent
    }
    object GlobalEventHandlersEventMap {
      
      inline def apply(`wa-slide-change`: WaSlideChangeEvent): GlobalEventHandlersEventMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-slide-change")(`wa-slide-change`.asInstanceOf[js.Any])
        __obj.asInstanceOf[GlobalEventHandlersEventMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: GlobalEventHandlersEventMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-slide-change`(value: WaSlideChangeEvent): Self = StObject.set(x, "wa-slide-change", value.asInstanceOf[js.Any])
      }
    }
  }
}
