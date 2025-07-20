package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactDrawerMod extends Shortcut {
  
  /**
    * @summary Drawers slide in from a container to expose additional options and information.
    * @documentation https://webawesome.com/docs/components/drawer
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    *
    * @slot - The drawer's main content.
    * @slot label - The drawer's label. Alternatively, you can use the `label` attribute.
    * @slot header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @slot footer - The drawer's footer, usually one or more buttons representing various options.
    *
    * @event wa-show - Emitted when the drawer opens.
    * @event wa-after-show - Emitted after the drawer opens and all animations are complete.
    * @event wa-hide - Emitted when the drawer closes.
    * @event wa-after-hide - Emitted after the drawer closes and all animations are complete.
    * @event {{ source: Element }} wa-hide - Emitted when the drawer is requesting to close. Calling
    *  `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which
    *  element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or
    *  the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive
    *  behavior such as data loss.
    *
    * @csspart header - The drawer's header. This element wraps the title and header actions.
    * @csspart header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @csspart title - The drawer's title.
    * @csspart close-button - The close button, a `<wa-button>`.
    * @csspart close-button__base - The close button's exported `base` part.
    * @csspart body - The drawer's body.
    * @csspart footer - The drawer's footer.
    *
    * @cssproperty --spacing - The amount of space around and between the drawer's content.
    * @cssproperty --size - The preferred size of the drawer. This will be applied to the drawer's width or height
    *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.
    * @cssproperty [--show-duration=200ms] - The animation duration when showing the drawer.
    * @cssproperty [--hide-duration=200ms] - The animation duration when hiding the drawer.
    *
    * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus
    *   trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when
    *   the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.
    */
  @JSImport("@awesome.me/webawesome/dist/react/drawer", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/drawer", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/drawer", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/drawer", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/drawer", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactDrawerMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = default
}
