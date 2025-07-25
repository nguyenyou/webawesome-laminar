package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Badges are used to draw attention and display statuses or counts.
  *
  * [[https://webawesome.com/docs/components/badge WebAwesome docs]]
  */
object Badge extends WebComponent("wa-badge") {

  @JSImport("@awesome.me/webawesome/dist/components/badge/badge.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Badge.type

  type Ref = WaBadgeComponent & dom.HTMLElement

  // -- Attributes --

  /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. Valid values:
    * "brand", "neutral", "success", "warning", "danger".
    */
  lazy val variant: CommonKeys.ThemeVariant.type = CommonKeys.ThemeVariant

  /** The badge's visual appearance. Valid values: "accent", "filled", "outlined". */
  lazy val appearance: CommonKeys.BadgeExtendedAppearance.type = CommonKeys.BadgeExtendedAppearance

  /** Draws a pill-style badge with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** Adds an animation to draw attention to the badge. Valid values: "none", "pulse", "bounce". */
  lazy val attention: CommonKeys.BadgeAttention.type = CommonKeys.BadgeAttention

  // -- Slots --

  object slots {

    /** The badge's content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The color of the badge's pulse effect when using `attention="pulse"`. */
    lazy val pulseColor: String = "--pulse-color"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native
  trait WaBadgeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. Valid values:
      * "brand", "neutral", "success", "warning", "danger".
      */
    var variant: ThemeVariant

    /** The badge's visual appearance. Valid values: "accent", "filled", "outlined". */
    var appearance: BadgeExtendedAppearance

    /** Draws a pill-style badge with rounded edges. */
    var pill: Boolean

    /** Adds an animation to draw attention to the badge. Valid values: "none", "pulse", "bounce". */
    var attention: BadgeAttention

  }
}
