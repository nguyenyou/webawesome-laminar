package io.github.nguyenyou.webawesome.laminar

/** All union types used by WebAwesome components. This file is generated at compile-time by WebAwesome generator.
  */
object SharedTypes {

  /** Used by 15 components for "size" attribute. Components: WaButton, WaButtonGroup, WaCallout, ... */
  type ComponentSize = "large" | "medium" | "small"

  /** Used by 7 components for "orientation" attribute. Components: WaButtonGroup, WaCarousel, WaDivider, ... */
  type Orientation = "horizontal" | "vertical"

  /** Used by 5 components for "variant" attribute. Components: WaButton, WaBadge, WaButtonGroup, ... */
  type ThemeVariant = "brand" | "danger" | "neutral" | "success" | "warning"

  /** Used by 5 components for "year" attribute. Components: WaFormatDate, WaFormatDate, WaFormatDate, ... */
  type DateYearFormat = "2-digit" | "numeric"

  /** Used by 4 components for "display" attribute. Components: WaFormatBytes, WaFormatDate, WaFormatDate, ... */
  type DisplayFormat = "long" | "narrow" | "short"

  /** Used by 3 components for "appearance" attribute. Components: WaInput, WaSelect, WaTextarea */
  type FilledOutlineAppearance = "filled" | "outlined" | "filled outlined"

  /** Used by 2 components for "loading" attribute. Components: WaAvatar, WaZoomableFrame */
  type LoadingStrategy = "eager" | "lazy"

  /** Used by 2 components for "appearance" attribute. Components: WaButton, WaCard */
  type ExtendedAppearance = "accent" | "filled" | "outlined" | "plain" | "filled outlined"

  /** Used by 2 components for "tooltip-placement" attribute. Components: WaCopyButton, WaSlider */
  type TooltipPlacement = "bottom" | "left" | "right" | "top"

  /** Used by 2 components for "placement" attribute. Components: WaDrawer, WaTabGroup */
  type ComponentPlacement = "bottom" | "end" | "start" | "top"

  /** Used by 2 components for "autocapitalize" attribute. Components: WaInput, WaTextarea */
  type Autocapitalize = "characters" | "none" | "off" | "on" | "sentences" | "words"

  /** Used by 2 components for "enterkeyhint" attribute. Components: WaInput, WaTextarea */
  type Enterkeyhint = "done" | "enter" | "go" | "next" | "previous" | "search" | "send"

  /** Used by 2 components for "inputmode" attribute. Components: WaInput, WaTextarea */
  type Inputmode = "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url"

  /** Used by WaAvatar for "shape" attribute. Components: WaAvatar */
  type AvatarShape = "circle" | "rounded" | "square"

  /** Used by WaButton for "type" attribute. Components: WaButton */
  type ButtonButtonType = "button" | "reset" | "submit"

  /** Used by WaButton for "target" attribute. Components: WaButton */
  type ButtonLinkTarget = "_blank" | "_parent" | "_self" | "_top"

  /** Used by WaButton for "formenctype" attribute. Components: WaButton */
  type ButtonFormenctype = "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain"

  /** Used by WaButton for "formmethod" attribute. Components: WaButton */
  type ButtonFormmethod = "get" | "post"

  /** Used by WaBadge for "appearance" attribute. Components: WaBadge */
  type BadgeExtendedAppearance = "accent" | "filled" | "outlined" | "filled outlined"

  /** Used by WaBadge for "attention" attribute. Components: WaBadge */
  type BadgeAttention = "bounce" | "none" | "pulse"

  /** Used by WaColorPicker for "format" attribute. Components: WaColorPicker */
  type ColorPickerFormat = "hex" | "hsl" | "hsv" | "rgb"

  /** Used by WaDetails for "appearance" attribute. Components: WaDetails */
  type DetailsAppearance = "filled" | "outlined" | "plain" | "filled outlined"

  /** Used by WaDropdownItem for "variant" attribute. Components: WaDropdownItem */
  type DropdownItemVariant = "danger" | "default"

  /** Used by WaDropdownItem for "type" attribute. Components: WaDropdownItem */
  type DropdownItemElementType = "checkbox" | "normal"

  /** Used by WaFormatBytes for "unit" attribute. Components: WaFormatBytes */
  type FormatBytesUnit = "bit" | "byte"

  /** Used by WaFormatNumber for "type" attribute. Components: WaFormatNumber */
  type FormatNumberElementType = "currency" | "decimal" | "percent"

  /** Used by WaFormatNumber for "currency-display" attribute. Components: WaFormatNumber */
  type FormatNumberCurrencyDisplay = "code" | "name" | "narrowSymbol" | "symbol"

  /** Used by WaFormatDate for "month" attribute. Components: WaFormatDate */
  type FormatDateDateMonthFormat = "2-digit" | "long" | "narrow" | "numeric" | "short"

  /** Used by WaFormatDate for "time-zone-name" attribute. Components: WaFormatDate */
  type FormatDateTimeZoneName = "long" | "short"

  /** Used by WaFormatDate for "hour-format" attribute. Components: WaFormatDate */
  type FormatDateHourFormat = "12" | "24" | "auto"

  /** Used by WaInclude for "mode" attribute. Components: WaInclude */
  type IncludeMode = "cors" | "no-cors" | "same-origin"

  /** Used by WaInput for "autocorrect" attribute. Components: WaInput */
  type InputAutocorrect = "off" | "on"

  /** Used by WaPage for "view" attribute. Components: WaPage */
  type PageView = "desktop" | "mobile"

  /** Used by WaPage for "navigation-placement" attribute. Components: WaPage */
  type PageNavigationPlacement = "end" | "start"

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

  /** Used by WaQrCode for "error-correction" attribute. Components: WaQrCode */
  type QrCodeErrorCorrection = "H" | "L" | "M" | "Q"

  /** Used by WaRadio for "appearance" attribute. Components: WaRadio */
  type RadioAppearance = "button" | "default"

  /** Used by WaRelativeTime for "numeric" attribute. Components: WaRelativeTime */
  type RelativeTimeNumeric = "always" | "auto"

  /** Used by WaSelect for "placement" attribute. Components: WaSelect */
  type SelectPlacement = "bottom" | "top"

  /** Used by WaSkeleton for "effect" attribute. Components: WaSkeleton */
  type SkeletonEffect = "none" | "pulse" | "sheen"

  /** Used by WaTabGroup for "activation" attribute. Components: WaTabGroup */
  type TabGroupActivation = "auto" | "manual"

  /** Used by WaTag for "appearance" attribute. Components: WaTag */
  type TagExtendedAppearance = "accent" | "filled" | "outlined" | "outlined accent" | "filled outlined"

  /** Used by WaTextarea for "resize" attribute. Components: WaTextarea */
  type TextareaResize = "auto" | "both" | "horizontal" | "none" | "vertical"

  /** Used by WaTree for "selection" attribute. Components: WaTree */
  type TreeSelection = "leaf" | "multiple" | "single"

}
