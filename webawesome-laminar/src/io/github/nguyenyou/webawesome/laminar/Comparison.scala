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
  * Compare visual differences between similar content with a sliding panel.
  *
  * [[https://backers.webawesome.com/docs/components/comparison WebAwesome  docs]]
  */
object Comparison extends WebComponent("wa-comparison") {

  @JSImport("@awesome.me/webawesome/dist/components/comparison/comparison.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Comparison.type

  type Ref = WaComparisonComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the position changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  // -- Attributes --

  /** The position of the divider as a percentage. */
  lazy val position: HtmlAttr[Double] = doubleAttr("position")

  // -- Slots --

  object slots {
    /** The before content, often an `<img>` or `<svg>` element. */
    lazy val before: Slot = Slot("before")

    /** The after content, often an `<img>` or `<svg>` element. */
    lazy val after: Slot = Slot("after")

    /** The icon used inside the handle. */
    lazy val handle: Slot = Slot("handle")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The width of the dividing line. */
    lazy val dividerWidth: String = "--divider-width"

    /** The size of the compare handle. */
    lazy val handleSize: String = "--handle-size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The container that wraps the before and after content. */
    lazy val base: String = "base"

    /** The container that wraps the before content. */
    lazy val before: String = "before"

    /** The container that wraps the after content. */
    lazy val after: String = "after"

    /** The divider that separates the before and after content. */
    lazy val divider: String = "divider"

    /** The handle that the user drags to expose the after content. */
    lazy val handle: String = "handle"

  }

  // -- Element type --

  @js.native trait WaComparisonComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The position of the divider as a percentage. */
    var position: Double

    def handlePositionChange(): js.Any = js.native

  }
}