package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Dividers visually separate or group adjacent elements with a horizontal or vertical line. Use them to establish
  * rhythm and hierarchy within menus, toolbars, and layouts.
  *
  * [[https://webawesome.com/docs/components/divider WebAwesome docs]]
  */
object Divider extends WebComponent("wa-divider") {

  @JSImport("@awesome.me/webawesome/dist/components/divider/divider.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Divider.type

  type Ref = WaDividerComponent & dom.HTMLElement

  // -- Attributes --

  /** Sets the divider's orientation. Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  /** Only required for SSR. Set to `true` if you're slotting in a label so the server-rendered markup includes the
    * label's layout before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Where the label sits along the divider. Valid values: "start", "center", "end". */
  lazy val labelPlacement: CommonKeys.DividerLabelPlacement.type = CommonKeys.DividerLabelPlacement

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** An optional label to show in the center of the divider. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The color of the divider. */
    lazy val color: String = "--color"

    /** The width of the divider. */
    lazy val width: String = "--width"

    /** The spacing of the divider. */
    lazy val spacing: String = "--spacing"

    /** The amount of space between the label and the divider's lines. */
    lazy val labelSpacing: String = "--label-spacing"

    /** The length of the line between the divider's edge and a label placed at the `start` or `end`. */
    lazy val labelOffset: String = "--label-offset"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The container that wraps the divider's label. */
    lazy val label: String = "label"

  }

  // -- Element type --

  @js.native
  trait WaDividerComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Sets the divider's orientation. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** Only required for SSR. Set to `true` if you're slotting in a label so the server-rendered markup includes the
      * label's layout before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Where the label sits along the divider. Valid values: "start", "center", "end". */
    var labelPlacement: DividerLabelPlacement

    var dir: String

    var lang: String

    var didSSR: String

    def handleVerticalChange(): Unit = js.native

  }
}
