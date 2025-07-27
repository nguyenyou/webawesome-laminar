package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Zoomable frames render iframe content with zoom and interaction controls.
  *
  * [[https://webawesome.com/docs/components/zoomable-frame WebAwesome docs]]
  */
object ZoomableFrame extends WebComponent("wa-zoomable-frame") {

  @JSImport("@awesome.me/webawesome/dist/components/zoomable-frame/zoomable-frame.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ZoomableFrame.type

  type Ref = WaZoomableFrameComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the internal iframe when it finishes loading. */
  lazy val onLoad: EventProp[dom.Event] = eventProp("load")

  /** Emitted from the internal iframe when it fails to load. */
  lazy val onError: EventProp[dom.Event] = eventProp("error")

  // -- Attributes --

  /** The URL of the content to display. */
  lazy val src: HtmlAttr[String] = stringAttr("src")

  /** Inline HTML to display. */
  lazy val srcdoc: HtmlAttr[String] = stringAttr("srcdoc")

  /** Allows fullscreen mode. */
  lazy val allowfullscreen: HtmlAttr[Boolean] = boolAttr("allowfullscreen")

  /** Controls iframe loading behavior. Valid values: "eager", "lazy". */
  lazy val loading: CommonKeys.LoadingStrategy.type = CommonKeys.LoadingStrategy

  /** Controls referrer information. */
  lazy val referrerpolicy: HtmlAttr[String] = stringAttr("referrerpolicy")

  /** Security restrictions for the iframe. */
  lazy val sandbox: HtmlAttr[String] = stringAttr("sandbox")

  /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
  lazy val zoom: HtmlAttr[Double] = doubleAttr("zoom")

  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom.
    */
  lazy val zoomLevels: HtmlAttr[String] = stringAttr("zoom-levels")

  /** Removes the zoom controls. */
  lazy val withoutControls: HtmlAttr[Boolean] = boolAttr("without-controls")

  /** Disables interaction when present. */
  lazy val withoutInteraction: HtmlAttr[Boolean] = boolAttr("without-interaction")

  // -- Slots --

  object slots {

    /** The slot that contains the zoom in icon. */
    lazy val zoomInIcon: Slot = Slot("zoom-in-icon")

    /** The slot that contains the zoom out icon. */
    lazy val zoomOutIcon: Slot = Slot("zoom-out-icon")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The internal `<iframe>` element. */
    lazy val iframe: String = "iframe"

    /** The container that surrounds zoom control buttons. */
    lazy val controls: String = "controls"

    /** The zoom in button. */
    lazy val zoomInButton: String = "zoom-in-button"

    /** The zoom out button. */
    lazy val zoomOutButton: String = "zoom-out-button"

  }

  // -- Element type --

  @js.native
  trait WaZoomableFrameComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The URL of the content to display. */
    var src: String

    /** Inline HTML to display. */
    var srcdoc: String

    /** Allows fullscreen mode. */
    var allowfullscreen: Boolean

    /** Controls iframe loading behavior. Valid values: "eager", "lazy". */
    var loading: LoadingStrategy

    /** Controls referrer information. */
    var referrerpolicy: String

    /** Security restrictions for the iframe. */
    var sandbox: String

    /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
    var zoom: Double

    /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the
      * zoom.
      */
    var zoomLevels: String

    /** Removes the zoom controls. */
    var withoutControls: Boolean

    /** Disables interaction when present. */
    var withoutInteraction: Boolean

    /** Zooms in to the next available zoom level. */
    def zoomIn(): js.Any = js.native

    /** Zooms out to the previous available zoom level. */
    def zoomOut(): js.Any = js.native

  }
}
