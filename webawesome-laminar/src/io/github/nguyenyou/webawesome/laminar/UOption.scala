package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.nodes.Slot
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Options define the selectable items within a select component.
  *
  * [[https://webawesome.com/docs/components/option WebAwesome docs]]
  */
object UOption extends WebComponent("wa-option") {

  @JSImport("@awesome.me/webawesome/dist/components/option/option.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = UOption.type

  type Ref = WaOptionComponent & dom.HTMLElement

  // -- Props --

  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
    * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
    * multiple values.
    */
  lazy val value: HtmlProp[String, ?] = L.value

  // -- Attributes --

  /** Draws the option in a disabled state, preventing selection. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Selects an option initially. */
  lazy val defaultSelected: HtmlAttr[Boolean] = boolAttr("selected")

  /** The option’s plain text label. Usually automatically generated, but can be useful to provide manually for cases
    * involving complex content.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  // -- Slots --

  object slots {

    /** The option's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An element, such as `<wa-icon>`, placed before the label. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed after the label. */
    lazy val end: Slot = Slot("end")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The checked icon, a `<wa-icon>` element. */
    lazy val checkedIcon: String = "checked-icon"

    /** The option's label. */
    lazy val label: String = "label"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

  }

  // -- Element type --

  @js.native
  trait WaOptionComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Draws the option in a disabled state, preventing selection. */
    var disabled: Boolean

    /** Selects an option initially. */
    var defaultSelected: Boolean

    /** The option’s plain text label. Usually automatically generated, but can be useful to provide manually for cases
      * involving complex content.
      */
    var label: String

  }
}
