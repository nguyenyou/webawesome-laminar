package io.github.nguyenyou.webawesome.laminar
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.modifiers.KeySetter.HtmlAttrSetter
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

/** Typical events / properties / etc. defined on Shoelace web components. We selectively export them from this object
  * into individual components that define them.
  */
object CommonKeys extends CommonTypes {

  /** size attribute */
  object size extends HtmlAttr[ComponentSize]("size", UnionAsStringCodec[ComponentSize]) {

    lazy val large: HtmlAttrSetter[ComponentSize] = size("large")

    lazy val medium: HtmlAttrSetter[ComponentSize] = size("medium")

    lazy val small: HtmlAttrSetter[ComponentSize] = size("small")
  }

  /** orientation attribute */
  object orientation extends HtmlAttr[Orientation]("orientation", UnionAsStringCodec[Orientation]) {

    lazy val horizontal: HtmlAttrSetter[Orientation] = orientation("horizontal")

    lazy val vertical: HtmlAttrSetter[Orientation] = orientation("vertical")
  }

  /** variant attribute */
  object variant extends HtmlAttr[ThemeVariant]("variant", UnionAsStringCodec[ThemeVariant]) {

    lazy val brand: HtmlAttrSetter[ThemeVariant] = variant("brand")

    lazy val danger: HtmlAttrSetter[ThemeVariant] = variant("danger")

    lazy val neutral: HtmlAttrSetter[ThemeVariant] = variant("neutral")

    lazy val success: HtmlAttrSetter[ThemeVariant] = variant("success")

    lazy val warning: HtmlAttrSetter[ThemeVariant] = variant("warning")
  }

  /** year attribute */
  object year extends HtmlAttr[DateYearFormat]("year", UnionAsStringCodec[DateYearFormat]) {

    lazy val `2-digit`: HtmlAttrSetter[DateYearFormat] = year("2-digit")

    lazy val numeric: HtmlAttrSetter[DateYearFormat] = year("numeric")
  }

  /** display attribute */
  object display extends HtmlAttr[DisplayFormat]("display", UnionAsStringCodec[DisplayFormat]) {

    lazy val long: HtmlAttrSetter[DisplayFormat] = display("long")

    lazy val narrow: HtmlAttrSetter[DisplayFormat] = display("narrow")

    lazy val short: HtmlAttrSetter[DisplayFormat] = display("short")
  }

  /** appearance attribute */
  object appearance extends HtmlAttr[FilledOutlineAppearance]("appearance", UnionAsStringCodec[FilledOutlineAppearance]) {

    lazy val filled: HtmlAttrSetter[FilledOutlineAppearance] = appearance("filled")

    lazy val outlined: HtmlAttrSetter[FilledOutlineAppearance] = appearance("outlined")

    lazy val filledOutlined: HtmlAttrSetter[FilledOutlineAppearance] = appearance("filled outlined")
  }

  /** loading attribute */
  object loading extends HtmlAttr[LoadingStrategy]("loading", UnionAsStringCodec[LoadingStrategy]) {

    lazy val eager: HtmlAttrSetter[LoadingStrategy] = loading("eager")

    lazy val `lazy`: HtmlAttrSetter[LoadingStrategy] = loading("lazy")
  }

  /** tooltip-placement attribute */
  object tooltipPlacement extends HtmlAttr[TooltipPlacement]("tooltip-placement", UnionAsStringCodec[TooltipPlacement]) {

    lazy val bottom: HtmlAttrSetter[TooltipPlacement] = tooltipPlacement("bottom")

    lazy val left: HtmlAttrSetter[TooltipPlacement] = tooltipPlacement("left")

    lazy val right: HtmlAttrSetter[TooltipPlacement] = tooltipPlacement("right")

    lazy val top: HtmlAttrSetter[TooltipPlacement] = tooltipPlacement("top")
  }

  /** placement attribute */
  object placement extends HtmlAttr[ComponentPlacement]("placement", UnionAsStringCodec[ComponentPlacement]) {

    lazy val bottom: HtmlAttrSetter[ComponentPlacement] = placement("bottom")

    lazy val end: HtmlAttrSetter[ComponentPlacement] = placement("end")

    lazy val start: HtmlAttrSetter[ComponentPlacement] = placement("start")

    lazy val top: HtmlAttrSetter[ComponentPlacement] = placement("top")
  }

  /** autocapitalize attribute */
  object autocapitalize extends HtmlAttr[Autocapitalize]("autocapitalize", UnionAsStringCodec[Autocapitalize]) {

    lazy val characters: HtmlAttrSetter[Autocapitalize] = autocapitalize("characters")

    lazy val none: HtmlAttrSetter[Autocapitalize] = autocapitalize("none")

