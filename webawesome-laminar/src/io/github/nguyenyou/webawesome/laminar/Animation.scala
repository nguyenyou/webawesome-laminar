package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.|
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/**
  * Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
  *
  * [[https://backers.webawesome.com/docs/components/animation WebAwesome  docs]]
  */
object Animation extends WebComponent("wa-animation") {

  @JSImport("@awesome.me/webawesome/dist/components/animation/animation.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Animation.type

  type Ref = WaAnimationComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the animation is canceled. */
  lazy val onCancel: EventProp[dom.Event] = eventProp("wa-cancel")

  /** Emitted when the animation finishes. */
  lazy val onFinish: EventProp[dom.Event] = eventProp("wa-finish")

  /** Emitted when the animation starts or restarts. */
  lazy val onStart: EventProp[dom.Event] = eventProp("wa-start")

  // -- Attributes --

  /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
  the animation finishes or gets canceled. */
  lazy val play: HtmlAttr[Boolean] = boolAttr("play")

  /** The number of milliseconds to delay the start of the animation. */
  lazy val delay: HtmlAttr[Double] = doubleAttr("delay")

  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
  [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
  lazy val direction: HtmlAttr[String] = stringAttr("direction")

  /** The number of milliseconds each iteration of the animation takes to complete. */
  lazy val duration: HtmlAttr[Double] = doubleAttr("duration")

  /** The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
  such as `cubic-bezier(0, 1, .76, 1.14)`. */
  lazy val easing: HtmlAttr[String] = stringAttr("easing")

  /** The number of milliseconds to delay after the active period of an animation sequence. */
  lazy val endDelay: HtmlAttr[Double] = doubleAttr("end-delay")

  /** Sets how the animation applies styles to its target before and after its execution. */
  lazy val fill: HtmlAttr[String] = stringAttr("fill")

  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  lazy val iterations: HtmlAttr[Double] = doubleAttr("iterations")

  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  lazy val iterationStart: HtmlAttr[Double] = doubleAttr("iteration-start")

  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
  to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
  value can be changed without causing the animation to restart. */
  lazy val playbackRate: HtmlAttr[Double] = doubleAttr("playback-rate")

  // -- Slots --

  object slots {
    /** The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<wa-animation>` elements. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- Element type --

  @js.native trait WaAnimationComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
    var name: String

    /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
    the animation finishes or gets canceled. */
    var play: Boolean

    /** The number of milliseconds to delay the start of the animation. */
    var delay: Double

    /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
    [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
    var direction: String

    /** The number of milliseconds each iteration of the animation takes to complete. */
    var duration: Double

    /** The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
    such as `cubic-bezier(0, 1, .76, 1.14)`. */
    var easing: String

    /** The number of milliseconds to delay after the active period of an animation sequence. */
    var endDelay: Double

    /** Sets how the animation applies styles to its target before and after its execution. */
    var fill: String

    /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
    var iterations: Double

    /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
    var iterationStart: Double

    /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
    to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
    value can be changed without causing the animation to restart. */
    var playbackRate: Double

    def handleAnimationChange(): js.Any = js.native

    def handlePlayChange(): js.Any = js.native

    def handlePlaybackRateChange(): js.Any = js.native

    /** Clears all keyframe effects caused by this animation and aborts its playback. */
    def cancel(): js.Any = js.native

    /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
    def finish(): js.Any = js.native

  }
}