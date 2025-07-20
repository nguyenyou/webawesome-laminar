package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.checkbox
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.danger
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.normal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import org.scalajs.dom.HTMLDivElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsDropdownItemDropdownItemMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item", JSImport.Default)
  @js.native
  open class default () extends WaDropdownItem
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaDropdownItem
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** @internal The controller will set this property to true when the item is active. */
    var active: Boolean = js.native
    
    /**
      * @internal The controller will set this property to true when at least one checkbox exists in the dropdown. This
      * allows non-checkbox items to draw additional space to align properly with checkbox items.
      */
    var checkboxAdjacent: Boolean = js.native
    
    /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
    var checked: Boolean = js.native
    
    /** Closes the submenu. */
    def closeSubmenu(): js.Promise[Unit] = js.native
    
    override def connectedCallback(): Unit = js.native
    
    /** Disables the dropdown item. */
    var disabled: Boolean = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    def firstUpdated(): Unit = js.native
    
    /** Gets all dropdown items in the submenu. */
    /* private */ var getSubmenuItems: Any = js.native
    
    /** Handles mouse enter to open the submenu */
    /* private */ var handleMouseEnter: Any = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** @internal Store whether this item has a submenu */
    var hasSubmenu: Boolean = js.native
    
    /** Notifies the parent dropdown that this item is opening its submenu */
    /* private */ var notifyParentOfOpening: Any = js.native
    
    /** Opens the submenu. */
    def openSubmenu(): js.Promise[Unit] = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /**
      * @internal The dropdown item's size.
      */
    var size: small | medium | large = js.native
    
    /**
      * @internal The controller will set this property to true when at least one item with a submenu exists in the
      * dropdown. This allows non-submenu items to draw additional space to align properly with items that have submenus.
      */
    var submenuAdjacent: Boolean = js.native
    
    var submenuElement: HTMLDivElement = js.native
    
    /** Whether the submenu is currently open. */
    var submenuOpen: Boolean = js.native
    
    /** Set to `checkbox` to make the item a checkbox. */
    var `type`: normal | checkbox = js.native
    
    /** Update the has-submenu custom state */
    /* private */ var updateHasSubmenuState: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /**
      * An optional value for the menu item. This is useful for determining which item was selected when listening to the
      * dropdown's `wa-select` event.
      */
    var value: String = js.native
    
    /** The type of menu item to render. */
    var variant: danger | io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.default = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-dropdown-item`: WaDropdownItem
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-dropdown-item`: WaDropdownItem): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-dropdown-item")(`wa-dropdown-item`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-dropdown-item`(value: WaDropdownItem): Self = StObject.set(x, "wa-dropdown-item", value.asInstanceOf[js.Any])
      }
    }
  }
}
