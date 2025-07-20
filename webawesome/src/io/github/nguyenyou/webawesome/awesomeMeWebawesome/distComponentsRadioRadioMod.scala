package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.button
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsRadioRadioMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/radio/radio", JSImport.Default)
  @js.native
  open class default () extends WaRadio
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/radio/radio", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/radio/radio", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaRadio extends WebAwesomeFormAssociatedElement {
    
    /** The radio's value. When selected, the radio group will receive this value. */
    var appearance: io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.default | button = js.native
    
    @JSName("checked")
    var checked_WaRadio: Boolean = js.native
    
    /** @internal Used by radio group to force disable radios while preserving their original disabled state. */
    var forceDisabled: Boolean = js.native
    
    /**
      * The string pointing to a form's id.
      */
    @JSName("form")
    var form_WaRadio: String | Null = js.native
    
    /* private */ var handleClick: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var setInitialAttributes: Any = js.native
    
    /**
      * @override
      */
    def setValue(): Unit = js.native
    
    /**
      * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
      * attribute can typically be omitted.
      */
    var size: small | medium | large = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** The radio's value. When selected, the radio group will receive this value. */
    @JSName("value")
    var value_WaRadio: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-radio`: WaRadio
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-radio`: WaRadio): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-radio")(`wa-radio`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-radio`(value: WaRadio): Self = StObject.set(x, "wa-radio", value.asInstanceOf[js.Any])
      }
    }
  }
}
