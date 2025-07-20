package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** A component for displaying animated GIFs and WEBPs that play and pause on interaction.
  *
  * [[https://webawesome.com/docs/components/animated-image WebAwesome docs]]
  */
object AnimatedImage extends WebComponent("wa-animated-image") {

  @JSImport("@awesome.me/webawesome/dist/components/animated-image/animated-image.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = AnimatedImage.type

  type Ref = WaAnimatedImageComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the image loads successfully. */
  lazy val onLoad: EventProp[dom.Event] = eventProp("wa-load")

  /** Emitted when the image fails to load. */
  lazy val onError: EventProp[dom.Event] = eventProp("wa-error")

  // -- Attributes --

  /** The path to the image to load. */
  lazy val src: HtmlAttr[String] = stringAttr("src")

  /** A description of the image used by assistive devices. */
  lazy val alt: HtmlAttr[String] = stringAttr("alt")

  /** Plays the animation. When this attribute is remove, the animation will pause. */
  lazy val play: HtmlAttr[Boolean] = boolAttr("play")

  // -- Slots --

  object slots {

    /** Optional play icon to use instead of the default. Works best with `<wa-icon>`. */
    lazy val playIcon: Slot = Slot("play-icon")

    /** Optional pause icon to use instead of the default. Works best with `<wa-icon>`. */
    lazy val pauseIcon: Slot = Slot("pause-icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The size of the icon box. */
    lazy val controlBoxSize: String = "--control-box-size"

    /** The size of the play/pause icons. */
    lazy val iconSize: String = "--icon-size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The container that surrounds the pause/play icons and provides their background. */
    lazy val controlBox: String = "control-box"

  }

  // -- Element type --

  @js.native
  trait WaAnimatedImageComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The path to the image to load. */
    var src: String

    /** A description of the image used by assistive devices. */
    var alt: String

    /** Plays the animation. When this attribute is remove, the animation will pause. */
    var play: Boolean

    def handlePlayChange(): js.Any = js.native

    def handleSrcChange(): js.Any = js.native

  }
}