    lazy val off: HtmlAttrSetter[Autocapitalize] = autocapitalize("off")

    lazy val on: HtmlAttrSetter[Autocapitalize] = autocapitalize("on")

    lazy val sentences: HtmlAttrSetter[Autocapitalize] = autocapitalize("sentences")

    lazy val words: HtmlAttrSetter[Autocapitalize] = autocapitalize("words")
  }

  /** enterkeyhint attribute */
  object enterkeyhint extends HtmlAttr[Enterkeyhint]("enterkeyhint", UnionAsStringCodec[Enterkeyhint]) {

    lazy val done: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("done")

    lazy val enter: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("enter")

    lazy val go: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("go")

    lazy val next: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("next")

    lazy val previous: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("previous")

    lazy val search: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("search")

    lazy val send: HtmlAttrSetter[Enterkeyhint] = enterkeyhint("send")
  }

  /** inputmode attribute */
  object inputmode extends HtmlAttr[Inputmode]("inputmode", UnionAsStringCodec[Inputmode]) {

    lazy val decimal: HtmlAttrSetter[Inputmode] = inputmode("decimal")

    lazy val email: HtmlAttrSetter[Inputmode] = inputmode("email")

    lazy val none: HtmlAttrSetter[Inputmode] = inputmode("none")

    lazy val numeric: HtmlAttrSetter[Inputmode] = inputmode("numeric")

    lazy val search: HtmlAttrSetter[Inputmode] = inputmode("search")

    lazy val tel: HtmlAttrSetter[Inputmode] = inputmode("tel")

    lazy val text: HtmlAttrSetter[Inputmode] = inputmode("text")

    lazy val url: HtmlAttrSetter[Inputmode] = inputmode("url")
  }

  /** shape attribute */
  object shape extends HtmlAttr[AvatarShape]("shape", UnionAsStringCodec[AvatarShape]) {

    lazy val circle: HtmlAttrSetter[AvatarShape] = shape("circle")

    lazy val rounded: HtmlAttrSetter[AvatarShape] = shape("rounded")

    lazy val square: HtmlAttrSetter[AvatarShape] = shape("square")
  }

  /** type attribute */
  object `type` extends HtmlAttr[ButtonButtonType]("type", UnionAsStringCodec[ButtonButtonType]) {

    lazy val button: HtmlAttrSetter[ButtonButtonType] = `type`("button")

    lazy val reset: HtmlAttrSetter[ButtonButtonType] = `type`("reset")

    lazy val submit: HtmlAttrSetter[ButtonButtonType] = `type`("submit")
  }

  /** target attribute */
  object target extends HtmlAttr[ButtonLinkTarget]("target", UnionAsStringCodec[ButtonLinkTarget]) {

    lazy val blank: HtmlAttrSetter[ButtonLinkTarget] = target("_blank")

    lazy val parent: HtmlAttrSetter[ButtonLinkTarget] = target("_parent")

    lazy val self: HtmlAttrSetter[ButtonLinkTarget] = target("_self")

    lazy val top: HtmlAttrSetter[ButtonLinkTarget] = target("_top")
  }

  /** formenctype attribute */
  object formenctype extends HtmlAttr[ButtonFormenctype]("formenctype", UnionAsStringCodec[ButtonFormenctype]) {

    lazy val applicationxWwwFormUrlencoded: HtmlAttrSetter[ButtonFormenctype] = formenctype("application/x-www-form-urlencoded")

    lazy val multipartformData: HtmlAttrSetter[ButtonFormenctype] = formenctype("multipart/form-data")

    lazy val textPlain: HtmlAttrSetter[ButtonFormenctype] = formenctype("text/plain")
  }

  /** formmethod attribute */
  object formmethod extends HtmlAttr[ButtonFormmethod]("formmethod", UnionAsStringCodec[ButtonFormmethod]) {

    lazy val get: HtmlAttrSetter[ButtonFormmethod] = formmethod("get")

    lazy val post: HtmlAttrSetter[ButtonFormmethod] = formmethod("post")
  }

  /** attention attribute */
  object attention extends HtmlAttr[BadgeAttention]("attention", UnionAsStringCodec[BadgeAttention]) {

    lazy val bounce: HtmlAttrSetter[BadgeAttention] = attention("bounce")

    lazy val none: HtmlAttrSetter[BadgeAttention] = attention("none")

    lazy val pulse: HtmlAttrSetter[BadgeAttention] = attention("pulse")
  }

  /** format attribute */
  object format extends HtmlAttr[ColorPickerFormat]("format", UnionAsStringCodec[ColorPickerFormat]) {

    lazy val hex: HtmlAttrSetter[ColorPickerFormat] = format("hex")

    lazy val hsl: HtmlAttrSetter[ColorPickerFormat] = format("hsl")

