package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactMod {
  
  /**
    * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
    * @documentation https://webawesome.com/docs/components/animated-image
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @event wa-load - Emitted when the image loads successfully.
    * @event wa-error - Emitted when the image fails to load.
    *
    * @slot play-icon - Optional play icon to use instead of the default. Works best with `<wa-icon>`.
    * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<wa-icon>`.
    *
    * @csspart control-box - The container that surrounds the pause/play icons and provides their background.
    *
    * @cssproperty --control-box-size - The size of the icon box.
    * @cssproperty --icon-size - The size of the play/pause icons.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaAnimatedImage")
  @js.native
  val WaAnimatedImage: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaAnimation")
  @js.native
  val WaAnimation: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCancel :EventName<WaCancelEvent>,   onWaFinish :EventName<WaFinishEvent>,   onWaStart :EventName<WaStartEvent>}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaAvatar")
  @js.native
  val WaAvatar: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  /**
    * @summary Badges are used to draw attention and display statuses or counts.
    * @documentation https://webawesome.com/docs/components/badge
    * @status stable
    * @since 2.0
    *
    * @slot - The badge's content.
    *
    * @csspart base - The component's base wrapper.
    *
    * @cssproperty --pulse-color - The color of the badge's pulse effect when using `attention="pulse"`.
    *
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaBadge")
  @js.native
  val WaBadge: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
    * @documentation https://webawesome.com/docs/components/breadcrumb
    * @status stable
    * @since 2.0
    *
    * @slot - One or more breadcrumb items to display.
    * @slot separator - The separator to use between breadcrumb items. Works best with `<wa-icon>`.
    *
    * @dependency wa-icon
    *
    * @csspart base - The component's base wrapper.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaBreadcrumb")
  @js.native
  val WaBreadcrumb: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Breadcrumb Items are used inside breadcrumbs to represent different links.
    * @documentation https://webawesome.com/docs/components/breadcrumb-item
    * @status stable
    * @since 2.0
    *
    * @slot - The breadcrumb item's label.
    * @slot start - An element, such as `<wa-icon>`, placed before the label.
    * @slot end - An element, such as `<wa-icon>`, placed after the label.
    * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If
    * you want to change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.
    *
    * @csspart label - The breadcrumb item's label.
    * @csspart start - The container that wraps the `start` slot.
    * @csspart end - The container that wraps the `end` slot.
    * @csspart separator - The container that wraps the separator.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaBreadcrumbItem")
  @js.native
  val WaBreadcrumbItem: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaButton")
  @js.native
  val WaButton: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Button groups can be used to group related buttons into sections.
    * @documentation https://webawesome.com/docs/components/button-group
    * @status stable
    * @since 2.0
    *
    * @slot - One or more `<wa-button>` elements to display in the button group.
    *
    * @csspart base - The component's base wrapper.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaButtonGroup")
  @js.native
  val WaButtonGroup: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Callouts are used to display important messages inline.
    * @documentation https://webawesome.com/docs/components/callout
    * @status stable
    * @since 2.0
    *
    * @slot - The callout's main content.
    * @slot icon - An icon to show in the callout. Works best with `<wa-icon>`.
    *
    * @csspart icon - The container that wraps the optional icon.
    * @csspart message - The container that wraps the callout's main content.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaCallout")
  @js.native
  val WaCallout: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Cards can be used to group related subjects in a container.
    * @documentation https://webawesome.com/docs/components/card
    * @status stable
    * @since 2.0
    *
    * @slot - The card's main content.
    * @slot header - An optional header for the card.
    * @slot footer - An optional footer for the card.
    * @slot media - An optional media section to render at the start of the card.
    *
    * @csspart media - The container that wraps the card's media.
    * @csspart header - The container that wraps the card's header.
    * @csspart body - The container that wraps the card's main content.
    * @csspart footer - The container that wraps the card's footer.
    *
    * @cssproperty [--spacing=var(--wa-space-l)] - The amount of space around and between sections of the card. Expects a single value.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaCard")
  @js.native
  val WaCard: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaCarousel")
  @js.native
  val WaCarousel: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSlideChange :EventName<WaSlideChangeEvent>}> */ Any = js.native
  
  /**
    * @summary A carousel item represent a slide within a carousel.
    *
    * @since 2.0
    * @status experimental
    *
    * @slot - The carousel item's content..
    *
    * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
    *
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaCarouselItem")
  @js.native
  val WaCarouselItem: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaCheckbox")
  @js.native
  val WaCheckbox: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Color pickers allow the user to select a color.
    * @documentation https://webawesome.com/docs/components/color-picker
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    * @dependency wa-button-group
    * @dependency wa-input
    * @dependency wa-popup
    * @dependency wa-visually-hidden
    *
    * @slot label - The color picker's form label. Alternatively, you can use the `label` attribute.
    * @slot hint - The color picker's form hint. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the color picker loses focus.
    * @event change - Emitted when the color picker's value changes.
    * @event focus - Emitted when the color picker receives focus.
    * @event input - Emitted when the color picker receives input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart base - The component's base wrapper.
    * @csspart trigger - The color picker's dropdown trigger.
    * @csspart swatches - The container that holds the swatches.
    * @csspart swatch - Each individual swatch.
    * @csspart grid - The color grid.
    * @csspart grid-handle - The color grid's handle.
    * @csspart slider - Hue and opacity sliders.
    * @csspart slider-handle - Hue and opacity slider handles.
    * @csspart hue-slider - The hue slider.
    * @csspart hue-slider-handle - The hue slider's handle.
    * @csspart opacity-slider - The opacity slider.
    * @csspart opacity-slider-handle - The opacity slider's handle.
    * @csspart preview - The preview color.
    * @csspart input - The text input.
    * @csspart eyedropper-button - The eye dropper button.
    * @csspart eyedropper-button__base - The eye dropper button's exported `button` part.
    * @csspart eyedropper-button__start - The eye dropper button's exported `start` part.
    * @csspart eyedropper-button__label - The eye dropper button's exported `label` part.
    * @csspart eyedropper-button__end - The eye dropper button's exported `end` part.
    * @csspart eyedropper-button__caret - The eye dropper button's exported `caret` part.
    * @csspart format-button - The format button.
    * @csspart format-button__base - The format button's exported `button` part.
    * @csspart format-button__start - The format button's exported `start` part.
    * @csspart format-button__label - The format button's exported `label` part.
    * @csspart format-button__end - The format button's exported `end` part.
    * @csspart format-button__caret - The format button's exported `caret` part.
    *
    * @cssproperty --grid-width - The width of the color grid.
    * @cssproperty --grid-height - The height of the color grid.
    * @cssproperty --grid-handle-size - The size of the color grid's handle.
    * @cssproperty --slider-height - The height of the hue and alpha sliders.
    * @cssproperty --slider-handle-size - The diameter of the slider's handle.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaColorPicker")
  @js.native
  val WaColorPicker: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Compare visual differences between similar content with a sliding panel.
    * @documentation https://webawesome.com/docs/components/comparison
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot before - The before content, often an `<img>` or `<svg>` element.
    * @slot after - The after content, often an `<img>` or `<svg>` element.
    * @slot handle - The icon used inside the handle.
    *
    * @event change - Emitted when the position changes.
    *
    * @csspart base - The container that wraps the before and after content.
    * @csspart before - The container that wraps the before content.
    * @csspart after - The container that wraps the after content.
    * @csspart divider - The divider that separates the before and after content.
    * @csspart handle - The handle that the user drags to expose the after content.
    *
    * @cssproperty --divider-width - The width of the dividing line.
    * @cssproperty --handle-size - The size of the compare handle.
    *
    * @cssstate dragging - Applied when the comparison is being dragged.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaComparison")
  @js.native
  val WaComparison: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaCopyButton")
  @js.native
  val WaCopyButton: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaCopy :EventName<WaCopyEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaDetails")
  @js.native
  val WaDetails: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  /**
    * @summary Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
    * @documentation https://webawesome.com/docs/components/dialog
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    *
    * @slot - The dialog's main content.
    * @slot label - The dialog's label. Alternatively, you can use the `label` attribute.
    * @slot header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @slot footer - The dialog's footer, usually one or more buttons representing various options.
    *
    * @event wa-show - Emitted when the dialog opens.
    * @event wa-after-show - Emitted after the dialog opens and all animations are complete.
    * @event {{ source: Element }} wa-hide - Emitted when the dialog is requested to close. Calling
    *  `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which
    *  element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or
    *  the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive
    *  behavior such as data loss.
    * @event wa-after-hide - Emitted after the dialog closes and all animations are complete.
    *
    * @csspart header - The dialog's header. This element wraps the title and header actions.
    * @csspart header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @csspart title - The dialog's title.
    * @csspart close-button - The close button, a `<wa-button>`.
    * @csspart close-button__base - The close button's exported `base` part.
    * @csspart body - The dialog's body.
    * @csspart footer - The dialog's footer.
    *
    * @cssproperty --spacing - The amount of space around and between the dialog's content.
    * @cssproperty --width - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.
    * @cssproperty [--show-duration=200ms] - The animation duration when showing the dialog.
    * @cssproperty [--hide-duration=200ms] - The animation duration when hiding the dialog.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaDialog")
  @js.native
  val WaDialog: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  /**
    * @summary Dividers are used to visually separate or group elements.
    * @documentation https://webawesome.com/docs/components/divider
    * @status stable
    * @since 2.0
    *
    * @cssproperty --color - The color of the divider.
    * @cssproperty --width - The width of the divider.
    * @cssproperty --spacing - The spacing of the divider.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaDivider")
  @js.native
  val WaDivider: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Drawers slide in from a container to expose additional options and information.
    * @documentation https://webawesome.com/docs/components/drawer
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    *
    * @slot - The drawer's main content.
    * @slot label - The drawer's label. Alternatively, you can use the `label` attribute.
    * @slot header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @slot footer - The drawer's footer, usually one or more buttons representing various options.
    *
    * @event wa-show - Emitted when the drawer opens.
    * @event wa-after-show - Emitted after the drawer opens and all animations are complete.
    * @event wa-hide - Emitted when the drawer closes.
    * @event wa-after-hide - Emitted after the drawer closes and all animations are complete.
    * @event {{ source: Element }} wa-hide - Emitted when the drawer is requesting to close. Calling
    *  `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which
    *  element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or
    *  the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive
    *  behavior such as data loss.
    *
    * @csspart header - The drawer's header. This element wraps the title and header actions.
    * @csspart header-actions - Optional actions to add to the header. Works best with `<wa-button>`.
    * @csspart title - The drawer's title.
    * @csspart close-button - The close button, a `<wa-button>`.
    * @csspart close-button__base - The close button's exported `base` part.
    * @csspart body - The drawer's body.
    * @csspart footer - The drawer's footer.
    *
    * @cssproperty --spacing - The amount of space around and between the drawer's content.
    * @cssproperty --size - The preferred size of the drawer. This will be applied to the drawer's width or height
    *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.
    * @cssproperty [--show-duration=200ms] - The animation duration when showing the drawer.
    * @cssproperty [--hide-duration=200ms] - The animation duration when hiding the drawer.
    *
    * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus
    *   trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when
    *   the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaDrawer")
  @js.native
  val WaDrawer: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  /**
    * @summary Dropdowns display a list of options that can be triggered by a button or other element. They support
    *  keyboard navigation, submenus, and various customization options.
    * @documentation https://webawesome.com/docs/components/dropdown
    * @status stable
    * @since 2.0
    *
    * @dependency wa-dropdown-item
    * @dependency wa-popup
    *
    * @event wa-show - Emitted when the dropdown is about to show.
    * @event wa-after-show - Emitted after the dropdown has been shown.
    * @event wa-hide - Emitted when the dropdown is about to hide.
    * @event wa-after-hide - Emitted after the dropdown has been hidden.
    * @event wa-select - Emitted when an item in the dropdown is selected.
    *
    * @slot - The dropdown's items, typically `<wa-dropdown-item>` elements.
    * @slot trigger - The element that triggers the dropdown, such as a `<wa-button>` or `<button>`.
    *
    * @csspart base - The component's host element.
    * @csspart menu - The dropdown menu container.
    *
    * @cssproperty --show-duration - The duration of the show animation.
    * @cssproperty --hide-duration - The duration of the hide animation.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaDropdown")
  @js.native
  val WaDropdown: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaSelect :EventName<WaSelectEvent>}> */ Any = js.native
  
  /**
    * @summary Represents an individual item within a dropdown menu, supporting standard items, checkboxes, and submenus.
    * @documentation https://webawesome.com/docs/components/dropdown-item
    * @status experimental
    * @since 3.0
    *
    * @dependency wa-icon
    *
    * @event blur - Emitted when the dropdown item loses focus.
    * @event focus - Emitted when the dropdown item gains focus.
    *
    * @slot - The dropdown item's label.
    * @slot icon - An optional icon to display before the label.
    * @slot details - Additional content or details to display after the label.
    * @slot submenu - Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu.
    *
    * @csspart checkmark - The checkmark icon (a `<wa-icon>` element) when the item is a checkbox.
    * @csspart icon - The container for the icon slot.
    * @csspart label - The container for the label slot.
    * @csspart details - The container for the details slot.
    * @csspart submenu-icon - The submenu indicator icon (a `<wa-icon>` element).
    * @csspart submenu - The submenu container.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaDropdownItem")
  @js.native
  val WaDropdownItem: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Formats a number as a human readable bytes value.
    * @documentation https://webawesome.com/docs/components/format-bytes
    * @status stable
    * @since 2.0
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaFormatBytes")
  @js.native
  val WaFormatBytes: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Formats a date/time using the specified locale and options.
    * @documentation https://webawesome.com/docs/components/format-date
    * @status stable
    * @since 2.0
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaFormatDate")
  @js.native
  val WaFormatDate: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Formats a number using the specified locale and options.
    * @documentation https://webawesome.com/docs/components/format-number
    * @status stable
    * @since 2.0
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaFormatNumber")
  @js.native
  val WaFormatNumber: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Icons are symbols that can be used to represent various options within an application.
    * @documentation https://webawesome.com/docs/components/icon
    * @status stable
    * @since 2.0
    *
    * @event wa-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
    * @event wa-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
    *
    * @csspart svg - The internal SVG element.
    * @csspart use - The `<use>` element generated when using `spriteSheet: true`
    *
    * @cssproperty [--primary-color=currentColor] - Sets a duotone icon's primary color.
    * @cssproperty [--primary-opacity=1] - Sets a duotone icon's primary opacity.
    * @cssproperty [--secondary-color=currentColor] - Sets a duotone icon's secondary color.
    * @cssproperty [--secondary-opacity=0.4] - Sets a duotone icon's secondary opacity.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaIcon")
  @js.native
  val WaIcon: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  /**
    * @summary Includes give you the power to embed external HTML files into the page.
    * @documentation https://webawesome.com/docs/components/include
    * @status stable
    * @since 2.0
    *
    * @event wa-load - Emitted when the included file is loaded.
    * @event {{ status: number }} wa-error - Emitted when the included file fails to load due to an error.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaInclude")
  @js.native
  val WaInclude: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaLoad :EventName<WaLoadEvent>,   onWaError :EventName<WaErrorEvent>}> */ Any = js.native
  
  /**
    * @summary Inputs collect data from the user.
    * @documentation https://webawesome.com/docs/components/input
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot label - The input's label. Alternatively, you can use the `label` attribute.
    * @slot start - An element, such as `<wa-icon>`, placed at the start of the input control.
    * @slot end - An element, such as `<wa-icon>`, placed at the end of the input control.
    * @slot clear-icon - An icon to use in lieu of the default clear icon.
    * @slot show-password-icon - An icon to use in lieu of the default show password icon.
    * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
    * @slot hint - Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when an alteration to the control's value is committed by the user.
    * @event focus - Emitted when the control gains focus.
    * @event input - Emitted when the control receives input.
    * @event wa-clear - Emitted when the clear button is activated.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart label - The label
    * @csspart hint - The hint's wrapper.
    * @csspart input - The wrapper being rendered as an input
    * @csspart base - The internal `<input>` control.
    * @csspart start - The container that wraps the `start` slot.
    * @csspart clear-button - The clear button.
    * @csspart password-toggle-button - The password toggle button.
    * @csspart end - The container that wraps the `end` slot.
    *
    * @cssstate blank - The input is empty.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaInput")
  @js.native
  val WaInput: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
    * @documentation https://webawesome.com/docs/components/mutation-observer
    * @status stable
    * @since 2.0
    *
    * @event {{ mutationList: MutationRecord[] }} wa-mutation - Emitted when a mutation occurs.
    *
    * @slot - The content to watch for mutations.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaMutationObserver")
  @js.native
  val WaMutationObserver: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaMutation :EventName<WaMutationEvent>}> */ Any = js.native
  
  /**
    * @summary Options define the selectable items within a select component.
    * @documentation https://webawesome.com/docs/components/option
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot - The option's label.
    * @slot start - An element, such as `<wa-icon>`, placed before the label.
    * @slot end - An element, such as `<wa-icon>`, placed after the label.
    *
    * @csspart checked-icon - The checked icon, a `<wa-icon>` element.
    * @csspart label - The option's label.
    * @csspart start - The container that wraps the `start` slot.
    * @csspart end - The container that wraps the `end` slot.
    *
    * @cssstate current - The user has keyed into the option, but hasn't selected it yet (shows a highlight)
    * @cssstate selected - The option is selected and has aria-selected="true"
    * @cssstate hover - Like `:hover` but works while dragging in Safari
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaOption")
  @js.native
  val WaOption: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Pages offer an easy way to scaffold entire page layouts using minimal markup.
    * @documentation https://webawesome.com/docs/components/page
    * @status experimental
    * @since 3.0
    *
    * @slot - The page's main content.
    * @slot banner - The banner that gets display above the header. The banner will not be shown if no content is provided.
    * @slot header - The header to display at the top of the page. If a banner is present, the header will appear below the banner. The header will not be shown if there is no content.
    * @slot subheader - A subheader to display below the `header`. This is a good place to put things like breadcrumbs.
    * @slot menu - The left side of the page. If you slot an element in here, you will override the default `navigation` slot and will be handling navigation on your own. This also will not disable the fallback behavior of the navigation button. This section "sticks" to the top as the page scrolls.
    * @slot navigation-header - The header for a navigation area. On mobile this will be the header for `<wa-drawer>`.
    * @slot navigation - The main content to display in the navigation area. This is displayed on the left side of the page, if `menu` is not used. This section "sticks" to the top as the page scrolls.
    * @slot navigation-footer - The footer for a navigation area. On mobile this will be the footer for `<wa-drawer>`.
    * @slot navigation-toggle - Use this slot to slot in your own button + icon for toggling the navigation drawer. By default it is a `<wa-button>` + a 3 bars `<wa-icon>`
    * @slot navigation-toggle-icon - Use this to slot in your own icon for toggling the navigation drawer. By default it is 3 bars `<wa-icon>`.
    * @slot main-header - Header to display inline above the main content.
    * @slot main-footer - Footer to display inline below the main content.
    * @slot aside - Content to be shown on the right side of the page. Typically contains a table of contents, ads, etc. This section "sticks" to the top as the page scrolls.
    * @slot skip-to-content - The "skip to content" slot. You can override this If you would like to override the `Skip to content` button and add additional "Skip to X", they can be inserted here.
    * @slot footer - The content to display in the footer. This is always displayed underneath the viewport so will always make the page "scrollable".
    *
    * @csspart base - The component's base wrapper.
    * @csspart banner - The banner to show above header.
    * @csspart header - The header, usually for top level navigation / branding.
    * @csspart subheader - Shown below the header, usually intended for things like breadcrumbs and other page level navigation.
    * @csspart body - The wrapper around menu, main, and aside.
    * @csspart menu - The left hand side of the page. Generally intended for navigation.
    * @csspart navigation - The `<nav>` that wraps the navigation slots on desktop viewports.
    * @csspart navigation-header - The header for a navigation area. On mobile this will be the header for `<wa-drawer>`.
    * @csspart navigation-footer - The footer for a navigation area. On mobile this will be the footer for `<wa-drawer>`.
    * @csspart navigation-toggle - The default `<wa-button>` that will toggle the `<wa-drawer>` for mobile viewports.
    * @csspart navigation-toggle-icon - The default `<wa-icon>` displayed inside of the navigation-toggle button.
    * @csspart main-header - The header above main content.
    * @csspart main-content - The main content.
    * @csspart main-footer - The footer below main content.
    * @csspart aside - The right hand side of the page. Used for things like table of contents, ads, etc.
    * @csspart skip-links - Wrapper around skip-link
    * @csspart skip-link - The "skip to main content" link
    * @csspart footer - The footer of the page. This is always below the initial viewport size.
    * @csspart dialog-wrapper - A wrapper around elements such as dialogs or other modal-like elements.
    *
    * @cssproperty [--menu-width=auto] - The width of the page's "menu" section.
    * @cssproperty [--main-width=1fr] - The width of the page's "main" section.
    * @cssproperty [--aside-width=auto] - The wide of the page's "aside" section.
    * @cssproperty [--banner-height=0px] - The height of the banner. This gets calculated when the page initializes. If the height is known, you can set it here to prevent shifting when the page loads.
    * @cssproperty [--header-height=0px] - The height of the header. This gets calculated when the page initializes. If the height is known, you can set it here to prevent shifting when the page loads.
    * @cssproperty [--subheader-height=0px] - The height of the subheader. This gets calculated when the page initializes. If the height is known, you can set it here to prevent shifting when the page loads.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaPage")
  @js.native
  val WaPage: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Popovers display contextual content and interactive elements in a floating panel.
    * @documentation https://webawesome.com/docs/components/popover
    * @status stable
    * @since 3.0
    *
    * @dependency wa-popup
    *
    * @slot - The popover's content. Interactive elements such as buttons and links are supported.
    *
    * @event wa-show - Emitted when the popover begins to show. Canceling this event will stop the popover from showing.
    * @event wa-after-show - Emitted after the popover has shown and all animations are complete.
    * @event wa-hide - Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding.
    * @event wa-after-hide - Emitted after the popover has hidden and all animations are complete.
    *
    * @csspart dialog - The native dialog element that contains the popover content.
    * @csspart body - The popover's body where its content is rendered.
    * @csspart popup - The internal `<wa-popup>` element that positions the popover.
    * @csspart popup__popup - The popup's exported `popup` part. Use this to target the popover's popup container.
    * @csspart popup__arrow - The popup's exported `arrow` part. Use this to target the popover's arrow.
    *
    * @cssproperty [--arrow-size=0.375rem] - The size of the tiny arrow that points to the popover (set to zero to remove).
    * @cssproperty [--max-width=25rem] - The maximum width of the popover's body content.
    * @cssproperty [--show-duration=100ms] - The speed of the show animation.
    * @cssproperty [--hide-duration=100ms] - The speed of the hide animation.
    *
    * @cssstate open - Applied when the popover is open.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaPopover")
  @js.native
  val WaPopover: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaPopup")
  @js.native
  val WaPopup: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any = js.native
  
  /**
    * @summary Progress bars are used to show the status of an ongoing operation.
    * @documentation https://webawesome.com/docs/components/progress-bar
    * @status stable
    * @since 2.0
    *
    * @slot - A label to show inside the progress indicator.
    *
    * @csspart base - The component's base wrapper.
    * @csspart indicator - The progress bar's indicator.
    * @csspart label - The progress bar's label.
    *
    * @cssproperty [--track-height=1rem] - The color of the track.
    * @cssproperty [--track-color=var(--wa-color-neutral-fill-normal)] - The color of the track.
    * @cssproperty [--indicator-color=var(--wa-color-brand-fill-loud)] - The color of the indicator.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaProgressBar")
  @js.native
  val WaProgressBar: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Progress rings are used to show the progress of a determinate operation in a circular fashion.
    * @documentation https://webawesome.com/docs/components/progress-ring
    * @status stable
    * @since 2.0
    *
    * @slot - A label to show inside the ring.
    *
    * @csspart base - The component's base wrapper.
    * @csspart label - The progress ring label.
    *
    * @cssproperty --size - The diameter of the progress ring (cannot be a percentage).
    * @cssproperty --track-width - The width of the track.
    * @cssproperty --track-color - The color of the track.
    * @cssproperty --indicator-width - The width of the indicator. Defaults to the track width.
    * @cssproperty --indicator-color - The color of the indicator.
    * @cssproperty --indicator-transition-duration - The duration of the indicator's transition when the value changes.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaProgressRing")
  @js.native
  val WaProgressRing: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
    * @documentation https://webawesome.com/docs/components/qr-code
    * @status stable
    * @since 2.0
    *
    * @csspart base - The component's base wrapper.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaQrCode")
  @js.native
  val WaQrCode: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Radios allow the user to select a single option from a group.
    * @documentation https://webawesome.com/docs/components/radio
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot - The radio's label.
    *
    * @event blur - Emitted when the control loses focus.
    * @event focus - Emitted when the control gains focus.
    *
    * @csspart control - The circular container that wraps the radio's checked state.
    * @csspart checked-icon - The checked icon.
    * @csspart label - The container that wraps the radio's label.
    *
    * @cssproperty --checked-icon-color - The color of the checked icon.
    * @cssproperty --checked-icon-scale - The size of the checked icon relative to the radio.
    *
    * @cssstate checked - Applied when the control is checked.
    * @cssstate disabled - Applied when the control is disabled.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaRadio")
  @js.native
  val WaRadio: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Radio groups are used to group multiple [radios](/docs/components/radio) so they function as a single form control.
    * @documentation https://webawesome.com/docs/components/radio-group
    * @status stable
    * @since 2.0
    *
    * @dependency wa-radio
    *
    * @slot - The default slot where `<wa-radio>` elements are placed.
    * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
    *  attribute.
    * @slot hint - Text that describes how to use the radio group. Alternatively, you can use the `hint` attribute.
    *
    * @event change - Emitted when the radio group's selected value changes.
    * @event input - Emitted when the radio group receives user input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart form-control - The form control that wraps the label, input, and hint.
    * @csspart form-control-label - The label's wrapper.
    * @csspart form-control-input - The input's wrapper.
    * @csspart radios - The wrapper than surrounds radio items, styled as a flex container by default.
    * @csspart hint - The hint's wrapper.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaRadioGroup")
  @js.native
  val WaRadioGroup: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaRating")
  @js.native
  val WaRating: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaHover :EventName<WaHoverEvent>}> */ Any = js.native
  
  /**
    * @summary Outputs a localized time phrase relative to the current date and time.
    * @documentation https://webawesome.com/docs/components/relative-time
    * @status stable
    * @since 2.0
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaRelativeTime")
  @js.native
  val WaRelativeTime: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
    * @documentation https://webawesome.com/docs/components/resize-observer
    * @status stable
    * @since 2.0
    *
    * @slot - One or more elements to watch for resizing.
    *
    * @event {{ entries: ResizeObserverEntry[] }} wa-resize - Emitted when the element is resized.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaResizeObserver")
  @js.native
  val WaResizeObserver: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaResize :EventName<WaResizeEvent>}> */ Any = js.native
  
  /**
    * @summary Scrollers create an accessible container while providing visual cues that help users identify and navigate
    *  through content that scrolls.
    * @documentation https://webawesome.com/docs/components/scroller
    * @status stable
    * @since 3.0
    *
    * @slot - The content to show inside the scroller.
    *
    * @cssproperty [--shadow-color=var(--wa-color-surface-default)] - The base color of the shadow.
    * @cssproperty [--shadow-size=2rem] - The size of the shadow.
    *
    * @csspart content - The container that wraps the slotted content.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaScroller")
  @js.native
  val WaScroller: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
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
  @JSImport("@awesome.me/webawesome/dist/react", "WaSelect")
  @js.native
  val WaSelect: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaClear :EventName<WaClearEvent>,   onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>,   onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Skeletons are used to provide a visual representation of where content will eventually be drawn.
    * @documentation https://webawesome.com/docs/components/skeleton
    * @status stable
    * @since 2.0
    *
    * @csspart indicator - The skeleton's indicator which is responsible for its color and animation.
    *
    * @cssproperty --color - The color of the skeleton.
    * @cssproperty --sheen-color - The sheen color when the skeleton is in its loading state.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaSkeleton")
  @js.native
  val WaSkeleton: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * <wa-slider>
    *
    * @summary Ranges allow the user to select a single value within a given range using a slider.
    * @documentation https://webawesome.com/docs/components/range
    * @status stable
    * @since 2.0
    *
    * @dependency wa-tooltip
    *
    * @slot label - The slider label. Alternatively, you can use the `label` attribute.
    * @slot hint - Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
    *  instead.
    * @slot reference - One or more reference labels to show visually below the slider.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when an alteration to the control's value is committed by the user.
    * @event focus - Emitted when the control gains focus.
    * @event input - Emitted when the control receives input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart label - The element that contains the sliders's label.
    * @csspart hint - The element that contains the slider's description.
    * @csspart slider - The focusable element with `role="slider"`. Contains the track and reference slot.
    * @csspart track - The slider's track.
    * @csspart indicator - The colored indicator that shows from the start of the slider to the current value.
    * @csspart markers - The container that holds all the markers when `with-markers` is used.
    * @csspart marker - The individual markers that are shown when `with-markers` is used.
    * @csspart references - The container that holds references that get slotted in.
    * @csspart thumb - The slider's thumb.
    * @csspart thumb-min - The min value thumb in a range slider.
    * @csspart thumb-max - The max value thumb in a range slider.
    * @csspart tooltip - The tooltip, a `<wa-tooltip>` element.
    * @csspart tooltip__tooltip - The tooltip's `tooltip` part.
    * @csspart tooltip__content - The tooltip's `content` part.
    * @csspart tooltip__arrow - The tooltip's `arrow` part.
    *
    * @cssstate disabled - Applied when the slider is disabled.
    * @cssstate dragging - Applied when the slider is being dragged.
    * @cssstate focused - Applied when the slider has focus.
    * @cssstate user-valid - Applied when the slider is valid and the user has sufficiently interacted with it.
    * @cssstate user-invalid - Applied when the slider is invalid and the user has sufficiently interacted with it.
    *
    * @cssproperty [--track-size=0.75em] - The height or width of the slider's track.
    * @cssproperty [--marker-width=0.1875em] - The width of each individual marker.
    * @cssproperty [--marker-height=0.1875em] - The height of each individual marker.
    * @cssproperty [--thumb-width=1.25em] - The width of the thumb.
    * @cssproperty [--thumb-height=1.25em] - The height of the thumb.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaSlider")
  @js.native
  val WaSlider: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Spinners are used to show the progress of an indeterminate operation.
    * @documentation https://webawesome.com/docs/components/spinner
    * @status stable
    * @since 2.0
    *
    * @csspart base - The component's base wrapper.
    *
    * @cssproperty --track-width - The width of the track.
    * @cssproperty --track-color - The color of the track.
    * @cssproperty --indicator-color - The color of the spinner's indicator.
    * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaSpinner")
  @js.native
  val WaSpinner: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Split panels display two adjacent panels, allowing the user to reposition them.
    * @documentation https://webawesome.com/docs/components/split-panel
    * @status stable
    * @since 2.0
    *
    * @event wa-reposition - Emitted when the divider's position changes.
    *
    * @slot start - Content to place in the start panel.
    * @slot end - Content to place in the end panel.
    * @slot divider - The divider. Useful for slotting in a custom icon that renders as a handle.
    *
    * @csspart start - The start panel.
    * @csspart end - The end panel.
    * @csspart panel - Targets both the start and end panels.
    * @csspart divider - The divider that separates the start and end panels.
    *
    * @cssproperty [--divider-width=4px] - The width of the visible divider.
    * @cssproperty [--divider-hit-area=12px] - The invisible region around the divider where dragging can occur. This is
    *  usually wider than the divider to facilitate easier dragging.
    * @cssproperty [--min=0] - The minimum allowed size of the primary panel.
    * @cssproperty [--max=100%] - The maximum allowed size of the primary panel.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaSplitPanel")
  @js.native
  val WaSplitPanel: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaReposition :EventName<WaRepositionEvent>}> */ Any = js.native
  
  /**
    * @summary Switches allow the user to toggle an option on or off.
    * @documentation https://webawesome.com/docs/components/switch
    * @status stable
    * @since 2.0
    *
    * @slot - The switch's label.
    * @slot hint - Text that describes how to use the switch. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when the control's checked state changes.
    * @event input - Emitted when the control receives input.
    * @event focus - Emitted when the control gains focus.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart base - The component's base wrapper.
    * @csspart control - The control that houses the switch's thumb.
    * @csspart thumb - The switch's thumb.
    * @csspart label - The switch's label.
    * @csspart hint - The hint's wrapper.
    *
    * @cssproperty --width - The width of the switch.
    * @cssproperty --height - The height of the switch.
    * @cssproperty --thumb-size - The size of the thumb.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaSwitch")
  @js.native
  val WaSwitch: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Tabs are used inside [tab groups](/docs/components/tab-group) to represent and activate [tab panels](/docs/components/tab-panel).
    * @documentation https://webawesome.com/docs/components/tab
    * @status stable
    * @since 2.0
    *
    * @slot - The tab's label.
    *
    * @csspart base - The component's base wrapper.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTab")
  @js.native
  val WaTab: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Tab groups organize content into a container that shows one section at a time.
    * @documentation https://webawesome.com/docs/components/tab-group
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    * @dependency wa-tab
    * @dependency wa-tab-panel
    *
    * @slot - Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements.
    * @slot nav - Used for grouping tabs in the tab group. Must be `<wa-tab>` elements. Note that `<wa-tab>` will set this
    *  slot on itself automatically.
    *
    * @event {{ name: String }} wa-tab-show - Emitted when a tab is shown.
    * @event {{ name: String }} wa-tab-hide - Emitted when a tab is hidden.
    *
    * @csspart base - The component's base wrapper.
    * @csspart nav - The tab group's navigation container where tabs are slotted in.
    * @csspart tabs - The container that wraps the tabs.
    * @csspart body - The tab group's body where tab panels are slotted in.
    * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, a `<wa-button>`.
    * @csspart scroll-button-start - The starting scroll button.
    * @csspart scroll-button-end - The ending scroll button.
    * @csspart scroll-button__base - The scroll button's exported `base` part.
    *
    * @cssproperty --indicator-color - The color of the active tab indicator.
    * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
    * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTabGroup")
  @js.native
  val WaTabGroup: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaTabShow :EventName<WaTabShowEvent>,   onWaTabHide :EventName<WaTabHideEvent>}> */ Any = js.native
  
  /**
    * @summary Tab panels are used inside [tab groups](/docs/components/tab-group) to display tabbed content.
    * @documentation https://webawesome.com/docs/components/tab-panel
    * @status stable
    * @since 2.0
    *
    * @slot - The tab panel's content.
    *
    * @csspart base - The component's base wrapper.
    *
    * @cssproperty --padding - The tab panel's padding.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTabPanel")
  @js.native
  val WaTabPanel: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  /**
    * @summary Tags are used as labels to organize things or to indicate a selection.
    * @documentation https://webawesome.com/docs/components/tag
    * @status stable
    * @since 2.0
    *
    * @dependency wa-button
    *
    * @slot - The tag's content.
    *
    * @event wa-remove - Emitted when the remove button is activated.
    *
    * @csspart base - The component's base wrapper.
    * @csspart content - The tag's content.
    * @csspart remove-button - The tag's remove button, a `<wa-button>`.
    * @csspart remove-button__base - The remove button's exported `base` part.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTag")
  @js.native
  val WaTag: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaRemove :EventName<WaRemoveEvent>}> */ Any = js.native
  
  /**
    * @summary Textareas collect data from the user and allow multiple lines of text.
    * @documentation https://webawesome.com/docs/components/textarea
    * @status stable
    * @since 2.0
    *
    * @slot label - The textarea's label. Alternatively, you can use the `label` attribute.
    * @slot hint - Text that describes how to use the input. Alternatively, you can use the `hint` attribute.
    *
    * @event blur - Emitted when the control loses focus.
    * @event change - Emitted when an alteration to the control's value is committed by the user.
    * @event focus - Emitted when the control gains focus.
    * @event input - Emitted when the control receives input.
    * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
    *
    * @csspart label - The label
    * @csspart form-control-input - The input's wrapper.
    * @csspart hint - The hint's wrapper.
    * @csspart textarea - The internal `<textarea>` control.
    * @csspart base - The wrapper around the `<textarea>` control.
    *
    * @cssstate blank - The textarea is empty.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTextarea")
  @js.native
  val WaTextarea: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaInvalid :EventName<WaInvalidEvent>}> */ Any = js.native
  
  /**
    * @summary Tooltips display additional information based on a specific action.
    * @documentation https://webawesome.com/docs/components/tooltip
    * @status stable
    * @since 2.0
    *
    * @dependency wa-popup
    *
    * @slot - The tooltip's default slot where any content should live. Interactive content should be avoided.
    *
    * @event wa-show - Emitted when the tooltip begins to show.
    * @event wa-after-show - Emitted after the tooltip has shown and all animations are complete.
    * @event wa-hide - Emitted when the tooltip begins to hide.
    * @event wa-after-hide - Emitted after the tooltip has hidden and all animations are complete.
    *
    * @csspart base - The component's base wrapper, an `<wa-popup>` element.
    * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
    * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
    * @csspart body - The tooltip's body where its content is rendered.
    *
    * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTooltip")
  @js.native
  val WaTooltip: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaShow :EventName<WaShowEvent>,   onWaAfterShow :EventName<WaAfterShowEvent>,   onWaHide :EventName<WaHideEvent>,   onWaAfterHide :EventName<WaAfterHideEvent>}> */ Any = js.native
  
  /**
    * @summary Trees allow you to display a hierarchical list of selectable [tree items](/docs/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
    * @documentation https://webawesome.com/docs/components/tree
    * @status stable
    * @since 2.0
    *
    * @dependency wa-tree-item
    *
    * @event {{ selection: WaTreeItem[] }} wa-selection-change - Emitted when a tree item is selected or deselected.
    *
    * @slot - The default slot.
    * @slot expand-icon - The icon to show when the tree item is expanded. Works best with `<wa-icon>`.
    * @slot collapse-icon - The icon to show when the tree item is collapsed. Works best with `<wa-icon>`.
    *
    * @csspart base - The component's base wrapper.
    *
    * @cssproperty [--indent-size=var(--wa-spacing-m)] - The size of the indentation for nested items.
    * @cssproperty [--indent-guide-color=var(--wa-color-surface-border)] - The color of the indentation line.
    * @cssproperty [--indent-guide-offset=0] - The amount of vertical spacing to leave between the top and bottom of the
    *  indentation line's starting position.
    * @cssproperty [--indent-guide-style=solid] - The style of the indentation line, e.g. solid, dotted, dashed.
    * @cssproperty [--indent-guide-width=0] - The width of the indentation line.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTree")
  @js.native
  val WaTree: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaSelectionChange :EventName<WaSelectionChangeEvent>}> */ Any = js.native
  
  /**
    * @summary A tree item serves as a hierarchical node that lives inside a [tree](/docs/components/tree).
    * @documentation https://webawesome.com/docs/components/tree-item
    * @status stable
    * @since 2.0
    *
    * @dependency wa-checkbox
    * @dependency wa-icon
    * @dependency wa-spinner
    *
    * @event wa-expand - Emitted when the tree item expands.
    * @event wa-after-expand - Emitted after the tree item expands and all animations are complete.
    * @event wa-collapse - Emitted when the tree item collapses.
    * @event wa-after-collapse - Emitted after the tree item collapses and all animations are complete.
    * @event wa-lazy-change - Emitted when the tree item's lazy state changes.
    * @event wa-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
    *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
    *  state and update the tree.
    *
    * @slot - The default slot.
    * @slot expand-icon - The icon to show when the tree item is expanded.
    * @slot collapse-icon - The icon to show when the tree item is collapsed.
    *
    * @csspart base - The component's base wrapper.
    * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
    * @csspart indentation - The tree item's indentation container.
    * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
    * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.
    * @csspart spinner__base - The spinner's base part.
    * @csspart label - The tree item's label.
    * @csspart children - The container that wraps the tree item's nested children.
    * @csspart checkbox - The checkbox that shows when using multiselect.
    * @csspart checkbox__base - The checkbox's exported `base` part.
    * @csspart checkbox__control - The checkbox's exported `control` part.
    * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
    * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
    * @csspart checkbox__label - The checkbox's exported `label` part.
    *
    * @cssproperty [--show-duration=200ms] - The animation duration when expanding tree items.
    * @cssproperty [--hide-duration=200ms] - The animation duration when collapsing tree items.
    *
    * @cssstate disabled - Applied when the tree item is disabled.
    * @cssstate expanded - Applied when the tree item is expanded.
    * @cssstate indeterminate - Applied when the selection is indeterminate.
    * @cssstate selected - Applied when the tree item is selected.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaTreeItem")
  @js.native
  val WaTreeItem: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaExpand :EventName<WaExpandEvent>,   onWaAfterExpand :EventName<WaAfterExpandEvent>,   onWaCollapse :EventName<WaCollapseEvent>,   onWaAfterCollapse :EventName<WaAfterCollapseEvent>,   onWaLazyChange :EventName<WaLazyChangeEvent>,   onWaLazyLoad :EventName<WaLazyLoadEvent>}> */ Any = js.native
  
  /**
    * @summary Zoomable frames render iframe content with zoom and interaction controls.
    * @documentation https://webawesome.com/docs/components/zoomable-frame
    * @status stable
    * @since 3.0
    *
    * @dependency wa-icon
    *
    * @slot zoom-in-icon - The slot that contains the zoom in icon.
    * @slot zoom-out-icon - The slot that contains the zoom out icon.
    *
    * @event load - Emitted when the internal iframe when it finishes loading.
    * @event error - Emitted from the internal iframe when it fails to load.
    *
    * @csspart iframe - The internal `<iframe>` element.
    * @csspart controls - The container that surrounds zoom control buttons.
    * @csspart zoom-in-button - The zoom in button.
    * @csspart zoom-out-button - The zoom out button.
    */
  @JSImport("@awesome.me/webawesome/dist/react", "WaZoomableFrame")
  @js.native
  val WaZoomableFrame: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
}
