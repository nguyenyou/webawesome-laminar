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
  * Outputs a localized time phrase relative to the current date and time.
  *
  * [[https://backers.webawesome.com/docs/components/relative-time WebAwesome  docs]]
  */
object RelativeTime extends WebComponent("wa-relative-time") {

  @JSImport("@awesome.me/webawesome/dist/components/relative-time/relative-time.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = RelativeTime.type

  type Ref = WaRelativeTimeComponent & dom.HTMLElement

  // -- Union Types --

  type RelativeTimeFormat = "long" | "short" | "narrow"

  type RelativeTimeNumeric = "always" | "auto"

  // -- Attributes --

  /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
  string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
  a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  lazy val date: HtmlAttr[String] = stringAttr("date")

  /** The formatting style to use. Valid values: "long", "short", "narrow". */
  lazy val format: HtmlAttr[RelativeTimeFormat] = unionAttr("format")

  /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
  "1 day ago" and "in 1 day" will be shown. Valid values: "always", "auto". */
  lazy val numeric: HtmlAttr[RelativeTimeNumeric] = unionAttr("numeric")

  /** Keep the displayed value up to date as time passes. */
  lazy val sync: HtmlAttr[Boolean] = boolAttr("sync")

  // -- Element type --

  @js.native trait WaRelativeTimeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
    string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
    a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
    var date: String

    /** The formatting style to use. Valid values: "long", "short", "narrow". */
    var format: "long" | "short" | "narrow"

    /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
    "1 day ago" and "in 1 day" will be shown. Valid values: "always", "auto". */
    var numeric: "always" | "auto"

    /** Keep the displayed value up to date as time passes. */
    var sync: Boolean

  }
}