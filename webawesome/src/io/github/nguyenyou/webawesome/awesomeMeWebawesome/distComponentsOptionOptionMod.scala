package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsOptionOptionMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/option/option", JSImport.Default)
  @js.native
  open class default () extends WaOption
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/option/option", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/option/option", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaOption
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var _label: String = js.native
    
    def connectedCallback(): Unit = js.native
    
    var current: Boolean = js.native
    
    /** The default label, generated from the element contents. Will be equal to `label` in most cases. */
    var defaultLabel: String = js.native
    
    /** Selects an option initially. */
    var defaultSelected: Boolean = js.native
    
    var defaultSlot: HTMLSlotElement = js.native
    
    /** Draws the option in a disabled state, preventing selection. */
    var disabled: Boolean = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /* private */ var handleDefaultSlotChange: Any = js.native
    
    /* private */ var handleHover: Any = js.native
    
    /* private */ var isInitialized: Any = js.native
    
    def label: String = js.native
    /**
      * The option’s plain text label.
      * Usually automatically generated, but can be useful to provide manually for cases involving complex content.
      */
    def label_=(value: String): Unit = js.native
    
    /* private */ val localize: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** @internal */
    var selected: Boolean = js.native
    
    /* private */ var updateDefaultLabel: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /**
      * The option's value. When selected, the containing form control will receive this value. The value must be unique
      * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
      * multiple values.
      */
    var value: String = js.native
    
    /* protected */ def willUpdate(changedProperties: PropertyValues[this.type]): Unit = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-option`: WaOption
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-option`: WaOption): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-option")(`wa-option`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-option`(value: WaOption): Self = StObject.set(x, "wa-option", value.asInstanceOf[js.Any])
      }
    }
  }
}
