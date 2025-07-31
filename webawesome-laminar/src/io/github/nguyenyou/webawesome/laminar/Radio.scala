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

  /** The string pointing to a form's id. */
  lazy val form: HtmlAttr[String] = stringAttr("form")

  /** The radio's value. When selected, the radio group will receive this value. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The radio's value. When selected, the radio group will receive this value. Valid values: "default", "button". */
  lazy val appearance: CommonKeys.RadioAppearance.type = CommonKeys.RadioAppearance

  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
    * attribute can typically be omitted. Valid values: "small", "medium", "large".
    */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Disables the radio. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

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

    /** The string pointing to a form's id. */
    var form: String

    /** The radio's value. When selected, the radio group will receive this value. */
    var value: String

    /** The radio's value. When selected, the radio group will receive this value. Valid values: "default", "button". */
    var appearance: RadioAppearance

    /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
      * attribute can typically be omitted. Valid values: "small", "medium", "large".
      */
    var size: ComponentSize

    /** Disables the radio. */
    var disabled: Boolean

    def setValue(): Unit = js.native

  }
}
