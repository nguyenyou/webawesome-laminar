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

/** Accordions are a vertically stacked set of interactive headings that each contain a title, representing a section of
  * content.
  *
  * [[https://webawesome.com/docs/components/accordion WebAwesome docs]]
  */
object Accordion extends WebComponent("wa-accordion") {

  @JSImport("@awesome.me/webawesome/dist/components/accordion/accordion.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Accordion.type

  type Ref = WaAccordionComponent & dom.HTMLElement

  // -- Events --

  /** Emitted before an item expands. Cancelable. */
  lazy val onExpand: EventProp[CustomEvent[Ref]] = eventProp("wa-expand")

  /** Emitted after an item finishes expanding. */
  lazy val onAfterExpand: EventProp[CustomEvent[Ref]] = eventProp("wa-after-expand")

  /** Emitted before an item collapses. Cancelable. */
  lazy val onCollapse: EventProp[CustomEvent[Ref]] = eventProp("wa-collapse")

  /** Emitted after an item finishes collapsing. */
  lazy val onAfterCollapse: EventProp[CustomEvent[Ref]] = eventProp("wa-after-collapse")

  // -- Attributes --

  /** Controls how items can be expanded. `multiple` (the default) allows any number of items to be open at once.
    * `single` allows only one item to be open at a time; opening a new item collapses the previously open one, and
    * clicking an open item does not collapse it. `single-collapsible` is the same as `single` except that clicking the
    * open item collapses it, so zero open items is a valid state. Valid values: "single", "single-collapsible",
    * "multiple".
    */
  lazy val mode: CommonKeys.AccordionMode.type = CommonKeys.AccordionMode

  /** The location of the expand/collapse icon in child items. Valid values: "start", "end". */
  lazy val iconPlacement: CommonKeys.IconPlacement.type = CommonKeys.IconPlacement

  /** The heading level for child item triggers (1–6), or "none" to omit the heading wrapper. Defaults to 3. */
  lazy val headingLevel: HtmlAttr[String] = stringAttr("heading-level")

  /** The accordion's visual appearance. Valid values: "filled", "outlined", "filled-outlined", "plain". */
  lazy val appearance: CommonKeys.Appearance1.type = CommonKeys.Appearance1

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** One or more `<wa-accordion-item>` elements. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- Element type --

  @js.native
  trait WaAccordionComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Controls how items can be expanded. `multiple` (the default) allows any number of items to be open at once.
      * `single` allows only one item to be open at a time; opening a new item collapses the previously open one, and
      * clicking an open item does not collapse it. `single-collapsible` is the same as `single` except that clicking
      * the open item collapses it, so zero open items is a valid state. Valid values: "single", "single-collapsible",
      * "multiple".
      */
    var mode: AccordionMode

    /** The location of the expand/collapse icon in child items. Valid values: "start", "end". */
    var iconPlacement: IconPlacement

    /** The heading level for child item triggers (1–6), or "none" to omit the heading wrapper. Defaults to 3. */
    var headingLevel: String

    /** The accordion's visual appearance. Valid values: "filled", "outlined", "filled-outlined", "plain". */
    var appearance: Appearance1

    var dir: String

    var lang: String

    var didSSR: String

    def syncIconPlacement(): Unit = js.native

    def syncHeadingLevel(): Unit = js.native

    def syncAppearance(): Unit = js.native

    /** Expands all accordion items. No-op when `mode` is `single` or `single-collapsible`. */
    def expandAll(): Unit = js.native

    /** Collapses all accordion items. */
    def collapseAll(): Unit = js.native

  }
}
