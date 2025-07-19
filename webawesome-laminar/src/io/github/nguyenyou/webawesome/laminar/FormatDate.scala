package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/**
  * Formats a date/time using the specified locale and options.
  *
  * [[https://backers.webawesome.com/docs/components/format-date WebAwesome  docs]]
  */
object FormatDate extends WebComponent("wa-format-date") {

  @JSImport("@awesome.me/webawesome/dist/components/format-date/format-date.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = FormatDate.type

  type Ref = WaFormatDateComponent & dom.HTMLElement

  // -- Union Types --

  type FormatDateWeekday = "narrow" | "short" | "long"

  type FormatDateEra = "narrow" | "short" | "long"

  type FormatDateYear = "numeric" | "2-digit"

  type FormatDateMonth = "numeric" | "2-digit" | "narrow" | "short" | "long"

  type FormatDateDay = "numeric" | "2-digit"

  type FormatDateHour = "numeric" | "2-digit"

  type FormatDateMinute = "numeric" | "2-digit"

  type FormatDateSecond = "numeric" | "2-digit"

  type FormatDateTimeZoneName = "short" | "long"

  type FormatDateHourFormat = "auto" | "12" | "24"

  // -- Attributes --

  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
  recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
  in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  lazy val date: HtmlAttr[String] = stringAttr("date")

  /** The format for displaying the weekday. Valid values: "narrow", "short", "long". */
  lazy val weekday: HtmlAttr[FormatDateWeekday] = unionAttr("weekday")

  /** The format for displaying the era. Valid values: "narrow", "short", "long". */
  lazy val era: HtmlAttr[FormatDateEra] = unionAttr("era")

  /** The format for displaying the year. Valid values: "numeric", "2-digit". */
  lazy val year: HtmlAttr[FormatDateYear] = unionAttr("year")

  /** The format for displaying the month. Valid values: "numeric", "2-digit", "narrow", "short", "long". */
  lazy val month: HtmlAttr[FormatDateMonth] = unionAttr("month")

  /** The format for displaying the day. Valid values: "numeric", "2-digit". */
  lazy val day: HtmlAttr[FormatDateDay] = unionAttr("day")

  /** The format for displaying the hour. Valid values: "numeric", "2-digit". */
  lazy val hour: HtmlAttr[FormatDateHour] = unionAttr("hour")

  /** The format for displaying the minute. Valid values: "numeric", "2-digit". */
  lazy val minute: HtmlAttr[FormatDateMinute] = unionAttr("minute")

  /** The format for displaying the second. Valid values: "numeric", "2-digit". */
  lazy val second: HtmlAttr[FormatDateSecond] = unionAttr("second")

  /** The format for displaying the time. Valid values: "short", "long". */
  lazy val timeZoneName: HtmlAttr[FormatDateTimeZoneName] = unionAttr("time-zone-name")

  /** The time zone to express the time in. */
  lazy val timeZone: HtmlAttr[String] = stringAttr("time-zone")

  /** The format for displaying the hour. Valid values: "auto", "12", "24". */
  lazy val hourFormat: HtmlAttr[FormatDateHourFormat] = unionAttr("hour-format")

  // -- Element type --

  @js.native trait WaFormatDateComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
    recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
    in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
    var date: String

    /** The format for displaying the weekday. Valid values: "narrow", "short", "long". */
    var weekday: "narrow" | "short" | "long"

    /** The format for displaying the era. Valid values: "narrow", "short", "long". */
    var era: "narrow" | "short" | "long"

    /** The format for displaying the year. Valid values: "numeric", "2-digit". */
    var year: "numeric" | "2-digit"

    /** The format for displaying the month. Valid values: "numeric", "2-digit", "narrow", "short", "long". */
    var month: "numeric" | "2-digit" | "narrow" | "short" | "long"

    /** The format for displaying the day. Valid values: "numeric", "2-digit". */
    var day: "numeric" | "2-digit"

    /** The format for displaying the hour. Valid values: "numeric", "2-digit". */
    var hour: "numeric" | "2-digit"

    /** The format for displaying the minute. Valid values: "numeric", "2-digit". */
    var minute: "numeric" | "2-digit"

    /** The format for displaying the second. Valid values: "numeric", "2-digit". */
    var second: "numeric" | "2-digit"

    /** The format for displaying the time. Valid values: "short", "long". */
    var timeZoneName: "short" | "long"

    /** The time zone to express the time in. */
    var timeZone: String

    /** The format for displaying the hour. Valid values: "auto", "12", "24". */
    var hourFormat: "auto" | "12" | "24"

  }
}