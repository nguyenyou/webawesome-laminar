package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Formats a number of bytes as a human-readable string with the appropriate unit, such as kB, MB, or GB. Supports both
  * byte and bit units with configurable locale.
  *
  * [[https://webawesome.com/docs/components/format-bytes WebAwesome docs]]
  */
object FormatBytes extends WebComponent("wa-format-bytes") {

  @JSImport("@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = FormatBytes.type

  type Ref = WaFormatBytesComponent & dom.HTMLElement

  // -- Attributes --

  /** The number to format in bytes. */
  lazy val value: HtmlAttr[Double] = doubleAttr("value")

  /** The type of unit to display. Valid values: "byte", "bit". */
  lazy val unit: CommonKeys.FormatBytesUnit.type = CommonKeys.FormatBytesUnit

  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". Valid values: "long", "short",
    * "narrow".
    */
  lazy val display: CommonKeys.DisplayFormat.type = CommonKeys.DisplayFormat

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Element type --

  @js.native
  trait WaFormatBytesComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The number to format in bytes. */
    var value: Double

    /** The type of unit to display. Valid values: "byte", "bit". */
    var unit: FormatBytesUnit

    /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". Valid values: "long", "short",
      * "narrow".
      */
    var display: DisplayFormat

    var dir: String

    var lang: String

    var didSSR: String

  }
}
