package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactPopoverMod extends Shortcut {
  
  /**
    * @summary Popovers display contextual content and interactive elements in a floating panel.
    * @documentation https://webawesome.com/docs/components/popover
    * @status stable
    * @since 3.0
    *
    * @dependency wa-popup
    *
    * @slot - The popover's content. Interactive elements such as buttons and links are supported.
    *
    * @event wa-show - Emitted when the popover begins to show. Canceling this event will stop the popover from showing.
    * @event wa-after-show - Emitted after the popover has shown and all animations are complete.
    * @event wa-hide - Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding.
    * @event wa-after-hide - Emitted after the popover has hidden and all animations are complete.
    *
    * @csspart dialog - The native dialog element that contains the popover content.
    * @csspart body - The popover's body where its content is rendered.
    * @csspart popup - The internal `<wa-popup>` element that positions the popover.
    * @csspart popup__popup - The popup's exported `popup` part. Use this to target the popover's popup container.
    * @csspart popup__arrow - The popup's exported `arrow` part. Use this to target the popover's arrow.
    *
    * @cssproperty [--arrow-size=0.375rem] - The size of the tiny arrow that points to the popover (set to zero to remove).
    * @cssproperty [--max-width=25rem] - The maximum width of the popover's body content.
    * @cssproperty [--show-duration=100ms] - The speed of the show animation.
    * @cssproperty [--hide-duration=100ms] - The speed of the hide animation.
    *
    * @cssstate open - Applied when the popover is open.
    */
  @JSImport("@awesome.me/webawesome/dist/react/popover", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/popover", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/popover", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/popover", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/popover", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactPopoverMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = default
}
