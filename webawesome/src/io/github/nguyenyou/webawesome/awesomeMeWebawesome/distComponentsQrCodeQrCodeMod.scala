package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.H
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.L
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.M
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.Q
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsQrCodeQrCodeMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/qr-code/qr-code", JSImport.Default)
  @js.native
  open class default () extends WaQrCode
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/qr-code/qr-code", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/qr-code/qr-code", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaQrCode
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
    var background: String = js.native
    
    var canvas: HTMLElement = js.native
    
    /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
    var errorCorrection: L | M | Q | H = js.native
    
    /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
    var fill: String = js.native
    
    def firstUpdated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    def generate(): Unit = js.native
    
    /**
      * Whether or not the qr-code generated.
      */
    /* private */ var generated: Any = js.native
    
    /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
    var label: String = js.native
    
    /** The edge radius of each module. Must be between 0 and 0.5. */
    var radius: Double = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** The size of the QR code, in pixels. */
    var size: Double = js.native
    
    /** The QR code's value. */
    var value: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-qr-code`: WaQrCode
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-qr-code`: WaQrCode): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-qr-code")(`wa-qr-code`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-qr-code`(value: WaQrCode): Self = StObject.set(x, "wa-qr-code", value.asInstanceOf[js.Any])
      }
    }
  }
}
