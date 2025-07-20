package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactPopupMod extends Shortcut {
  
  /**
    * @summary Popup is a utility that lets you declaratively anchor "popup" containers to another element.
    * @documentation https://webawesome.com/docs/components/popup
    * @status stable
    * @since 2.0
    *
    * @event wa-reposition - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive
    *  operations in your listener or consider debouncing it.
    *
    * @slot - The popup's content.
    * @slot anchor - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the
    *  `anchor` attribute or property instead.
    *
    * @csspart arrow - The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are
    *  assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and
    *  maybe a border or box shadow.
    * @csspart popup - The popup's container. Useful for setting a background color, box shadow, etc.
    * @csspart hover-bridge - The hover bridge element. Only available when the `hover-bridge` option is enabled.
    *
    * @cssproperty [--arrow-size=6px] - The size of the arrow. Note that an arrow won't be shown unless the `arrow`
    *  attribute is used.
    * @cssproperty [--arrow-color=black] - The color of the arrow.
    * @cssproperty [--auto-size-available-width] - A read-only custom property that determines the amount of width the
    *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only
    *  available when using `auto-size`.
    * @cssproperty [--auto-size-available-height] - A read-only custom property that determines the amount of height the
    *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only
    *  available when using `auto-size`.
    * @cssproperty [--show-duration=100ms] - The show duration to use when applying built-in animation classes.
    * @cssproperty [--hide-duration=100ms] - The hide duration to use when applying built-in animation classes.
    */
  @JSImport("@awesome.me/webawesome/dist/react/popup", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/popup", "WaRepositionEvent")
  @js.native
  open class WaRepositionEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaRepositionEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactPopupMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any = default
}
