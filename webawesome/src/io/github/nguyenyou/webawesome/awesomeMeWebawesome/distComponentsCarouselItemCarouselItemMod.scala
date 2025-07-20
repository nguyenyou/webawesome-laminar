package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCarouselItemCarouselItemMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/carousel-item/carousel-item", JSImport.Default)
  @js.native
  open class default () extends WaCarouselItem
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/carousel-item/carousel-item", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/carousel-item/carousel-item", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaCarouselItem
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    override def connectedCallback(): Unit = js.native
    
    override def render(): TemplateResult[`1`] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-carousel-item`: WaCarouselItem
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-carousel-item`: WaCarouselItem): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-carousel-item")(`wa-carousel-item`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-carousel-item`(value: WaCarouselItem): Self = StObject.set(x, "wa-carousel-item", value.asInstanceOf[js.Any])
      }
    }
  }
}
