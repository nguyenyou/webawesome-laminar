package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.DelegatesFocus
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.FocusOptions
import org.scalajs.dom.HTMLInputElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCheckboxCheckboxMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/checkbox/checkbox", JSImport.Default)
  @js.native
  open class default () extends WaCheckbox
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/checkbox/checkbox", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/checkbox/checkbox", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/checkbox/checkbox", "default.shadowRootOptions")
    @js.native
    def shadowRootOptions: DelegatesFocus = js.native
    inline def shadowRootOptions_=(x: DelegatesFocus): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("shadowRootOptions")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaCheckbox extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    /** Removes focus from the checkbox. */
    def blur(): Unit = js.native
    
    /** Draws the checkbox in a checked state. */
    @JSName("checked")
    var checked_WaCheckbox: Boolean = js.native
    
    /** Simulates a click on the checkbox. */
    def click(): Unit = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultChecked")
    var defaultChecked_WaCheckbox: Boolean = js.native
    
    /** Sets focus on the checkbox. */
    def focus(): Unit = js.native
    def focus(options: FocusOptions): Unit = js.native
    
    /**
      * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
      * the same document or shadow root for this to work.
      */
    @JSName("form")
    var form_WaCheckbox: Null = js.native
    
    /* private */ var handleClick: Any = js.native
    
    def handleDefaultCheckedChange(): Unit = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    def handleStateChange(): Unit = js.native
    
    def handleValueOrCheckedChange(): Unit = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** The checkbox's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String = js.native
    
    /**
      * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
      * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
      */
    var indeterminate: Boolean = js.native
    
    @JSName("input")
    var input_WaCheckbox: HTMLInputElement = js.native
    
    /** The name of the checkbox, submitted as a name/value pair with form data. */
    @JSName("name")
    var name_WaCheckbox: String = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** The checkbox's size. */
    var size: small | medium | large = js.native
    
    var title: String = js.native
    
    /** The value of the checkbox, submitted as a name/value pair with form data. */
    @JSName("value")
    def value_MWaCheckbox: String | Null = js.native
    
    /* protected */ def willUpdate(changedProperties: PropertyValues[this.type]): Unit = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-checkbox`: WaCheckbox
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-checkbox`: WaCheckbox): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-checkbox")(`wa-checkbox`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-checkbox`(value: WaCheckbox): Self = StObject.set(x, "wa-checkbox", value.asInstanceOf[js.Any])
      }
    }
  }
}
