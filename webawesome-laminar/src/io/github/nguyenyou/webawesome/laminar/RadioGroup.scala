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
  * Radio groups are used to group multiple [radios](/docs/components/radio) so they function as a single form control.
  *
  * [[https://backers.webawesome.com/docs/components/radio-group WebAwesome  docs]]
  */
object RadioGroup extends WebComponent("wa-radio-group") {

  @JSImport("@awesome.me/webawesome/dist/components/radio-group/radio-group.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = RadioGroup.type

  type Ref = WaRadioGroupComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the radio group receives user input. */
  lazy val input: EventProp[dom.Event] = eventProp("input")

  /** Emitted when the radio group's selected value changes. */
  lazy val change: EventProp[dom.Event] = eventProp("change")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[dom.Event] = eventProp("wa-invalid")

  // -- Attributes --

  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
  instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** The name of the radio group, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Disables the radio group and all child radios. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The orientation in which to show radio items. */
  lazy val orientation: HtmlAttr[String] = stringAttr("orientation")

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
  lazy val size: HtmlAttr[String] = stringAttr("size")

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Used for SSR. if true, will show slotted label on initial render. */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Used for SSR. if true, will show slotted hint on initial render. */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  // -- Props --

  /** The value of the component. */
  lazy val valueProp: HtmlProp[String, ?] = L.value

  // -- Slots --

  object slots {
    /** The default slot where `<wa-radio>` elements are placed. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Text that describes how to use the radio group. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The form control that wraps the label, input, and hint. */
    lazy val formControl: String = "form-control"

    /** The label's wrapper. */
    lazy val formControlLabel: String = "form-control-label"

    /** The input's wrapper. */
    lazy val formControlInput: String = "form-control-input"

    /** The wrapper than surrounds radio items, styled as a flex container by default. */
    lazy val radios: String = "radios"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

  }

  // -- Element type --

  @js.native trait WaRadioGroupComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
    instead. */
    var label: String

    /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** The name of the radio group, submitted as a name/value pair with form data. */
    var name: String

    /** Disables the radio group and all child radios. */
    var disabled: Boolean

    /** The orientation in which to show radio items. */
    var orientation: String

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
    var size: String

    /** Ensures a child radio is checked before allowing the containing form to submit. */
    var required: Boolean

    /** Used for SSR. if true, will show slotted label on initial render. */
    var withLabel: Boolean

    /** Used for SSR. if true, will show slotted hint on initial render. */
    var withHint: Boolean

    def formResetCallback(args: js.Any): js.Any = js.native

    /** Sets focus on the radio group. */
    def focus(options: js.Any = js.undefined): js.Any = js.native

  }
}