package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Markdown elements render markdown content as HTML directly in the browser, making it easy to display user-generated
  * content or documentation without a server-side build step.
  *
  * [[https://webawesome.com/docs/components/markdown WebAwesome docs]]
  */
object Markdown extends WebComponent("wa-markdown") {

  @JSImport("@awesome.me/webawesome/dist/components/markdown/markdown.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Markdown.type

  type Ref = WaMarkdownComponent & dom.HTMLElement

  // -- Attributes --

  /** The tab stop width used when converting leading tabs to spaces during whitespace normalization. */
  lazy val tabSize: HtmlAttr[Double] = doubleAttr("tab-size")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Element type --

  @js.native
  trait WaMarkdownComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The tab stop width used when converting leading tabs to spaces during whitespace normalization. */
    var tabSize: Double

    var dir: String

    var lang: String

    var didSSR: String

    /** Returns the shared Marked instance used by all `<wa-markdown>` components. */
    def getMarked(): js.Any = js.native

    /** Re-renders all connected `<wa-markdown>` instances. Call this after changing the Marked configuration. */
    def updateAll(): Unit = js.native

    /** Reads the script content, normalizes whitespace, parses markdown, and injects the result. */
    def renderMarkdown(): Unit = js.native

  }
}
