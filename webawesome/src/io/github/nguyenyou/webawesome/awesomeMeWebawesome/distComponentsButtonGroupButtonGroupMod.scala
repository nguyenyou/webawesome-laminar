package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.brand
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.danger
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.neutral
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.success
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.warning
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsButtonGroupButtonGroupMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/button-group/button-group", JSImport.Default)
  @js.native
  open class default () extends WaButtonGroup
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/button-group/button-group", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/button-group/button-group", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaButtonGroup
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var defaultSlot: HTMLSlotElement = js.native
    
    var disableRole: Boolean = js.native
    
    /* private */ var handleBlur: Any = js.native
    
    /* private */ var handleFocus: Any = js.native
    
    /* private */ var handleMouseOut: Any = js.native
    
    /* private */ var handleMouseOver: Any = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    var hasOutlined: Boolean = js.native
    
    /**
      * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
      * devices when interacting with the control and is strongly recommended.
      */
    var label: String = js.native
    
    /** The button group's orientation. */
    var orientation: horizontal | vertical = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** The component's size. */
    var size: small | medium | large = js.native
    
    /* private */ var updateClassNames: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** The button group's theme variant. Defaults to `neutral` if not within another element with a variant. */
    var variant: neutral | brand | success | warning | danger = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-button-group`: WaButtonGroup
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-button-group`: WaButtonGroup): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-button-group")(`wa-button-group`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-button-group`(value: WaButtonGroup): Self = StObject.set(x, "wa-button-group", value.asInstanceOf[js.Any])
      }
    }
  }
}
