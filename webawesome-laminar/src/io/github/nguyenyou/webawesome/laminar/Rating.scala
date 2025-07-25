package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Ratings give users a way to quickly view and provide feedback.
  *
  * [[https://webawesome.com/docs/components/rating WebAwesome docs]]
  */
object Rating extends WebComponent("wa-rating") {

  @JSImport("@awesome.me/webawesome/dist/components/rating/rating.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Rating.type

  type Ref = WaRatingComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the rating's value changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new
    * value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the
    * hovered value.
    */
  lazy val onHover: EventProp[dom.Event] = eventProp("wa-hover")

  // -- Props --

  /** The current rating. */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  /** A label that describes the rating to assistive devices. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The highest rating to show. */
  lazy val max: HtmlAttr[Double] = doubleAttr("max")

  /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
    * attribute to `0.5`.
    */
  lazy val precision: HtmlAttr[Double] = doubleAttr("precision")

  /** Makes the rating readonly. */
  lazy val readonly: HtmlAttr[Boolean] = boolAttr("readonly")

  /** Disables the rating. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
    * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
    * well with `<wa-icon>` elements.
    */
  lazy val getSymbol: HtmlAttr[String] = stringAttr("getSymbol")

  /** The component's size. Valid values: "small", "medium", "large". */
  lazy val size: HtmlAttr[ComponentSize] = unionAttr("size")

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The inactive color for symbols. */
    lazy val symbolColor: String = "--symbol-color"

    /** The active color for symbols. */
    lazy val symbolColorActive: String = "--symbol-color-active"

    /** The spacing to use around symbols. */
    lazy val symbolSpacing: String = "--symbol-spacing"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's base wrapper. */
    lazy val base: String = "base"

  }

  // -- Element type --

  @js.native
  trait WaRatingComponent extends js.Object {
    this: dom.HTMLElement =>

    /** A label that describes the rating to assistive devices. */
    var label: String

    /** The highest rating to show. */
    var max: Double

    /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
      * attribute to `0.5`.
      */
    var precision: Double

    /** Makes the rating readonly. */
    var readonly: Boolean

    /** Disables the rating. */
    var disabled: Boolean

    /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
      * The function should return a string containing trusted HTML of the symbol to render at the specified value.
      * Works well with `<wa-icon>` elements.
      */
    var getSymbol: String

    /** The component's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    def handleHoverValueChange(): js.Any = js.native

    def handleIsHoveringChange(): js.Any = js.native

    /** Sets focus on the rating. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

    /** Removes focus from the rating. */
    def blur(): js.Any = js.native

  }
}
