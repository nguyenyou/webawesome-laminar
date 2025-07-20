package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactCheckboxMod extends Shortcut {
  
  /**
    * @summary Checkboxes allow the user to toggle an option on or off.
    * @documentation https://webawesome.com/docs/components/checkbox
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot - The checkbox's label.
    * @slot hint - Text that describes how to use the checkbox. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the checkbox loses focus.
    * @event change - Emitted when the checked state changes.
    * @event focus - Emitted when the checkbox gains focus.
    * @event input - Emitted when the checkbox receives input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart base - The component's label .
    * @csspart control - The square container that wraps the checkbox's checked state.
    * @csspart checked-icon - The checked icon, a `<wa-icon>` element.
    * @csspart indeterminate-icon - The indeterminate icon, a `<wa-icon>` element.
    * @csspart label - The container that wraps the checkbox's label.
    * @csspart hint - The hint's wrapper.
    *
    * @cssproperty --checked-icon-color - The color of the checked and indeterminate icons.
    * @cssproperty --checked-icon-scale - The size of the checked and indeterminate icons relative to the checkbox.
    *
    * @cssstate checked - Applied when the checkbox is checked.
    * @cssstate disabled - Applied when the checkbox is disabled.
    * @cssstate indeterminate - Applied when the checkbox is in an indeterminate state.
    *
    */
  @JSImport("@awesome.me/webawesome/dist/react/checkbox", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/checkbox", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactCheckboxMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
