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
  * A tree item serves as a hierarchical node that lives inside a [tree](/docs/components/tree).
  *
  * [[https://backers.webawesome.com/docs/components/tree-item WebAwesome  docs]]
  */
object TreeItem extends WebComponent("wa-tree-item") {

  @JSImport("@awesome.me/webawesome/dist/components/tree-item/tree-item.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = TreeItem.type

  type Ref = WaTreeItemComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the tree item expands. */
  lazy val onExpand: EventProp[dom.Event] = eventProp("wa-expand")

  /** Emitted after the tree item expands and all animations are complete. */
  lazy val onAfterExpand: EventProp[dom.Event] = eventProp("wa-after-expand")

  /** Emitted when the tree item collapses. */
  lazy val onCollapse: EventProp[dom.Event] = eventProp("wa-collapse")

  /** Emitted after the tree item collapses and all animations are complete. */
  lazy val onAfterCollapse: EventProp[dom.Event] = eventProp("wa-after-collapse")

  /** Emitted when the tree item's lazy state changes. */
  lazy val onLazyChange: EventProp[dom.Event] = eventProp("wa-lazy-change")

  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. */
  lazy val onLazyLoad: EventProp[dom.Event] = eventProp("wa-lazy-load")

  // -- Attributes --

  /** Expands the tree item. */
  lazy val expanded: HtmlAttr[Boolean] = boolAttr("expanded")

  /** Draws the tree item in a selected state. */
  lazy val selected: HtmlAttr[Boolean] = boolAttr("selected")

  /** Disables the tree item. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Enables lazy loading behavior. */
  lazy val `lazy`: HtmlAttr[Boolean] = boolAttr("lazy")

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
    /** The animation duration when expanding tree items. Default: 200ms */
    lazy val showDuration: String = "--show-duration"

    /** The animation duration when collapsing tree items. Default: 200ms */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

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

  @js.native trait WaTreeItemComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Expands the tree item. */
    var expanded: Boolean

    /** Draws the tree item in a selected state. */
    var selected: Boolean

    /** Disables the tree item. */
    var disabled: Boolean

    /** Enables lazy loading behavior. */
    var `lazy`: Boolean

    def isTreeItem(node: js.Any): js.Any = js.native

    def handleLoadingChange(): js.Any = js.native

    def handleDisabledChange(): js.Any = js.native

    def handleExpandedState(): js.Any = js.native

    def handleIndeterminateStateChange(): js.Any = js.native

    def handleSelectedChange(): js.Any = js.native

    def handleExpandedChange(): js.Any = js.native

    def handleExpandAnimation(): js.Any = js.native

    def handleLazyChange(): js.Any = js.native

    /** Gets all the nested tree items in this node. */
    def getChildrenItems(options: js.Object): js.Any = js.native

  }
}