package io.github.nguyenyou.webawesome.laminar
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.modifiers.KeySetter.HtmlAttrSetter
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

/** Typical events / properties / etc. defined on Shoelace web components. We selectively export them from this object
  * into individual components that define them.
  */
object CommonKeys extends CommonTypes {

  /** size attribute - ComponentSize */
  object ComponentSize extends HtmlAttr[ComponentSize]("size", UnionAsStringCodec[ComponentSize]) {

    lazy val l: HtmlAttrSetter[ComponentSize] = ComponentSize("l")

    lazy val large: HtmlAttrSetter[ComponentSize] = ComponentSize("large")

    lazy val m: HtmlAttrSetter[ComponentSize] = ComponentSize("m")

    lazy val medium: HtmlAttrSetter[ComponentSize] = ComponentSize("medium")

    lazy val s: HtmlAttrSetter[ComponentSize] = ComponentSize("s")

    lazy val small: HtmlAttrSetter[ComponentSize] = ComponentSize("small")

    lazy val xl: HtmlAttrSetter[ComponentSize] = ComponentSize("xl")

    lazy val xs: HtmlAttrSetter[ComponentSize] = ComponentSize("xs")
  }

  /** orientation attribute - Orientation */
  object Orientation extends HtmlAttr[Orientation]("orientation", UnionAsStringCodec[Orientation]) {

    lazy val horizontal: HtmlAttrSetter[Orientation] = Orientation("horizontal")

    lazy val vertical: HtmlAttrSetter[Orientation] = Orientation("vertical")
  }

  /** appearance attribute - Appearance */
  object Appearance extends HtmlAttr[Appearance]("appearance", UnionAsStringCodec[Appearance]) {

    lazy val filled: HtmlAttrSetter[Appearance] = Appearance("filled")

    lazy val filledOutlined: HtmlAttrSetter[Appearance] = Appearance("filled-outlined")

    lazy val outlined: HtmlAttrSetter[Appearance] = Appearance("outlined")
  }

  /** variant attribute - ThemeVariant */
  object ThemeVariant extends HtmlAttr[ThemeVariant]("variant", UnionAsStringCodec[ThemeVariant]) {

    lazy val brand: HtmlAttrSetter[ThemeVariant] = ThemeVariant("brand")

    lazy val danger: HtmlAttrSetter[ThemeVariant] = ThemeVariant("danger")

    lazy val neutral: HtmlAttrSetter[ThemeVariant] = ThemeVariant("neutral")

    lazy val success: HtmlAttrSetter[ThemeVariant] = ThemeVariant("success")

    lazy val warning: HtmlAttrSetter[ThemeVariant] = ThemeVariant("warning")
  }

  /** placement attribute - Placement */
  object Placement extends HtmlAttr[Placement]("placement", UnionAsStringCodec[Placement]) {

    lazy val bottom: HtmlAttrSetter[Placement] = Placement("bottom")

    lazy val bottomEnd: HtmlAttrSetter[Placement] = Placement("bottom-end")

    lazy val bottomStart: HtmlAttrSetter[Placement] = Placement("bottom-start")

    lazy val left: HtmlAttrSetter[Placement] = Placement("left")

    lazy val leftEnd: HtmlAttrSetter[Placement] = Placement("left-end")

    lazy val leftStart: HtmlAttrSetter[Placement] = Placement("left-start")

    lazy val right: HtmlAttrSetter[Placement] = Placement("right")

    lazy val rightEnd: HtmlAttrSetter[Placement] = Placement("right-end")

    lazy val rightStart: HtmlAttrSetter[Placement] = Placement("right-start")

    lazy val top: HtmlAttrSetter[Placement] = Placement("top")

    lazy val topEnd: HtmlAttrSetter[Placement] = Placement("top-end")

    lazy val topStart: HtmlAttrSetter[Placement] = Placement("top-start")
  }

  /** year attribute - DateYearFormat */
  object DateYearFormat extends HtmlAttr[DateYearFormat]("year", UnionAsStringCodec[DateYearFormat]) {

    lazy val `2-digit`: HtmlAttrSetter[DateYearFormat] = DateYearFormat("2-digit")

    lazy val numeric: HtmlAttrSetter[DateYearFormat] = DateYearFormat("numeric")
  }

  /** enterkeyhint attribute - Enterkeyhint */
  object Enterkeyhint extends HtmlAttr[Enterkeyhint]("enterkeyhint", UnionAsStringCodec[Enterkeyhint]) {

    lazy val done: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("done")

    lazy val enter: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("enter")

    lazy val go: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("go")

    lazy val next: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("next")

    lazy val previous: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("previous")

    lazy val search: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("search")

    lazy val send: HtmlAttrSetter[Enterkeyhint] = Enterkeyhint("send")
  }

  /** display attribute - DisplayFormat */
  object DisplayFormat extends HtmlAttr[DisplayFormat]("display", UnionAsStringCodec[DisplayFormat]) {

