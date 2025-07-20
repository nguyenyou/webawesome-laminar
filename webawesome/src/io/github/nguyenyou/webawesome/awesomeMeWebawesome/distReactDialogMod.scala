package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactDialogMod extends Shortcut {
  
  /**
    * @summary Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
    * @documentation https://webawesome.com/docs/components/dialog
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    *
    * @slot - The dialog's main content.
    * @slot label - The dialog's label. Alternatively, you can use the `label` attribute.
    * @slot header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @slot footer - The dialog's footer, usually one or more buttons representing various options.
    *
    * @event wa-show - Emitted when the dialog opens.
    * @event wa-after-show - Emitted after the dialog opens and all animations are complete.
    * @event {{ source: Element }} wa-hide - Emitted when the dialog is requested to close. Calling
    *  `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which
    *  element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or
    *  the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive
    *  behavior such as data loss.
    * @event wa-after-hide - Emitted after the dialog closes and all animations are complete.
    *
    * @csspart header - The dialog's header. This element wraps the title and header actions.
    * @csspart header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @csspart title - The dialog's title.
    * @csspart close-button - The close button, a `<wa-button>`.
    * @csspart close-button__base - The close button's exported `base` part.
    * @csspart body - The dialog's body.
    * @csspart footer - The dialog's footer.
    *
    * @cssproperty --spacing - The amount of space around and between the dialog's content.
    * @cssproperty --width - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.
    * @cssproperty [--show-duration=200ms] - The animation duration when showing the dialog.
    * @cssproperty [--hide-duration=200ms] - The animation duration when hiding the dialog.
    */
  @JSImport("@awesome.me/webawesome/dist/react/dialog", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/dialog", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/dialog", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/dialog", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/dialog", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactDialogMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = default
}
