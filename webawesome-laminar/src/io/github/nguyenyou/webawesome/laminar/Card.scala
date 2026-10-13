package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Cards group related content and actions inside a bordered container. Use them to present products, articles, user
  * profiles, or any self-contained unit of information.
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

  /** The card's visual appearance. Valid values: "accent", "filled", "outlined", "filled-outlined", "plain". */
  lazy val appearance: CommonKeys.ExtendedAppearance.type = CommonKeys.ExtendedAppearance

  /** Only required for SSR. Set to `true` if you're slotting in a `header` element so the server-rendered markup
    * includes the header before the component hydrates on the client.
    */
  lazy val withHeader: HtmlAttr[Boolean] = boolAttr("with-header")

  /** Only required for SSR. Set to `true` if you're slotting in a `media` element so the server-rendered markup
    * includes the media before the component hydrates on the client.
    */
  lazy val withMedia: HtmlAttr[Boolean] = boolAttr("with-media")

  /** Only required for SSR. Set to `true` if you're slotting in a `footer` element so the server-rendered markup
    * includes the footer before the component hydrates on the client.
    */
  lazy val withFooter: HtmlAttr[Boolean] = boolAttr("with-footer")

  /** Only required for SSR. Set to `true` if you're slotting in a `header-actions` element so the server-rendered
    * markup includes the media before the component hydrates on the client.
    */
  lazy val withHeaderActions: HtmlAttr[Boolean] = boolAttr("with-header-actions")

  /** Only required for SSR. Set to `true` if you're slotting in a `footer-actions` element so the server-rendered
    * markup includes the media before the component hydrates on the client.
    */
  lazy val withFooterActions: HtmlAttr[Boolean] = boolAttr("with-footer-actions")

  /** Renders the card's orientation * Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

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

    /** The container that wraps the card's actions. */
    lazy val actions: String = "actions"

  }

  // -- Element type --

  @js.native
  trait WaCardComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The card's visual appearance. Valid values: "accent", "filled", "outlined", "filled-outlined", "plain". */
    var appearance: ExtendedAppearance

    /** Only required for SSR. Set to `true` if you're slotting in a `header` element so the server-rendered markup
      * includes the header before the component hydrates on the client.
      */
    var withHeader: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `media` element so the server-rendered markup
      * includes the media before the component hydrates on the client.
      */
    var withMedia: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `footer` element so the server-rendered markup
      * includes the footer before the component hydrates on the client.
      */
    var withFooter: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `header-actions` element so the server-rendered
      * markup includes the media before the component hydrates on the client.
      */
    var withHeaderActions: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `footer-actions` element so the server-rendered
      * markup includes the media before the component hydrates on the client.
      */
    var withFooterActions: Boolean

    /** Renders the card's orientation * Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    var dir: String

    var lang: String

    var didSSR: String

  }
}