    lazy val long: HtmlAttrSetter[DisplayFormat] = DisplayFormat("long")

    lazy val narrow: HtmlAttrSetter[DisplayFormat] = DisplayFormat("narrow")

    lazy val short: HtmlAttrSetter[DisplayFormat] = DisplayFormat("short")
  }

  /** icon-placement attribute - IconPlacement */
  object IconPlacement extends HtmlAttr[IconPlacement]("icon-placement", UnionAsStringCodec[IconPlacement]) {

    lazy val end: HtmlAttrSetter[IconPlacement] = IconPlacement("end")

    lazy val start: HtmlAttrSetter[IconPlacement] = IconPlacement("start")
  }

  /** target attribute - LinkTarget */
  object LinkTarget extends HtmlAttr[LinkTarget]("target", UnionAsStringCodec[LinkTarget]) {

    lazy val blank: HtmlAttrSetter[LinkTarget] = LinkTarget("_blank")

    lazy val parent: HtmlAttrSetter[LinkTarget] = LinkTarget("_parent")

    lazy val self: HtmlAttrSetter[LinkTarget] = LinkTarget("_self")

    lazy val top: HtmlAttrSetter[LinkTarget] = LinkTarget("_top")
  }

  /** appearance attribute - ExtendedAppearance */
  object ExtendedAppearance extends HtmlAttr[ExtendedAppearance]("appearance", UnionAsStringCodec[ExtendedAppearance]) {

    lazy val accent: HtmlAttrSetter[ExtendedAppearance] = ExtendedAppearance("accent")

    lazy val filled: HtmlAttrSetter[ExtendedAppearance] = ExtendedAppearance("filled")

    lazy val filledOutlined: HtmlAttrSetter[ExtendedAppearance] = ExtendedAppearance("filled-outlined")

    lazy val outlined: HtmlAttrSetter[ExtendedAppearance] = ExtendedAppearance("outlined")

    lazy val plain: HtmlAttrSetter[ExtendedAppearance] = ExtendedAppearance("plain")
  }

  /** autocapitalize attribute - Autocapitalize */
  object Autocapitalize extends HtmlAttr[Autocapitalize]("autocapitalize", UnionAsStringCodec[Autocapitalize]) {

    lazy val characters: HtmlAttrSetter[Autocapitalize] = Autocapitalize("characters")

    lazy val none: HtmlAttrSetter[Autocapitalize] = Autocapitalize("none")

    lazy val off: HtmlAttrSetter[Autocapitalize] = Autocapitalize("off")

    lazy val on: HtmlAttrSetter[Autocapitalize] = Autocapitalize("on")

    lazy val sentences: HtmlAttrSetter[Autocapitalize] = Autocapitalize("sentences")

    lazy val words: HtmlAttrSetter[Autocapitalize] = Autocapitalize("words")
  }

  /** inputmode attribute - Inputmode */
  object Inputmode extends HtmlAttr[Inputmode]("inputmode", UnionAsStringCodec[Inputmode]) {

    lazy val decimal: HtmlAttrSetter[Inputmode] = Inputmode("decimal")

    lazy val email: HtmlAttrSetter[Inputmode] = Inputmode("email")

    lazy val none: HtmlAttrSetter[Inputmode] = Inputmode("none")

    lazy val numeric: HtmlAttrSetter[Inputmode] = Inputmode("numeric")

    lazy val search: HtmlAttrSetter[Inputmode] = Inputmode("search")

    lazy val tel: HtmlAttrSetter[Inputmode] = Inputmode("tel")

    lazy val text: HtmlAttrSetter[Inputmode] = Inputmode("text")

    lazy val url: HtmlAttrSetter[Inputmode] = Inputmode("url")
  }

  /** attention attribute - Attention */
  object Attention extends HtmlAttr[Attention]("attention", UnionAsStringCodec[Attention]) {

    lazy val bounce: HtmlAttrSetter[Attention] = Attention("bounce")

    lazy val none: HtmlAttrSetter[Attention] = Attention("none")

    lazy val pulse: HtmlAttrSetter[Attention] = Attention("pulse")
  }

  /** appearance attribute - Appearance1 */
  object Appearance1 extends HtmlAttr[Appearance1]("appearance", UnionAsStringCodec[Appearance1]) {

    lazy val filled: HtmlAttrSetter[Appearance1] = Appearance1("filled")

    lazy val filledOutlined: HtmlAttrSetter[Appearance1] = Appearance1("filled-outlined")

    lazy val outlined: HtmlAttrSetter[Appearance1] = Appearance1("outlined")

    lazy val plain: HtmlAttrSetter[Appearance1] = Appearance1("plain")
  }

  /** loading attribute - LoadingStrategy */
  object LoadingStrategy extends HtmlAttr[LoadingStrategy]("loading", UnionAsStringCodec[LoadingStrategy]) {

