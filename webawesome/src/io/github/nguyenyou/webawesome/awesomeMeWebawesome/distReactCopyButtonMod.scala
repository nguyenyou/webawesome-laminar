package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsCopyMod.WaCopyErrorEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactCopyButtonMod extends Shortcut {
  
  /**
    * @summary Copies text data to the clipboard when the user clicks the trigger.
    * @documentation https://webawesome.com/docs/components/copy
    * @status experimental
    * @since 2.7
    *
    * @dependency wa-icon
    * @dependency wa-tooltip
    *
    * @event wa-copy - Emitted when the data has been copied.
    * @event wa-error - Emitted when the data could not be copied.
    *
    * @slot copy-icon - The icon to show in the default copy state. Works best with `<wa-icon>`.
    * @slot success-icon - The icon to show when the content is copied. Works best with `<wa-icon>`.
    * @slot error-icon - The icon to show when a copy error occurs. Works best with `<wa-icon>`.
    *
    * @csspart button - The internal `<button>` element.
    * @csspart copy-icon - The container that holds the copy icon.
    * @csspart success-icon - The container that holds the success icon.
    * @csspart error-icon - The container that holds the error icon.
    * @csspart tooltip__base - The tooltip's exported `base` part.
    * @csspart tooltip__base__popup - The tooltip's exported `popup` part.
    * @csspart tooltip__base__arrow - The tooltip's exported `arrow` part.
    * @csspart tooltip__body - The tooltip's exported `body` part.
    */
  @JSImport("@awesome.me/webawesome/dist/react/copy-button", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCopy :EventName<WaCopyEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/copy-button", "WaCopyEvent")
  @js.native
  open class WaCopyEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaCopyEvent {
    def this(detail: WaCopyErrorEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/copy-button", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaErrorEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCopy :EventName<WaCopyEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactCopyButtonMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCopy :EventName<WaCopyEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = default
}
