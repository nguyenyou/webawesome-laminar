package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`bottom-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`bottom-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`left-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`left-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`right-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`right-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`top-end`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`top-start`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.right
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsDropdownDropdownMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/dropdown/dropdown", JSImport.Default)
  @js.native
  open class default () extends WaDropdown
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/dropdown/dropdown", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/dropdown/dropdown", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/dropdown/dropdown", "default.handleSubmenuSlotChange")
    @js.native
    def handleSubmenuSlotChange: Any = js.native
    inline def handleSubmenuSlotChange_=(x: Any): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("handleSubmenuSlotChange")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaDropdown
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** Handles the submenu navigation stack */
    /* private */ var addToSubmenuStack: Any = js.native
    
    /** Cleans up submenu positioning */
    /* private */ var cleanupSubmenuPosition: Any = js.native
    
    /** Closes all submenus in the dropdown. */
    /* private */ var closeAllSubmenus: Any = js.native
    
    /** Closes sibling submenus at the same level as the specified item. */
    /* private */ var closeSiblingSubmenus: Any = js.native
    
    var defaultSlot: HTMLSlotElement = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /** The distance of the dropdown menu from its trigger. */
    var distance: Double = js.native
    
    def firstUpdated(): Unit = js.native
    
    /** Gets the current active submenu item */
    /* private */ var getCurrentSubmenuItem: Any = js.native
    
    /** Gets all <wa-dropdown-item> elements slotted in the menu that aren't disabled. */
    /* private */ var getItems: Any = js.native
    
    /** Gets all dropdown items in a specific submenu. */
    /* private */ var getSubmenuItems: Any = js.native
    
    /** Get the slotted trigger button, a <wa-button> or <button> element */
    /* private */ var getTrigger: Any = js.native
    
    /** Handles key down events when the menu is open */
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    /** Handles pointer down events when the dropdown is open. */
    /* private */ var handleDocumentPointerDown: Any = js.native
    
    /** Handle global mouse movement for safe triangle logic */
    /* private */ var handleGlobalMouseMove: Any = js.native
    
    /** Handles clicks on the menu. */
    /* private */ var handleMenuClick: Any = js.native
    
    /** Prepares dropdown items when they get added or removed */
    /* private */ var handleMenuSlotChange: Any = js.native
    
    /** Handles submenu opening events */
    /* private */ var handleSubmenuOpening: Any = js.native
    
    /** Toggles the dropdown menu */
    /* private */ var handleTriggerClick: Any = js.native
    
    /** Hides the dropdown menu. This should only be called from within updated(). */
    /* private */ var hideMenu: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /** Makes a selection, emits the wa-select event, and closes the dropdown. */
    /* private */ var makeSelection: Any = js.native
    
    /* private */ var menu: Any = js.native
    
    /** Opens or closes the dropdown. */
    var open: Boolean = js.native
    
    /* private */ var openSubmenuStack: Any = js.native
    
    /**
      * The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
      * the preferred placement doesn't have enough room.
      */
    var placement: top | `top-start` | `top-end` | bottom | `bottom-start` | `bottom-end` | right | `right-start` | `right-end` | left | `left-start` | `left-end` = js.native
    
    /* private */ var popup: Any = js.native
    
    /** Positions a submenu relative to its parent item */
    /* private */ var positionSubmenu: Any = js.native
    
    /* private */ var processSubmenuItems: Any = js.native
    
    /** Removes the last item from the submenu stack */
    /* private */ var removeFromSubmenuStack: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** Sets up submenu positioning with autoUpdate */
    /* private */ var setupSubmenuPosition: Any = js.native
    
    /** Shows the dropdown menu. This should only be called from within updated(). */
    /* private */ var showMenu: Any = js.native
    
    /** The dropdown's size. */
    var size: small | medium | large = js.native
    
    /** The offset of the dropdown menu along its trigger. */
    var skidding: Double = js.native
    
    /* private */ var submenuCleanups: Any = js.native
    
    /** Syncs aria attributes on the slotted trigger element and the menu based on the dropdown's current state */
    /* private */ var syncAriaAttributes: Any = js.native
    
    /** Syncs item sizes with the dropdown's size property. */
    /* private */ var syncItemSizes: Any = js.native
    
    /** Updates the safe triangle coordinates for a submenu */
    /* private */ var updateSafeTriangleCoordinates: Any = js.native
    
    def updated(changedProperties: PropertyValues[Any]): js.Promise[Unit] = js.native
    
    /* private */ var userTypedQuery: Any = js.native
    
    /* private */ var userTypedTimeout: Any = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-dropdown`: WaDropdown
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-dropdown`: WaDropdown): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-dropdown")(`wa-dropdown`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-dropdown`(value: WaDropdown): Self = StObject.set(x, "wa-dropdown", value.asInstanceOf[js.Any])
      }
    }
  }
}
