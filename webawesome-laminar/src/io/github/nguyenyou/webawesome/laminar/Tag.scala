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
  * Tags are used as labels to organize things or to indicate a selection.
  *
  * [[https://backers.webawesome.com/docs/components/tag WebAwesome  docs]]
  */
object Tag extends WebComponent("wa-tag") {

  @JSImport("@awesome.me/webawesome/dist/components/tag/tag.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Tag.type

  type Ref = WaTagComponent & dom.HTMLElement

  // -- Union Types --

  type TagVariant = "brand" | "neutral" | "success" | "warning" | "danger"

  type TagAppearance = "accent" | "outlined accent" | "filled" | "outlined" | "outlined filled"

  type TagSize = "small" | "medium" | "large"

  // -- Events --

  /** Emitted when the remove button is activated. */
  lazy val onRemove: EventProp[dom.Event] = eventProp("wa-remove")

  // -- Attributes --

  /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values: "brand", "neutral", "success", "warning", "danger". */
  lazy val variant: HtmlAttr[TagVariant] = unionAttr("variant")

  /** The tag's visual appearance. Valid values: "accent", "outlined accent", "filled", "outlined", "outlined filled". */
  lazy val appearance: HtmlAttr[TagAppearance] = unionAttr("appearance")

  /** The tag's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[TagSize] = unionAttr("size")

  /** Draws a pill-style tag with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** Makes the tag removable and shows a remove button. */
  lazy val withRemove: HtmlAttr[Boolean] = boolAttr("with-remove")

  // -- Slots --

  object slots {
    /** The tag's content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

    /** The tag's content. */
    lazy val content: String = "content"

    /** The tag's remove button, a `<wa-button>`. */
    lazy val removeButton: String = "remove-button"

    /** The remove button's exported `base` part. */
    lazy val removeButton__base: String = "remove-button__base"

  }

  // -- Element type --

  @js.native trait WaTagComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values: "brand", "neutral", "success", "warning", "danger". */
    var variant: "brand" | "neutral" | "success" | "warning" | "danger"

    /** The tag's visual appearance. Valid values: "accent", "outlined accent", "filled", "outlined", "outlined filled". */
    var appearance: "accent" | "outlined accent" | "filled" | "outlined" | "outlined filled"

    /** The tag's size. Valid values: "small", "medium", "large". */
    var size: "small" | "medium" | "large"

    /** Draws a pill-style tag with rounded edges. */
    var pill: Boolean

    /** Makes the tag removable and shows a remove button. */
    var withRemove: Boolean

  }
}