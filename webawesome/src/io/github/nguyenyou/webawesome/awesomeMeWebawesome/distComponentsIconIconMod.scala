package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeBooleans.`false`
import io.github.nguyenyou.webawesome.litHtml.mod.HTMLTemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.SVGElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsIconIconMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/icon/icon", JSImport.Default)
  @js.native
  open class default () extends WaIcon
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/icon/icon", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/icon/icon", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaIcon
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    def connectedCallback(): Unit = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /**
      * The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
      * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
      * A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
      * one.
      */
    var family: String = js.native
    
    def firstUpdated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** Draws the icon in a fixed-width both. */
    var fixedWidth: `false` = js.native
    
    /* private */ var getIconSource: Any = js.native
    
    def handleLabelChange(): Unit = js.native
    
    /**
      * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
      * ignored by assistive devices.
      */
    var label: String = js.native
    
    /** The name of a registered custom icon library. */
    var library: String = js.native
    
    /** The name of the icon to draw. Available names depend on the icon library being used. */
    var name: js.UndefOr[String] = js.native
    
    def render(): HTMLTemplateResult | SVGElement | Null = js.native
    
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    /* private */ var resolveIcon: Any = js.native
    
    def setIcon(): js.Promise[Unit] = js.native
    
    /**
      * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
      * can result in XSS attacks.
      */
    var src: js.UndefOr[String] = js.native
    
    /* private */ var svg: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /**
      * The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
      * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
      * may or may not use this property.
      */
    var variant: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-icon`: WaIcon
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-icon`: WaIcon): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-icon")(`wa-icon`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-icon`(value: WaIcon): Self = StObject.set(x, "wa-icon", value.asInstanceOf[js.Any])
      }
    }
  }
}
