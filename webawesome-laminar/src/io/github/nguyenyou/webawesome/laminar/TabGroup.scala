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

/** Tab groups organize content into a container that shows one section at a time.
  *
  * [[https://webawesome.com/docs/components/tab-group WebAwesome docs]]
  */
object TabGroup extends WebComponent("wa-tab-group") {

  @JSImport("@awesome.me/webawesome/dist/components/tab-group/tab-group.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = TabGroup.type

  type Ref = WaTabGroupComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when a tab is shown. */
  lazy val onTabShow: EventProp[CustomEvent[Ref] & EventDetail[WaTabShowEvent]] = eventProp("wa-tab-show")

  /** Emitted when a tab is hidden. */
  lazy val onTabHide: EventProp[CustomEvent[Ref] & EventDetail[WaTabHideEvent]] = eventProp("wa-tab-hide")

  // -- Attributes --

  /** Sets the active tab. */
  lazy val active: HtmlAttr[String] = stringAttr("active")

  /** The placement of the tabs. Valid values: "top", "bottom", "start", "end". */
  lazy val placement: CommonKeys.ComponentPlacement.type = CommonKeys.ComponentPlacement

  /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
    * manual, the tab will receive focus but will not show until the user presses spacebar or enter. Valid values:
    * "auto", "manual".
    */
  lazy val activation: CommonKeys.TabGroupActivation.type = CommonKeys.TabGroupActivation

  /** Disables the scroll arrows that appear when tabs overflow. */
  lazy val withoutScrollControls: HtmlAttr[Boolean] = boolAttr("without-scroll-controls")

  // -- Slots --

  object slots {

    /** Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements. Note: You can just say `_ =>
      * element` instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

    /** Used for grouping tabs in the tab group. Must be `<wa-tab>` elements. Note that `<wa-tab>` will set this slot on
      * itself automatically.
      */
    lazy val nav: Slot = Slot("nav")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The color of the active tab indicator. */
    lazy val indicatorColor: String = "--indicator-color"

    /** The color of the indicator's track (the line that separates tabs from panels). */
    lazy val trackColor: String = "--track-color"

    /** The width of the indicator's track (the line that separates tabs from panels). */
    lazy val trackWidth: String = "--track-width"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's base wrapper. */
    lazy val base: String = "base"

    /** The tab group's navigation container where tabs are slotted in. */
    lazy val nav: String = "nav"

    /** The container that wraps the tabs. */
    lazy val tabs: String = "tabs"

    /** The tab group's body where tab panels are slotted in. */
    lazy val body: String = "body"

    /** The previous/next scroll buttons that show when tabs are scrollable, a `<wa-button>`. */
    lazy val scrollButton: String = "scroll-button"

    /** The starting scroll button. */
    lazy val scrollButtonStart: String = "scroll-button-start"

    /** The ending scroll button. */
    lazy val scrollButtonEnd: String = "scroll-button-end"

    /** The scroll button's exported `base` part. */
    lazy val scrollButton__base: String = "scroll-button__base"

  }

  // -- Element type --

  @js.native
  trait WaTabGroupComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Sets the active tab. */
    var active: String

    /** The placement of the tabs. Valid values: "top", "bottom", "start", "end". */
    var placement: ComponentPlacement

    /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set
      * to manual, the tab will receive focus but will not show until the user presses spacebar or enter. Valid values:
      * "auto", "manual".
      */
    var activation: TabGroupActivation

    /** Disables the scroll arrows that appear when tabs overflow. */
    var withoutScrollControls: Boolean

    def updateActiveTab(): js.Any = js.native

    def updateScrollControls(): js.Any = js.native

  }
}
