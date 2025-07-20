package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.auto
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.manual
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTabGroupTabGroupMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tab-group/tab-group", JSImport.Default)
  @js.native
  open class default () extends WaTabGroup
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tab-group/tab-group", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tab-group/tab-group", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTabGroup
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /**
      * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
      * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
      */
    var activation: auto | manual = js.native
    
    /** Sets the active tab. */
    var active: String = js.native
    
    /* private */ var activeTab: Any = js.native
    
    var body: HTMLSlotElement = js.native
    
    def connectedCallback(): Unit = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /* private */ var findNextFocusableTab: Any = js.native
    
    /* private */ var focusableTabs: Any = js.native
    
    /* private */ var getActiveTab: Any = js.native
    
    /* private */ var getAllPanels: Any = js.native
    
    /* private */ var getAllTabs: Any = js.native
    
    /* private */ var handleClick: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleScrollToEnd: Any = js.native
    
    /* private */ var handleScrollToStart: Any = js.native
    
    /* private */ var hasScrollControls: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /* private */ var mutationObserver: Any = js.native
    
    var nav: HTMLElement = js.native
    
    /* private */ var panels: Any = js.native
    
    /** The placement of the tabs. */
    var placement: top | bottom | start | end = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var resizeObserver: Any = js.native
    
    /* private */ var setActiveTab: Any = js.native
    
    /* private */ var setAriaLabels: Any = js.native
    
    /* private */ var syncTabsAndPanels: Any = js.native
    
    var tabGroup: HTMLElement = js.native
    
    /* private */ var tabs: Any = js.native
    
    def updateActiveTab(): Unit = js.native
    
    def updateScrollControls(): Unit = js.native
    
    /** Disables the scroll arrows that appear when tabs overflow. */
    var withoutScrollControls: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tab-group`: WaTabGroup
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tab-group`: WaTabGroup): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tab-group")(`wa-tab-group`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tab-group`(value: WaTabGroup): Self = StObject.set(x, "wa-tab-group", value.asInstanceOf[js.Any])
      }
    }
  }
}
