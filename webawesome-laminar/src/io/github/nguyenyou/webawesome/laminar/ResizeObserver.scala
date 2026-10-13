package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Resize observers watch their slotted elements for size changes and emit an event when they occur. Provides a thin,
  * declarative interface to the browser's ResizeObserver API.
  *
  * [[https://webawesome.com/docs/components/resize-observer WebAwesome docs]]
  */
object ResizeObserver extends WebComponent("wa-resize-observer") {

  @JSImport("@awesome.me/webawesome/dist/components/resize-observer/resize-observer.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ResizeObserver.type

  type Ref = WaResizeObserverComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the element is resized. */
  lazy val onResize: EventProp[CustomEvent[Ref] & EventDetail[WaResizeEvent]] = eventProp("wa-resize")

  // -- Attributes --

  /** Disables the observer. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** One or more elements to watch for resizing. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- Element type --

  @js.native
  trait WaResizeObserverComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Disables the observer. */
    var disabled: Boolean

    var dir: String

    var lang: String

    var didSSR: String

    def handleDisabledChange(): Unit = js.native

  }
}
