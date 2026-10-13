package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Fetches an external HTML file and embeds its contents inline on the page. Useful for reusing shared markup like
  * headers, footers, and partials across multiple pages.
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
  lazy val onIncludeError: EventProp[CustomEvent[Ref]] = eventProp("wa-include-error")

  // -- Attributes --

  /** The location of the content to include. This can be a URL to an HTML file, a same-page reference to an element's
    * id (e.g. `#my-id`), or a URL with a fragment that targets an element's id within the fetched file (e.g.
    * `/partials.html#my-id`). When targeting an element by id, its content is cloned. If the target is a `<template>`,
    * its child nodes are cloned. Be sure you trust the content you are including as it will be executed as code and can
    * result in XSS attacks.
    */
  lazy val src: HtmlAttr[String] = stringAttr("src")

  /** The fetch mode to use. Valid values: "cors", "no-cors", "same-origin". */
  lazy val mode: CommonKeys.IncludeMode.type = CommonKeys.IncludeMode

  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
    * code and can result in XSS attacks.
    */
  lazy val allowScripts: HtmlAttr[Boolean] = boolAttr("allow-scripts")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Element type --

  @js.native
  trait WaIncludeComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The location of the content to include. This can be a URL to an HTML file, a same-page reference to an element's
      * id (e.g. `#my-id`), or a URL with a fragment that targets an element's id within the fetched file (e.g.
      * `/partials.html#my-id`). When targeting an element by id, its content is cloned. If the target is a
      * `<template>`, its child nodes are cloned. Be sure you trust the content you are including as it will be executed
      * as code and can result in XSS attacks.
      */
    var src: String

    /** The fetch mode to use. Valid values: "cors", "no-cors", "same-origin". */
    var mode: IncludeMode

    /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed
      * as code and can result in XSS attacks.
      */
    var allowScripts: Boolean

    var dir: String

    var lang: String

    var didSSR: String

    def handleSrcChange(): js.Promise[js.Any] = js.native

  }
}
