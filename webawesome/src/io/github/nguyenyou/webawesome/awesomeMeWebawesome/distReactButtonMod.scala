package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactButtonMod extends Shortcut {
  
  /**
    * @summary Buttons represent actions that are available to the user.
    * @documentation https://webawesome.com/docs/components/button
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    * @dependency wa-spinner
    *
    * @event blur - Emitted when the button loses focus.
    * @event focus - Emitted when the button gains focus.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @slot - The button's label.
    * @slot start - An element, such as `<wa-icon>`, placed before the label.
    * @slot end - An element, such as `<wa-icon>`, placed after the label.
    *
    * @csspart base - The component's base wrapper.
    * @csspart start - The container that wraps the `start` slot.
    * @csspart label - The button's label.
    * @csspart end - The container that wraps the `end` slot.
    * @csspart caret - The button's caret icon, a `<wa-icon>` element.
    * @csspart spinner - The spinner that shows when the button is in the loading state.
    */
  @JSImport("@awesome.me/webawesome/dist/react/button", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/button", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactButtonMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
