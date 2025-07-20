package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLDialogElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsDrawerDrawerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/drawer/drawer", JSImport.Default)
  @js.native
  open class default () extends WaDrawer
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/drawer/drawer", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/drawer/drawer", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaDrawer
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ var addOpenListeners: Any = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    var drawer: HTMLDialogElement = js.native
    
    def firstUpdated(): Unit = js.native
    
    /* private */ var handleDialogCancel: Any = js.native
    
    /* private */ var handleDialogClick: Any = js.native
    
    /* private */ var handleDialogPointerDown: Any = js.native
    
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    def handleOpenChange(): Unit = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /**
      * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
      * proper accessibility. If you need to display HTML, use the `label` slot instead.
      */
    var label: String = js.native
    
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    var lightDismiss: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    var open: Boolean = js.native
    
    /* private */ var originalTrigger: Any = js.native
    
    /** The direction from which the drawer will open. */
    var placement: top | end | bottom | start = js.native
    
    /* private */ var removeOpenListeners: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var requestClose: Any = js.native
    
    /** Shows the drawer. */
    /* private */ var show: Any = js.native
    
    /** Disables the header. This will also remove the default close button. */
    var withoutHeader: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-drawer`: WaDrawer
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-drawer`: WaDrawer): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-drawer")(`wa-drawer`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-drawer`(value: WaDrawer): Self = StObject.set(x, "wa-drawer", value.asInstanceOf[js.Any])
      }
    }
  }
}
