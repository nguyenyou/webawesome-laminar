package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Progress rings show how far along a determinate operation is using a circular indicator. Use them as a compact
  * alternative to progress bars when horizontal space is limited.
  *
  * [[https://webawesome.com/docs/components/progress-ring WebAwesome docs]]
  */
object ProgressRing extends WebComponent("wa-progress-ring") {

  @JSImport("@awesome.me/webawesome/dist/components/progress-ring/progress-ring.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ProgressRing.type

  type Ref = WaProgressRingComponent & dom.HTMLElement

  // -- Attributes --

  /** The current progress as a percentage, 0 to 100. */
  lazy val value: HtmlAttr[Double] = doubleAttr("value")

  /** A custom label for assistive devices. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** A label to show inside the ring. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The diameter of the progress ring (cannot be a percentage). */
    lazy val size: String = "--size"

    /** The width of the track. */
    lazy val trackWidth: String = "--track-width"

    /** The color of the track. */
    lazy val trackColor: String = "--track-color"

    /** The width of the indicator. Defaults to the track width. */
    lazy val indicatorWidth: String = "--indicator-width"

    /** The color of the indicator. */
    lazy val indicatorColor: String = "--indicator-color"

    /** The duration of the indicator's transition when the value changes. */
    lazy val indicatorTransitionDuration: String = "--indicator-transition-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `progress-ring` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val progressRing: String = "progress-ring"

    /** The progress ring label. */
    lazy val label: String = "label"

    /** The progress ring's track. */
    lazy val track: String = "track"

    /** The progress ring's indicator. */
    lazy val indicator: String = "indicator"

  }

  // -- Element type --

  @js.native
  trait WaProgressRingComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The current progress as a percentage, 0 to 100. */
    var value: Double

    /** A custom label for assistive devices. */
    var label: String

    var dir: String

    var lang: String

    var didSSR: String

  }
}
