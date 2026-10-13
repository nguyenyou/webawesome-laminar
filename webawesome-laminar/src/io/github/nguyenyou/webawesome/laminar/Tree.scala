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

/** Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and
  * collapsed as desired by the user.
  *
  * [[https://webawesome.com/docs/components/tree WebAwesome docs]]
  */
object Tree extends WebComponent("wa-tree") {

  @JSImport("@awesome.me/webawesome/dist/components/tree/tree.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Tree.type

  type Ref = WaTreeComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when a tree item is selected or deselected. */
  lazy val onSelectionChange: EventProp[CustomEvent[Ref] & EventDetail[WaSelectionChangeEvent]] = eventProp(
    "wa-selection-change"
  )

  // -- Attributes --

  /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
    * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
    * Leaf-multiple allows multiple leaf nodes to be selected while parent nodes only expand and collapse. Valid values:
    * "single", "multiple", "leaf", "leaf-multiple".
    */
  lazy val selection: CommonKeys.TreeSelection.type = CommonKeys.TreeSelection

  lazy val tabIndex: HtmlAttr[Double] = doubleAttr("tabindex")

  lazy val role: HtmlAttr[String] = stringAttr("role")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The default slot. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The icon to show when the tree item is expanded. Works best with `<wa-icon>`. */
    lazy val expandIcon: Slot = Slot("expand-icon")

    /** The icon to show when the tree item is collapsed. Works best with `<wa-icon>`. */
    lazy val collapseIcon: Slot = Slot("collapse-icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The size of the indentation for nested items. Default: var(--wa-space-m) */
    lazy val indentSize: String = "--indent-size"

    /** The color of the indentation line. Default: var(--wa-color-surface-border) */
    lazy val indentGuideColor: String = "--indent-guide-color"

    /** The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position.
      * Default: 0
      */
    lazy val indentGuideOffset: String = "--indent-guide-offset"

    /** The style of the indentation line, e.g. solid, dotted, dashed. Default: solid */
    lazy val indentGuideStyle: String = "--indent-guide-style"

    /** The width of the indentation line. Default: 0 */
    lazy val indentGuideWidth: String = "--indent-guide-width"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `tree` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val tree: String = "tree"

  }

  // -- Element type --

  @js.native
  trait WaTreeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
      * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
      * Leaf-multiple allows multiple leaf nodes to be selected while parent nodes only expand and collapse. Valid
      * values: "single", "multiple", "leaf", "leaf-multiple".
      */
    var selection: TreeSelection

    var tabIndex: Double

    var role: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleMouseDown(event: js.Any): Unit = js.native

    def handleSelectionChange(): js.Promise[js.Any] = js.native

  }
}
