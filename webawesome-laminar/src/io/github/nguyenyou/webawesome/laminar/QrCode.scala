package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
  *
  * [[https://backers.webawesome.com/docs/components/qr-code WebAwesome  docs]]
  */
object QrCode extends WebComponent("wa-qr-code") {

  @JSImport("@awesome.me/webawesome/dist/components/qr-code/qr-code.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = QrCode.type

  type Ref = WaQrCodeComponent & dom.HTMLElement

  // -- Attributes --

  /** The QR code's value. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The size of the QR code, in pixels. */
  lazy val size: HtmlAttr[Double] = doubleAttr("size")

  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  lazy val fill: HtmlAttr[String] = stringAttr("fill")

  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  lazy val background: HtmlAttr[String] = stringAttr("background")

  /** The edge radius of each module. Must be between 0 and 0.5. */
  lazy val radius: HtmlAttr[Double] = doubleAttr("radius")

  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) Valid values: "L", "M", "Q", "H". */
  lazy val errorCorrection: HtmlAttr[QrCodeErrorCorrection] = unionAttr("error-correction")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native trait WaQrCodeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The QR code's value. */
    var value: String

    /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
    var label: String

    /** The size of the QR code, in pixels. */
    var size: Double

    /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
    var fill: String

    /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
    var background: String

    /** The edge radius of each module. Must be between 0 and 0.5. */
    var radius: Double

    /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) Valid values: "L", "M", "Q", "H". */
    var errorCorrection: QrCodeErrorCorrection

    def generate(): js.Any = js.native

  }
}