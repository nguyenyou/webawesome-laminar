package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.error
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.rest
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.right
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.success
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCopyButtonCopyButtonMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/copy-button/copy-button", JSImport.Default)
  @js.native
  open class default () extends WaCopyButton
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/copy-button/copy-button", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/copy-button/copy-button", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaCopyButton
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var copyIcon: HTMLSlotElement = js.native
    
    /** A custom label to show in the tooltip. */
    var copyLabel: String = js.native
    
    /* private */ def currentLabel: Any = js.native
    
    /** Disables the copy button. */
    var disabled: Boolean = js.native
    
    var errorIcon: HTMLSlotElement = js.native
    
    /** A custom label to show in the tooltip when a copy error occurs. */
    var errorLabel: String = js.native
    
    /** The length of time to show feedback before restoring the default trigger. */
    var feedbackDuration: Double = js.native
    
    /**
      * An id that references an element in the same document from which data will be copied. If both this and `value` are
      * present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
      * attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
      * append a dot and the property name, e.g. `from="el.value"`.
      */
    var from: String = js.native
    
    /* private */ var handleCopy: Any = js.native
    
    var isCopying: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var showStatus: Any = js.native
    
    var status: rest | success | error = js.native
    
    var successIcon: HTMLSlotElement = js.native
    
    /** A custom label to show in the tooltip after copying. */
    var successLabel: String = js.native
    
    var tooltip: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsTooltipTooltipMod.default = js.native
    
    /** The preferred placement of the tooltip. */
    var tooltipPlacement: top | right | bottom | left = js.native
    
    /** The text value to copy. */
    var value: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-copy-button`: WaCopyButton
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-copy-button`: WaCopyButton): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-copy-button")(`wa-copy-button`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-copy-button`(value: WaCopyButton): Self = StObject.set(x, "wa-copy-button", value.asInstanceOf[js.Any])
      }
    }
  }
}
