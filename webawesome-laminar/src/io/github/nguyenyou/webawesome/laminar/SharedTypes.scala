package io.github.nguyenyou.webawesome.laminar

/** All union types used by WebAwesome components. This file is generated at compile-time by WebAwesome generator.
  */
object SharedTypes {

  /** Used by 21 components for "size" attribute. Components: WaCheckbox, WaButton, WaCallout, ... */
  type ComponentSize = "l" | "large" | "m" | "medium" | "s" | "small" | "xl" | "xs"

  /** Used by 9 components for "orientation" attribute. Components: WaButtonGroup, WaCard, WaCarousel, ... */
  type Orientation = "horizontal" | "vertical"

  /** Used by 7 components for "appearance" attribute. Components: WaInput, WaKnownDate, WaNumberInput, ... */
  type Appearance = "filled" | "filled-outlined" | "outlined"

  /** Used by 6 components for "variant" attribute. Components: WaStep, WaBadge, WaButton, ... */
  type ThemeVariant = "brand" | "danger" | "neutral" | "success" | "warning"

  /** Used by 5 components for "placement" attribute. Components: WaPopup, WaColorPicker, WaTooltip, ... */
  type Placement = "bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" |
    "right-end" | "right-start" | "top" | "top-end" | "top-start"

  /** Used by 5 components for "year" attribute. Components: WaFormatDate, WaFormatDate, WaFormatDate, ... */
  type DateYearFormat = "2-digit" | "numeric"

  /** Used by 4 components for "enterkeyhint" attribute. Components: WaInput, WaNumberInput, WaTagInput, ... */
  type Enterkeyhint = "done" | "enter" | "go" | "next" | "previous" | "search" | "send"

  /** Used by 4 components for "display" attribute. Components: WaFormatBytes, WaFormatDate, WaFormatDate, ... */
  type DisplayFormat = "long" | "narrow" | "short"

  /** Used by 3 components for "icon-placement" attribute. Components: WaAccordion, WaDetails, WaSplitPanel */
  type IconPlacement = "end" | "start"

  /** Used by 3 components for "target" attribute. Components: WaBreadcrumbItem, WaButton, WaDropdownItem */
  type LinkTarget = "_blank" | "_parent" | "_self" | "_top"

  /** Used by 3 components for "appearance" attribute. Components: WaButton, WaCallout, WaCard */
  type ExtendedAppearance = "accent" | "filled" | "filled-outlined" | "outlined" | "plain"

  /** Used by 3 components for "autocapitalize" attribute. Components: WaInput, WaTagInput, WaTextarea */
  type Autocapitalize = "characters" | "none" | "off" | "on" | "sentences" | "words"

  /** Used by 3 components for "inputmode" attribute. Components: WaInput, WaTagInput, WaTextarea */
  type Inputmode = "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url"

  /** Used by 2 components for "attention" attribute. Components: WaStep, WaBadge */
  type Attention = "bounce" | "none" | "pulse"

  /** Used by 2 components for "appearance" attribute. Components: WaAccordion, WaDetails */
  type Appearance1 = "filled" | "filled-outlined" | "outlined" | "plain"

  /** Used by 2 components for "loading" attribute. Components: WaAvatar, WaZoomableFrame */
  type LoadingStrategy = "eager" | "lazy"

  /** Used by 2 components for "appearance" attribute. Components: WaBadge, WaTag */
  type ExtendedAppearance1 = "accent" | "filled" | "filled-outlined" | "outlined"

  /** Used by 2 components for "tooltip-placement" attribute. Components: WaCopyButton, WaSlider */
  type TooltipPlacement = "bottom" | "left" | "right" | "top"

  /** Used by 2 components for "placement" attribute. Components: WaDrawer, WaTabGroup */
  type ComponentPlacement = "bottom" | "end" | "start" | "top"

  /** Used by 2 components for "hour-format" attribute. Components: WaFormatDate, WaTimeInput */
  type HourFormat = "12" | "24" | "auto"

  /** Used by WaIcon for "canvas" attribute. Components: WaIcon */
  type IconCanvas = "auto" | "fixed" | "roomy" | "square"

  /** Used by WaIcon for "flip" attribute. Components: WaIcon */
  type IconFlip = "both" | "x" | "y"

  /** Used by WaIcon for "animation" attribute. Components: WaIcon */
  type IconAnimation = "beat" | "beat-fade" | "bounce" | "buzz" | "fade" | "flip" | "flip-360" | "float" | "jello" |
    "shake" | "spin" | "spin-pulse" | "spin-reverse" | "spin-snap" | "spin-snap-4" | "spin-snap-8" | "swing" | "wag"

  /** Used by WaAccordion for "mode" attribute. Components: WaAccordion */
  type AccordionMode = "multiple" | "single" | "single-collapsible"

  /** Used by WaAvatar for "shape" attribute. Components: WaAvatar */
  type AvatarShape = "circle" | "rounded" | "square"

  /** Used by WaButton for "type" attribute. Components: WaButton */
  type ButtonButtonType = "button" | "reset" | "submit"

  /** Used by WaButton for "formenctype" attribute. Components: WaButton */
  type ButtonFormenctype = "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain"

  /** Used by WaButton for "formmethod" attribute. Components: WaButton */
  type ButtonFormmethod = "get" | "post"

  /** Used by WaInput for "type" attribute. Components: WaInput */
  type InputInputType = "date" | "datetime-local" | "email" | "number" | "password" | "search" | "tel" | "text" |
    "time" | "url"

