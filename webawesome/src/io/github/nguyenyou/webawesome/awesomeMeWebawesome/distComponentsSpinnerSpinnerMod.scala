package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsSpinnerSpinnerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/spinner/spinner", JSImport.Default)
  @js.native
  open class default () extends WaSpinner
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/spinner/spinner", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/spinner/spinner", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaSpinner
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ val localize: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-spinner`: WaSpinner
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-spinner`: WaSpinner): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-spinner")(`wa-spinner`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-spinner`(value: WaSpinner): Self = StObject.set(x, "wa-spinner", value.asInstanceOf[js.Any])
      }
    }
  }
}
