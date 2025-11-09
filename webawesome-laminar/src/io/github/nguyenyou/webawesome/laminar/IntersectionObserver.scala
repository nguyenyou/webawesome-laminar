package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Tracks immediate child elements and fires events as they move in and out of view.
  *
  * [[https://webawesome.com/docs/components/intersection-observer WebAwesome docs]]
  */
object IntersectionObserver extends WebComponent("wa-intersection-observer") {

  @JSImport("@awesome.me/webawesome/dist/components/intersection-observer/intersection-observer.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = IntersectionObserver.type

  type Ref = WaIntersectionObserverComponent & dom.HTMLElement

  // -- Events --

  /** Fired when a tracked element begins or ceases intersecting. */
  lazy val onIntersect: EventProp[CustomEvent[Ref]] = eventProp("wa-intersect")

  // -- Attributes --

  /** Element ID to define the viewport boundaries for tracked targets. */
  lazy val root: HtmlAttr[String] = stringAttr("root")

  /** Offset space around the root boundary. Accepts values like CSS margin syntax. */
  lazy val rootMargin: HtmlAttr[String] = stringAttr("root-margin")

  /** One or more space-separated values representing visibility percentages that trigger the observer callback. */
  lazy val threshold: HtmlAttr[String] = stringAttr("threshold")

  /** CSS class applied to elements during intersection. Automatically removed when elements leave the viewport,
    * enabling pure CSS styling based on visibility state.
    */
  lazy val intersectClass: HtmlAttr[String] = stringAttr("intersect-class")

  /** If enabled, observation ceases after initial intersection. */
  lazy val once: HtmlAttr[Boolean] = boolAttr("once")

  /** Deactivates the intersection observer functionality. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  // -- Slots --

  object slots {

    /** Elements to track. Only immediate children of the host are monitored. Note: You can just say `_ => element`
      * instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- Element type --

  @js.native
  trait WaIntersectionObserverComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Element ID to define the viewport boundaries for tracked targets. */
    var root: String

    /** Offset space around the root boundary. Accepts values like CSS margin syntax. */
    var rootMargin: String

    /** One or more space-separated values representing visibility percentages that trigger the observer callback. */
    var threshold: String

    /** CSS class applied to elements during intersection. Automatically removed when elements leave the viewport,
      * enabling pure CSS styling based on visibility state.
      */
    var intersectClass: String

    /** If enabled, observation ceases after initial intersection. */
    var once: Boolean

    /** Deactivates the intersection observer functionality. */
    var disabled: Boolean

    def handleDisabledChange(): js.Any = js.native

    def handleOptionsChange(): js.Any = js.native

  }
}