    lazy val hsv: HtmlAttrSetter[ColorPickerFormat] = format("hsv")

    lazy val rgb: HtmlAttrSetter[ColorPickerFormat] = format("rgb")
  }

  /** unit attribute */
  object unit extends HtmlAttr[FormatBytesUnit]("unit", UnionAsStringCodec[FormatBytesUnit]) {

    lazy val bit: HtmlAttrSetter[FormatBytesUnit] = unit("bit")

    lazy val byte: HtmlAttrSetter[FormatBytesUnit] = unit("byte")
  }

  /** currency-display attribute */
  object currencyDisplay extends HtmlAttr[FormatNumberCurrencyDisplay]("currency-display", UnionAsStringCodec[FormatNumberCurrencyDisplay]) {

    lazy val code: HtmlAttrSetter[FormatNumberCurrencyDisplay] = currencyDisplay("code")

    lazy val _name: HtmlAttrSetter[FormatNumberCurrencyDisplay] = currencyDisplay("name")

    lazy val narrowSymbol: HtmlAttrSetter[FormatNumberCurrencyDisplay] = currencyDisplay("narrowSymbol")

    lazy val symbol: HtmlAttrSetter[FormatNumberCurrencyDisplay] = currencyDisplay("symbol")
  }

  /** month attribute */
  object month extends HtmlAttr[FormatDateDateMonthFormat]("month", UnionAsStringCodec[FormatDateDateMonthFormat]) {

    lazy val `2-digit`: HtmlAttrSetter[FormatDateDateMonthFormat] = month("2-digit")

    lazy val long: HtmlAttrSetter[FormatDateDateMonthFormat] = month("long")

    lazy val narrow: HtmlAttrSetter[FormatDateDateMonthFormat] = month("narrow")

    lazy val numeric: HtmlAttrSetter[FormatDateDateMonthFormat] = month("numeric")

    lazy val short: HtmlAttrSetter[FormatDateDateMonthFormat] = month("short")
  }

  /** time-zone-name attribute */
  object timeZoneName extends HtmlAttr[FormatDateTimeZoneName]("time-zone-name", UnionAsStringCodec[FormatDateTimeZoneName]) {

    lazy val long: HtmlAttrSetter[FormatDateTimeZoneName] = timeZoneName("long")

    lazy val short: HtmlAttrSetter[FormatDateTimeZoneName] = timeZoneName("short")
  }

  /** hour-format attribute */
  object hourFormat extends HtmlAttr[FormatDateHourFormat]("hour-format", UnionAsStringCodec[FormatDateHourFormat]) {

    lazy val `12`: HtmlAttrSetter[FormatDateHourFormat] = hourFormat("12")

    lazy val `24`: HtmlAttrSetter[FormatDateHourFormat] = hourFormat("24")

    lazy val auto: HtmlAttrSetter[FormatDateHourFormat] = hourFormat("auto")
  }

  /** mode attribute */
  object mode extends HtmlAttr[IncludeMode]("mode", UnionAsStringCodec[IncludeMode]) {

    lazy val cors: HtmlAttrSetter[IncludeMode] = mode("cors")

    lazy val noCors: HtmlAttrSetter[IncludeMode] = mode("no-cors")

    lazy val sameOrigin: HtmlAttrSetter[IncludeMode] = mode("same-origin")
  }

  /** autocorrect attribute */
  object autocorrect extends HtmlAttr[InputAutocorrect]("autocorrect", UnionAsStringCodec[InputAutocorrect]) {

    lazy val off: HtmlAttrSetter[InputAutocorrect] = autocorrect("off")

    lazy val on: HtmlAttrSetter[InputAutocorrect] = autocorrect("on")
  }

  /** view attribute */
  object view extends HtmlAttr[PageView]("view", UnionAsStringCodec[PageView]) {

    lazy val desktop: HtmlAttrSetter[PageView] = view("desktop")

    lazy val mobile: HtmlAttrSetter[PageView] = view("mobile")
  }

  /** navigation-placement attribute */
  object navigationPlacement extends HtmlAttr[PageNavigationPlacement]("navigation-placement", UnionAsStringCodec[PageNavigationPlacement]) {

    lazy val end: HtmlAttrSetter[PageNavigationPlacement] = navigationPlacement("end")

    lazy val start: HtmlAttrSetter[PageNavigationPlacement] = navigationPlacement("start")
  }

  /** boundary attribute */
  object boundary extends HtmlAttr[PopupBoundary]("boundary", UnionAsStringCodec[PopupBoundary]) {

    lazy val scroll: HtmlAttrSetter[PopupBoundary] = boundary("scroll")

    lazy val viewport: HtmlAttrSetter[PopupBoundary] = boundary("viewport")
  }

