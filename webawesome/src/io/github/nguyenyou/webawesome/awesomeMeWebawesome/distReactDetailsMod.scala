package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactDetailsMod extends Shortcut {
  
  /**
    * @summary Details show a brief summary and expand to show additional content.
    * @documentation https://webawesome.com/docs/components/details
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot - The details' main content.
    * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
    * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<wa-icon>`.
    * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<wa-icon>`.
    *
    * @event wa-show - Emitted when the details opens.
    * @event wa-after-show - Emitted after the details opens and all animations are complete.
    * @event wa-hide - Emitted when the details closes.
    * @event wa-after-hide - Emitted after the details closes and all animations are complete.
    *
    * @csspart base - The inner `<details>` element used to render the component.
    *                 Styles you apply to the component are automatically applied to this part, so you usually don't need to deal with it unless you need to set the `display` property.
    * @csspart header - The header that wraps both the summary and the expand/collapse icon.
    * @csspart summary - The container that wraps the summary.
    * @csspart icon - The container that wraps the expand/collapse icons.
    * @csspart content - The details content.
    *
    * @cssproperty --spacing - The amount of space around and between the details' content. Expects a single value.
    * @cssproperty [--show-duration=200ms] - The show duration to use when applying built-in animation classes.
    * @cssproperty [--hide-duration=200ms] - The hide duration to use when applying built-in animation classes.
    */
  @JSImport("@awesome.me/webawesome/dist/react/details", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/details", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/details", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/details", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/details", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactDetailsMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = default
}