    lazy val eager: HtmlAttrSetter[LoadingStrategy] = LoadingStrategy("eager")

    lazy val `lazy`: HtmlAttrSetter[LoadingStrategy] = LoadingStrategy("lazy")
  }

  /** appearance attribute - ExtendedAppearance1 */
  object ExtendedAppearance1
      extends HtmlAttr[ExtendedAppearance1]("appearance", UnionAsStringCodec[ExtendedAppearance1]) {

    lazy val accent: HtmlAttrSetter[ExtendedAppearance1] = ExtendedAppearance1("accent")

    lazy val filled: HtmlAttrSetter[ExtendedAppearance1] = ExtendedAppearance1("filled")

    lazy val filledOutlined: HtmlAttrSetter[ExtendedAppearance1] = ExtendedAppearance1("filled-outlined")

    lazy val outlined: HtmlAttrSetter[ExtendedAppearance1] = ExtendedAppearance1("outlined")
  }

  /** tooltip-placement attribute - TooltipPlacement */
  object TooltipPlacement
      extends HtmlAttr[TooltipPlacement]("tooltip-placement", UnionAsStringCodec[TooltipPlacement]) {

    lazy val bottom: HtmlAttrSetter[TooltipPlacement] = TooltipPlacement("bottom")

    lazy val left: HtmlAttrSetter[TooltipPlacement] = TooltipPlacement("left")

    lazy val right: HtmlAttrSetter[TooltipPlacement] = TooltipPlacement("right")

    lazy val top: HtmlAttrSetter[TooltipPlacement] = TooltipPlacement("top")
  }

  /** placement attribute - ComponentPlacement */
  object ComponentPlacement extends HtmlAttr[ComponentPlacement]("placement", UnionAsStringCodec[ComponentPlacement]) {

    lazy val bottom: HtmlAttrSetter[ComponentPlacement] = ComponentPlacement("bottom")

    lazy val end: HtmlAttrSetter[ComponentPlacement] = ComponentPlacement("end")

    lazy val start: HtmlAttrSetter[ComponentPlacement] = ComponentPlacement("start")

    lazy val top: HtmlAttrSetter[ComponentPlacement] = ComponentPlacement("top")
  }

  /** hour-format attribute - HourFormat */
  object HourFormat extends HtmlAttr[HourFormat]("hour-format", UnionAsStringCodec[HourFormat]) {

    lazy val `12`: HtmlAttrSetter[HourFormat] = HourFormat("12")

    lazy val `24`: HtmlAttrSetter[HourFormat] = HourFormat("24")

    lazy val auto: HtmlAttrSetter[HourFormat] = HourFormat("auto")
  }

  /** canvas attribute - IconCanvas */
  object IconCanvas extends HtmlAttr[IconCanvas]("canvas", UnionAsStringCodec[IconCanvas]) {

    lazy val auto: HtmlAttrSetter[IconCanvas] = IconCanvas("auto")

    lazy val fixed: HtmlAttrSetter[IconCanvas] = IconCanvas("fixed")

    lazy val roomy: HtmlAttrSetter[IconCanvas] = IconCanvas("roomy")

    lazy val square: HtmlAttrSetter[IconCanvas] = IconCanvas("square")
  }

  /** flip attribute - IconFlip */
  object IconFlip extends HtmlAttr[IconFlip]("flip", UnionAsStringCodec[IconFlip]) {

    lazy val both: HtmlAttrSetter[IconFlip] = IconFlip("both")

    lazy val x: HtmlAttrSetter[IconFlip] = IconFlip("x")

    lazy val y: HtmlAttrSetter[IconFlip] = IconFlip("y")
  }

  /** animation attribute - IconAnimation */
  object IconAnimation extends HtmlAttr[IconAnimation]("animation", UnionAsStringCodec[IconAnimation]) {

    lazy val beat: HtmlAttrSetter[IconAnimation] = IconAnimation("beat")

    lazy val beatFade: HtmlAttrSetter[IconAnimation] = IconAnimation("beat-fade")

    lazy val bounce: HtmlAttrSetter[IconAnimation] = IconAnimation("bounce")

    lazy val buzz: HtmlAttrSetter[IconAnimation] = IconAnimation("buzz")

    lazy val fade: HtmlAttrSetter[IconAnimation] = IconAnimation("fade")

    lazy val flip: HtmlAttrSetter[IconAnimation] = IconAnimation("flip")

    lazy val flip360: HtmlAttrSetter[IconAnimation] = IconAnimation("flip-360")

    lazy val float: HtmlAttrSetter[IconAnimation] = IconAnimation("float")

    lazy val jello: HtmlAttrSetter[IconAnimation] = IconAnimation("jello")

    lazy val shake: HtmlAttrSetter[IconAnimation] = IconAnimation("shake")

    lazy val spin: HtmlAttrSetter[IconAnimation] = IconAnimation("spin")

