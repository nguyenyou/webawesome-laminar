package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Skeletons are used to provide a visual representation of where content will eventually be drawn.
  *
  * [[https://backers.webawesome.com/docs/components/skeleton WebAwesome  docs]]
  */
object Skeleton extends WebComponent("wa-skeleton") {

  @JSImport("@awesome.me/webawesome/dist/components/skeleton/skeleton.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Skeleton.type

  type Ref = WaSkeletonComponent & dom.HTMLElement

  // -- Attributes --

  /** Determines which effect the skeleton will use. Valid values: "pulse", "sheen", "none". */
  lazy val effect: HtmlAttr[SkeletonEffect] = unionAttr("effect")

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The color of the skeleton. */
    lazy val color: String = "--color"

    /** The sheen color when the skeleton is in its loading state. */
    lazy val sheenColor: String = "--sheen-color"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The skeleton's indicator which is responsible for its color and animation. */
    lazy val indicator: String = "indicator"

  }

  // -- Element type --

  @js.native trait WaSkeletonComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Determines which effect the skeleton will use. Valid values: "pulse", "sheen", "none". */
    var effect: SkeletonEffect

  }
}