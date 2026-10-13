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

/** Radio groups wrap a set of radios so they function as a single form control with one shared value. They handle
  * keyboard navigation, labeling, and validation for the group as a whole.
  *
  * [[https://webawesome.com/docs/components/radio-group WebAwesome docs]]
  */
object RadioGroup extends WebComponent("wa-radio-group") {

  @JSImport("@awesome.me/webawesome/dist/components/radio-group/radio-group.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = RadioGroup.type

  type Ref = WaRadioGroupComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the radio group receives user input. */
  lazy val onInput: EventProp[CustomEvent[Ref]] = eventProp("input")

  /** Emitted when the radio group's selected value changes. */
  lazy val onChange: EventProp[CustomEvent[Ref]] = eventProp("change")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
    * instead.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** The name of the radio group, submitted as a name/value pair with form data. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Disables the radio group and all child radios. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The orientation in which to show radio items. Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  /** The default value of the form control. Primarily used for resetting the form control. */
  lazy val defaultValue: HtmlAttr[String] = stringAttr("value")

  /** The radio group's size. When present, this size will be applied to all `<wa-radio>` items inside. Valid values:
    * "xs", "s", "m", "l", "xl", "small", "medium", "large".
    */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
    * includes the label before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  lazy val customError: HtmlAttr[String] = stringAttr("custom-error")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The default slot where `<wa-radio>` elements are placed. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
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

    /** The label. */
    lazy val formControlLabel: String = "form-control-label"

    /** The element that wraps the grouped radios, styled as a flex container by default. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

  }

  // -- Element type --

  @js.native
  trait WaRadioGroupComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
      * instead.
      */
    var label: String

    /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** The name of the radio group, submitted as a name/value pair with form data. */
    var name: String

    /** Disables the radio group and all child radios. */
    var disabled: Boolean

    /** The orientation in which to show radio items. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** The default value of the form control. Primarily used for resetting the form control. */
    var defaultValue: String

    /** The radio group's size. When present, this size will be applied to all `<wa-radio>` items inside. Valid values:
      * "xs", "s", "m", "l", "xl", "small", "medium", "large".
      */
    var size: ComponentSize

    /** Ensures a child radio is checked before allowing the containing form to submit. */
    var required: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
      * includes the label before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    var customError: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    def formResetCallback(args: js.Any): Unit = js.native

    /** Sets focus on the radio group. */
    def focus(options: js.UndefOr[js.Any] = js.undefined): Unit = js.native

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
