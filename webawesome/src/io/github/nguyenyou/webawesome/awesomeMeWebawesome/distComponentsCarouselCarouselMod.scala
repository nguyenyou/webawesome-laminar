package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValueMap
import io.github.nguyenyou.webawesome.std.Map
import io.github.nguyenyou.webawesome.std.PropertyKey
import io.github.nguyenyou.webawesome.std.ScrollBehavior
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCarouselCarouselMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/carousel/carousel", JSImport.Default)
  @js.native
  open class default () extends WaCarousel
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/carousel/carousel", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/carousel/carousel", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaCarousel
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    var activeSlide: Double = js.native
    
    /** When set, the slides will scroll automatically when the user is not interacting with them.  */
    var autoplay: Boolean = js.native
    
    /* private */ var autoplayController: Any = js.native
    
    /** Specifies the amount of time, in milliseconds, between each automatic scroll.  */
    var autoplayInterval: Double = js.native
    
    /* private */ var canScrollNext: Any = js.native
    
    /* private */ var canScrollPrev: Any = js.native
    
    def connectedCallback(): Unit = js.native
    
    /* private */ var createClones: Any = js.native
    
    var currentSlide: Double = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /* private */ var dragStartPosition: Any = js.native
    
    var dragging: Boolean = js.native
    
    /* protected */ def firstUpdated(): Unit = js.native
    
    /* private */ var getCurrentPage: Any = js.native
    
    /* private */ var getPageCount: Any = js.native
    
    /** @internal Gets all carousel items. */
    /* private */ var getSlides: Any = js.native
    
    /**
      * Scrolls the carousel to the slide specified by `index`.
      *
      * @param index - The slide index.
      * @param behavior - The behavior used for scrolling.
      */
    def goToSlide(index: Double): Unit = js.native
    def goToSlide(index: Double, behavior: ScrollBehavior): Unit = js.native
    
    def handleAutoplayChange(): Unit = js.native
    
    /* private */ var handleClick: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleMouseDrag: Any = js.native
    
    /* private */ var handleMouseDragEnd: Any = js.native
    
    /* private */ var handleMouseDragStart: Any = js.native
    
    /* private */ var handleScroll: Any = js.native
    
    /* private */ var handleScrollEnd: Any = js.native
    
    def handleSlideChange(): Unit = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    def initializeSlides(): Unit = js.native
    
    /* private */ var isCarouselItem: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
    var loop: Boolean = js.native
    
    /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
    var mouseDragging: Boolean = js.native
    
    /* private */ var mutationObserver: Any = js.native
    
    /** When set, show the carousel's navigation. */
    var navigation: Boolean = js.native
    
    /**
      * Move the carousel forward by `slides-per-move` slides.
      *
      * @param behavior - The behavior used for scrolling.
      */
    def next(): Unit = js.native
    def next(behavior: ScrollBehavior): Unit = js.native
    
    /** Specifies the orientation in which the carousel will lay out.  */
    var orientation: horizontal | vertical = js.native
    
    /** When set, show the carousel's pagination indicators. */
    var pagination: Boolean = js.native
    
    var paginationContainer: HTMLElement = js.native
    
    /* private */ var pendingSlideChange: Any = js.native
    
    /**
      * Move the carousel backward by `slides-per-move` slides.
      *
      * @param behavior - The behavior used for scrolling.
      */
    def previous(): Unit = js.native
    def previous(behavior: ScrollBehavior): Unit = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    var scrollContainer: HTMLElement = js.native
    
    /* private */ var scrollToSlide: Any = js.native
    
    var scrolling: Boolean = js.native
    
    var slides: Double = js.native
    
    /**
      * Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
      * greater than one. It can't be higher than `slides-per-page`.
      */
    var slidesPerMove: Double = js.native
    
    /** Specifies how many slides should be shown at a given time.  */
    var slidesPerPage: Double = js.native
    
    /** @internal Synchronizes the slides with the IntersectionObserver API. */
    /* private */ var synchronizeSlides: Any = js.native
    
    def updateSlidesSnap(): Unit = js.native
    
    /* protected */ def willUpdate(changedProperties: PropertyValueMap[WaCarousel]): Unit = js.native
    /* protected */ def willUpdate(changedProperties: Map[PropertyKey, Any]): Unit = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-carousel`: WaCarousel
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-carousel`: WaCarousel): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-carousel")(`wa-carousel`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-carousel`(value: WaCarousel): Self = StObject.set(x, "wa-carousel", value.asInstanceOf[js.Any])
      }
    }
  }
}
