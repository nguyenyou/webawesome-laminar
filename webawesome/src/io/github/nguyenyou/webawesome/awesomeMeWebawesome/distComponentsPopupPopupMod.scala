package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`best-fit`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`bottom-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`bottom-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`left-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`left-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`right-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`right-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`top-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`top-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.anchor
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.both
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.center
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.height
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.initial
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.right
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.scroll
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.viewport
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.width
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.DOMRect
import org.scalajs.dom.Element
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsPopupPopupMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/popup/popup", JSImport.Default)
  @js.native
  open class default () extends WaPopup
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/popup/popup", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/popup/popup", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  trait VirtualElement extends StObject {
    
    var contextElement: js.UndefOr[Element] = js.undefined
    
    def getBoundingClientRect(): DOMRect
  }
  object VirtualElement {
    
    inline def apply(getBoundingClientRect: () => DOMRect): VirtualElement = {
      val __obj = js.Dynamic.literal(getBoundingClientRect = js.Any.fromFunction0(getBoundingClientRect))
      __obj.asInstanceOf[VirtualElement]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: VirtualElement] (val x: Self) extends AnyVal {
      
      inline def setContextElement(value: Element): Self = StObject.set(x, "contextElement", value.asInstanceOf[js.Any])
      
      inline def setContextElementUndefined: Self = StObject.set(x, "contextElement", js.undefined)
      
      inline def setGetBoundingClientRect(value: () => DOMRect): Self = StObject.set(x, "getBoundingClientRect", js.Any.fromFunction0(value))
    }
  }
  
  @js.native
  trait WaPopup
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /**
      * Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
      * down and the popup will be hidden.
      */
    var active: Boolean = js.native
    
    /**
      * The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
      * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
      * `anchor` slot instead.
      */
    var anchor: Element | String | VirtualElement = js.native
    
    /* private */ var anchorEl: Any = js.native
    
    /**
      * Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
      * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
      * `::part(arrow)` in your stylesheet.
      */
    var arrow: Boolean = js.native
    
    /* private */ var arrowEl: Any = js.native
    
    /**
      * The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
      * this will prevent it from overflowing the corners.
      */
    var arrowPadding: Double = js.native
    
    /**
      * The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
      * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
      * align the arrow to the start, end, or center of the popover instead.
      */
    var arrowPlacement: start | end | center | anchor = js.native
    
    /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
    var autoSize: horizontal | vertical | both = js.native
    
    /**
      * The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
      * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
      * change the boundary by passing a reference to one or more elements to this property.
      */
    var autoSizeBoundary: Element | js.Array[Element] = js.native
    
    /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
    var autoSizePadding: Double = js.native
    
    /** The bounding box to use for flipping, shifting, and auto-sizing. */
    var boundary: viewport | scroll = js.native
    
    /* private */ var cleanup: Any = js.native
    
    def connectedCallback(): js.Promise[Unit] = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /** The distance in pixels from which to offset the panel away from its anchor. */
    var distance: Double = js.native
    
    /**
      * When set, placement of the popup will flip to the opposite site to keep it in view. You can use
      * `flipFallbackPlacements` to further configure how the fallback placement is determined.
      */
    var flip: Boolean = js.native
    
    /**
      * The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
      * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
      * change the boundary by passing a reference to one or more elements to this property.
      */
    var flipBoundary: Element | js.Array[Element] = js.native
    
    /**
      * If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
      * string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
      * fallback strategy will be used instead.
      * */
    var flipFallbackPlacements: String = js.native
    
    /**
      * When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
      * the popup should be positioned using the best available fit based on available space or as it was initially
      * preferred.
      */
    var flipFallbackStrategy: `best-fit` | initial = js.native
    
    /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
    var flipPadding: Double = js.native
    
    /* private */ var handleAnchorChange: Any = js.native
    
    /**
      * When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
      * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
      * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
      * active.
      */
    var hoverBridge: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    /**
      * The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
      * panel inside of the viewport.
      */
    var placement: top | `top-start` | `top-end` | bottom | `bottom-start` | `bottom-end` | right | `right-start` | `right-end` | left | `left-start` | `left-end` = js.native
    
    /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
    var popup: HTMLElement = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** Forces the popup to recalculate and reposition itself. */
    def reposition(): Unit = js.native
    
    /** Moves the popup along the axis to keep it in view when clipped. */
    var shift: Boolean = js.native
    
    /**
      * The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
      * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
      * change the boundary by passing a reference to one or more elements to this property.
      */
    var shiftBoundary: Element | js.Array[Element] = js.native
    
    /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
    var shiftPadding: Double = js.native
    
    /** The distance in pixels from which to offset the panel along its anchor. */
    var skidding: Double = js.native
    
    /* private */ var start: Any = js.native
    
    /* private */ var stop: Any = js.native
    
    /** Syncs the popup's width or height to that of the anchor element. */
    var sync: width | height | both = js.native
    
    /* private */ var updateHoverBridge: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): js.Promise[Unit] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-popup`: WaPopup
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-popup`: WaPopup): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-popup")(`wa-popup`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-popup`(value: WaPopup): Self = StObject.set(x, "wa-popup", value.asInstanceOf[js.Any])
      }
    }
  }
}
