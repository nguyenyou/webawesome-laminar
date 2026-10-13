package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Tab panels hold the content shown for a single tab inside a tab group.
  *
  * [[https://webawesome.com/docs/components/tab-panel WebAwesome docs]]
  */
object TabPanel extends WebComponent("wa-tab-panel") {

  @JSImport("@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = TabPanel.type

  type Ref = WaTabPanelComponent & dom.HTMLElement

  // -- Attributes --

  /** The tab panel's name. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** When true, the tab panel will be shown. */
  lazy val active: HtmlAttr[Boolean] = boolAttr("active")

  lazy val role: HtmlAttr[String] = stringAttr("role")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

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

    /** Deprecated. Style the host element instead. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native
  trait WaTabPanelComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The tab panel's name. */
    var name: String

    /** When true, the tab panel will be shown. */
    var active: Boolean

    var role: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleActiveChange(): Unit = js.native

  }
}
