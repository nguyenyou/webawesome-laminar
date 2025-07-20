package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.Wapopup
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`bottom-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`bottom-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`left-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`left-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`right-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`right-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`top-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`top-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.right
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalajs.dom.Element
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTooltipTooltipMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tooltip/tooltip", JSImport.Default)
  @js.native
  open class default () extends WaTooltip
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tooltip/tooltip", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tooltip/tooltip", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/tooltip/tooltip", "default.dependencies")
    @js.native
    def dependencies: Wapopup = js.native
    inline def dependencies_=(x: Wapopup): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("dependencies")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTooltip
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var anchor: Null | Element = js.native
    
    var body: HTMLElement = js.native
    
    def connectedCallback(): Unit = js.native
    
    var defaultSlot: HTMLSlotElement = js.native
    
    /** Disables the tooltip so it won't show when triggered. */
    var disabled: Boolean = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /** The distance in pixels from which to offset the tooltip away from its target. */
    var distance: Double = js.native
    
    /* private */ var eventController: Any = js.native
    
    def firstUpdated(): Unit = js.native
    
    var `for`: String | Null = js.native
    
    /* private */ var handleBlur: Any = js.native
    
    /* private */ var handleClick: Any = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    /* private */ var handleFocus: Any = js.native
    
    def handleForChange(): Unit = js.native
    
    /* private */ var handleMouseOut: Any = js.native
    
    /* private */ var handleMouseOver: Any = js.native
    
    def handleOpenChange(): js.Promise[Unit] = js.native
    
    def handleOptionsChange(): js.Promise[Unit] = js.native
    
    /* private */ var hasTrigger: Any = js.native
    
    /** Hides the tooltip */
    def hide(): js.Promise[Unit] = js.native
    
    /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
    var hideDelay: Double = js.native
    
    /* private */ var hoverTimeout: Any = js.native
    
    /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
    var open: Boolean = js.native
    
    /**
      * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
      * inside of the viewport.
      */
    var placement: top | `top-start` | `top-end` | right | `right-start` | `right-end` | bottom | `bottom-start` | `bottom-end` | left | `left-start` | `left-end` = js.native
    
    var popup: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsPopupPopupMod.default = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** Shows the tooltip. */
    def show(): js.Promise[Unit] = js.native
    
    /** The amount of time to wait before showing the tooltip when the user mouses in. */
    var showDelay: Double = js.native
    
    /** The distance in pixels from which to offset the tooltip along its target. */
    var skidding: Double = js.native
    
    /**
      * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
      * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
      * programmatically.
      */
    var trigger: String = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tooltip`: WaTooltip
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tooltip`: WaTooltip): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tooltip")(`wa-tooltip`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tooltip`(value: WaTooltip): Self = StObject.set(x, "wa-tooltip", value.asInstanceOf[js.Any])
      }
    }
  }
}
