package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Breadcrumb Items are used inside breadcrumbs to represent different links.
  *
  * [[https://webawesome.com/docs/components/breadcrumb-item WebAwesome docs]]
  */
object BreadcrumbItem extends WebComponent("wa-breadcrumb-item") {

  @JSImport("@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = BreadcrumbItem.type

  type Ref = WaBreadcrumbItemComponent & dom.HTMLElement

  // -- Attributes --

  /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
    * internally. When unset, a button will be rendered instead.
    */
  lazy val href: HtmlAttr[String] = stringAttr("href")

  /** Tells the browser where to open the link. Only used when `href` is set. */
  lazy val target: HtmlAttr[String] = stringAttr("target")

  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  lazy val rel: HtmlAttr[String] = stringAttr("rel")

  // -- Slots --

  object slots {

    /** The breadcrumb item's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An element, such as `<wa-icon>`, placed before the label. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed after the label. */
    lazy val end: Slot = Slot("end")

    /** The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to
      * change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.
      */
    lazy val separator: Slot = Slot("separator")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The breadcrumb item's label. */
    lazy val label: String = "label"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

    /** The container that wraps the separator. */
    lazy val separator: String = "separator"

  }

  // -- Element type --

  @js.native
  trait WaBreadcrumbItemComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
      * internally. When unset, a button will be rendered instead.
      */
    var href: String

    /** Tells the browser where to open the link. Only used when `href` is set. */
    var target: js.Any

    /** The `rel` attribute to use on the link. Only used when `href` is set. */
    var rel: String

    def hrefChanged(): js.Any = js.native

    def handleSlotChange(): js.Any = js.native

  }
}
