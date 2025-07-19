package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Badges are used to draw attention and display statuses or counts.
  *
  * [[https://backers.webawesome.com/docs/components/badge WebAwesome  docs]]
  */
object Badge extends WebComponent("wa-badge") {

  @JSImport("@awesome.me/webawesome/dist/components/badge/badge.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Badge.type

  type Ref = WaBadgeComponent & dom.HTMLElement

  // -- Attributes --

  /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. Valid values: "brand", "neutral", "success", "warning", "danger". */
  lazy val variant: HtmlAttr[ThemeVariant] = unionAttr("variant")

  /** The badge's visual appearance. Valid values: "accent", "filled", "outlined". */
  lazy val appearance: HtmlAttr[BadgeExtendedAppearance] = unionAttr("appearance")

  /** Draws a pill-style badge with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** Makes the badge pulsate to draw attention. Valid values: "none", "pulse". */
  lazy val attention: HtmlAttr[BadgeAttention] = unionAttr("attention")

  // -- Slots --

  object slots {
    /** The badge's content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaBadgeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. Valid values: "brand", "neutral", "success", "warning", "danger". */
    var variant: ThemeVariant

    /** The badge's visual appearance. Valid values: "accent", "filled", "outlined". */
    var appearance: BadgeExtendedAppearance

    /** Draws a pill-style badge with rounded edges. */
    var pill: Boolean

    /** Makes the badge pulsate to draw attention. Valid values: "none", "pulse". */
    var attention: BadgeAttention

  }
}