    lazy val spinPulse: HtmlAttrSetter[IconAnimation] = IconAnimation("spin-pulse")

    lazy val spinReverse: HtmlAttrSetter[IconAnimation] = IconAnimation("spin-reverse")

    lazy val spinSnap: HtmlAttrSetter[IconAnimation] = IconAnimation("spin-snap")

    lazy val spinSnap4: HtmlAttrSetter[IconAnimation] = IconAnimation("spin-snap-4")

    lazy val spinSnap8: HtmlAttrSetter[IconAnimation] = IconAnimation("spin-snap-8")

    lazy val swing: HtmlAttrSetter[IconAnimation] = IconAnimation("swing")

    lazy val wag: HtmlAttrSetter[IconAnimation] = IconAnimation("wag")
  }

  /** mode attribute - AccordionMode */
  object AccordionMode extends HtmlAttr[AccordionMode]("mode", UnionAsStringCodec[AccordionMode]) {

    lazy val multiple: HtmlAttrSetter[AccordionMode] = AccordionMode("multiple")

    lazy val single: HtmlAttrSetter[AccordionMode] = AccordionMode("single")

    lazy val singleCollapsible: HtmlAttrSetter[AccordionMode] = AccordionMode("single-collapsible")
  }

  /** shape attribute - AvatarShape */
  object AvatarShape extends HtmlAttr[AvatarShape]("shape", UnionAsStringCodec[AvatarShape]) {

    lazy val circle: HtmlAttrSetter[AvatarShape] = AvatarShape("circle")

    lazy val rounded: HtmlAttrSetter[AvatarShape] = AvatarShape("rounded")

    lazy val square: HtmlAttrSetter[AvatarShape] = AvatarShape("square")
  }

  /** type attribute - ButtonButtonType */
  object ButtonButtonType extends HtmlAttr[ButtonButtonType]("type", UnionAsStringCodec[ButtonButtonType]) {

    lazy val button: HtmlAttrSetter[ButtonButtonType] = ButtonButtonType("button")

    lazy val reset: HtmlAttrSetter[ButtonButtonType] = ButtonButtonType("reset")

    lazy val submit: HtmlAttrSetter[ButtonButtonType] = ButtonButtonType("submit")
  }

  /** formenctype attribute - ButtonFormenctype */
  object ButtonFormenctype extends HtmlAttr[ButtonFormenctype]("formenctype", UnionAsStringCodec[ButtonFormenctype]) {

    lazy val applicationxWwwFormUrlencoded: HtmlAttrSetter[ButtonFormenctype] = ButtonFormenctype(
      "application/x-www-form-urlencoded"
    )

    lazy val multipartformData: HtmlAttrSetter[ButtonFormenctype] = ButtonFormenctype("multipart/form-data")

    lazy val textPlain: HtmlAttrSetter[ButtonFormenctype] = ButtonFormenctype("text/plain")
  }

  /** formmethod attribute - ButtonFormmethod */
  object ButtonFormmethod extends HtmlAttr[ButtonFormmethod]("formmethod", UnionAsStringCodec[ButtonFormmethod]) {

    lazy val get: HtmlAttrSetter[ButtonFormmethod] = ButtonFormmethod("get")

    lazy val post: HtmlAttrSetter[ButtonFormmethod] = ButtonFormmethod("post")
  }

  /** type attribute - InputInputType */
  object InputInputType extends HtmlAttr[InputInputType]("type", UnionAsStringCodec[InputInputType]) {

    lazy val date: HtmlAttrSetter[InputInputType] = InputInputType("date")

    lazy val datetimeLocal: HtmlAttrSetter[InputInputType] = InputInputType("datetime-local")

    lazy val email: HtmlAttrSetter[InputInputType] = InputInputType("email")

    lazy val number: HtmlAttrSetter[InputInputType] = InputInputType("number")

    lazy val password: HtmlAttrSetter[InputInputType] = InputInputType("password")

    lazy val search: HtmlAttrSetter[InputInputType] = InputInputType("search")

    lazy val tel: HtmlAttrSetter[InputInputType] = InputInputType("tel")

    lazy val text: HtmlAttrSetter[InputInputType] = InputInputType("text")

    lazy val time: HtmlAttrSetter[InputInputType] = InputInputType("time")

    lazy val url: HtmlAttrSetter[InputInputType] = InputInputType("url")
  }

  /** boundary attribute - PopupBoundary */
  object PopupBoundary extends HtmlAttr[PopupBoundary]("boundary", UnionAsStringCodec[PopupBoundary]) {

    lazy val scroll: HtmlAttrSetter[PopupBoundary] = PopupBoundary("scroll")

    lazy val viewport: HtmlAttrSetter[PopupBoundary] = PopupBoundary("viewport")
  }

