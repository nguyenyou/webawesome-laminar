package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLDialogElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsDialogDialogMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/dialog/dialog", JSImport.Default)
  @js.native
  open class default () extends WaDialog
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/dialog/dialog", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/dialog/dialog", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaDialog
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ var addOpenListeners: Any = js.native
    
    var dialog: HTMLDialogElement = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    def firstUpdated(): Unit = js.native
    
    /* private */ var handleDialogCancel: Any = js.native
    
    /* private */ var handleDialogClick: Any = js.native
    
    /* private */ var handleDialogPointerDown: Any = js.native
    
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    def handleOpenChange(): Unit = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /**
      * The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
      * proper accessibility. If you need to display HTML, use the `label` slot instead.
      */
    var label: String = js.native
    
    /** When enabled, the dialog will be closed when the user clicks outside of it. */
    var lightDismiss: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog. */
    var open: Boolean = js.native
    
    /* private */ var originalTrigger: Any = js.native
    
    /* private */ var removeOpenListeners: Any = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var requestClose: Any = js.native
    
    /** Shows the dialog. */
    /* private */ var show: Any = js.native
    
    /** Disables the header. This will also remove the default close button. */
    var withoutHeader: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-dialog`: WaDialog
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-dialog`: WaDialog): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-dialog")(`wa-dialog`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-dialog`(value: WaDialog): Self = StObject.set(x, "wa-dialog", value.asInstanceOf[js.Any])
      }
    }
  }
}