  /** Used by WaPopup for "boundary" attribute. Components: WaPopup */
  type PopupBoundary = "scroll" | "viewport"

  /** Used by WaPopup for "arrow-placement" attribute. Components: WaPopup */
  type PopupArrowPlacement = "anchor" | "center" | "end" | "start"

  /** Used by WaPopup for "flip-fallback-strategy" attribute. Components: WaPopup */
  type PopupFlipFallbackStrategy = "best-fit" | "initial"

  /** Used by WaPopup for "auto-size" attribute. Components: WaPopup */
  type PopupAutoSize = "both" | "horizontal" | "vertical"

  /** Used by WaPopup for "sync" attribute. Components: WaPopup */
  type PopupSync = "both" | "height" | "width"

  /** Used by WaColorPicker for "format" attribute. Components: WaColorPicker */
  type ColorPickerFormat = "hex" | "hsl" | "hsv" | "rgb"

  /** Used by WaCopyButton for "tooltip" attribute. Components: WaCopyButton */
  type CopyButtonTooltip = "copy" | "full" | "none"

  /** Used by WaDivider for "label-placement" attribute. Components: WaDivider */
  type DividerLabelPlacement = "center" | "end" | "start"

  /** Used by WaDropdownItem for "variant" attribute. Components: WaDropdownItem */
  type DropdownItemVariant = "danger" | "default"

  /** Used by WaDropdownItem for "type" attribute. Components: WaDropdownItem */
  type DropdownItemElementType = "checkbox" | "normal"

  /** Used by WaFormatBytes for "unit" attribute. Components: WaFormatBytes */
  type FormatBytesUnit = "bit" | "byte"

  /** Used by WaFormatDate for "month" attribute. Components: WaFormatDate */
  type FormatDateDateMonthFormat = "2-digit" | "long" | "narrow" | "numeric" | "short"

  /** Used by WaFormatDate for "time-zone-name" attribute. Components: WaFormatDate */
  type FormatDateTimeZoneName = "long" | "short"

  /** Used by WaFormatNumber for "type" attribute. Components: WaFormatNumber */
  type FormatNumberElementType = "currency" | "decimal" | "percent"

  /** Used by WaFormatNumber for "currency-display" attribute. Components: WaFormatNumber */
  type FormatNumberCurrencyDisplay = "code" | "name" | "narrowSymbol" | "symbol"

  /** Used by WaInclude for "mode" attribute. Components: WaInclude */
  type IncludeMode = "cors" | "no-cors" | "same-origin"

  /** Used by WaNumberInput for "inputmode" attribute. Components: WaNumberInput */
  type NumberInputInputmode = "decimal" | "numeric"

  /** Used by WaSelect for "placement" attribute. Components: WaSelect */
  type SelectPlacement = "bottom" | "top"

  /** Used by WaOtpInput for "appearance" attribute. Components: WaOtpInput */
  type OtpInputAppearance = "contained" | "filled" | "filled-outlined" | "outlined"

  /** Used by WaOtpInput for "type" attribute. Components: WaOtpInput */
  type OtpInputElementType = "alpha" | "alphanumeric" | "numeric"

  /** Used by WaOtpInput for "case" attribute. Components: WaOtpInput */
  type OtpInputCase = "lower" | "preserve" | "upper"

  /** Used by WaPagination for "format" attribute. Components: WaPagination */
  type PaginationFormat = "compact" | "standard"

  /** Used by WaPagination for "appearance" attribute. Components: WaPagination */
  type PaginationAppearance = "filled" | "outlined" | "plain"

  /** Used by WaQrCode for "error-correction" attribute. Components: WaQrCode */
  type QrCodeErrorCorrection = "H" | "L" | "M" | "Q"

  /** Used by WaRadio for "appearance" attribute. Components: WaRadio */
  type RadioAppearance = "button" | "default"

  /** Used by WaRandomContent for "mode" attribute. Components: WaRandomContent */
  type RandomContentMode = "random" | "sequence" | "unique"

  /** Used by WaRandomContent for "animation" attribute. Components: WaRandomContent */
  type RandomContentAnimation = "fade" | "fade-down" | "fade-left" | "fade-right" | "fade-up" | "none"

  /** Used by WaRelativeTime for "numeric" attribute. Components: WaRelativeTime */
  type RelativeTimeNumeric = "always" | "auto"

  /** Used by WaSkeleton for "effect" attribute. Components: WaSkeleton */
  type SkeletonEffect = "none" | "pulse" | "sheen"

  /** Used by WaStepper for "orientation" attribute. Components: WaStepper */
  type StepperOrientation = "auto" | "horizontal" | "vertical"

  /** Used by WaTabGroup for "activation" attribute. Components: WaTabGroup */
  type TabGroupActivation = "auto" | "manual"

  /** Used by WaTextarea for "resize" attribute. Components: WaTextarea */
  type TextareaResize = "auto" | "both" | "horizontal" | "none" | "vertical"

  /** Used by WaTimeInput for "placement" attribute. Components: WaTimeInput */
  type TimeInputPlacement = "bottom" | "bottom-end" | "bottom-start" | "top" | "top-end" | "top-start"

  /** Used by WaToast for "placement" attribute. Components: WaToast */
  type ToastPlacement = "bottom-center" | "bottom-end" | "bottom-start" | "top-center" | "top-end" | "top-start"

  /** Used by WaTree for "selection" attribute. Components: WaTree */
  type TreeSelection = "leaf" | "leaf-multiple" | "multiple" | "single"

}