  /** arrow-placement attribute - PopupArrowPlacement */
  object PopupArrowPlacement
      extends HtmlAttr[PopupArrowPlacement]("arrow-placement", UnionAsStringCodec[PopupArrowPlacement]) {

    lazy val anchor: HtmlAttrSetter[PopupArrowPlacement] = PopupArrowPlacement("anchor")

    lazy val center: HtmlAttrSetter[PopupArrowPlacement] = PopupArrowPlacement("center")

    lazy val end: HtmlAttrSetter[PopupArrowPlacement] = PopupArrowPlacement("end")

    lazy val start: HtmlAttrSetter[PopupArrowPlacement] = PopupArrowPlacement("start")
  }

  /** flip-fallback-strategy attribute - PopupFlipFallbackStrategy */
  object PopupFlipFallbackStrategy
      extends HtmlAttr[PopupFlipFallbackStrategy](
        "flip-fallback-strategy",
        UnionAsStringCodec[PopupFlipFallbackStrategy]
      ) {

    lazy val bestFit: HtmlAttrSetter[PopupFlipFallbackStrategy] = PopupFlipFallbackStrategy("best-fit")

    lazy val initial: HtmlAttrSetter[PopupFlipFallbackStrategy] = PopupFlipFallbackStrategy("initial")
  }

  /** auto-size attribute - PopupAutoSize */
  object PopupAutoSize extends HtmlAttr[PopupAutoSize]("auto-size", UnionAsStringCodec[PopupAutoSize]) {

    lazy val both: HtmlAttrSetter[PopupAutoSize] = PopupAutoSize("both")

    lazy val horizontal: HtmlAttrSetter[PopupAutoSize] = PopupAutoSize("horizontal")

    lazy val vertical: HtmlAttrSetter[PopupAutoSize] = PopupAutoSize("vertical")
  }

  /** sync attribute - PopupSync */
  object PopupSync extends HtmlAttr[PopupSync]("sync", UnionAsStringCodec[PopupSync]) {

    lazy val both: HtmlAttrSetter[PopupSync] = PopupSync("both")

    lazy val height: HtmlAttrSetter[PopupSync] = PopupSync("height")

    lazy val width: HtmlAttrSetter[PopupSync] = PopupSync("width")
  }

  /** format attribute - ColorPickerFormat */
  object ColorPickerFormat extends HtmlAttr[ColorPickerFormat]("format", UnionAsStringCodec[ColorPickerFormat]) {

    lazy val hex: HtmlAttrSetter[ColorPickerFormat] = ColorPickerFormat("hex")

    lazy val hsl: HtmlAttrSetter[ColorPickerFormat] = ColorPickerFormat("hsl")

    lazy val hsv: HtmlAttrSetter[ColorPickerFormat] = ColorPickerFormat("hsv")

    lazy val rgb: HtmlAttrSetter[ColorPickerFormat] = ColorPickerFormat("rgb")
  }

  /** tooltip attribute - CopyButtonTooltip */
  object CopyButtonTooltip extends HtmlAttr[CopyButtonTooltip]("tooltip", UnionAsStringCodec[CopyButtonTooltip]) {

    lazy val copy: HtmlAttrSetter[CopyButtonTooltip] = CopyButtonTooltip("copy")

    lazy val full: HtmlAttrSetter[CopyButtonTooltip] = CopyButtonTooltip("full")

    lazy val none: HtmlAttrSetter[CopyButtonTooltip] = CopyButtonTooltip("none")
  }

  /** label-placement attribute - DividerLabelPlacement */
  object DividerLabelPlacement
      extends HtmlAttr[DividerLabelPlacement]("label-placement", UnionAsStringCodec[DividerLabelPlacement]) {

    lazy val center: HtmlAttrSetter[DividerLabelPlacement] = DividerLabelPlacement("center")

    lazy val end: HtmlAttrSetter[DividerLabelPlacement] = DividerLabelPlacement("end")

    lazy val start: HtmlAttrSetter[DividerLabelPlacement] = DividerLabelPlacement("start")
  }

  /** variant attribute - DropdownItemVariant */
  object DropdownItemVariant extends HtmlAttr[DropdownItemVariant]("variant", UnionAsStringCodec[DropdownItemVariant]) {

    lazy val danger: HtmlAttrSetter[DropdownItemVariant] = DropdownItemVariant("danger")

    lazy val default: HtmlAttrSetter[DropdownItemVariant] = DropdownItemVariant("default")
  }

  /** type attribute - DropdownItemElementType */
  object DropdownItemElementType
      extends HtmlAttr[DropdownItemElementType]("type", UnionAsStringCodec[DropdownItemElementType]) {

    lazy val checkbox: HtmlAttrSetter[DropdownItemElementType] = DropdownItemElementType("checkbox")

    lazy val normal: HtmlAttrSetter[DropdownItemElementType] = DropdownItemElementType("normal")
  }

