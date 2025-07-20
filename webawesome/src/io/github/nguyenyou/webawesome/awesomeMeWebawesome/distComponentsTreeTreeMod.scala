package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.leaf
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.multiple
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.single
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalajs.dom.MouseEvent
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTreeTreeMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/tree/tree", JSImport.Default)
  @js.native
  open class default () extends WaTree
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/tree/tree", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/tree/tree", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTree
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ var clickTarget: Any = js.native
    
    var collapsedIconSlot: HTMLSlotElement = js.native
    
    override def connectedCallback(): js.Promise[Unit] = js.native
    
    var defaultSlot: HTMLSlotElement = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    var expandedIconSlot: HTMLSlotElement = js.native
    
    /* private */ var focusItem: Any = js.native
    
    /* private */ var getAllTreeItems: Any = js.native
    
    /* private */ var getExpandButtonIcon: Any = js.native
    
    /** @internal Gets focusable tree items in the tree. */
    def getFocusableItems(): js.Array[
        io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsTreeItemTreeItemMod.default
      ] = js.native
    
    /* private */ var handleClick: Any = js.native
    
    /* private */ var handleFocusIn: Any = js.native
    
    /* private */ var handleFocusOut: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    def handleMouseDown(event: MouseEvent): Unit = js.native
    
    def handleSelectionChange(): js.Promise[Unit] = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    /* private */ var handleTreeChanged: Any = js.native
    
    /* private */ var initTreeItem: Any = js.native
    
    /* private */ var lastFocusedItem: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /* private */ var mutationObserver: Any = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var selectItem: Any = js.native
    
    /** @internal Returns the list of tree items that are selected in the tree. */
    def selectedItems: js.Array[
        io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsTreeItemTreeItemMod.default
      ] = js.native
    
    /**
      * The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
      * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
      */
    var selection: single | multiple | leaf = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-tree`: WaTree
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-tree`: WaTree): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-tree")(`wa-tree`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-tree`(value: WaTree): Self = StObject.set(x, "wa-tree", value.asInstanceOf[js.Any])
      }
    }
  }
}
