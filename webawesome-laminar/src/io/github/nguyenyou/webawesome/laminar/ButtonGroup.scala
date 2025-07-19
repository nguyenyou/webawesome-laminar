package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import com.raquo.laminar.tags.CustomHtmlTag
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Button groups can be used to group related buttons into sections.
  *
  * [[https://backers.webawesome.com/docs/components/button-group WebAwesome  docs]]
  */
object ButtonGroup extends WebComponent("wa-button-group") {

  @JSImport("@awesome.me/webawesome/dist/components/button-group/button-group.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = ButtonGroup.type

  type Ref = WaButtonGroupComponent & dom.HTMLElement

  // -- Attributes --

  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
  devices when interacting with the control and is strongly recommended. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The button group's orientation. Valid values: "horizontal", "vertical". */
  lazy val orientation: HtmlAttr[Orientation] = unionAttr("orientation")

  /** The component's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

  /** The button group's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values: "neutral", "brand", "success", "warning", "danger". */
  lazy val variant: HtmlAttr[ThemeVariant] = unionAttr("variant")

  // -- Slots --

  object slots {
    /** One or more `<wa-button>` elements to display in the button group. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaButtonGroupComponent extends js.Object {
    this: dom.HTMLElement =>

    /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
    devices when interacting with the control and is strongly recommended. */
    var label: String

    /** The button group's orientation. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** The component's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** The button group's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values: "neutral", "brand", "success", "warning", "danger". */
    var variant: ThemeVariant

  }
}