package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactSelectMod extends Shortcut {
  
  /**
    * @summary Selects allow you to choose items from a menu of predefined options.
    * @documentation https://webawesome.com/docs/components/select
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    * @dependency wa-popup
    * @dependency wa-tag
    * @dependency wa-option
    *
    * @slot - The listbox options. Must be `<wa-option>` elements. You can use `<wa-divider>` to group items visually.
    * @slot label - The input's label. Alternatively, you can use the `label` attribute.
    * @slot start - An element, such as `<wa-icon>`, placed at the start of the combobox.
    * @slot end - An element, such as `<wa-icon>`, placed at the end of the combobox.
    * @slot clear-icon - An icon to use in lieu of the default clear icon.
    * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
    * @slot hint - Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
    *
    * @event change - Emitted when the control's value changes.
    * @event input - Emitted when the control receives input.
    * @event focus - Emitted when the control gains focus.
    * @event blur - Emitted when the control loses focus.
    * @event wa-clear - Emitted when the control's value is cleared.
    * @event wa-show - Emitted when the select's menu opens.
    * @event wa-after-show - Emitted after the select's menu opens and all animations are complete.
    * @event wa-hide - Emitted when the select's menu closes.
    * @event wa-after-hide - Emitted after the select's menu closes and all animations are complete.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart form-control - The form control that wraps the label, input, and hint.
    * @csspart form-control-label - The label's wrapper.
    * @csspart form-control-input - The select's wrapper.
    * @csspart hint - The hint's wrapper.
    * @csspart combobox - The container the wraps the start, end, value, clear icon, and expand button.
    * @csspart start - The container that wraps the `start` slot.
    * @csspart end - The container that wraps the `end` slot.
    * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
    * @csspart listbox - The listbox container where options are slotted.
    * @csspart tags - The container that houses option tags when `multiselect` is used.
    * @csspart tag - The individual tags that represent each multiselect option.
    * @csspart tag__content - The tag's content part.
    * @csspart tag__remove-button - The tag's remove button.
    * @csspart tag__remove-button__base - The tag's remove button base part.
    * @csspart clear-button - The clear button.
    * @csspart expand-icon - The container that wraps the expand icon.
    *
    * @cssproperty [--tag-max-size=10ch] - When using `multiple`, the max size of tags before their content is truncated.
    *
    * @cssstate blank - The select is empty.
    */
  @JSImport("@awesome.me/webawesome/dist/react/select", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/select", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/select", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/select", "WaClearEvent")
  @js.native
  open class WaClearEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaClearEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/select", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/react/select", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaInvalidEvent
  
  @JSImport("@awesome.me/webawesome/dist/react/select", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaShowEvent
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactSelectMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = default
}
