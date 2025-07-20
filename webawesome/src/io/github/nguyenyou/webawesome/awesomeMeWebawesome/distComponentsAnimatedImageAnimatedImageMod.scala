package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLImageElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsAnimatedImageAnimatedImageMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/animated-image/animated-image", JSImport.Default)
  @js.native
  open class default () extends WaAnimatedImage
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/animated-image/animated-image", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/animated-image/animated-image", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaAnimatedImage
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** A description of the image used by assistive devices. */
    var alt: String = js.native
    
    var animatedImage: HTMLImageElement = js.native
    
    var frozenFrame: String = js.native
    
    /* private */ var handleClick: Any = js.native
    
    /* private */ var handleError: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleLoad: Any = js.native
    
    def handlePlayChange(): Unit = js.native
    
    def handleSrcChange(): Unit = js.native
    
    var isLoaded: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Plays the animation. When this attribute is remove, the animation will pause. */
    var play: Boolean = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /** The path to the image to load. */
    var src: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-animated-image`: WaAnimatedImage
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-animated-image`: WaAnimatedImage): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-animated-image")(`wa-animated-image`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-animated-image`(value: WaAnimatedImage): Self = StObject.set(x, "wa-animated-image", value.asInstanceOf[js.Any])
      }
    }
  }
}
