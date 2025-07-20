package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.none
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.pulse
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.sheen
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsSkeletonSkeletonMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/skeleton/skeleton", JSImport.Default)
  @js.native
  open class default () extends WaSkeleton
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/skeleton/skeleton", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/skeleton/skeleton", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaSkeleton
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** Determines which effect the skeleton will use. */
    var effect: pulse | sheen | none = js.native
    
    override def render(): TemplateResult[`1`] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-skeleton`: WaSkeleton
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-skeleton`: WaSkeleton): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-skeleton")(`wa-skeleton`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-skeleton`(value: WaSkeleton): Self = StObject.set(x, "wa-skeleton", value.asInstanceOf[js.Any])
      }
    }
  }
}
