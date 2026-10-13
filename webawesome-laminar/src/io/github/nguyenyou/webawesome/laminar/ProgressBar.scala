package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Progress bars show how far along an ongoing operation is as a horizontal fill. Use them for file uploads, multi-step
  * flows, or any task with measurable progress.
  *
  * [[https://webawesome.com/docs/components/progress-bar WebAwesome docs]]
  */
object ProgressBar extends WebComponent("wa-progress-bar") {

  @JSImport("@awesome.me/webawesome/dist/components/progress-bar/progress-bar.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ProgressBar.type

  type Ref = WaProgressBarComponent & dom.HTMLElement

  // -- Attributes --

  /** The current progress as a percentage, 0 to 100. */
  lazy val value: HtmlAttr[Double] = doubleAttr("value")

  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  lazy val indeterminate: HtmlAttr[Boolean] = boolAttr("indeterminate")

  /** A custom label for assistive devices. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** A label to show inside the progress indicator. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The height of the track. Default: 1rem */
    lazy val trackHeight: String = "--track-height"

    /** The color of the track. Default: var(--wa-color-neutral-fill-normal) */
    lazy val trackColor: String = "--track-color"

    /** The color of the indicator. Default: var(--wa-color-brand-fill-loud) */
    lazy val indicatorColor: String = "--indicator-color"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `progress-bar` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val progressBar: String = "progress-bar"

    /** The progress bar's indicator. */
    lazy val indicator: String = "indicator"

    /** The progress bar's label. */
    lazy val label: String = "label"

  }

  // -- Element type --

  @js.native
  trait WaProgressBarComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The current progress as a percentage, 0 to 100. */
    var value: Double

    /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.
      */
    var indeterminate: Boolean

    /** A custom label for assistive devices. */
    var label: String

    var dir: String

    var lang: String

    var didSSR: String

  }
}
