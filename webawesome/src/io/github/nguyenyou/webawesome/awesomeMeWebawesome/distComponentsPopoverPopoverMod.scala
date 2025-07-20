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
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.HTMLDialogElement
import org.scalajs.dom.Element
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsPopoverPopoverMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/popover/popover", JSImport.Default)
  @js.native
  open class default () extends WaPopover
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/popover/popover", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/popover/popover", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/popover/popover", "default.dependencies")
    @js.native
    def dependencies: Wapopup = js.native
    inline def dependencies_=(x: Wapopup): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("dependencies")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaPopover
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var anchor: Null | Element = js.native
    
    var body: HTMLElement = js.native
    
    override def connectedCallback(): Unit = js.native
    
    var dialog: HTMLDialogElement = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    /** The distance in pixels from which to offset the popover away from its target. */
    var distance: Double = js.native
    
    /* private */ var eventController: Any = js.native
    
    def firstUpdated(): Unit = js.native
    
    /** The ID of the popover's anchor element. This must be an interactive/focusable element such as a button. */
    var `for`: String | Null = js.native
    
    /* private */ var handleAnchorClick: Any = js.native
    
    /* private */ var handleBodyClick: Any = js.native
    
    /* private */ var handleDocumentClick: Any = js.native
    
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    def handleForChange(): Unit = js.native
    
    def handleOpenChange(): js.Promise[Unit] = js.native
    
    def handleOptionsChange(): js.Promise[Unit] = js.native
    
    /** Hides the popover. */
    def hide(): js.Promise[Unit] = js.native
    
    /** Shows or hides the popover. */
    var open: Boolean = js.native
    
    /**
      * The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
      * inside of the viewport.
      */
    var placement: top | `top-start` | `top-end` | right | `right-start` | `right-end` | bottom | `bottom-start` | `bottom-end` | left | `left-start` | `left-end` = js.native
    
    var popup: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsPopupPopupMod.default = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /** Shows the popover. */
    def show(): js.Promise[Unit] = js.native
    
    /** The distance in pixels from which to offset the popover along its target. */
    var skidding: Double = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-popover`: WaPopover
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-popover`: WaPopover): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-popover")(`wa-popover`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-popover`(value: WaPopover): Self = StObject.set(x, "wa-popover", value.asInstanceOf[js.Any])
      }
    }
  }
}
