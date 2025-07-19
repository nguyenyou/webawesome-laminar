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
  * Tabs are used inside [tab groups](/docs/components/tab-group) to represent and activate [tab panels](/docs/components/tab-panel).
  *
  * [[https://backers.webawesome.com/docs/components/tab WebAwesome  docs]]
  */
object Tab extends WebComponent("wa-tab") {

  @JSImport("@awesome.me/webawesome/dist/components/tab/tab.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Tab.type

  type Ref = WaTabComponent & dom.HTMLElement

  // -- Attributes --

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  lazy val panel: HtmlAttr[String] = stringAttr("panel")

  /** Disables the tab and prevents selection. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  // -- Slots --

  object slots {
    /** The tab's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaTabComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
    var panel: String

    /** Disables the tab and prevents selection. */
    var disabled: Boolean

    def handleActiveChange(): js.Any = js.native

    def handleDisabledChange(): js.Any = js.native

  }
}