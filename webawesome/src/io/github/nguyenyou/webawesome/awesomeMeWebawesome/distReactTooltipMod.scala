package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactTooltipMod extends Shortcut {
  
  /**
    * @summary Tooltips display additional information based on a specific action.
    * @documentation https://webawesome.com/docs/components/tooltip
    * @status stable
    * @since 2.0
    *
    * @dependency wa-popup
    *
    * @slot - The tooltip's default slot where any content should live. Interactive content should be avoided.
    *
    * @event wa-show - Emitted when the tooltip begins to show.
    * @event wa-after-show - Emitted after the tooltip has shown and all animations are complete.
    * @event wa-hide - Emitted when the tooltip begins to hide.
    * @event wa-after-hide - Emitted after the tooltip has hidden and all animations are complete.
    *
    * @csspart base - The component's base wrapper, an `<wa-popup>` element.
    * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
    * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
    * @csspart body - The tooltip's body where its content is rendered.
    *
    * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
    */
  @JSImport("@awesome.me/webawesome/dist/react/tooltip", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/tooltip", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tooltip", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/tooltip", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/tooltip", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactTooltipMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = default
}
