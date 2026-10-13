package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Tree items represent a single hierarchical node inside a tree, and can contain nested items that expand and
  * collapse.
  *
  * [[https://webawesome.com/docs/components/tree-item WebAwesome docs]]
  */
object TreeItem extends WebComponent("wa-tree-item") {

  @JSImport("@awesome.me/webawesome/dist/components/tree-item/tree-item.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = TreeItem.type

  type Ref = WaTreeItemComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the tree item expands. */
  lazy val onExpand: EventProp[CustomEvent[Ref]] = eventProp("wa-expand")

  /** Emitted after the tree item expands and all animations are complete. */
  lazy val onAfterExpand: EventProp[CustomEvent[Ref]] = eventProp("wa-after-expand")

  /** Emitted when the tree item collapses. */
  lazy val onCollapse: EventProp[CustomEvent[Ref]] = eventProp("wa-collapse")

  /** Emitted after the tree item collapses and all animations are complete. */
  lazy val onAfterCollapse: EventProp[CustomEvent[Ref]] = eventProp("wa-after-collapse")

  /** Emitted when the tree item's lazy state changes. */
  lazy val onLazyChange: EventProp[CustomEvent[Ref]] = eventProp("wa-lazy-change")

  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree
    * before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update
    * the tree.
    */
  lazy val onLazyLoad: EventProp[CustomEvent[Ref]] = eventProp("wa-lazy-load")

  // -- Attributes --

  /** Expands the tree item. */
  lazy val expanded: HtmlAttr[Boolean] = boolAttr("expanded")

  /** Draws the tree item in a selected state. */
  lazy val selected: HtmlAttr[Boolean] = boolAttr("selected")

  /** Disables the tree item. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Enables lazy loading behavior. */
  lazy val `lazy`: HtmlAttr[Boolean] = boolAttr("lazy")

  lazy val tabIndex: HtmlAttr[Double] = doubleAttr("tabindex")

  lazy val role: HtmlAttr[String] = stringAttr("role")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The default slot. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The icon to show when the tree item is expanded. */
    lazy val expandIcon: Slot = Slot("expand-icon")

    /** The icon to show when the tree item is collapsed. */
    lazy val collapseIcon: Slot = Slot("collapse-icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The animation duration when expanding tree items. Default: var(--wa-transition-normal) */
    lazy val showDuration: String = "--show-duration"

    /** The animation duration when collapsing tree items. Default: var(--wa-transition-normal) */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `tree-item` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val treeItem: String = "tree-item"

    /** The tree item's container. This element wraps everything except slotted tree item children. */
    lazy val item: String = "item"

    /** The tree item's indentation container. */
    lazy val indentation: String = "indentation"

    /** The container that wraps the tree item's expand button and spinner. */
    lazy val expandButton: String = "expand-button"

    /** The spinner that shows when a lazy tree item is in the loading state. */
    lazy val spinner: String = "spinner"

    /** The spinner's base part. */
    lazy val spinner__base: String = "spinner__base"

    /** The tree item's label. */
    lazy val label: String = "label"

    /** The container that wraps the tree item's nested children. */
    lazy val children: String = "children"

    /** The checkbox that shows when using multiselect. */
    lazy val checkbox: String = "checkbox"

    /** The checkbox's exported `base` part. */
    lazy val checkbox__base: String = "checkbox__base"

    /** The checkbox's exported `control` part. */
    lazy val checkbox__control: String = "checkbox__control"

    /** The checkbox's exported `checked-icon` part. */
    lazy val checkbox__checkedIcon: String = "checkbox__checked-icon"

    /** The checkbox's exported `indeterminate-icon` part. */
    lazy val checkbox__indeterminateIcon: String = "checkbox__indeterminate-icon"

    /** The checkbox's exported `label` part. */
    lazy val checkbox__label: String = "checkbox__label"

  }

  // -- Element type --

  @js.native
  trait WaTreeItemComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Expands the tree item. */
    var expanded: Boolean

    /** Draws the tree item in a selected state. */
    var selected: Boolean

    /** Disables the tree item. */
    var disabled: Boolean

    /** Enables lazy loading behavior. */
    var `lazy`: Boolean

    var tabIndex: Double

    var role: String

    var dir: String

    var lang: String

    var didSSR: String

    def isTreeItem(node: js.Any): Boolean = js.native

    def handleLoadingChange(): Unit = js.native

    def handleDisabledChange(): Unit = js.native

    def handleExpandedState(): Unit = js.native

    def handleIndeterminateStateChange(): Unit = js.native

    def handleSelectedChange(): Unit = js.native

    def handleExpandedChange(): Unit = js.native

    def handleExpandAnimation(): Unit = js.native

    def handleLazyChange(): Unit = js.native

    /** Gets all the nested tree items in this node. */
    def getChildrenItems(options: js.Object): js.Array[TreeItem.Ref] = js.native

  }
}
