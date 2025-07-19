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
  * Tab panels are used inside [tab groups](/docs/components/tab-group) to display tabbed content.
  *
  * [[https://backers.webawesome.com/docs/components/tab-panel WebAwesome  docs]]
  */
object TabPanel extends WebComponent("wa-tab-panel") {

  @JSImport("@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = TabPanel.type

  type Ref = WaTabPanelComponent & dom.HTMLElement

  // -- Attributes --

  /** The tab panel's name. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** When true, the tab panel will be shown. */
  lazy val active: HtmlAttr[Boolean] = boolAttr("active")

  // -- Slots --

  object slots {
    /** The tab panel's content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The tab panel's padding. */
    lazy val padding: String = "--padding"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaTabPanelComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The tab panel's name. */
    var name: String

    /** When true, the tab panel will be shown. */
    var active: Boolean

    def handleActiveChange(): js.Any = js.native

  }
}