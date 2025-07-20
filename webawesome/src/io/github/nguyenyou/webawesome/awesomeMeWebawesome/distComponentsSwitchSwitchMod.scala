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
import org.scalajs.dom.File
import org.scalajs.dom.FormData
import org.scalajs.dom.HTMLInputElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsSwitchSwitchMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/switch/switch", JSImport.Default)
  @js.native
  open class default () extends WaSwitch
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/switch/switch", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/switch/switch", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/switch/switch", "default.shadowRootOptions")
    @js.native
    def shadowRootOptions: DelegatesFocus = js.native
    inline def shadowRootOptions_=(x: DelegatesFocus): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("shadowRootOptions")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaSwitch extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    /** Removes focus from the switch. */
    def blur(): Unit = js.native
    
    /** Draws the switch in a checked state. */
    @JSName("checked")
    var checked_WaSwitch: Boolean = js.native
    
    /** Simulates a click on the switch. */
    def click(): Unit = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultChecked")
    var defaultChecked_WaSwitch: Boolean = js.native
    
    def firstUpdated(
      changedProperties: PropertyValues[
          /* import warning: ResolveTypeQueries.resolve Couldn't resolve typeof this */ Any
        ]
    ): Unit = js.native
    
    /** Sets focus on the switch. */
    override def focus(): Unit = js.native
    override def focus(options: FocusOptions): Unit = js.native
    
    /**
      * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
      * the same document or shadow root for this to work.
      */
    @JSName("form")
    var form_WaSwitch: Null = js.native
    
    /* private */ var handleClick: Any = js.native
    
    def handleDefaultCheckedChange(): Unit = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    def handleStateChange(): Unit = js.native
    
    def handleValueOrCheckedChange(): Unit = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** The switch's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String = js.native
    
    @JSName("input")
    var input_WaSwitch: HTMLInputElement = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    def setValue(): Unit = js.native
    def setValue(value: String): Unit = js.native
    def setValue(value: String, stateValue: String): Unit = js.native
    def setValue(value: String, stateValue: File): Unit = js.native
    def setValue(value: String, stateValue: FormData): Unit = js.native
    def setValue(value: File): Unit = js.native
    def setValue(value: File, stateValue: String): Unit = js.native
    def setValue(value: File, stateValue: File): Unit = js.native
    def setValue(value: File, stateValue: FormData): Unit = js.native
    def setValue(value: FormData): Unit = js.native
    def setValue(value: FormData, stateValue: String): Unit = js.native
    def setValue(value: FormData, stateValue: File): Unit = js.native
    def setValue(value: FormData, stateValue: FormData): Unit = js.native
    def setValue(value: Null, stateValue: String): Unit = js.native
    def setValue(value: Null, stateValue: File): Unit = js.native
    def setValue(value: Null, stateValue: FormData): Unit = js.native
    
    /** The switch's size. */
    var size: small | medium | large = js.native
    
    var title: String = js.native
    
    /** The value of the switch, submitted as a name/value pair with form data. */
    @JSName("value")
    def value_MWaSwitch: String | Null = js.native
    
    /* protected */ def willUpdate(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /**
      * Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR.
      */
    var withHint: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-switch`: WaSwitch
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-switch`: WaSwitch): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-switch")(`wa-switch`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-switch`(value: WaSwitch): Self = StObject.set(x, "wa-switch", value.asInstanceOf[js.Any])
      }
    }
  }
}
