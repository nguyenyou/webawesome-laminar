package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import com.raquo.laminar.tags.CustomHtmlTag
import org.scalajs.dom
import io.github.nguyenyou.webawesome.laminar.events.*

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
  *
  * [[https://webawesome.com/docs/components/resize-observer WebAwesome  docs]]
  */
object ResizeObserver extends WebComponent("wa-resize-observer") {

  @JSImport("@awesome.me/webawesome/dist/components/resize-observer/resize-observer.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = ResizeObserver.type

  type Ref = WaResizeObserverComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the element is resized. */
  lazy val onResize: EventProp[dom.Event] = eventProp("wa-resize")

  // -- Attributes --

  /** Disables the observer. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  // -- Slots --

  object slots {
    /** One or more elements to watch for resizing. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- Element type --

  @js.native trait WaResizeObserverComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Disables the observer. */
    var disabled: Boolean

    def handleDisabledChange(): js.Any = js.native

  }
}