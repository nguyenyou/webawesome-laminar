package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.desktop
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.mobile
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import io.github.nguyenyou.webawesome.std.ResizeObserver
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsPagePageMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/page/page", JSImport.Default)
  @js.native
  open class default () extends WaPage
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/page/page", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/page/page", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaPage
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var banner: HTMLElement = js.native
    
    /* private */ var bannerResizeObserver: Any = js.native
    
    def connectedCallback(): Unit = js.native
    
    /**
      * Determines whether or not to hide the default hamburger button.
      * This will automatically flip to "true" if you add an element with `data-toggle-nav` anywhere in the element light DOM.
      * Generally this will be set for you and you don't need to do anything, unless you're using SSR, in which case you should set this manually for initial page loads.
      */
    var disableNavigationToggle: Boolean = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    def firstUpdated(): Unit = js.native
    
    var footer: HTMLElement = js.native
    
    /* private */ var footerResizeObserver: Any = js.native
    
    /* private */ var handleNavigationToggle: Any = js.native
    
    var header: HTMLElement = js.native
    
    /* private */ var headerResizeObserver: Any = js.native
    
    /**
      * Hides the mobile navigation drawer
      */
    def hideNavigation(): Unit = js.native
    
    /**
      * At what page width to hide the "navigation" slot and collapse into a hamburger button.
      * Accepts both numbers (interpreted as px) and CSS lengths (e.g. `50em`), which are resolved based on the root element.
      */
    var mobileBreakpoint: String = js.native
    
    /**
      * Whether or not the navigation drawer is open. Note, the navigation drawer is only "open" on mobile views.
      */
    var navOpen: Boolean = js.native
    
    var navigationDrawer: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsDrawerDrawerMod.default = js.native
    
    /**
      * Where to place the navigation when in the mobile viewport.
      */
    var navigationPlacement: start | end = js.native
    
    var navigationToggleSlot: HTMLSlotElement = js.native
    
    var pageResizeObserver: ResizeObserver = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /**
      * Shows the mobile navigation drawer
      */
    def showNavigation(): Unit = js.native
    
    /* private */ var slotResizeObserver: Any = js.native
    
    var subheader: HTMLElement = js.native
    
    /* private */ var subheaderResizeObserver: Any = js.native
    
    /**
      * Toggles the mobile navigation drawer
      */
    def toggleNavigation(): Unit = js.native
    
    /**
      * The view is a reflection of the "mobileBreakpoint", when the page is larger than the `mobile-breakpoint` (768px by
      * default), it is considered to be a "desktop" view. The view is merely a way to distinguish when to show/hide the
      * navigation. You can use additional media queries to make other adjustments to content as necessary.
      * The default is "desktop" because the "mobile navigation drawer" isn't accessible via SSR due to drawer requiring JS.
      */
    var view: mobile | desktop = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-page`: WaPage
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-page`: WaPage): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-page")(`wa-page`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-page`(value: WaPage): Self = StObject.set(x, "wa-page", value.asInstanceOf[js.Any])
      }
    }
  }
}
