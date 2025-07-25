package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Formats a number as a human readable bytes value.
  *
  * [[https://webawesome.com/docs/components/format-bytes WebAwesome docs]]
  */
object FormatBytes extends WebComponent("wa-format-bytes") {

  @JSImport("@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = FormatBytes.type

  type Ref = WaFormatBytesComponent & dom.HTMLElement

  // -- Props --

  /** The number to format in bytes. */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  /** The type of unit to display. Valid values: "byte", "bit". */
  lazy val unit: HtmlAttr[FormatBytesUnit] = unionAttr("unit")

  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". Valid values: "long", "short",
    * "narrow".
    */
  lazy val display: HtmlAttr[DisplayFormat] = unionAttr("display")

  // -- Element type --

  @js.native
  trait WaFormatBytesComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The type of unit to display. Valid values: "byte", "bit". */
    var unit: FormatBytesUnit

    /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". Valid values: "long", "short",
      * "narrow".
      */
    var display: DisplayFormat

  }
}
