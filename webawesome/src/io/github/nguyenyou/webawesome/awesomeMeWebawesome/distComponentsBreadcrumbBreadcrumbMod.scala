package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsBreadcrumbBreadcrumbMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb", JSImport.Default)
  @js.native
  open class default () extends WaBreadcrumb
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaBreadcrumb
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var defaultSlot: HTMLSlotElement = js.native
    
    /* private */ var getSeparator: Any = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    /**
      * The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
      * screen readers and other assistive devices to provide more context for users.
      */
    var label: String = js.native
    
    /* private */ val localize: Any = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var separatorDir: Any = js.native
    
    var separatorSlot: HTMLSlotElement = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-breadcrumb`: WaBreadcrumb
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-breadcrumb`: WaBreadcrumb): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-breadcrumb")(`wa-breadcrumb`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-breadcrumb`(value: WaBreadcrumb): Self = StObject.set(x, "wa-breadcrumb", value.asInstanceOf[js.Any])
      }
    }
  }
}
