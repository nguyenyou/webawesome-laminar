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
  * Formats a number as a human readable bytes value.
  *
  * [[https://backers.webawesome.com/docs/components/format-bytes WebAwesome  docs]]
  */
object FormatBytes extends WebComponent("wa-format-bytes") {

  @JSImport("@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = FormatBytes.type

  type Ref = WaFormatBytesComponent & dom.HTMLElement

  // -- Attributes --

  /** The number to format in bytes. */
  lazy val value: HtmlAttr[Double] = doubleAttr("value")

  /** The type of unit to display. */
  lazy val unit: HtmlAttr[String] = stringAttr("unit")

  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  lazy val display: HtmlAttr[String] = stringAttr("display")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Element type --

  @js.native trait WaFormatBytesComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The number to format in bytes. */
    var value: Double

    /** The type of unit to display. */
    var unit: String

    /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
    var display: String

  }
}