package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsSlideChangeMod.WaSlideChangeEventDetails
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactCarouselMod extends Shortcut {
  
  /**
    * @summary Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
    *
    * @since 2.2
    * @status experimental
    *
    * @dependency wa-icon
    *
    * @event {{ index: number, slide: WaCarouselItem }} wa-slide-change - Emitted when the active slide changes.
    *
    * @slot - The carousel's main content, one or more `<wa-carousel-item>` elements.
    * @slot next-icon - Optional next icon to use instead of the default. Works best with `<wa-icon>`.
    * @slot previous-icon - Optional previous icon to use instead of the default. Works best with `<wa-icon>`.
    *
    * @csspart base - The carousel's internal wrapper.
    * @csspart scroll-container - The scroll container that wraps the slides.
    * @csspart pagination - The pagination indicators wrapper.
    * @csspart pagination-item - The pagination indicator.
    * @csspart pagination-item-active - Applied when the item is active.
    * @csspart navigation - The navigation wrapper.
    * @csspart navigation-button - The navigation button.
    * @csspart navigation-button-previous - Applied to the previous button.
    * @csspart navigation-button-next - Applied to the next button.
    *
    * @cssproperty [--aspect-ratio=16/9] - The aspect ratio of each slide.
    * @cssproperty --scroll-hint - The amount of padding to apply to the scroll area, allowing adjacent slides to become
    *  partially visible as a scroll hint.
    * @cssproperty [--slide-gap=var(--wa-space-m)] - The space between each slide.
    */
  @JSImport("@awesome.me/webawesome/dist/react/carousel", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSlideChange :EventName<WaSlideChangeEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/carousel", "WaSlideChangeEvent")
  @js.native
  open class WaSlideChangeEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaSlideChangeEvent {
    def this(detail: WaSlideChangeEventDetails) = this()
  }
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSlideChange :EventName<WaSlideChangeEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactCarouselMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSlideChange :EventName<WaSlideChangeEvent>}> */ Any = default
}
