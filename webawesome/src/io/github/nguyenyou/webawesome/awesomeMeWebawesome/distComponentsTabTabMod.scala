package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTabTabMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tab/tab", JSImport.Default)
  @js.native
  open class default () extends WaTab
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tab/tab", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tab/tab", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTab
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** @internal Draws the tab in an active state. */
    var active: Boolean = js.native
    
    /* private */ val attrId: Any = js.native
    
    /* private */ val componentId: Any = js.native
    
    def connectedCallback(): Unit = js.native
    
    /** Disables the tab and prevents selection. */
    var disabled: Boolean = js.native
    
    def handleActiveChange(): Unit = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
    var panel: String = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    var tab: HTMLElement = js.native
    
    /**
      * @internal
      * Need to wrap in a `@property()` otherwise NextJS blows up.
      */
    var tabIndex: Double = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tab`: WaTab
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tab`: WaTab): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tab")(`wa-tab`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tab`(value: WaTab): Self = StObject.set(x, "wa-tab", value.asInstanceOf[js.Any])
      }
    }
  }
}
