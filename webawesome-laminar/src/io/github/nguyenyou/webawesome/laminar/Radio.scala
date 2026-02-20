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

/** Radios allow the user to select a single option from a group.
  *
  * [[https://webawesome.com/docs/components/radio WebAwesome docs]]
  */
object Radio extends WebComponent("wa-radio") {

  @JSImport("@awesome.me/webawesome/dist/components/radio/radio.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Radio.type

  type Ref = WaRadioComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the control loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the control gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  // -- Attributes --

  /** The radio's value. When selected, the radio group will receive this value. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The radio's visual appearance. Valid values: "default", "button". */
  lazy val appearance: CommonKeys.RadioAppearance.type = CommonKeys.RadioAppearance

  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size, which
    * will override this attribute. Valid values: "small", "medium", "large".
    */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Disables the radio. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The name of the input, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The radio's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The color of the checked icon. */
    lazy val checkedIconColor: String = "--checked-icon-color"

    /** The size of the checked icon relative to the radio. */
    lazy val checkedIconScale: String = "--checked-icon-scale"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The circular container that wraps the radio's checked state. */
    lazy val control: String = "control"

    /** The checked icon. */
    lazy val checkedIcon: String = "checked-icon"

    /** The container that wraps the radio's label. */
    lazy val label: String = "label"

  }

  // -- Element type --

  @js.native
  trait WaRadioComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The radio's value. When selected, the radio group will receive this value. */
    var value: String

    /** The radio's visual appearance. Valid values: "default", "button". */
    var appearance: RadioAppearance

    /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size, which
      * will override this attribute. Valid values: "small", "medium", "large".
      */
    var size: ComponentSize

    /** Disables the radio. */
    var disabled: Boolean

    /** The name of the input, submitted as a name/value pair with form data. */
    var name: String

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def setValue(args: js.Any): Unit = js.native

    def getForm(): js.Any = js.native

    def checkValidity(): js.Any = js.native

    def reportValidity(): js.Any = js.native

    def setValidity(args: js.Any): js.Any = js.native

    def setCustomStates(): js.Any = js.native

    /** Do not use this when creating a "Validator". This is intended for end users of components. We track manually
      * defined custom errors so we don't clear them on accident in our validators.
      */
    def setCustomValidity(message: String): js.Any = js.native

    def formResetCallback(): js.Any = js.native

    def formDisabledCallback(isDisabled: Boolean): js.Any = js.native

    /** Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
      * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case
      * of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
      */
    def formStateRestoreCallback(state: js.Any, reason: String): js.Any = js.native

    /** Reset validity is a way of removing manual custom errors and native validation. */
    def resetValidity(): js.Any = js.native

    def updateValidity(): js.Any = js.native

  }
}
