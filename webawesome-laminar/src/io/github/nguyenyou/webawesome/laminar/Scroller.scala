package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Scrollers create an accessible container while providing visual cues that help users identify and navigate through
  * content that scrolls.
  *
  * [[https://webawesome.com/docs/components/scroller WebAwesome docs]]
  */
object Scroller extends WebComponent("wa-scroller") {

  @JSImport("@awesome.me/webawesome/dist/components/scroller/scroller.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Scroller.type

  type Ref = WaScrollerComponent & dom.HTMLElement

  // -- Attributes --

  /** The scroller's orientation. Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  /** Removes the visible scrollbar. */
  lazy val withoutScrollbar: HtmlAttr[Boolean] = boolAttr("without-scrollbar")

  /** Removes the shadows. */
  lazy val withoutShadow: HtmlAttr[Boolean] = boolAttr("without-shadow")

  // -- Slots --

  object slots {

    /** The content to show inside the scroller. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The base color of the shadow. Default: var(--wa-color-surface-default) */
    lazy val shadowColor: String = "--shadow-color"

    /** The size of the shadow. Default: 2rem */
    lazy val shadowSize: String = "--shadow-size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The container that wraps the slotted content. */
    lazy val content: String = "content"

  }

  // -- Element type --

  @js.native
  trait WaScrollerComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The scroller's orientation. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** Removes the visible scrollbar. */
    var withoutScrollbar: Boolean

    /** Removes the shadows. */
    var withoutShadow: Boolean

  }
}
