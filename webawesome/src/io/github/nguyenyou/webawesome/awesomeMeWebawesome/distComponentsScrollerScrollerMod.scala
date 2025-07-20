package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsScrollerScrollerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/scroller/scroller", JSImport.Default)
  @js.native
  open class default () extends WaScroller
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/scroller/scroller", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/scroller/scroller", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaScroller
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var canScroll: Boolean = js.native
    
    def connectedCallback(): Unit = js.native
    
    var content: HTMLElement = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The scroller's orientation. */
    var orientation: horizontal | vertical = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var resizeObserver: Any = js.native
    
    /* private */ var updateScroll: Any = js.native
    
    /** Removes the visible scrollbar. */
    var withoutScrollbar: Boolean = js.native
    
    /** Removes the shadows. */
    var withoutShadow: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-scroller`: WaScroller
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-scroller`: WaScroller): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-scroller")(`wa-scroller`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-scroller`(value: WaScroller): Self = StObject.set(x, "wa-scroller", value.asInstanceOf[js.Any])
      }
    }
  }
}
