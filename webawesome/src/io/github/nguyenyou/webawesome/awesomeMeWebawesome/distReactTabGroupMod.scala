package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsTabHideMod.WaTabHideEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsTabShowMod.WaTabShowEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactTabGroupMod extends Shortcut {
  
  /**
    * @summary Tab groups organize content into a container that shows one section at a time.
    * @documentation https://webawesome.com/docs/components/tab-group
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    * @dependency wa-tab
    * @dependency wa-tab-panel
    *
    * @slot - Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements.
    * @slot nav - Used for grouping tabs in the tab group. Must be `<wa-tab>` elements. Note that `<wa-tab>` will set this
    *  slot on itself automatically.
    *
    * @event {{ name: String }} wa-tab-show - Emitted when a tab is shown.
    * @event {{ name: String }} wa-tab-hide - Emitted when a tab is hidden.
    *
    * @csspart base - The component's base wrapper.
    * @csspart nav - The tab group's navigation container where tabs are slotted in.
    * @csspart tabs - The container that wraps the tabs.
    * @csspart body - The tab group's body where tab panels are slotted in.
    * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, a `<wa-button>`.
    * @csspart scroll-button-start - The starting scroll button.
    * @csspart scroll-button-end - The ending scroll button.
    * @csspart scroll-button__base - The scroll button's exported `base` part.
    *
    * @cssproperty --indicator-color - The color of the active tab indicator.
    * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
    * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
    */
  @JSImport("@awesome.me/webawesome/dist/react/tab-group", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaTabShow :EventName<WaTabShowEvent>,   onWaTabHide :EventName<WaTabHideEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/tab-group", "WaTabHideEvent")
  @js.native
  open class WaTabHideEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaTabHideEvent {
    def this(detail: WaTabHideEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/tab-group", "WaTabShowEvent")
  @js.native
  open class WaTabShowEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaTabShowEvent {
    def this(detail: WaTabShowEventDetail) = this()
  }
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaTabShow :EventName<WaTabShowEvent>,   onWaTabHide :EventName<WaTabHideEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactTabGroupMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaTabShow :EventName<WaTabShowEvent>,   onWaTabHide :EventName<WaTabHideEvent>}> */ Any = default
}
