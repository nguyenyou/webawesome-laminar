package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Icons are symbols that can be used to represent various options within an application.
  *
  * [[https://webawesome.com/docs/components/icon WebAwesome docs]]
  */
object Icon extends WebComponent("wa-icon") {

  @JSImport("@awesome.me/webawesome/dist/components/icon/icon.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Icon.type

  type Ref = WaIconComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  lazy val onLoad: EventProp[CustomEvent[Ref]] = eventProp("wa-load")

  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  lazy val onError: EventProp[CustomEvent[Ref]] = eventProp("wa-error")

  // -- Attributes --

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For Font
    * Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`. A
    * valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
    * one.
    */
  lazy val family: HtmlAttr[String] = stringAttr("family")

  /** The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid`
    * for the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon
    * libraries may or may not use this property.
    */
  lazy val variant: HtmlAttr[String] = stringAttr("variant")

  /** Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class. */
  lazy val autoWidth: HtmlAttr[Boolean] = boolAttr("auto-width")

  /** Swaps the opacity of duotone icons. */
  lazy val swapOpacity: HtmlAttr[Boolean] = boolAttr("swap-opacity")

  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code
    * and can result in XSS attacks.
    */
  lazy val src: HtmlAttr[String] = stringAttr("src")

  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
    * ignored by assistive devices.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The name of a registered custom icon library. */
  lazy val library: HtmlAttr[String] = stringAttr("library")

  /** Sets the rotation degree of the icon */
  lazy val rotate: HtmlAttr[Double] = doubleAttr("rotate")

  /** Sets the flip direction of the icon along the 'x' (horizontal), 'y' (vertical), or 'both' axes. */
  lazy val flip: HtmlAttr[String] = stringAttr("flip")

  /** Sets the animation for the icon */
  lazy val animation: HtmlAttr[String] = stringAttr("animation")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** Sets when the animation will start. Default: 0 */
    lazy val animationDelay: String = "--animation-delay"

    /** Defines whether or not the animation should play in reverse on alternate cycles. Default: normal */
    lazy val animationDirection: String = "--animation-direction"

    /** Defines the length of time that an animation takes to complete one cycle. Default: 1s */
    lazy val animationDuration: String = "--animation-duration"

    /** Defines the number of times an animation cycle is played. Default: infinite */
    lazy val animationIterationCount: String = "--animation-iteration-count"

    /** Describes how the animation will progress over one cycle of its duration. */
    lazy val animationTiming: String = "--animation-timing"

    /** Set lowest opacity value an icon with `beat-fade` animation will fade to and from. */
    lazy val beatFadeOpacity: String = "--beat-fade-opacity"

    /** Set max value that an icon with `beat-fade` animation will scale. */
    lazy val beatFadeScale: String = "--beat-fade-scale"

    /** Set max value that an icon with `beat` animation will scale. */
    lazy val beatScale: String = "--beat-scale"

    /** Set the max height an icon with `bounce` animation will jump to when bouncing. */
    lazy val bounceHeight: String = "--bounce-height"

    /** Set the icon’s horizontal distortion (“squish”) at the top of the jump. */
    lazy val bounceJumpScaleX: String = "--bounce-jump-scale-x"

    /** Set the icon’s vertical distortion (“squish”) at the top of the jump. */
    lazy val bounceJumpScaleY: String = "--bounce-jump-scale-y"

    /** Set the icon’s horizontal distortion (“squish”) when landing after the jump. */
    lazy val bounceLandScaleX: String = "--bounce-land-scale-x"

    /** Set the icon’s vertical distortion (“squish”) when landing after the jump. */
    lazy val bounceLandScaleY: String = "--bounce-land-scale-y"

    /** Set the amount of rebound an icon with `bounce` animation has when landing after the jump. */
    lazy val bounceRebound: String = "--bounce-rebound"

    /** Set the icon’s horizontal distortion (“squish”) when starting to bounce. */
    lazy val bounceStartScaleX: String = "--bounce-start-scale-x"

    /** Set the icon’s vertical distortion (“squish”) when starting to bounce. */
    lazy val bounceStartScaleY: String = "--bounce-start-scale-y"

    /** Set lowest opacity value an icon with `fade` animation will fade to and from. */
    lazy val fadeOpacity: String = "--fade-opacity"

    /** Set rotation angle of flip for an icon with `flip` animation. A positive angle denotes a clockwise rotation, a
      * negative angle a counter-clockwise one.
      */
    lazy val flipAngle: String = "--flip-angle"

    /** Set x-coordinate of the vector denoting the axis of rotation (between 0 and 1) for an icon with `flip`
      * animation.
      */
    lazy val flipX: String = "--flip-x"

    /** Set y-coordinate of the vector denoting the axis of rotation (between 0 and 1) for an icon with `flip`
      * animation.
      */
    lazy val flipY: String = "--flip-y"

    /** Set z-coordinate of the vector denoting the axis of rotation (between 0 and 1) for an icon with `flip`
      * animation.
      */
    lazy val flipZ: String = "--flip-z"

    /** Sets a duotone icon's primary color. Default: currentColor */
    lazy val primaryColor: String = "--primary-color"

    /** Sets a duotone icon's primary opacity. Default: 1 */
    lazy val primaryOpacity: String = "--primary-opacity"

    /** Sets a duotone icon's secondary color. Default: currentColor */
    lazy val secondaryColor: String = "--secondary-color"

    /** Sets a duotone icon's secondary opacity. Default: 0.4 */
    lazy val secondaryOpacity: String = "--secondary-opacity"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The internal SVG element. */
    lazy val svg: String = "svg"

    /** The `<use>` element generated when using `spriteSheet: true` */
    lazy val use: String = "use"

  }

  // -- Element type --

  @js.native
  trait WaIconComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name of the icon to draw. Available names depend on the icon library being used. */
    var name: String

    /** The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
      * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and
      * `brands`. A valid kit code must be present to show pro icons via CDN. You can set `<html
      * data-fa-kit-code="...">` to provide one.
      */
    var family: String

    /** The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid`
      * for the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon
      * libraries may or may not use this property.
      */
    var variant: String

    /** Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class.
      */
    var autoWidth: Boolean

    /** Swaps the opacity of duotone icons. */
    var swapOpacity: Boolean

    /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code
      * and can result in XSS attacks.
      */
    var src: String

    /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational
      * and ignored by assistive devices.
      */
    var label: String

    /** The name of a registered custom icon library. */
    var library: String

    /** Sets the rotation degree of the icon */
    var rotate: Double

    /** Sets the flip direction of the icon along the 'x' (horizontal), 'y' (vertical), or 'both' axes. */
    var flip: js.Any

    /** Sets the animation for the icon */
    var animation: js.Any

    var dir: String

    var lang: String

    var didSSR: String

    def handleLabelChange(): js.Any = js.native

    def setIcon(): js.Any = js.native

  }
}
