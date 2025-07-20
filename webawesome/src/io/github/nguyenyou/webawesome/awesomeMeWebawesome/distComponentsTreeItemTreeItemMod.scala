package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.IncludeDisabled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValueMap
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import io.github.nguyenyou.webawesome.std.Map
import io.github.nguyenyou.webawesome.std.PropertyKey
import org.scalajs.dom.HTMLDivElement
import org.scalajs.dom.Node
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTreeItemTreeItemMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tree-item/tree-item", JSImport.Default)
  @js.native
  open class default () extends WaTreeItem
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tree-item/tree-item", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tree-item/tree-item", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    inline def isTreeItem(node: Node): Boolean = ^.asInstanceOf[js.Dynamic].applyDynamic("isTreeItem")(node.asInstanceOf[js.Any]).asInstanceOf[Boolean]
  }
  
  @js.native
  trait WaTreeItem
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ var animateCollapse: Any = js.native
    
    /* private */ var animateExpand: Any = js.native
    
    var childrenContainer: HTMLDivElement = js.native
    
    var childrenSlot: HTMLSlotElement = js.native
    
    def connectedCallback(): Unit = js.native
    
    var defaultSlot: HTMLSlotElement = js.native
    
    /** Disables the tree item. */
    var disabled: Boolean = js.native
    
    var expandButtonSlot: HTMLSlotElement = js.native
    
    /** Expands the tree item. */
    var expanded: Boolean = js.native
    
    def firstUpdated(): Unit = js.native
    
    /** Gets all the nested tree items in this node. */
    def getChildrenItems(): js.Array[WaTreeItem] = js.native
    def getChildrenItems(param0: IncludeDisabled): js.Array[WaTreeItem] = js.native
    
    /* private */ var handleChildrenSlotChange: Any = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    def handleExpandAnimation(): Unit = js.native
    
    def handleExpandedChange(): Unit = js.native
    
    def handleExpandedState(): Unit = js.native
    
    def handleIndeterminateStateChange(): Unit = js.native
    
    def handleLazyChange(): Unit = js.native
    
    def handleLoadingChange(): Unit = js.native
    
    def handleSelectedChange(): Unit = js.native
    
    var indeterminate: Boolean = js.native
    
    var isLeaf: Boolean = js.native
    
    /* private */ var isNestedItem: Any = js.native
    
    var itemElement: HTMLDivElement = js.native
    
    /** Enables lazy loading behavior. */
    var `lazy`: Boolean = js.native
    
    var loading: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    var selectable: Boolean = js.native
    
    /** Draws the tree item in a selected state. */
    var selected: Boolean = js.native
    
    /* protected */ def willUpdate(changedProperties: PropertyValueMap[WaTreeItem]): Unit = js.native
    /* protected */ def willUpdate(changedProperties: Map[PropertyKey, Any]): Unit = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tree-item`: WaTreeItem
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tree-item`: WaTreeItem): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tree-item")(`wa-tree-item`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tree-item`(value: WaTreeItem): Self = StObject.set(x, "wa-tree-item", value.asInstanceOf[js.Any])
      }
    }
  }
}
