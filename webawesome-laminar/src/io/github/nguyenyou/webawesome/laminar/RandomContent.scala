package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Selects one or more child elements at random and displays them, hiding the rest.
  *
  * [[https://webawesome.com/docs/components/random-content WebAwesome docs]]
  */
object RandomContent extends WebComponent("wa-random-content") {

  @JSImport("@awesome.me/webawesome/dist/components/random-content/random-content.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = RandomContent.type

  type Ref = WaRandomContentComponent & dom.HTMLElement

  // -- Events --

  /** Emitted whenever the displayed selection changes, including on first render, on `randomize()`, and on each
    * autoplay tick.
    */
  lazy val onContentChange: EventProp[CustomEvent[Ref] & EventDetail[WaContentChangeEvent]] = eventProp(
    "wa-content-change"
  )

  // -- Attributes --

  /** Number of children to show simultaneously. Clamped to [1, childCount]. */
  lazy val items: HtmlAttr[Double] = doubleAttr("items")

  /** Selection strategy: `unique` (default), `random`, or `sequence`. Valid values: "random", "unique", "sequence". */
  lazy val mode: CommonKeys.RandomContentMode.type = CommonKeys.RandomContentMode

  /** Rotate the content automatically. Set the cadence with `autoplay-interval`. */
  lazy val autoplay: HtmlAttr[Boolean] = boolAttr("autoplay")

  /** Autoplay cadence in milliseconds. */
  lazy val autoplayInterval: HtmlAttr[Double] = doubleAttr("autoplay-interval")

  /** Entrance animation for newly shown children. Valid values: "none", "fade", "fade-up", "fade-down", "fade-left",
    * "fade-right".
    */
  lazy val animation: CommonKeys.RandomContentAnimation.type = CommonKeys.RandomContentAnimation

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The pool of children to choose from. Only direct element children are eligible; unselected children are hidden
      * with the `hidden` attribute. Note: You can just say `_ => element` instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** Duration of the entrance animation. Default is `300ms`. */
    lazy val animationDuration: String = "--animation-duration"

    /** Easing function for the entrance animation. Default is `ease`. */
    lazy val animationEasing: String = "--animation-easing"

    /** Translation distance for directional animations (`fade-up`, `fade-down`, `fade-left`, `fade-right`). Default is
      * `0.5em`.
      */
    lazy val animationTranslate: String = "--animation-translate"

  }

  // -- Element type --

  @js.native
  trait WaRandomContentComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Number of children to show simultaneously. Clamped to [1, childCount]. */
    var items: Double

    /** Selection strategy: `unique` (default), `random`, or `sequence`. Valid values: "random", "unique", "sequence".
      */
    var mode: RandomContentMode

    /** Rotate the content automatically. Set the cadence with `autoplay-interval`. */
    var autoplay: Boolean

    /** Autoplay cadence in milliseconds. */
    var autoplayInterval: Double

    /** Entrance animation for newly shown children. Valid values: "none", "fade", "fade-up", "fade-down", "fade-left",
      * "fade-right".
      */
    var animation: RandomContentAnimation

    var dir: String

    var lang: String

    var didSSR: String

    def handleAutoplayChange(): Unit = js.native

    def handleModeChange(): Unit = js.native

    def handleItemsChange(): Unit = js.native

    /** Selects a new set of children using the current mode. Returns the elements now shown. */
    def randomize(): js.Array[dom.Element] = js.native

  }
}
