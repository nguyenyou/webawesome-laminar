package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsResizeObserverResizeObserverMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/resize-observer/resize-observer", JSImport.Default)
  @js.native
  open class default () extends WaResizeObserver
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/resize-observer/resize-observer", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/resize-observer/resize-observer", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaResizeObserver
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    override def connectedCallback(): Unit = js.native
    
    /** Disables the observer. */
    var disabled: Boolean = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    /* private */ var observedElements: Any = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var resizeObserver: Any = js.native
    
    /* private */ var startObserver: Any = js.native
    
    /* private */ var stopObserver: Any = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-resize-observer`: WaResizeObserver
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-resize-observer`: WaResizeObserver): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-resize-observer")(`wa-resize-observer`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-resize-observer`(value: WaResizeObserver): Self = StObject.set(x, "wa-resize-observer", value.asInstanceOf[js.Any])
      }
    }
  }
}
