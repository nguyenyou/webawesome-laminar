package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHoverMod.WaHoverEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactRatingMod extends Shortcut {
  
  /**
    * @summary Ratings give users a way to quickly view and provide feedback.
    * @documentation https://webawesome.com/docs/components/rating
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @event change - Emitted when the rating's value changes.
    * @event {{ phase: 'start' | 'move' | 'end', value: number }} wa-hover - Emitted when the user hovers over a value. The
    *  `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the
    *  rating's value would be if the user were to commit to the hovered value.
    *
    * @csspart base - The component's base wrapper.
    *
    * @cssproperty --symbol-color - The inactive color for symbols.
    * @cssproperty --symbol-color-active - The active color for symbols.
    * @cssproperty --symbol-spacing - The spacing to use around symbols.
    */
  @JSImport("@awesome.me/webawesome/dist/react/rating", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaHover :EventName<WaHoverEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/rating", "WaHoverEvent")
  @js.native
  open class WaHoverEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHoverEvent {
    def this(detail: WaHoverEventDetail) = this()
  }
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaHover :EventName<WaHoverEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactRatingMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaHover :EventName<WaHoverEvent>}> */ Any = default
}
