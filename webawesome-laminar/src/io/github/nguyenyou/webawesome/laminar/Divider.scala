package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Dividers are used to visually separate or group elements.
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
  lazy val orientation: HtmlAttr[Orientation] = unionAttr("orientation")

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The color of the divider. */
    lazy val color: String = "--color"

    /** The width of the divider. */
    lazy val width: String = "--width"

    /** The spacing of the divider. */
    lazy val spacing: String = "--spacing"

  }

  // -- Element type --

  @js.native
  trait WaDividerComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Sets the divider's orientation. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    def handleVerticalChange(): js.Any = js.native

  }
}
