package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Checkbox groups wrap a set of related checkboxes or switches so they share a label, hint, and grouping semantics.
  *
  * [[https://webawesome.com/docs/components/checkbox-group WebAwesome docs]]
  */
object CheckboxGroup extends WebComponent("wa-checkbox-group") {

  @JSImport("@awesome.me/webawesome/dist/components/checkbox-group/checkbox-group.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = CheckboxGroup.type

  type Ref = WaCheckboxGroupComponent & dom.HTMLElement

  // -- Attributes --

  /** The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
    * instead.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The checkbox group's hint. If you need to display HTML, use the `hint` slot instead. */
  lazy val hint: HtmlAttr[String] = stringAttr("hint")

  /** The orientation in which to show grouped checkboxes. Valid values: "horizontal", "vertical". */
  lazy val orientation: CommonKeys.Orientation.type = CommonKeys.Orientation

  /** The group's size. When present, this size will be applied to all `<wa-checkbox>` and `<wa-switch>` items inside.
    * Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large".
    */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Indicates that at least one option should be selected. This only adds a visual indicator to the label. To enforce
    * the requirement, use the `required` attribute on the individual checkboxes and/or their `setCustomValidity()`
    * method.
    */
  lazy val required: HtmlAttr[Boolean] = boolAttr("required")

  /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
    * includes the label before the component hydrates on the client.
    */
  lazy val withLabel: HtmlAttr[Boolean] = boolAttr("with-label")

  /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes
    * the hint before the component hydrates on the client.
    */
  lazy val withHint: HtmlAttr[Boolean] = boolAttr("with-hint")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The default slot where `<wa-checkbox>` or `<wa-switch>` elements are placed. Note: You can just say
      * `_ => element` instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

    /** The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
      */
    lazy val label: Slot = Slot("label")

    /** Text that describes how to use the checkbox group. Alternatively, you can use the `hint` attribute. */
    lazy val hint: Slot = Slot("hint")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The gap between grouped checkboxes. Default: 0.5em */
    lazy val gap: String = "--gap"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The form control that wraps the label, group, and hint. */
    lazy val formControl: String = "form-control"

    /** The label. */
    lazy val formControlLabel: String = "form-control-label"

    /** The element that wraps the grouped checkboxes, exposed as a `role="group"`. */
    lazy val formControlInput: String = "form-control-input"

    /** The hint's wrapper. */
    lazy val hint: String = "hint"

  }

  // -- Element type --

  @js.native
  trait WaCheckboxGroupComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
      * instead.
      */
    var label: String

    /** The checkbox group's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String

    /** The orientation in which to show grouped checkboxes. Valid values: "horizontal", "vertical". */
    var orientation: Orientation

    /** The group's size. When present, this size will be applied to all `<wa-checkbox>` and `<wa-switch>` items inside.
      * Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large".
      */
    var size: ComponentSize

    /** Indicates that at least one option should be selected. This only adds a visual indicator to the label. To
      * enforce the requirement, use the `required` attribute on the individual checkboxes and/or their
      * `setCustomValidity()` method.
      */
    var required: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup
      * includes the label before the component hydrates on the client.
      */
    var withLabel: Boolean

    /** Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup
      * includes the hint before the component hydrates on the client.
      */
    var withHint: Boolean

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

  }
}
