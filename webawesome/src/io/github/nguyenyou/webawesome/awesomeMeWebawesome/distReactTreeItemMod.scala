package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactTreeItemMod extends Shortcut {
  
  /**
    * @summary A tree item serves as a hierarchical node that lives inside a [tree](/docs/components/tree).
    * @documentation https://webawesome.com/docs/components/tree-item
    * @status stable
    * @since 2.0
    *
    * @dependency wa-checkbox
    * @dependency wa-icon
    * @dependency wa-spinner
    *
    * @event wa-expand - Emitted when the tree item expands.
    * @event wa-after-expand - Emitted after the tree item expands and all animations are complete.
    * @event wa-collapse - Emitted when the tree item collapses.
    * @event wa-after-collapse - Emitted after the tree item collapses and all animations are complete.
    * @event wa-lazy-change - Emitted when the tree item's lazy state changes.
    * @event wa-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
    *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
    *  state and update the tree.
    *
    * @slot - The default slot.
    * @slot expand-icon - The icon to show when the tree item is expanded.
    * @slot collapse-icon - The icon to show when the tree item is collapsed.
    *
    * @csspart base - The component's base wrapper.
    * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
    * @csspart indentation - The tree item's indentation container.
    * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
    * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.
    * @csspart spinner__base - The spinner's base part.
    * @csspart label - The tree item's label.
    * @csspart children - The container that wraps the tree item's nested children.
    * @csspart checkbox - The checkbox that shows when using multiselect.
    * @csspart checkbox__base - The checkbox's exported `base` part.
    * @csspart checkbox__control - The checkbox's exported `control` part.
    * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
    * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
    * @csspart checkbox__label - The checkbox's exported `label` part.
    *
    * @cssproperty [--show-duration=200ms] - The animation duration when expanding tree items.
    * @cssproperty [--hide-duration=200ms] - The animation duration when collapsing tree items.
    *
    * @cssstate disabled - Applied when the tree item is disabled.
    * @cssstate expanded - Applied when the tree item is expanded.
    * @cssstate indeterminate - Applied when the selection is indeterminate.
    * @cssstate selected - Applied when the tree item is selected.
    */
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaExpand :EventName<WaExpandEvent>,   onWaAfterExpand :EventName<WaAfterExpandEvent>,   onWaCollapse :EventName<WaCollapseEvent>,   onWaAfterCollapse :EventName<WaAfterCollapseEvent>,   onWaLazyChange :EventName<WaLazyChangeEvent>,   onWaLazyLoad :EventName<WaLazyLoadEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", "WaAfterCollapseEvent")
  @js.native
  open class WaAfterCollapseEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterCollapseEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", "WaAfterExpandEvent")
  @js.native
  open class WaAfterExpandEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterExpandEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", "WaCollapseEvent")
  @js.native
  open class WaCollapseEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaCollapseEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", "WaExpandEvent")
  @js.native
  open class WaExpandEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaExpandEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", "WaLazyChangeEvent")
  @js.native
  open class WaLazyChangeEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaLazyChangeEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tree-item", "WaLazyLoadEvent")
  @js.native
  open class WaLazyLoadEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaLazyLoadEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaExpand :EventName<WaExpandEvent>,   onWaAfterExpand :EventName<WaAfterExpandEvent>,   onWaCollapse :EventName<WaCollapseEvent>,   onWaAfterCollapse :EventName<WaAfterCollapseEvent>,   onWaLazyChange :EventName<WaLazyChangeEvent>,   onWaLazyLoad :EventName<WaLazyLoadEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactTreeItemMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaExpand :EventName<WaExpandEvent>,   onWaAfterExpand :EventName<WaAfterExpandEvent>,   onWaCollapse :EventName<WaCollapseEvent>,   onWaAfterCollapse :EventName<WaAfterCollapseEvent>,   onWaLazyChange :EventName<WaLazyChangeEvent>,   onWaLazyLoad :EventName<WaLazyLoadEvent>}> */ Any = default
}
