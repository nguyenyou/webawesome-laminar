package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactAvatarMod extends Shortcut {
  
  /**
    * @summary Avatars are used to represent a person or object.
    * @documentation https://webawesome.com/docs/components/avatar
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot icon - The default icon to use when no image or initials are present. Works best with `<wa-icon>`.
    *
    * @event wa-error - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some
    * unknown cause.
    *
    * @csspart icon - The container that wraps the avatar's icon.
    * @csspart initials - The container that wraps the avatar's initials.
    * @csspart image - The avatar image. Only shown when the `image` attribute is set.
    *
    * @cssproperty --size - The size of the avatar.
    */
  @JSImport("@awesome.me/webawesome/dist/react/avatar", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/avatar", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaErrorEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaError :EventName<WaErrorEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactAvatarMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaError :EventName<WaErrorEvent>}> */ Any = default
}
