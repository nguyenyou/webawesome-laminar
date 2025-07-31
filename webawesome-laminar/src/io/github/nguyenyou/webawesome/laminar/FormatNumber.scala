package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Formats a number using the specified locale and options.
  *
  * [[https://webawesome.com/docs/components/format-number WebAwesome docs]]
  */
object FormatNumber extends WebComponent("wa-format-number") {

  @JSImport("@awesome.me/webawesome/dist/components/format-number/format-number.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = FormatNumber.type

  type Ref = WaFormatNumberComponent & dom.HTMLElement

  // -- Props --

  /** The number to format. */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  /** The formatting style to use. Valid values: "currency", "decimal", "percent". */
  lazy val `type`: CommonKeys.FormatNumberElementType.type = CommonKeys.FormatNumberElementType

  lazy val typ: CommonKeys.FormatNumberElementType.type = `type`

  lazy val tpe: CommonKeys.FormatNumberElementType.type = `type`

  /** Turns off grouping separators. */
  lazy val withoutGrouping: HtmlAttr[Boolean] = boolAttr("without-grouping")

  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  lazy val currency: HtmlAttr[String] = stringAttr("currency")

  /** How to display the currency. Valid values: "symbol", "narrowSymbol", "code", "name". */
  lazy val currencyDisplay: CommonKeys.FormatNumberCurrencyDisplay.type = CommonKeys.FormatNumberCurrencyDisplay

  /** The minimum number of integer digits to use. Possible values are 1-21. */
  lazy val minimumIntegerDigits: HtmlAttr[Double] = doubleAttr("minimum-integer-digits")

  /** The minimum number of fraction digits to use. Possible values are 0-100. */
  lazy val minimumFractionDigits: HtmlAttr[Double] = doubleAttr("minimum-fraction-digits")

  /** The maximum number of fraction digits to use. Possible values are 0-100. */
  lazy val maximumFractionDigits: HtmlAttr[Double] = doubleAttr("maximum-fraction-digits")

  /** The minimum number of significant digits to use. Possible values are 1-21. */
  lazy val minimumSignificantDigits: HtmlAttr[Double] = doubleAttr("minimum-significant-digits")

  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  lazy val maximumSignificantDigits: HtmlAttr[Double] = doubleAttr("maximum-significant-digits")

  // -- Element type --

  @js.native
  trait WaFormatNumberComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The formatting style to use. Valid values: "currency", "decimal", "percent". */
    var `type`: FormatNumberElementType

    /** Turns off grouping separators. */
    var withoutGrouping: Boolean

    /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
    var currency: String

    /** How to display the currency. Valid values: "symbol", "narrowSymbol", "code", "name". */
    var currencyDisplay: FormatNumberCurrencyDisplay

    /** The minimum number of integer digits to use. Possible values are 1-21. */
    var minimumIntegerDigits: Double

    /** The minimum number of fraction digits to use. Possible values are 0-100. */
    var minimumFractionDigits: Double

    /** The maximum number of fraction digits to use. Possible values are 0-100. */
    var maximumFractionDigits: Double

    /** The minimum number of significant digits to use. Possible values are 1-21. */
    var minimumSignificantDigits: Double

    /** The maximum number of significant digits to use,. Possible values are 1-21. */
    var maximumSignificantDigits: Double

  }
}
