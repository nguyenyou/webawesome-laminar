package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`lazy`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.circle
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.eager
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.rounded
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.square
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsAvatarAvatarMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/avatar/avatar", JSImport.Default)
  @js.native
  open class default () extends WaAvatar
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/avatar/avatar", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/avatar/avatar", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaAvatar
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    def handleImageChange(): Unit = js.native
    
    /* private */ var handleImageLoadError: Any = js.native
    
    /* private */ var hasError: Any = js.native
    
    /** The image source to use for the avatar. */
    var image: String = js.native
    
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    var initials: String = js.native
    
    /** A label to use to describe the avatar to assistive devices. */
    var label: String = js.native
    
    /** Indicates how the browser should load the image. */
    var loading: eager | `lazy` = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /** The shape of the avatar. */
    var shape: circle | square | rounded = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-avatar`: WaAvatar
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-avatar`: WaAvatar): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-avatar")(`wa-avatar`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-avatar`(value: WaAvatar): Self = StObject.set(x, "wa-avatar", value.asInstanceOf[js.Any])
      }
    }
  }
}
