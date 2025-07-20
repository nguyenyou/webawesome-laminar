package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Formats a date/time using the specified locale and options.
  *
  * [[https://webawesome.com/docs/components/format-date WebAwesome docs]]
  */
object FormatDate extends WebComponent("wa-format-date") {

  @JSImport("@awesome.me/webawesome/dist/components/format-date/format-date.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = FormatDate.type

  type Ref = WaFormatDateComponent & dom.HTMLElement

  // -- Attributes --

  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
    * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
    * in JavaScript, use
    * [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
    */
  lazy val date: HtmlAttr[String] = stringAttr("date")

  /** The format for displaying the weekday. Valid values: "narrow", "short", "long". */
  lazy val weekday: HtmlAttr[DisplayFormat] = unionAttr("weekday")

  /** The format for displaying the era. Valid values: "narrow", "short", "long". */
  lazy val era: HtmlAttr[DisplayFormat] = unionAttr("era")

  /** The format for displaying the year. Valid values: "numeric", "2-digit". */
  lazy val year: HtmlAttr[DateYearFormat] = unionAttr("year")

  /** The format for displaying the month. Valid values: "numeric", "2-digit", "narrow", "short", "long". */
  lazy val month: HtmlAttr[FormatDateDateMonthFormat] = unionAttr("month")

  /** The format for displaying the day. Valid values: "numeric", "2-digit". */
  lazy val day: HtmlAttr[DateYearFormat] = unionAttr("day")

  /** The format for displaying the hour. Valid values: "numeric", "2-digit". */
  lazy val hour: HtmlAttr[DateYearFormat] = unionAttr("hour")

  /** The format for displaying the minute. Valid values: "numeric", "2-digit". */
  lazy val minute: HtmlAttr[DateYearFormat] = unionAttr("minute")

  /** The format for displaying the second. Valid values: "numeric", "2-digit". */
  lazy val second: HtmlAttr[DateYearFormat] = unionAttr("second")

  /** The format for displaying the time. Valid values: "short", "long". */
  lazy val timeZoneName: HtmlAttr[FormatDateTimeZoneName] = unionAttr("time-zone-name")

  /** The time zone to express the time in. */
  lazy val timeZone: HtmlAttr[String] = stringAttr("time-zone")

  /** The format for displaying the hour. Valid values: "auto", "12", "24". */
  lazy val hourFormat: HtmlAttr[FormatDateHourFormat] = unionAttr("hour-format")

  // -- Element type --

  @js.native
  trait WaFormatDateComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's
      * strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to
      * this format in JavaScript, use
      * [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
      */
    var date: String

    /** The format for displaying the weekday. Valid values: "narrow", "short", "long". */
    var weekday: DisplayFormat

    /** The format for displaying the era. Valid values: "narrow", "short", "long". */
    var era: DisplayFormat

    /** The format for displaying the year. Valid values: "numeric", "2-digit". */
    var year: DateYearFormat

    /** The format for displaying the month. Valid values: "numeric", "2-digit", "narrow", "short", "long". */
    var month: FormatDateDateMonthFormat

    /** The format for displaying the day. Valid values: "numeric", "2-digit". */
    var day: DateYearFormat

    /** The format for displaying the hour. Valid values: "numeric", "2-digit". */
    var hour: DateYearFormat

    /** The format for displaying the minute. Valid values: "numeric", "2-digit". */
    var minute: DateYearFormat

    /** The format for displaying the second. Valid values: "numeric", "2-digit". */
    var second: DateYearFormat

    /** The format for displaying the time. Valid values: "short", "long". */
    var timeZoneName: FormatDateTimeZoneName

    /** The time zone to express the time in. */
    var timeZone: String

    /** The format for displaying the hour. Valid values: "auto", "12", "24". */
    var hourFormat: FormatDateHourFormat

  }
}