  /** unit attribute - FormatBytesUnit */
  object FormatBytesUnit extends HtmlAttr[FormatBytesUnit]("unit", UnionAsStringCodec[FormatBytesUnit]) {

    lazy val bit: HtmlAttrSetter[FormatBytesUnit] = FormatBytesUnit("bit")

    lazy val byte: HtmlAttrSetter[FormatBytesUnit] = FormatBytesUnit("byte")
  }

  /** month attribute - FormatDateDateMonthFormat */
  object FormatDateDateMonthFormat
      extends HtmlAttr[FormatDateDateMonthFormat]("month", UnionAsStringCodec[FormatDateDateMonthFormat]) {

    lazy val `2-digit`: HtmlAttrSetter[FormatDateDateMonthFormat] = FormatDateDateMonthFormat("2-digit")

    lazy val long: HtmlAttrSetter[FormatDateDateMonthFormat] = FormatDateDateMonthFormat("long")

    lazy val narrow: HtmlAttrSetter[FormatDateDateMonthFormat] = FormatDateDateMonthFormat("narrow")

    lazy val numeric: HtmlAttrSetter[FormatDateDateMonthFormat] = FormatDateDateMonthFormat("numeric")

    lazy val short: HtmlAttrSetter[FormatDateDateMonthFormat] = FormatDateDateMonthFormat("short")
  }

  /** time-zone-name attribute - FormatDateTimeZoneName */
  object FormatDateTimeZoneName
      extends HtmlAttr[FormatDateTimeZoneName]("time-zone-name", UnionAsStringCodec[FormatDateTimeZoneName]) {

    lazy val long: HtmlAttrSetter[FormatDateTimeZoneName] = FormatDateTimeZoneName("long")

    lazy val short: HtmlAttrSetter[FormatDateTimeZoneName] = FormatDateTimeZoneName("short")
  }

  /** type attribute - FormatNumberElementType */
  object FormatNumberElementType
      extends HtmlAttr[FormatNumberElementType]("type", UnionAsStringCodec[FormatNumberElementType]) {

    lazy val currency: HtmlAttrSetter[FormatNumberElementType] = FormatNumberElementType("currency")

    lazy val decimal: HtmlAttrSetter[FormatNumberElementType] = FormatNumberElementType("decimal")

    lazy val percent: HtmlAttrSetter[FormatNumberElementType] = FormatNumberElementType("percent")
  }

  /** currency-display attribute - FormatNumberCurrencyDisplay */
  object FormatNumberCurrencyDisplay
      extends HtmlAttr[FormatNumberCurrencyDisplay](
        "currency-display",
        UnionAsStringCodec[FormatNumberCurrencyDisplay]
      ) {

    lazy val code: HtmlAttrSetter[FormatNumberCurrencyDisplay] = FormatNumberCurrencyDisplay("code")

    lazy val _name: HtmlAttrSetter[FormatNumberCurrencyDisplay] = FormatNumberCurrencyDisplay("name")

    lazy val narrowSymbol: HtmlAttrSetter[FormatNumberCurrencyDisplay] = FormatNumberCurrencyDisplay("narrowSymbol")

    lazy val symbol: HtmlAttrSetter[FormatNumberCurrencyDisplay] = FormatNumberCurrencyDisplay("symbol")
  }

  /** mode attribute - IncludeMode */
  object IncludeMode extends HtmlAttr[IncludeMode]("mode", UnionAsStringCodec[IncludeMode]) {

    lazy val cors: HtmlAttrSetter[IncludeMode] = IncludeMode("cors")

    lazy val noCors: HtmlAttrSetter[IncludeMode] = IncludeMode("no-cors")

    lazy val sameOrigin: HtmlAttrSetter[IncludeMode] = IncludeMode("same-origin")
  }

  /** inputmode attribute - NumberInputInputmode */
  object NumberInputInputmode
      extends HtmlAttr[NumberInputInputmode]("inputmode", UnionAsStringCodec[NumberInputInputmode]) {

    lazy val decimal: HtmlAttrSetter[NumberInputInputmode] = NumberInputInputmode("decimal")

    lazy val numeric: HtmlAttrSetter[NumberInputInputmode] = NumberInputInputmode("numeric")
  }

  /** placement attribute - SelectPlacement */
  object SelectPlacement extends HtmlAttr[SelectPlacement]("placement", UnionAsStringCodec[SelectPlacement]) {

    lazy val bottom: HtmlAttrSetter[SelectPlacement] = SelectPlacement("bottom")

    lazy val top: HtmlAttrSetter[SelectPlacement] = SelectPlacement("top")
  }

  /** appearance attribute - OtpInputAppearance */
  object OtpInputAppearance extends HtmlAttr[OtpInputAppearance]("appearance", UnionAsStringCodec[OtpInputAppearance]) {

    lazy val contained: HtmlAttrSetter[OtpInputAppearance] = OtpInputAppearance("contained")

