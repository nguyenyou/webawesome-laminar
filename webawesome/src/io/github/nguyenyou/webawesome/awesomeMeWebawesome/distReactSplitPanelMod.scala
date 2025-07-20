package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactSplitPanelMod extends Shortcut {
  
  /**
    * @summary Split panels display two adjacent panels, allowing the user to reposition them.
    * @documentation https://webawesome.com/docs/components/split-panel
    * @status stable
    * @since 2.0
    *
    * @event wa-reposition - Emitted when the divider's position changes.
    *
    * @slot start - Content to place in the start panel.
    * @slot end - Content to place in the end panel.
    * @slot divider - The divider. Useful for slotting in a custom icon that renders as a handle.
    *
    * @csspart start - The start panel.
    * @csspart end - The end panel.
    * @csspart panel - Targets both the start and end panels.
    * @csspart divider - The divider that separates the start and end panels.
    *
    * @cssproperty [--divider-width=4px] - The width of the visible divider.
    * @cssproperty [--divider-hit-area=12px] - The invisible region around the divider where dragging can occur. This is
    *  usually wider than the divider to facilitate easier dragging.
    * @cssproperty [--min=0] - The minimum allowed size of the primary panel.
    * @cssproperty [--max=100%] - The maximum allowed size of the primary panel.
    */
  @JSImport("@awesome.me/webawesome/dist/react/split-panel", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/split-panel", "WaRepositionEvent")
  @js.native
  open class WaRepositionEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaRepositionEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactSplitPanelMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any = default
}
