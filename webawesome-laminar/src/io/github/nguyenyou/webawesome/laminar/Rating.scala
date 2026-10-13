package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Ratings display a numeric score as a row of selectable symbols, typically stars. Use them to capture quick feedback
  * or show an average rating for a product or piece of content.
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
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new
    * value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the
    * hovered value.
    */
  lazy val onHover: EventProp[CustomEvent[Ref] & EventDetail[WaHoverEvent]] = eventProp("wa-hover")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val role: HtmlAttr[String] = stringAttr("role")

  /** The name of the rating, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** A label that describes the rating to assistive devices. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The current rating. */
  lazy val value: HtmlAttr[Double] = doubleAttr("value")

  /** The default value of the form control. Used to reset the rating to its initial value. */
  lazy val defaultValue: HtmlAttr[Double] = doubleAttr("default-value")

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

  /** Makes the rating a required field. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
    * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
    * well with `<wa-icon>` elements.
    */
  lazy val getSymbol: HtmlAttr[String] = stringAttr("getSymbol")

  /** The component's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

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

    /** Deprecated. Use the `rating` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper. */
    lazy val rating: String = "rating"

  }

  // -- Element type --

  @js.native
  trait WaRatingComponent extends js.Object {
    this: dom.HTMLElement =>

    var role: String

    /** The name of the rating, submitted as a name/value pair with form data. */
    var name: String

    /** A label that describes the rating to assistive devices. */
    var label: String

    /** The current rating. */
    var value: Double

    /** The default value of the form control. Used to reset the rating to its initial value. */
    var defaultValue: Double

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

    /** Makes the rating a required field. */
    var required: Boolean

    /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
      * The function should return a string containing trusted HTML of the symbol to render at the specified value.
      * Works well with `<wa-icon>` elements.
      */
    var getSymbol: String

    /** The component's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def handleHoverValueChange(): Unit = js.native

    def handleIsHoveringChange(): Unit = js.native

    def formResetCallback(): Unit = js.native

    def getForm(): dom.html.Form | Null = js.native

    def checkValidity(): Boolean = js.native

    def reportValidity(): Boolean = js.native

    def setValidity(args: js.Any): Unit = js.native

    def setCustomStates(): Unit = js.native

    /** Do not use this when creating a "Validator". This is intended for end users of components. We track manually
      * defined custom errors so we don't clear them on accident in our validators.
      */
    def setCustomValidity(message: String): Unit = js.native

    def formDisabledCallback(isDisabled: Boolean): Unit = js.native

    /** Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
      * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case
      * of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
      */
    def formStateRestoreCallback(state: js.Any, reason: String): Unit = js.native

    def setValue(args: js.Any): Unit = js.native

    /** Reset validity is a way of removing manual custom errors and native validation. */
    def resetValidity(): Unit = js.native

    def updateValidity(): Unit = js.native

  }
}
