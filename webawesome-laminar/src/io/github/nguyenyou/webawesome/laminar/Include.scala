package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Includes give you the power to embed external HTML files into the page.
  *
  * [[https://webawesome.com/docs/components/include WebAwesome docs]]
  */
object Include extends WebComponent("wa-include") {

  @JSImport("@awesome.me/webawesome/dist/components/include/include.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Include.type

  type Ref = WaIncludeComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the included file is loaded. */
  lazy val onLoad: EventProp[CustomEvent[Ref]] = eventProp("wa-load")

  /** Emitted when the included file fails to load due to an error. */
  lazy val onError: EventProp[CustomEvent[Ref]] = eventProp("wa-error")

  // -- Attributes --

  /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed
    * as code and can result in XSS attacks.
    */
  lazy val src: HtmlAttr[String] = stringAttr("src")

  /** The fetch mode to use. Valid values: "cors", "no-cors", "same-origin". */
  lazy val mode: CommonKeys.IncludeMode.type = CommonKeys.IncludeMode

  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
    * code and can result in XSS attacks.
    */
  lazy val allowScripts: HtmlAttr[Boolean] = boolAttr("allow-scripts")

  // -- Element type --

  @js.native
  trait WaIncludeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed
      * as code and can result in XSS attacks.
      */
    var src: String

    /** The fetch mode to use. Valid values: "cors", "no-cors", "same-origin". */
    var mode: IncludeMode

    /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed
      * as code and can result in XSS attacks.
      */
    var allowScripts: Boolean

    def handleSrcChange(): js.Any = js.native

  }
}
