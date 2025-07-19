package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/**
  * Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
  *
  */
object Carousel extends WebComponent("wa-carousel") {

  @JSImport("@awesome.me/webawesome/dist/components/carousel/carousel.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Carousel.type

  type Ref = WaCarouselComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the active slide changes. */
  lazy val onSlideChange: EventProp[dom.Event] = eventProp("wa-slide-change")

  // -- Attributes --

  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  lazy val loop: HtmlAttr[Boolean] = boolAttr("loop")

  lazy val slides: HtmlAttr[Double] = doubleAttr("slides")

  lazy val currentSlide: HtmlAttr[Double] = doubleAttr("currentSlide")

  /** When set, show the carousel's navigation. */
  lazy val navigation: HtmlAttr[Boolean] = boolAttr("navigation")

  /** When set, show the carousel's pagination indicators. */
  lazy val pagination: HtmlAttr[Boolean] = boolAttr("pagination")

  /** When set, the slides will scroll automatically when the user is not interacting with them. */
  lazy val autoplay: HtmlAttr[Boolean] = boolAttr("autoplay")

  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  lazy val autoplayInterval: HtmlAttr[Double] = doubleAttr("autoplay-interval")

  /** Specifies how many slides should be shown at a given time. */
  lazy val slidesPerPage: HtmlAttr[Double] = doubleAttr("slides-per-page")

  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
  greater than one. It can't be higher than `slides-per-page`. */
  lazy val slidesPerMove: HtmlAttr[Double] = doubleAttr("slides-per-move")

  /** Specifies the orientation in which the carousel will lay out. Valid values: "horizontal", "vertical". */
  lazy val orientation: HtmlAttr[String] = stringAttr("orientation")

  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  lazy val mouseDragging: HtmlAttr[Boolean] = boolAttr("mouse-dragging")

  // -- Slots --

  object slots {
    /** The carousel's main content, one or more `<wa-carousel-item>` elements. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** Optional next icon to use instead of the default. Works best with `<wa-icon>`. */
    lazy val nextIcon: Slot = Slot("next-icon")

    /** Optional previous icon to use instead of the default. Works best with `<wa-icon>`. */
    lazy val previousIcon: Slot = Slot("previous-icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The aspect ratio of each slide. Default: 16/9 */
    lazy val aspectRatio: String = "--aspect-ratio"

    /** The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. */
    lazy val scrollHint: String = "--scroll-hint"

    /** The space between each slide. Default: var(--wa-space-m) */
    lazy val slideGap: String = "--slide-gap"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The carousel's internal wrapper. */
    lazy val base: String = "base"

    /** The scroll container that wraps the slides. */
    lazy val scrollContainer: String = "scroll-container"

    /** The pagination indicators wrapper. */
    lazy val pagination: String = "pagination"

    /** The pagination indicator. */
    lazy val paginationItem: String = "pagination-item"

    /** Applied when the item is active. */
    lazy val paginationItemActive: String = "pagination-item-active"

    /** The navigation wrapper. */
    lazy val navigation: String = "navigation"

    /** The navigation button. */
    lazy val navigationButton: String = "navigation-button"

    /** Applied to the previous button. */
    lazy val navigationButtonPrevious: String = "navigation-button-previous"

    /** Applied to the next button. */
    lazy val navigationButtonNext: String = "navigation-button-next"

  }

  // -- Element type --

  @js.native trait WaCarouselComponent extends js.Object {
    this: dom.HTMLElement =>

    /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
    var loop: Boolean

    var slides: Double

    var currentSlide: Double

    /** When set, show the carousel's navigation. */
    var navigation: Boolean

    /** When set, show the carousel's pagination indicators. */
    var pagination: Boolean

    /** When set, the slides will scroll automatically when the user is not interacting with them. */
    var autoplay: Boolean

    /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
    var autoplayInterval: Double

    /** Specifies how many slides should be shown at a given time. */
    var slidesPerPage: Double

    /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
    greater than one. It can't be higher than `slides-per-page`. */
    var slidesPerMove: Double

    /** Specifies the orientation in which the carousel will lay out. Valid values: "horizontal", "vertical". */
    var orientation: "horizontal" | "vertical"

    /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
    var mouseDragging: Boolean

    def initializeSlides(): js.Any = js.native

    def handleSlideChange(): js.Any = js.native

    def updateSlidesSnap(): js.Any = js.native

    def handleAutoplayChange(): js.Any = js.native

    /** Move the carousel backward by `slides-per-move` slides. */
    def previous(behavior: js.Any): js.Any = js.native

    /** Move the carousel forward by `slides-per-move` slides. */
    def next(behavior: js.Any): js.Any = js.native

    /** Scrolls the carousel to the slide specified by `index`. */
    def goToSlide(index: js.Any, behavior: js.Any): js.Any = js.native

  }
}