    lazy val filled: HtmlAttrSetter[OtpInputAppearance] = OtpInputAppearance("filled")

    lazy val filledOutlined: HtmlAttrSetter[OtpInputAppearance] = OtpInputAppearance("filled-outlined")

    lazy val outlined: HtmlAttrSetter[OtpInputAppearance] = OtpInputAppearance("outlined")
  }

  /** type attribute - OtpInputElementType */
  object OtpInputElementType extends HtmlAttr[OtpInputElementType]("type", UnionAsStringCodec[OtpInputElementType]) {

    lazy val alpha: HtmlAttrSetter[OtpInputElementType] = OtpInputElementType("alpha")

    lazy val alphanumeric: HtmlAttrSetter[OtpInputElementType] = OtpInputElementType("alphanumeric")

    lazy val numeric: HtmlAttrSetter[OtpInputElementType] = OtpInputElementType("numeric")
  }

  /** case attribute - OtpInputCase */
  object OtpInputCase extends HtmlAttr[OtpInputCase]("case", UnionAsStringCodec[OtpInputCase]) {

    lazy val lower: HtmlAttrSetter[OtpInputCase] = OtpInputCase("lower")

    lazy val preserve: HtmlAttrSetter[OtpInputCase] = OtpInputCase("preserve")

    lazy val upper: HtmlAttrSetter[OtpInputCase] = OtpInputCase("upper")
  }

  /** format attribute - PaginationFormat */
  object PaginationFormat extends HtmlAttr[PaginationFormat]("format", UnionAsStringCodec[PaginationFormat]) {

    lazy val compact: HtmlAttrSetter[PaginationFormat] = PaginationFormat("compact")

    lazy val standard: HtmlAttrSetter[PaginationFormat] = PaginationFormat("standard")
  }

  /** appearance attribute - PaginationAppearance */
  object PaginationAppearance
      extends HtmlAttr[PaginationAppearance]("appearance", UnionAsStringCodec[PaginationAppearance]) {

    lazy val filled: HtmlAttrSetter[PaginationAppearance] = PaginationAppearance("filled")

    lazy val outlined: HtmlAttrSetter[PaginationAppearance] = PaginationAppearance("outlined")

    lazy val plain: HtmlAttrSetter[PaginationAppearance] = PaginationAppearance("plain")
  }

  /** error-correction attribute - QrCodeErrorCorrection */
  object QrCodeErrorCorrection
      extends HtmlAttr[QrCodeErrorCorrection]("error-correction", UnionAsStringCodec[QrCodeErrorCorrection]) {

    lazy val h: HtmlAttrSetter[QrCodeErrorCorrection] = QrCodeErrorCorrection("H")

    lazy val l: HtmlAttrSetter[QrCodeErrorCorrection] = QrCodeErrorCorrection("L")

    lazy val m: HtmlAttrSetter[QrCodeErrorCorrection] = QrCodeErrorCorrection("M")

    lazy val q: HtmlAttrSetter[QrCodeErrorCorrection] = QrCodeErrorCorrection("Q")
  }

  /** appearance attribute - RadioAppearance */
  object RadioAppearance extends HtmlAttr[RadioAppearance]("appearance", UnionAsStringCodec[RadioAppearance]) {

    lazy val button: HtmlAttrSetter[RadioAppearance] = RadioAppearance("button")

    lazy val default: HtmlAttrSetter[RadioAppearance] = RadioAppearance("default")
  }

  /** mode attribute - RandomContentMode */
  object RandomContentMode extends HtmlAttr[RandomContentMode]("mode", UnionAsStringCodec[RandomContentMode]) {

    lazy val random: HtmlAttrSetter[RandomContentMode] = RandomContentMode("random")

    lazy val sequence: HtmlAttrSetter[RandomContentMode] = RandomContentMode("sequence")

    lazy val unique: HtmlAttrSetter[RandomContentMode] = RandomContentMode("unique")
  }

  /** animation attribute - RandomContentAnimation */
  object RandomContentAnimation
      extends HtmlAttr[RandomContentAnimation]("animation", UnionAsStringCodec[RandomContentAnimation]) {

    lazy val fade: HtmlAttrSetter[RandomContentAnimation] = RandomContentAnimation("fade")

    lazy val fadeDown: HtmlAttrSetter[RandomContentAnimation] = RandomContentAnimation("fade-down")

    lazy val fadeLeft: HtmlAttrSetter[RandomContentAnimation] = RandomContentAnimation("fade-left")

    lazy val fadeRight: HtmlAttrSetter[RandomContentAnimation] = RandomContentAnimation("fade-right")

    lazy val fadeUp: HtmlAttrSetter[RandomContentAnimation] = RandomContentAnimation("fade-up")

    lazy val none: HtmlAttrSetter[RandomContentAnimation] = RandomContentAnimation("none")
  }

