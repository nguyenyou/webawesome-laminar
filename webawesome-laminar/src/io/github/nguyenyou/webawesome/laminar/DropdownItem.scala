package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Represents an individual item within a dropdown menu, supporting standard items, checkboxes, and submenus.
  *
  * [[https://backers.webawesome.com/docs/components/dropdown-item WebAwesome  docs]]
  */
object DropdownItem extends WebComponent("wa-dropdown-item") {

  @JSImport("@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = DropdownItem.type

  type Ref = WaDropdownItemComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the dropdown item loses focus. */
  lazy val blur: EventProp[dom.Event] = eventProp("blur")

  /** Emitted when the dropdown item gains focus. */
  lazy val focus: EventProp[dom.Event] = eventProp("focus")

  // -- Attributes --

  /** The type of menu item to render. Valid values: "danger", "default". */
  lazy val variant: HtmlAttr[DropdownItemVariant] = unionAttr("variant")

  /** An optional value for the menu item. This is useful for determining which item was selected when listening to the
  dropdown's `wa-select` event. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** Set to `checkbox` to make the item a checkbox. Valid values: "normal", "checkbox". */
  lazy val `type`: HtmlAttr[DropdownItemElementType] = unionAttr("type")

  lazy val typ: HtmlAttr[DropdownItemElementType] = `type`

  lazy val tpe: HtmlAttr[DropdownItemElementType] = `type`

  /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
  lazy val checked: HtmlAttr[Boolean] = boolAttr("checked")

  /** Disables the dropdown item. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Whether the submenu is currently open. */
  lazy val submenuOpen: HtmlAttr[Boolean] = boolAttr("submenuOpen")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Slots --

  object slots {
    /** The dropdown item's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An optional icon to display before the label. */
    lazy val icon: Slot = Slot("icon")

    /** Additional content or details to display after the label. */
    lazy val details: Slot = Slot("details")

    /** Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu. */
    lazy val submenu: Slot = Slot("submenu")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The checkmark icon (a `<wa-icon>` element) when the item is a checkbox. */
    lazy val checkmark: String = "checkmark"

    /** The container for the icon slot. */
    lazy val icon: String = "icon"

    /** The container for the label slot. */
    lazy val label: String = "label"

    /** The container for the details slot. */
    lazy val details: String = "details"

    /** The submenu indicator icon (a `<wa-icon>` element). */
    lazy val submenuIcon: String = "submenu-icon"

    /** The submenu container. */
    lazy val submenu: String = "submenu"

  }

  // -- Element type --

  @js.native trait WaDropdownItemComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The type of menu item to render. Valid values: "danger", "default". */
    var variant: DropdownItemVariant

    /** An optional value for the menu item. This is useful for determining which item was selected when listening to the
    dropdown's `wa-select` event. */
    var value: String

    /** Set to `checkbox` to make the item a checkbox. Valid values: "normal", "checkbox". */
    var `type`: DropdownItemElementType

    /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
    var checked: Boolean

    /** Disables the dropdown item. */
    var disabled: Boolean

    /** Whether the submenu is currently open. */
    var submenuOpen: Boolean

    /** Opens the submenu. */
    def openSubmenu(): js.Any = js.native

    /** Closes the submenu. */
    def closeSubmenu(): js.Any = js.native

  }
}