package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.DelegatesFocus
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.FocusOptions
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import io.github.nguyenyou.webawesome.std.Parameters
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsRadioGroupRadioGroupMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/radio-group/radio-group", JSImport.Default)
  @js.native
  open class default () extends WaRadioGroup
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/radio-group/radio-group", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/radio-group/radio-group", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/radio-group/radio-group", "default.shadowRootOptions")
    @js.native
    def shadowRootOptions: DelegatesFocus = js.native
    inline def shadowRootOptions_=(x: DelegatesFocus): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("shadowRootOptions")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaRadioGroup extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    var defaultSlot: HTMLSlotElement = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultValue")
    var defaultValue_WaRadioGroup: String | Null = js.native
    
    /** Sets focus on the radio group. */
    def focus(): Unit = js.native
    def focus(options: FocusOptions): Unit = js.native
    
    def formResetCallback(
      /* import warning: parser.TsParser#functionParam Dropping repeated marker of param args because its type Parameters<WebAwesomeFormAssociatedElement['formResetCallback']> is not an array type */ args: Parameters[js.Function0[Unit]]
    ): Unit = js.native
    
    /* private */ var getAllRadios: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleLabelClick: Any = js.native
    
    /* private */ var handleRadioClick: Any = js.native
    
    var hasRadioButtons: Boolean = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String = js.native
    
    /**
      * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
      * instead.
      */
    var label: String = js.native
    
    /** The orientation in which to show radio items. */
    var orientation: horizontal | vertical = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
    var size: small | medium | large = js.native
    
    /* private */ var syncRadioElements: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    @JSName("value")
    def value_MWaRadioGroup: String | Double | Null = js.native
    
    /**
      * Used for SSR. if true, will show slotted hint on initial render.
      */
    var withHint: Boolean = js.native
    
    /**
      * Used for SSR. if true, will show slotted label on initial render.
      */
    var withLabel: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-radio-group`: WaRadioGroup
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-radio-group`: WaRadioGroup): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-radio-group")(`wa-radio-group`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-radio-group`(value: WaRadioGroup): Self = StObject.set(x, "wa-radio-group", value.asInstanceOf[js.Any])
      }
    }
  }
}