  /** numeric attribute - RelativeTimeNumeric */
  object RelativeTimeNumeric extends HtmlAttr[RelativeTimeNumeric]("numeric", UnionAsStringCodec[RelativeTimeNumeric]) {

    lazy val always: HtmlAttrSetter[RelativeTimeNumeric] = RelativeTimeNumeric("always")

    lazy val auto: HtmlAttrSetter[RelativeTimeNumeric] = RelativeTimeNumeric("auto")
  }

  /** effect attribute - SkeletonEffect */
  object SkeletonEffect extends HtmlAttr[SkeletonEffect]("effect", UnionAsStringCodec[SkeletonEffect]) {

    lazy val none: HtmlAttrSetter[SkeletonEffect] = SkeletonEffect("none")

    lazy val pulse: HtmlAttrSetter[SkeletonEffect] = SkeletonEffect("pulse")

    lazy val sheen: HtmlAttrSetter[SkeletonEffect] = SkeletonEffect("sheen")
  }

  /** orientation attribute - StepperOrientation */
  object StepperOrientation
      extends HtmlAttr[StepperOrientation]("orientation", UnionAsStringCodec[StepperOrientation]) {

    lazy val auto: HtmlAttrSetter[StepperOrientation] = StepperOrientation("auto")

    lazy val horizontal: HtmlAttrSetter[StepperOrientation] = StepperOrientation("horizontal")

    lazy val vertical: HtmlAttrSetter[StepperOrientation] = StepperOrientation("vertical")
  }

  /** activation attribute - TabGroupActivation */
  object TabGroupActivation extends HtmlAttr[TabGroupActivation]("activation", UnionAsStringCodec[TabGroupActivation]) {

    lazy val auto: HtmlAttrSetter[TabGroupActivation] = TabGroupActivation("auto")

    lazy val manual: HtmlAttrSetter[TabGroupActivation] = TabGroupActivation("manual")
  }

  /** resize attribute - TextareaResize */
  object TextareaResize extends HtmlAttr[TextareaResize]("resize", UnionAsStringCodec[TextareaResize]) {

    lazy val auto: HtmlAttrSetter[TextareaResize] = TextareaResize("auto")

    lazy val both: HtmlAttrSetter[TextareaResize] = TextareaResize("both")

    lazy val horizontal: HtmlAttrSetter[TextareaResize] = TextareaResize("horizontal")

    lazy val none: HtmlAttrSetter[TextareaResize] = TextareaResize("none")

    lazy val vertical: HtmlAttrSetter[TextareaResize] = TextareaResize("vertical")
  }

  /** placement attribute - TimeInputPlacement */
  object TimeInputPlacement extends HtmlAttr[TimeInputPlacement]("placement", UnionAsStringCodec[TimeInputPlacement]) {

    lazy val bottom: HtmlAttrSetter[TimeInputPlacement] = TimeInputPlacement("bottom")

    lazy val bottomEnd: HtmlAttrSetter[TimeInputPlacement] = TimeInputPlacement("bottom-end")

    lazy val bottomStart: HtmlAttrSetter[TimeInputPlacement] = TimeInputPlacement("bottom-start")

    lazy val top: HtmlAttrSetter[TimeInputPlacement] = TimeInputPlacement("top")

    lazy val topEnd: HtmlAttrSetter[TimeInputPlacement] = TimeInputPlacement("top-end")

    lazy val topStart: HtmlAttrSetter[TimeInputPlacement] = TimeInputPlacement("top-start")
  }

  /** placement attribute - ToastPlacement */
  object ToastPlacement extends HtmlAttr[ToastPlacement]("placement", UnionAsStringCodec[ToastPlacement]) {

    lazy val bottomCenter: HtmlAttrSetter[ToastPlacement] = ToastPlacement("bottom-center")

    lazy val bottomEnd: HtmlAttrSetter[ToastPlacement] = ToastPlacement("bottom-end")

    lazy val bottomStart: HtmlAttrSetter[ToastPlacement] = ToastPlacement("bottom-start")

    lazy val topCenter: HtmlAttrSetter[ToastPlacement] = ToastPlacement("top-center")

    lazy val topEnd: HtmlAttrSetter[ToastPlacement] = ToastPlacement("top-end")

    lazy val topStart: HtmlAttrSetter[ToastPlacement] = ToastPlacement("top-start")
  }

  /** selection attribute - TreeSelection */
  object TreeSelection extends HtmlAttr[TreeSelection]("selection", UnionAsStringCodec[TreeSelection]) {

    lazy val leaf: HtmlAttrSetter[TreeSelection] = TreeSelection("leaf")

    lazy val leafMultiple: HtmlAttrSetter[TreeSelection] = TreeSelection("leaf-multiple")

    lazy val multiple: HtmlAttrSetter[TreeSelection] = TreeSelection("multiple")

    lazy val single: HtmlAttrSetter[TreeSelection] = TreeSelection("single")
  }
}
