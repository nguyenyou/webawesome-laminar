package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsSelectMod.WaSelectEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactDropdownMod extends Shortcut {
  
  /**
    * @summary Dropdowns display a list of options that can be triggered by a button or other element. They support
    *  keyboard navigation, submenus, and various customization options.
    * @documentation https://webawesome.com/docs/components/dropdown
    * @status stable
    * @since 2.0
    *
    * @dependency wa-dropdown-item
    * @dependency wa-popup
    *
    * @event wa-show - Emitted when the dropdown is about to show.
    * @event wa-after-show - Emitted after the dropdown has been shown.
    * @event wa-hide - Emitted when the dropdown is about to hide.
    * @event wa-after-hide - Emitted after the dropdown has been hidden.
    * @event wa-select - Emitted when an item in the dropdown is selected.
    *
    * @slot - The dropdown's items, typically `<wa-dropdown-item>` elements.
    * @slot trigger - The element that triggers the dropdown, such as a `<wa-button>` or `<button>`.
    *
    * @csspart base - The component's host element.
    * @csspart menu - The dropdown menu container.
    *
    * @cssproperty --show-duration - The duration of the show animation.
    * @cssproperty --hide-duration - The duration of the hide animation.
    */
  @JSImport("@awesome.me/webawesome/dist/react/dropdown", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaSelect :EventName<WaSelectEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/dropdown", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/dropdown", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/dropdown", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/dropdown", "WaSelectEvent")
  @js.native
  open class WaSelectEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaSelectEvent {
    def this(detail: WaSelectEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/dropdown", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaSelect :EventName<WaSelectEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactDropdownMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaSelect :EventName<WaSelectEvent>}> */ Any = default
}
