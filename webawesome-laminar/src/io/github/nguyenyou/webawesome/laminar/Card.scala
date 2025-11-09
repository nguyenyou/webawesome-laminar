package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Cards can be used to group related subjects in a container.
  *
  * [[https://webawesome.com/docs/components/card WebAwesome docs]]
  */
object Card extends WebComponent("wa-card") {

  @JSImport("@awesome.me/webawesome/dist/components/card/card.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Card.type

  type Ref = WaCardComponent & dom.HTMLElement

  // -- Attributes --

  /** The card's visual appearance. Valid values: "accent", "filled", "outlined", "plain". */
  lazy val appearance: CommonKeys.CardExtendedAppearance.type = CommonKeys.CardExtendedAppearance

  /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
  lazy val withHeader: HtmlAttr[Boolean] = boolAttr("with-header")

  /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
  lazy val withMedia: HtmlAttr[Boolean] = boolAttr("with-media")

  /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
  lazy val withFooter: HtmlAttr[Boolean] = boolAttr("with-footer")

  /** Renders the card's orientation * Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  // -- Slots --

  object slots {

    /** The card's main content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An optional header for the card. */
    lazy val header: Slot = Slot("header")

    /** An optional footer for the card. */
    lazy val footer: Slot = Slot("footer")

    /** An optional media section to render at the start of the card. */
    lazy val media: Slot = Slot("media")

    /** An optional actions section to render at the end for the horizontal card. */
    lazy val actions: Slot = Slot("actions")

    /** An optional actions section to render in the header of the vertical card. */
    lazy val headerActions: Slot = Slot("header-actions")

    /** An optional actions section to render in the footer of the vertical card. */
    lazy val footerActions: Slot = Slot("footer-actions")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The amount of space around and between sections of the card. Expects a single value. Default: var(--wa-space-l)
      */
    lazy val spacing: String = "--spacing"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The container that wraps the card's media. */
    lazy val media: String = "media"

    /** The container that wraps the card's header. */
    lazy val header: String = "header"

    /** The container that wraps the card's main content. */
    lazy val body: String = "body"

    /** The container that wraps the card's footer. */
    lazy val footer: String = "footer"

  }

  // -- Element type --

  @js.native
  trait WaCardComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The card's visual appearance. Valid values: "accent", "filled", "outlined", "plain". */
    var appearance: CardExtendedAppearance

    /** Renders the card with a header. Only needed for SSR, otherwise is automatically added. */
    var withHeader: Boolean

    /** Renders the card with an image. Only needed for SSR, otherwise is automatically added. */
    var withMedia: Boolean

    /** Renders the card with a footer. Only needed for SSR, otherwise is automatically added. */
    var withFooter: Boolean

    /** Renders the card's orientation * Valid values: "horizontal", "vertical". */
    var orientation: Orientation

  }
}
