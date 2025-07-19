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

  /** The format for displaying the weekday. */
  lazy val weekday: HtmlAttr[String] = stringAttr("weekday")

  /** The format for displaying the era. */
  lazy val era: HtmlAttr[String] = stringAttr("era")

  /** The format for displaying the year. */
  lazy val year: HtmlAttr[String] = stringAttr("year")

  /** The format for displaying the month. */
  lazy val month: HtmlAttr[String] = stringAttr("month")

  /** The format for displaying the day. */
  lazy val day: HtmlAttr[String] = stringAttr("day")

  /** The format for displaying the hour. */
  lazy val hour: HtmlAttr[String] = stringAttr("hour")

  /** The format for displaying the minute. */
  lazy val minute: HtmlAttr[String] = stringAttr("minute")

  /** The format for displaying the second. */
  lazy val second: HtmlAttr[String] = stringAttr("second")

  /** The format for displaying the time. */
  lazy val timeZoneName: HtmlAttr[String] = stringAttr("time-zone-name")

  /** The time zone to express the time in. */
  lazy val timeZone: HtmlAttr[String] = stringAttr("time-zone")

  /** The format for displaying the hour. */
  lazy val hourFormat: HtmlAttr[String] = stringAttr("hour-format")

  // -- Element type --

  @js.native trait WaFormatDateComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
    recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
    in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
    var date: String

    /** The format for displaying the weekday. */
    var weekday: String

    /** The format for displaying the era. */
    var era: String

    /** The format for displaying the year. */
    var year: String

    /** The format for displaying the month. */
    var month: String

    /** The format for displaying the day. */
    var day: String

    /** The format for displaying the hour. */
    var hour: String

    /** The format for displaying the minute. */
    var minute: String

    /** The format for displaying the second. */
    var second: String

    /** The format for displaying the time. */
    var timeZoneName: String

    /** The time zone to express the time in. */
    var timeZone: String

    /** The format for displaying the hour. */
    var hourFormat: String

  }
}