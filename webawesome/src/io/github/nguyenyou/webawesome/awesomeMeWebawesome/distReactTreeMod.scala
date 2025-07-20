package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsSelectionChangeMod.WaSelectionChangeEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactTreeMod extends Shortcut {
  
  /**
    * @summary Trees allow you to display a hierarchical list of selectable [tree items](/docs/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
    * @documentation https://webawesome.com/docs/components/tree
    * @status stable
    * @since 2.0
    *
    * @dependency wa-tree-item
    *
    * @event {{ selection: WaTreeItem[] }} wa-selection-change - Emitted when a tree item is selected or deselected.
    *
    * @slot - The default slot.
    * @slot expand-icon - The icon to show when the tree item is expanded. Works best with `<wa-icon>`.
    * @slot collapse-icon - The icon to show when the tree item is collapsed. Works best with `<wa-icon>`.
    *
    * @csspart base - The component's base wrapper.
    *
    * @cssproperty [--indent-size=var(--wa-spacing-m)] - The size of the indentation for nested items.
    * @cssproperty [--indent-guide-color=var(--wa-color-surface-border)] - The color of the indentation line.
    * @cssproperty [--indent-guide-offset=0] - The amount of vertical spacing to leave between the top and bottom of the
    *  indentation line's starting position.
    * @cssproperty [--indent-guide-style=solid] - The style of the indentation line, e.g. solid, dotted, dashed.
    * @cssproperty [--indent-guide-width=0] - The width of the indentation line.
    */
  @JSImport("@awesome.me/webawesome/dist/react/tree", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSelectionChange :EventName<WaSelectionChangeEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/tree", "WaSelectionChangeEvent")
  @js.native
  open class WaSelectionChangeEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaSelectionChangeEvent {
    def this(detail: WaSelectionChangeEventDetail) = this()
  }
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSelectionChange :EventName<WaSelectionChangeEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactTreeMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSelectionChange :EventName<WaSelectionChangeEvent>}> */ Any = default
}