  /** arrow-placement attribute */
  object arrowPlacement extends HtmlAttr[PopupArrowPlacement]("arrow-placement", UnionAsStringCodec[PopupArrowPlacement]) {

    lazy val anchor: HtmlAttrSetter[PopupArrowPlacement] = arrowPlacement("anchor")

    lazy val center: HtmlAttrSetter[PopupArrowPlacement] = arrowPlacement("center")

    lazy val end: HtmlAttrSetter[PopupArrowPlacement] = arrowPlacement("end")

    lazy val start: HtmlAttrSetter[PopupArrowPlacement] = arrowPlacement("start")
  }

  /** flip-fallback-strategy attribute */
  object flipFallbackStrategy extends HtmlAttr[PopupFlipFallbackStrategy]("flip-fallback-strategy", UnionAsStringCodec[PopupFlipFallbackStrategy]) {

    lazy val bestFit: HtmlAttrSetter[PopupFlipFallbackStrategy] = flipFallbackStrategy("best-fit")

    lazy val initial: HtmlAttrSetter[PopupFlipFallbackStrategy] = flipFallbackStrategy("initial")
  }

  /** auto-size attribute */
  object autoSize extends HtmlAttr[PopupAutoSize]("auto-size", UnionAsStringCodec[PopupAutoSize]) {

    lazy val both: HtmlAttrSetter[PopupAutoSize] = autoSize("both")

    lazy val horizontal: HtmlAttrSetter[PopupAutoSize] = autoSize("horizontal")

    lazy val vertical: HtmlAttrSetter[PopupAutoSize] = autoSize("vertical")
  }

  /** sync attribute */
  object sync extends HtmlAttr[PopupSync]("sync", UnionAsStringCodec[PopupSync]) {

    lazy val both: HtmlAttrSetter[PopupSync] = sync("both")

    lazy val height: HtmlAttrSetter[PopupSync] = sync("height")

    lazy val width: HtmlAttrSetter[PopupSync] = sync("width")
  }

  /** error-correction attribute */
  object errorCorrection extends HtmlAttr[QrCodeErrorCorrection]("error-correction", UnionAsStringCodec[QrCodeErrorCorrection]) {

    lazy val h: HtmlAttrSetter[QrCodeErrorCorrection] = errorCorrection("H")

    lazy val l: HtmlAttrSetter[QrCodeErrorCorrection] = errorCorrection("L")

    lazy val m: HtmlAttrSetter[QrCodeErrorCorrection] = errorCorrection("M")

    lazy val q: HtmlAttrSetter[QrCodeErrorCorrection] = errorCorrection("Q")
  }

  /** numeric attribute */
  object numeric extends HtmlAttr[RelativeTimeNumeric]("numeric", UnionAsStringCodec[RelativeTimeNumeric]) {

    lazy val always: HtmlAttrSetter[RelativeTimeNumeric] = numeric("always")

    lazy val auto: HtmlAttrSetter[RelativeTimeNumeric] = numeric("auto")
  }

  /** effect attribute */
  object effect extends HtmlAttr[SkeletonEffect]("effect", UnionAsStringCodec[SkeletonEffect]) {

    lazy val none: HtmlAttrSetter[SkeletonEffect] = effect("none")

    lazy val pulse: HtmlAttrSetter[SkeletonEffect] = effect("pulse")

    lazy val sheen: HtmlAttrSetter[SkeletonEffect] = effect("sheen")
  }

  /** activation attribute */
  object activation extends HtmlAttr[TabGroupActivation]("activation", UnionAsStringCodec[TabGroupActivation]) {

    lazy val auto: HtmlAttrSetter[TabGroupActivation] = activation("auto")

    lazy val manual: HtmlAttrSetter[TabGroupActivation] = activation("manual")
  }

  /** resize attribute */
  object resize extends HtmlAttr[TextareaResize]("resize", UnionAsStringCodec[TextareaResize]) {

    lazy val auto: HtmlAttrSetter[TextareaResize] = resize("auto")

    lazy val both: HtmlAttrSetter[TextareaResize] = resize("both")

    lazy val horizontal: HtmlAttrSetter[TextareaResize] = resize("horizontal")

    lazy val none: HtmlAttrSetter[TextareaResize] = resize("none")

    lazy val vertical: HtmlAttrSetter[TextareaResize] = resize("vertical")
  }

  /** selection attribute */
  object selection extends HtmlAttr[TreeSelection]("selection", UnionAsStringCodec[TreeSelection]) {

    lazy val leaf: HtmlAttrSetter[TreeSelection] = selection("leaf")

    lazy val multiple: HtmlAttrSetter[TreeSelection] = selection("multiple")

    lazy val single: HtmlAttrSetter[TreeSelection] = selection("single")
  }
}
