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

  // -- Attributes --

  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
  recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
  in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  lazy val date: HtmlAttr[String] = stringAttr("date")

  /** The format for displaying the weekday. Valid values: "narrow", "short", "long". */
  lazy val weekday: HtmlAttr[String] = stringAttr("weekday")

  /** The format for displaying the era. Valid values: "narrow", "short", "long". */
  lazy val era: HtmlAttr[String] = stringAttr("era")

  /** The format for displaying the year. Valid values: "numeric", "2-digit". */
  lazy val year: HtmlAttr[String] = stringAttr("year")

  /** The format for displaying the month. Valid values: "numeric", "2-digit", "narrow", "short", "long". */
  lazy val month: HtmlAttr[String] = stringAttr("month")

  /** The format for displaying the day. Valid values: "numeric", "2-digit". */
  lazy val day: HtmlAttr[String] = stringAttr("day")

  /** The format for displaying the hour. Valid values: "numeric", "2-digit". */
  lazy val hour: HtmlAttr[String] = stringAttr("hour")

  /** The format for displaying the minute. Valid values: "numeric", "2-digit". */
  lazy val minute: HtmlAttr[String] = stringAttr("minute")

  /** The format for displaying the second. Valid values: "numeric", "2-digit". */
  lazy val second: HtmlAttr[String] = stringAttr("second")

  /** The format for displaying the time. Valid values: "short", "long". */
  lazy val timeZoneName: HtmlAttr[String] = stringAttr("time-zone-name")

  /** The time zone to express the time in. */
  lazy val timeZone: HtmlAttr[String] = stringAttr("time-zone")

  /** The format for displaying the hour. Valid values: "auto", "12", "24". */
  lazy val hourFormat: HtmlAttr[String] = stringAttr("hour-format")

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