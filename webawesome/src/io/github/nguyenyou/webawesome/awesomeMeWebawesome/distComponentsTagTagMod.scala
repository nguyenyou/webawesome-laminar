package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`outlined accent`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`outlined filled`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.accent
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.brand
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.danger
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.neutral
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.success
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.warning
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTagTagMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tag/tag", JSImport.Default)
  @js.native
  open class default () extends WaTag
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tag/tag", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tag/tag", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTag
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** The tag's visual appearance. */
    var appearance: accent | (`outlined accent`) | filled | outlined | (`outlined filled`) = js.native
    
    /* private */ var handleRemoveClick: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Draws a pill-style tag with rounded edges. */
    var pill: Boolean = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /** The tag's size. */
    var size: small | medium | large = js.native
    
    /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. */
    var variant: brand | neutral | success | warning | danger = js.native
    
    /** Makes the tag removable and shows a remove button. */
    var withRemove: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tag`: WaTag
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tag`: WaTag): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tag")(`wa-tag`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tag`(value: WaTag): Self = StObject.set(x, "wa-tag", value.asInstanceOf[js.Any])
      }
    }
  }
}
