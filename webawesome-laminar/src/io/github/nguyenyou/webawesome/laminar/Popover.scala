package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Popovers display contextual content and interactive elements in a floating panel.
  *
  * [[https://webawesome.com/docs/components/popover WebAwesome docs]]
  */
object Popover extends WebComponent("wa-popover") {

  @JSImport("@awesome.me/webawesome/dist/components/popover/popover.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Popover.type

  type Ref = WaPopoverComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the popover begins to show. Canceling this event will stop the popover from showing. */
  lazy val onShow: EventProp[CustomEvent[Ref]] = eventProp("wa-show")

  /** Emitted after the popover has shown and all animations are complete. */
  lazy val onAfterShow: EventProp[CustomEvent[Ref]] = eventProp("wa-after-show")

  /** Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding. */
  lazy val onHide: EventProp[CustomEvent[Ref] & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the popover has hidden and all animations are complete. */
  lazy val onAfterHide: EventProp[CustomEvent[Ref]] = eventProp("wa-after-hide")

  // -- Attributes --

  /** The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
    * inside of the viewport.
    */
  lazy val placement: HtmlAttr[String] = stringAttr("placement")

  /** Shows or hides the popover. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The distance in pixels from which to offset the popover away from its target. */
  lazy val distance: HtmlAttr[Double] = doubleAttr("distance")

  /** The distance in pixels from which to offset the popover along its target. */
  lazy val skidding: HtmlAttr[Double] = doubleAttr("skidding")

  /** The ID of the popover's anchor element. This must be an interactive/focusable element such as a button. */
  lazy val `for`: HtmlAttr[String] = stringAttr("for")

  lazy val forId: HtmlAttr[String] = `for`

  // -- Slots --

  object slots {

    /** The popover's content. Interactive elements such as buttons and links are supported. Note: You can just say `_
      * \=> element` instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The size of the tiny arrow that points to the popover (set to zero to remove). Default: 0.375rem */
    lazy val arrowSize: String = "--arrow-size"

    /** The maximum width of the popover's body content. Default: 25rem */
    lazy val maxWidth: String = "--max-width"

    /** The speed of the show animation. Default: 100ms */
    lazy val showDuration: String = "--show-duration"

    /** The speed of the hide animation. Default: 100ms */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The native dialog element that contains the popover content. */
    lazy val dialog: String = "dialog"

    /** The popover's body where its content is rendered. */
    lazy val body: String = "body"

    /** The internal `<wa-popup>` element that positions the popover. */
    lazy val popup: String = "popup"

    /** The popup's exported `popup` part. Use this to target the popover's popup container. */
    lazy val popup__popup: String = "popup__popup"

    /** The popup's exported `arrow` part. Use this to target the popover's arrow. */
    lazy val popup__arrow: String = "popup__arrow"

  }

  // -- Element type --

  @js.native
  trait WaPopoverComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The preferred placement of the popover. Note that the actual placement may vary as needed to keep the popover
      * inside of the viewport.
      */
    var placement: js.Any

    /** Shows or hides the popover. */
    var open: Boolean

    /** The distance in pixels from which to offset the popover away from its target. */
    var distance: Double

    /** The distance in pixels from which to offset the popover along its target. */
    var skidding: Double

    /** The ID of the popover's anchor element. This must be an interactive/focusable element such as a button. */
    var `for`: String

    def handleOpenChange(): js.Any = js.native

    def handleForChange(): js.Any = js.native

    def handleOptionsChange(): js.Any = js.native

    /** Shows the popover. */
    def show(): js.Any = js.native

    /** Hides the popover. */
    def hide(): js.Any = js.native

  }
}
