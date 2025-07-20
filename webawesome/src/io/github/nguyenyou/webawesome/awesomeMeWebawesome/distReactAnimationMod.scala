package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactAnimationMod extends Shortcut {
  
  /**
    * @summary Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
    * @documentation https://webawesome.com/docs/components/animation
    * @status stable
    * @since 2.0
    *
    * @event wa-cancel - Emitted when the animation is canceled.
    * @event wa-finish - Emitted when the animation finishes.
    * @event wa-start - Emitted when the animation starts or restarts.
    *
    * @slot - The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To
    *  animate multiple elements, either wrap them in a single container or use multiple `<wa-animation>` elements.
    */
  @JSImport("@awesome.me/webawesome/dist/react/animation", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCancel :EventName<WaCancelEvent>,   onWaFinish :EventName<WaFinishEvent>,   onWaStart :EventName<WaStartEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/animation", "WaCancelEvent")
  @js.native
  open class WaCancelEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaCancelEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/animation", "WaFinishEvent")
  @js.native
  open class WaFinishEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaFinishEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/animation", "WaStartEvent")
  @js.native
  open class WaStartEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaStartEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCancel :EventName<WaCancelEvent>,   onWaFinish :EventName<WaFinishEvent>,   onWaStart :EventName<WaStartEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactAnimationMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCancel :EventName<WaCancelEvent>,   onWaFinish :EventName<WaFinishEvent>,   onWaStart :EventName<WaStartEvent>}> */ Any = default
}
