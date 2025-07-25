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

/** Dropdowns display a list of options that can be triggered by a button or other element. They support keyboard
  * navigation, submenus, and various customization options.
  *
  * [[https://webawesome.com/docs/components/dropdown WebAwesome docs]]
  */
object Dropdown extends WebComponent("wa-dropdown") {

  @JSImport("@awesome.me/webawesome/dist/components/dropdown/dropdown.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Dropdown.type

  type Ref = WaDropdownComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the dropdown is about to show. */
  lazy val onShow: EventProp[dom.Event] = eventProp("wa-show")

  /** Emitted after the dropdown has been shown. */
  lazy val onAfterShow: EventProp[dom.Event] = eventProp("wa-after-show")

  /** Emitted when the dropdown is about to hide. */
  lazy val onHide: EventProp[dom.Event & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the dropdown has been hidden. */
  lazy val onAfterHide: EventProp[dom.Event] = eventProp("wa-after-hide")

  /** Emitted when an item in the dropdown is selected. */
  lazy val onSelect: EventProp[dom.Event & EventDetail[WaSelectEvent]] = eventProp("wa-select")

  // -- Attributes --

  /** Opens or closes the dropdown. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The dropdown's size. Valid values: "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
    * the preferred placement doesn't have enough room.
    */
  lazy val placement: HtmlAttr[String] = stringAttr("placement")

  /** The distance of the dropdown menu from its trigger. */
  lazy val distance: HtmlAttr[Double] = doubleAttr("distance")

  /** The offset of the dropdown menu along its trigger. */
  lazy val skidding: HtmlAttr[Double] = doubleAttr("skidding")

  // -- Slots --

  object slots {

    /** The dropdown's items, typically `<wa-dropdown-item>` elements. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

    /** The element that triggers the dropdown, such as a `<wa-button>` or `<button>`. */
    lazy val trigger: Slot = Slot("trigger")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The duration of the show animation. */
    lazy val showDuration: String = "--show-duration"

    /** The duration of the hide animation. */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's host element. */
    lazy val base: String = "base"

    /** The dropdown menu container. */
    lazy val menu: String = "menu"

  }

  // -- Element type --

  @js.native
  trait WaDropdownComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Opens or closes the dropdown. */
    var open: Boolean

    /** The dropdown's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location
      * if the preferred placement doesn't have enough room.
      */
    var placement: js.Any

    /** The distance of the dropdown menu from its trigger. */
    var distance: Double

    /** The offset of the dropdown menu along its trigger. */
    var skidding: Double

  }
}
