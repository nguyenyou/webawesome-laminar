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
  * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
  *
  * [[https://backers.webawesome.com/docs/components/breadcrumb WebAwesome  docs]]
  */
object Breadcrumb extends WebComponent("wa-breadcrumb") {

  @JSImport("@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Breadcrumb.type

  type Ref = WaBreadcrumbComponent & dom.HTMLElement

  // -- Attributes --

  /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
  screen readers and other assistive devices to provide more context for users. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  // -- Slots --

  object slots {
    /** One or more breadcrumb items to display. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The separator to use between breadcrumb items. Works best with `<wa-icon>`. */
    lazy val separator: Slot = Slot("separator")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaBreadcrumbComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
    screen readers and other assistive devices to provide more context for users. */
    var label: String

  }
}