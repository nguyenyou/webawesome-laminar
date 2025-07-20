package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.plain
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLDetailsElement
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsDetailsDetailsMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/details/details", JSImport.Default)
  @js.native
  open class default () extends WaDetails
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/details/details", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/details/details", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaDetails
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** The element's visual appearance. */
    var appearance: filled | outlined | plain = js.native
    
    var body: HTMLElement = js.native
    
    /** Closes other <wa-details> elements in the same document when they have the same name. */
    /* private */ var closeOthersWithSameName: Any = js.native
    
    var details: HTMLDetailsElement = js.native
    
    /* private */ var detailsObserver: Any = js.native
    
    /** Disables the details so it can't be toggled. */
    var disabled: Boolean = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    var expandIconSlot: HTMLSlotElement = js.native
    
    def firstUpdated(): Unit = js.native
    
    def handleOpenChange(): js.Promise[Unit] = js.native
    
    /* private */ var handleSummaryClick: Any = js.native
    
    /* private */ var handleSummaryKeyDown: Any = js.native
    
    var header: HTMLElement = js.native
    
    /** Hides the details */
    def hide(): js.Promise[Unit] = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Groups related details elements. When one opens, others with the same name will close. */
    var name: String = js.native
    
    /**
      * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
      * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
      */
    var open: Boolean = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** Shows the details. */
    def show(): js.Promise[Unit] = js.native
    
    /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
    var summary: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-details`: WaDetails
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-details`: WaDetails): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-details")(`wa-details`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-details`(value: WaDetails): Self = StObject.set(x, "wa-details", value.asInstanceOf[js.Any])
      }
    }
  }
}
