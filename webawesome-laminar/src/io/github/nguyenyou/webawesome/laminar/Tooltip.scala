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

/** Tooltips display additional information based on a specific action.
  *
  * [[https://webawesome.com/docs/components/tooltip WebAwesome docs]]
  */
object Tooltip extends WebComponent("wa-tooltip") {

  @JSImport("@awesome.me/webawesome/dist/components/tooltip/tooltip.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Tooltip.type

  type Ref = WaTooltipComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the tooltip begins to show. */
  lazy val onShow: EventProp[CustomEvent[Ref]] = eventProp("wa-show")

  /** Emitted after the tooltip has shown and all animations are complete. */
  lazy val onAfterShow: EventProp[CustomEvent[Ref]] = eventProp("wa-after-show")

  /** Emitted when the tooltip begins to hide. */
  lazy val onHide: EventProp[CustomEvent[Ref] & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the tooltip has hidden and all animations are complete. */
  lazy val onAfterHide: EventProp[CustomEvent[Ref]] = eventProp("wa-after-hide")

  // -- Attributes --

  /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
    * inside of the viewport. Valid values: "top", "top-start", "top-end", "right", "right-start", "right-end",
    * "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end".
    */
  lazy val placement: CommonKeys.Placement.type = CommonKeys.Placement

  /** Disables the tooltip so it won't show when triggered. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The distance in pixels from which to offset the tooltip away from its target. */
  lazy val distance: HtmlAttr[Double] = doubleAttr("distance")

  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The distance in pixels from which to offset the tooltip along its target. */
  lazy val skidding: HtmlAttr[Double] = doubleAttr("skidding")

  /** The amount of time to wait before showing the tooltip when the user mouses in. */
  lazy val showDelay: HtmlAttr[Double] = doubleAttr("show-delay")

  /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
  lazy val hideDelay: HtmlAttr[Double] = doubleAttr("hide-delay")

  /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
    * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
    * programmatically.
    */
  lazy val trigger: HtmlAttr[String] = stringAttr("trigger")

  /** Removes the arrow from the tooltip. */
  lazy val withoutArrow: HtmlAttr[Boolean] = boolAttr("without-arrow")

  lazy val `for`: HtmlAttr[String] = stringAttr("for")

  lazy val forId: HtmlAttr[String] = `for`

  // -- Slots --

  object slots {

    /** The tooltip's default slot where any content should live. Interactive content should be avoided. Note: You can
      * just say `_ => element` instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The maximum width of the tooltip before its content will wrap. */
    lazy val maxWidth: String = "--max-width"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's base wrapper, an `<wa-popup>` element. */
    lazy val base: String = "base"

    /** The popup's exported `popup` part. Use this to target the tooltip's popup container. */
    lazy val base__popup: String = "base__popup"

    /** The popup's exported `arrow` part. Use this to target the tooltip's arrow. */
    lazy val base__arrow: String = "base__arrow"

    /** The tooltip's body where its content is rendered. */
    lazy val body: String = "body"

  }

  // -- Element type --

  @js.native
  trait WaTooltipComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
      * inside of the viewport. Valid values: "top", "top-start", "top-end", "right", "right-start", "right-end",
      * "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end".
      */
    var placement: Placement

    /** Disables the tooltip so it won't show when triggered. */
    var disabled: Boolean

    /** The distance in pixels from which to offset the tooltip away from its target. */
    var distance: Double

    /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
    var open: Boolean

    /** The distance in pixels from which to offset the tooltip along its target. */
    var skidding: Double

    /** The amount of time to wait before showing the tooltip when the user mouses in. */
    var showDelay: Double

    /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
    var hideDelay: Double

    /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`.
      * Multiple options can be passed by separating them with a space. When manual is used, the tooltip must be
      * activated programmatically.
      */
    var trigger: String

    /** Removes the arrow from the tooltip. */
    var withoutArrow: Boolean

    var `for`: String

    def handleOpenChange(): js.Any = js.native

    def handleForChange(): js.Any = js.native

    def handleOptionsChange(): js.Any = js.native

    def handleDisabledChange(): js.Any = js.native

    /** Shows the tooltip. */
    def show(): js.Any = js.native

    /** Hides the tooltip */
    def hide(): js.Any = js.native

  }
}
