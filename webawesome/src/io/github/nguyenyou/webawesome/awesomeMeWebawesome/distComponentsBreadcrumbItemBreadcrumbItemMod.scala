package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._blank
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._parent
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._self
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._top
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsBreadcrumbItemBreadcrumbItemMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item", JSImport.Default)
  @js.native
  open class default () extends WaBreadcrumbItem
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaBreadcrumbItem
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var defaultSlot: HTMLSlotElement = js.native
    
    def handleSlotChange(): Unit = js.native
    
    /**
      * Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
      * internally. When unset, a button will be rendered instead.
      */
    var href: js.UndefOr[String] = js.native
    
    def hrefChanged(): Unit = js.native
    
    /** The `rel` attribute to use on the link. Only used when `href` is set. */
    var rel: String = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var renderType: Any = js.native
    
    /* private */ var setRenderType: Any = js.native
    
    /** Tells the browser where to open the link. Only used when `href` is set. */
    var target: js.UndefOr[_blank | _parent | _self | _top] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-breadcrumb-item`: WaBreadcrumbItem
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-breadcrumb-item`: WaBreadcrumbItem): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-breadcrumb-item")(`wa-breadcrumb-item`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-breadcrumb-item`(value: WaBreadcrumbItem): Self = StObject.set(x, "wa-breadcrumb-item", value.asInstanceOf[js.Any])
      }
    }
  }
}
