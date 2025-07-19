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
  * Spinners are used to show the progress of an indeterminate operation.
  *
  * [[https://backers.webawesome.com/docs/components/spinner WebAwesome  docs]]
  */
object Spinner extends WebComponent("wa-spinner") {

  @JSImport("@awesome.me/webawesome/dist/components/spinner/spinner.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Spinner.type

  type Ref = WaSpinnerComponent & dom.HTMLElement

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The width of the track. */
    lazy val trackWidth: String = "--track-width"

    /** The color of the track. */
    lazy val trackColor: String = "--track-color"

    /** The color of the spinner's indicator. */
    lazy val indicatorColor: String = "--indicator-color"

    /** The time it takes for the spinner to complete one animation cycle. */
    lazy val speed: String = "--speed"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaSpinnerComponent extends js.Object {
    this: dom.HTMLElement =>

  }
}