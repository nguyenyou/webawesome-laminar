package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`no-cors`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`same-origin`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.cors
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsIncludeIncludeMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/include/include", JSImport.Default)
  @js.native
  open class default () extends WaInclude
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/include/include", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/include/include", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaInclude
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /**
      * Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
      * code and can result in XSS attacks.
      */
    var allowScripts: Boolean = js.native
    
    /* private */ var executeScript: Any = js.native
    
    def handleSrcChange(): js.Promise[Unit] = js.native
    
    /** The fetch mode to use. */
    var mode: cors | `no-cors` | `same-origin` = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /**
      * The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
      * code and can result in XSS attacks.
      */
    var src: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-include`: WaInclude
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-include`: WaInclude): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-include")(`wa-include`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-include`(value: WaInclude): Self = StObject.set(x, "wa-include", value.asInstanceOf[js.Any])
      }
    }
  }
}
