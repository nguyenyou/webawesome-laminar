package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsSplitPanelSplitPanelMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/split-panel/split-panel", JSImport.Default)
  @js.native
  open class default () extends WaSplitPanel
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/split-panel/split-panel", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/split-panel/split-panel", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaSplitPanel
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ var cachedPositionInPixels: Any = js.native
    
    override def connectedCallback(): Unit = js.native
    
    /* private */ var detectSize: Any = js.native
    
    /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
    var disabled: Boolean = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    var divider: HTMLElement = js.native
    
    /* private */ var handleDrag: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    def handlePositionChange(): Unit = js.native
    
    def handlePositionInPixelsChange(): Unit = js.native
    
    /* private */ var handleResize: Any = js.native
    
    def handleVerticalChange(): Unit = js.native
    
    /* private */ var isCollapsed: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Sets the split panel's orientation. */
    var orientation: horizontal | vertical = js.native
    
    /* private */ var percentageToPixels: Any = js.native
    
    /* private */ var pixelsToPercentage: Any = js.native
    
    /**
      * The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
      * container's initial size.
      */
    var position: Double = js.native
    
    /* private */ var positionBeforeCollapsing: Any = js.native
    
    /** The current position of the divider from the primary panel's edge in pixels. */
    var positionInPixels: Double = js.native
    
    /**
      * If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
      * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
      * host element is resized.
      */
    var primary: js.UndefOr[start | end] = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var resizeObserver: Any = js.native
    
    /* private */ var size: Any = js.native
    
    /**
      * One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
      * `"100px 50%"`.
      */
    var snap: js.UndefOr[String] = js.native
    
    /** How close the divider must be to a snap point until snapping occurs. */
    var snapThreshold: Double = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-split-panel`: WaSplitPanel
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-split-panel`: WaSplitPanel): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-split-panel")(`wa-split-panel`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-split-panel`(value: WaSplitPanel): Self = StObject.set(x, "wa-split-panel", value.asInstanceOf[js.Any])
      }
    }
  }
}
