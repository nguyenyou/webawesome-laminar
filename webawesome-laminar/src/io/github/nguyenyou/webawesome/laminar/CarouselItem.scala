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
  * A carousel item represent a slide within a carousel.
  *
  */
object CarouselItem extends WebComponent("wa-carousel-item") {

  @JSImport("@awesome.me/webawesome/dist/components/carousel-item/carousel-item.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = CarouselItem.type

  type Ref = WaCarouselItemComponent & dom.HTMLElement

  // -- Slots --

  object slots {
    /** The carousel item's content.. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The slide's aspect ratio. Inherited from the carousel by default. */
    lazy val aspectRatio: String = "--aspect-ratio"

  }

  // -- Element type --

  @js.native trait WaCarouselItemComponent extends js.Object {
    this: dom.HTMLElement =>

  }
}