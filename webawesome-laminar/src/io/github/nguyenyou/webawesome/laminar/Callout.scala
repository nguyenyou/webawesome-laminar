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
  * Callouts are used to display important messages inline.
  *
  * [[https://backers.webawesome.com/docs/components/callout WebAwesome  docs]]
  */
object Callout extends WebComponent("wa-callout") {

  @JSImport("@awesome.me/webawesome/dist/components/callout/callout.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Callout.type

  type Ref = WaCalloutComponent & dom.HTMLElement

  // -- Attributes --

  /** The callout's theme variant. Defaults to `brand` if not within another element with a variant. Valid values: "brand", "neutral", "success", "warning", "danger". */
  lazy val variant: HtmlAttr[ThemeVariant] = unionAttr("variant")

  /** The callout's visual appearance. */
  lazy val appearance: HtmlAttr[String] = stringAttr("appearance")

  /** The callout's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

  // -- Slots --

  object slots {
    /** The callout's main content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An icon to show in the callout. Works best with `<wa-icon>`. */
    lazy val icon: Slot = Slot("icon")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The container that wraps the optional icon. */
    lazy val icon: String = "icon"

    /** The container that wraps the callout's main content. */
    lazy val message: String = "message"

  }

  // -- Element type --

  @js.native trait WaCalloutComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The callout's theme variant. Defaults to `brand` if not within another element with a variant. Valid values: "brand", "neutral", "success", "warning", "danger". */
    var variant: ThemeVariant

    /** The callout's visual appearance. */
    var appearance: js.Any

    /** The callout's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

  }
}