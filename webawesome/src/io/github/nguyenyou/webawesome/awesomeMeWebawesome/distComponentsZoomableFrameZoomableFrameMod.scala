package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`lazy`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.eager
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalTestFixtureMod.global.Window
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.Document
import org.scalajs.dom.HTMLIFrameElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsZoomableFrameZoomableFrameMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame", JSImport.Default)
  @js.native
  open class default () extends WaZoomableFrame
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaZoomableFrame
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** Allows fullscreen mode. */
    var allowfullscreen: Boolean = js.native
    
    /* private */ var availableZoomLevels: Any = js.native
    
    /** Returns the internal iframe's `document` object. (Readonly property) */
    def contentDocument: Document | Null = js.native
    
    /** Returns the internal iframe's `window` object. (Readonly property) */
    def contentWindow: Window | Null = js.native
    
    /* private */ var getCurrentZoomIndex: Any = js.native
    
    /* private */ var handleError: Any = js.native
    
    /* private */ var handleLoad: Any = js.native
    
    var iframe: HTMLIFrameElement = js.native
    
    /* private */ var isZoomInDisabled: Any = js.native
    
    /* private */ var isZoomOutDisabled: Any = js.native
    
    /** Controls iframe loading behavior. */
    var loading: eager | `lazy` = js.native
    
    /* private */ val localize: Any = js.native
    
    /* private */ var parseZoomLevels: Any = js.native
    
    /** Controls referrer information. */
    var referrerpolicy: String = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /** Security restrictions for the iframe. */
    var sandbox: String = js.native
    
    /** The URL of the content to display. */
    var src: String = js.native
    
    /** Inline HTML to display. */
    var srcdoc: String = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** Removes the zoom controls. */
    var withoutControls: Boolean = js.native
    
    /** Disables interaction when present. */
    var withoutInteraction: Boolean = js.native
    
    /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
    var zoom: Double = js.native
    
    /** Zooms in to the next available zoom level. */
    def zoomIn(): Unit = js.native
    
    /**
      * The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom.
      */
    var zoomLevels: String = js.native
    
    /** Zooms out to the previous available zoom level. */
    def zoomOut(): Unit = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-zoomable-frame`: WaZoomableFrame
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-zoomable-frame`: WaZoomableFrame): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-zoomable-frame")(`wa-zoomable-frame`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-zoomable-frame`(value: WaZoomableFrame): Self = StObject.set(x, "wa-zoomable-frame", value.asInstanceOf[js.Any])
      }
    }
  }
}
