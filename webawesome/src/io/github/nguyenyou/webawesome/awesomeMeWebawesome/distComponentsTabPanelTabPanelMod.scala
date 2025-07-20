package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTabPanelTabPanelMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tab-panel/tab-panel", JSImport.Default)
  @js.native
  open class default () extends WaTabPanel
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tab-panel/tab-panel", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tab-panel/tab-panel", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTabPanel
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** When true, the tab panel will be shown. */
    var active: Boolean = js.native
    
    /* private */ val attrId: Any = js.native
    
    /* private */ val componentId: Any = js.native
    
    override def connectedCallback(): Unit = js.native
    
    def handleActiveChange(): Unit = js.native
    
    /** The tab panel's name. */
    var name: String = js.native
    
    override def render(): TemplateResult[`1`] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tab-panel`: WaTabPanel
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tab-panel`: WaTabPanel): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tab-panel")(`wa-tab-panel`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tab-panel`(value: WaTabPanel): Self = StObject.set(x, "wa-tab-panel", value.asInstanceOf[js.Any])
      }
    }
  }
}
