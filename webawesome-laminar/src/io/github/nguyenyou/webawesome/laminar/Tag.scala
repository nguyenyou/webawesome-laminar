package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Tags are used as labels to organize things or to indicate a selection.
  *
  * [[https://webawesome.com/docs/components/tag WebAwesome docs]]
  */
object Tag extends WebComponent("wa-tag") {

  @JSImport("@awesome.me/webawesome/dist/components/tag/tag.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Tag.type

  type Ref = WaTagComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the remove button is activated. */
  lazy val onRemove: EventProp[CustomEvent[Ref]] = eventProp("wa-remove")

  // -- Attributes --

  /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values:
    * "brand", "neutral", "success", "warning", "danger".
    */
  lazy val variant: CommonKeys.ThemeVariant.type = CommonKeys.ThemeVariant

  /** The tag's visual appearance. Valid values: "accent", "filled", "outlined", "filled-outlined". */
  lazy val appearance: CommonKeys.ExtendedAppearance.type = CommonKeys.ExtendedAppearance

  /** The tag's size. Valid values: "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

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

  @js.native
  trait WaTagComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The tag's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values:
      * "brand", "neutral", "success", "warning", "danger".
      */
    var variant: ThemeVariant

    /** The tag's visual appearance. Valid values: "accent", "filled", "outlined", "filled-outlined". */
    var appearance: ExtendedAppearance

    /** The tag's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** Draws a pill-style tag with rounded edges. */
    var pill: Boolean

    /** Makes the tag removable and shows a remove button. */
    var withRemove: Boolean

  }
}
