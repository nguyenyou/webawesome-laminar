package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsComparisonComparisonMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/comparison/comparison", JSImport.Default)
  @js.native
  open class default () extends WaComparison
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/comparison/comparison", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/comparison/comparison", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaComparison
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var handle: HTMLElement = js.native
    
    /* private */ var handleDrag: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    def handlePositionChange(): Unit = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The position of the divider as a percentage. */
    var position: Double = js.native
    
    def render(): TemplateResult[`1`] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-comparison`: WaComparison
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-comparison`: WaComparison): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-comparison")(`wa-comparison`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-comparison`(value: WaComparison): Self = StObject.set(x, "wa-comparison", value.asInstanceOf[js.Any])
      }
    }
  }
}
