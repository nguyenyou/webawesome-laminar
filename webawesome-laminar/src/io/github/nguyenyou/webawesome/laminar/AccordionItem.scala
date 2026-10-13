package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Accordion items are used inside `<wa-accordion>` to create expandable sections with accessible headers.
  *
  * [[https://webawesome.com/docs/components/accordion WebAwesome docs]]
  */
object AccordionItem extends WebComponent("wa-accordion-item") {

  @JSImport("@awesome.me/webawesome/dist/components/accordion-item/accordion-item.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = AccordionItem.type

  type Ref = WaAccordionItemComponent & dom.HTMLElement

  // -- Attributes --

  /** The text label shown in the header. If you need HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** Expands the accordion item. */
  lazy val expanded: HtmlAttr[Boolean] = boolAttr("expanded")

  /** Disables the accordion item so it can't be toggled. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The accordion item's body content. Note: You can just say `_ => element` instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

    /** The accordion item's label. Alternatively, use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Optional expand/collapse icon. Works best with `<wa-icon>`. */
    lazy val icon: Slot = Slot("icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The amount of space around and between the item's header and content. Default: var(--wa-space-m) */
    lazy val spacing: String = "--spacing"

    /** The duration of the expand animation. Default: var(--wa-transition-normal) */
    lazy val showDuration: String = "--show-duration"

    /** The duration of the collapse animation. Default: var(--wa-transition-normal) */
    lazy val hideDuration: String = "--hide-duration"

    /** The easing of the expand/collapse animation. Default: var(--wa-transition-easing) */
    lazy val easing: String = "--easing"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `accordion-item` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val accordionItem: String = "accordion-item"

    /** The heading element wrapping the trigger button. Omitted when `heading-level="none"`. */
    lazy val heading: String = "heading"

    /** The trigger button that toggles the panel. */
    lazy val button: String = "button"

    /** The container that wraps the label. */
    lazy val label: String = "label"

    /** The container that wraps the expand/collapse icon. */
    lazy val icon: String = "icon"

    /** The panel that contains the item's content. */
    lazy val panel: String = "panel"

    /** The content slot inside the panel. */
    lazy val content: String = "content"

  }

  // -- Element type --

  @js.native
  trait WaAccordionItemComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The text label shown in the header. If you need HTML, use the `label` slot instead. */
    var label: String

    /** Expands the accordion item. */
    var expanded: Boolean

    /** Disables the accordion item so it can't be toggled. */
    var disabled: Boolean

    var dir: String

    var lang: String

    var didSSR: String

    def handleExpandedChange(): js.Promise[js.Any] = js.native

    /** Expands the accordion item with animation. */
    def expand(): js.Promise[js.Any] = js.native

    /** Collapses the accordion item with animation. */
    def collapse(): js.Promise[js.Any] = js.native

    /** Toggles the accordion item's expanded state. */
    def toggle(): js.Promise[js.Any] = js.native

    /** Focuses the accordion item's trigger button. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

  }
}
