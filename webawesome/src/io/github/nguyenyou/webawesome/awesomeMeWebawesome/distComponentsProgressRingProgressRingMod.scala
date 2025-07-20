package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.SVGCircleElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsProgressRingProgressRingMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/progress-ring/progress-ring", JSImport.Default)
  @js.native
  open class default () extends WaProgressRing
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/progress-ring/progress-ring", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/progress-ring/progress-ring", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaProgressRing
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var indicator: SVGCircleElement = js.native
    
    var indicatorOffset: String = js.native
    
    /** A custom label for assistive devices. */
    var label: String = js.native
    
    /* private */ val localize: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** The current progress as a percentage, 0 to 100. */
    var value: Double = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-progress-ring`: WaProgressRing
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-progress-ring`: WaProgressRing): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-progress-ring")(`wa-progress-ring`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-progress-ring`(value: WaProgressRing): Self = StObject.set(x, "wa-progress-ring", value.asInstanceOf[js.Any])
      }
    }
  }
}
