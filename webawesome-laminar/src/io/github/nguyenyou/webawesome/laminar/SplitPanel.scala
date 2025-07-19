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
  * Split panels display two adjacent panels, allowing the user to reposition them.
  *
  * [[https://backers.webawesome.com/docs/components/split-panel WebAwesome  docs]]
  */
object SplitPanel extends WebComponent("wa-split-panel") {

  @JSImport("@awesome.me/webawesome/dist/components/split-panel/split-panel.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = SplitPanel.type

  type Ref = WaSplitPanelComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the divider's position changes. */
  lazy val onReposition: EventProp[dom.Event] = eventProp("wa-reposition")

  // -- Attributes --

  /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
  container's initial size. */
  lazy val position: HtmlAttr[Double] = doubleAttr("position")

  /** The current position of the divider from the primary panel's edge in pixels. */
  lazy val positionInPixels: HtmlAttr[Double] = doubleAttr("position-in-pixels")

  /** Sets the split panel's orientation. Valid values: "horizontal", "vertical". */
  lazy val orientation: HtmlAttr[Orientation] = unionAttr("orientation")

  /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
  primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
  host element is resized. */
  lazy val primary: HtmlAttr[String] = stringAttr("primary")

  /** One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
  `"100px 50%"`. */
  lazy val snap: HtmlAttr[String] = stringAttr("snap")

  /** How close the divider must be to a snap point until snapping occurs. */
  lazy val snapThreshold: HtmlAttr[Double] = doubleAttr("snap-threshold")

  // -- Slots --

  object slots {
    /** Content to place in the start panel. */
    lazy val start: Slot = Slot("start")

    /** Content to place in the end panel. */
    lazy val end: Slot = Slot("end")

    /** The divider. Useful for slotting in a custom icon that renders as a handle. */
    lazy val divider: Slot = Slot("divider")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The width of the visible divider. Default: 4px */
    lazy val dividerWidth: String = "--divider-width"

    /** The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. Default: 12px */
    lazy val dividerHitArea: String = "--divider-hit-area"

    /** The minimum allowed size of the primary panel. Default: 0 */
    lazy val min: String = "--min"

    /** The maximum allowed size of the primary panel. Default: 100% */
    lazy val max: String = "--max"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The start panel. */
    lazy val start: String = "start"

    /** The end panel. */
    lazy val end: String = "end"

    /** Targets both the start and end panels. */
    lazy val panel: String = "panel"

    /** The divider that separates the start and end panels. */
    lazy val divider: String = "divider"

  }

  // -- Element type --

  @js.native trait WaSplitPanelComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
    container's initial size. */
    var position: Double

    /** The current position of the divider from the primary panel's edge in pixels. */
    var positionInPixels: Double

    /** Sets the split panel's orientation. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
    var disabled: Boolean

    /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
    primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
    host element is resized. */
    var primary: js.Any

    /** One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
    `"100px 50%"`. */
    var snap: String

    /** How close the divider must be to a snap point until snapping occurs. */
    var snapThreshold: Double

    def handlePositionChange(): js.Any = js.native

    def handlePositionInPixelsChange(): js.Any = js.native

    def handleVerticalChange(): js.Any = js.native

  }
}