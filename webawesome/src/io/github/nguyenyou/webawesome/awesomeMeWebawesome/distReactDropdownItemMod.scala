package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactDropdownItemMod extends Shortcut {
  
  /**
    * @summary Represents an individual item within a dropdown menu, supporting standard items, checkboxes, and submenus.
    * @documentation https://webawesome.com/docs/components/dropdown-item
    * @status experimental
    * @since 3.0
    *
    * @dependency wa-icon
    *
    * @event blur - Emitted when the dropdown item loses focus.
    * @event focus - Emitted when the dropdown item gains focus.
    *
    * @slot - The dropdown item's label.
    * @slot icon - An optional icon to display before the label.
    * @slot details - Additional content or details to display after the label.
    * @slot submenu - Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu.
    *
    * @csspart checkmark - The checkmark icon (a `<wa-icon>` element) when the item is a checkbox.
    * @csspart icon - The container for the icon slot.
    * @csspart label - The container for the label slot.
    * @csspart details - The container for the details slot.
    * @csspart submenu-icon - The submenu indicator icon (a `<wa-icon>` element).
    * @csspart submenu - The submenu container.
    */
  @JSImport("@awesome.me/webawesome/dist/react/dropdown-item", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactDropdownItemMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = default
}
