package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.accent
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.plain
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCardCardMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/card/card", JSImport.Default)
  @js.native
  open class default () extends WaCard
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/card/card", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/card/card", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaCard
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** The card's visual appearance. */
    var appearance: accent | filled | outlined | plain = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    def updated(): Unit = js.native
    
    /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
    var withFooter: Boolean = js.native
    
    /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
    var withHeader: Boolean = js.native
    
    /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
    var withMedia: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-card`: WaCard
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-card`: WaCard): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-card")(`wa-card`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-card`(value: WaCard): Self = StObject.set(x, "wa-card", value.asInstanceOf[js.Any])
      }
    }
  }
}
