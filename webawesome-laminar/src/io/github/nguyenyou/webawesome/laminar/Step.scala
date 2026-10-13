package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Steps represent a single stage inside a `<wa-stepper>`, showing its position, label, and status.
  *
  * [[https://webawesome.com/docs/components/step WebAwesome docs]]
  */
object Step extends WebComponent("wa-step") {

  @JSImport("@awesome.me/webawesome/dist/components/step/step.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Step.type

  type Ref = WaStepComponent & dom.HTMLElement

  // -- Attributes --

  /** Identifies the step. Matched against the stepper's `active` attribute and used in events. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Marks the step done. Shows a checkmark instead of the step number. */
  lazy val completed: HtmlAttr[Boolean] = boolAttr("completed")

  /** Shows a loading indicator instead of the step number, e.g. while an async transition is in progress. */
  lazy val loading: HtmlAttr[Boolean] = boolAttr("loading")

  /** Makes the step non-interactive. It can't be clicked or reached with `next()`/`goTo()`, and it renders as a
    * disabled button when the stepper is `clickable`.
    */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Colors the step's marker with a semantic color. Upcoming `brand` steps keep a neutral outline so a default stepper
    * reads quietly. The color is cosmetic; pair it with an icon in the `icon` slot and a clear label when a step needs
    * to read as failed or flagged. Valid values: "neutral", "brand", "success", "warning", "danger".
    */
  lazy val variant: CommonKeys.ThemeVariant.type = CommonKeys.ThemeVariant

  /** Adds an animation to the step's marker to draw attention to it, e.g. the step the user should do next. Valid
    * values: "none", "pulse", "bounce".
    */
  lazy val attention: CommonKeys.Attention.type = CommonKeys.Attention

  /** Only required for SSR. Set to `true` if you're slotting in a `description` element, so the server-rendered markup
    * includes it before the component hydrates on the client.
    */
  lazy val withDescription: HtmlAttr[Boolean] = boolAttr("with-description")

  /** Draws the step as the stepper's current step. The parent `<wa-stepper>` sets this from its own `active` attribute,
    * so you only need to set it yourself for SSR.
    */
  lazy val active: HtmlAttr[Boolean] = boolAttr("active")

  lazy val role: HtmlAttr[String] = stringAttr("role")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The step's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** Optional text shown under the label. */
    lazy val description: Slot = Slot("description")

    /** An element, such as `<wa-icon>`, that replaces the step number, checkmark, or loading indicator. */
    lazy val icon: Slot = Slot("icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The color of the marker's pulse effect when using `attention="pulse"`. Defaults to the step's accent color. */
    lazy val pulseColor: String = "--pulse-color"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's outer wrapper. */
    lazy val step: String = "step"

    /** The line connecting this step to its neighbors. Each step draws the half leading in and the half leading out,
      * and both carry this part name.
      */
    lazy val connector: String = "connector"

    /** The `<button>` wrapping the marker and content. Only rendered when the parent stepper is `clickable`; otherwise
      * the same wrapper is a plain, non-focusable element.
      */
    lazy val button: String = "button"

    /** The circular marker that shows the step's number, checkmark, or loading indicator. */
    lazy val marker: String = "marker"

    /** The spinner shown in the marker while the step is `loading`. */
    lazy val spinner: String = "spinner"

    /** The wrapper around the label, status text, and description. */
    lazy val content: String = "content"

    /** The step's label. */
    lazy val label: String = "label"

    /** Visually hidden text that tells assistive technology whether the step is completed, not completed, or locked. */
    lazy val status: String = "status"

    /** The step's description. */
    lazy val description: String = "description"

  }

  // -- Element type --

  @js.native
  trait WaStepComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Identifies the step. Matched against the stepper's `active` attribute and used in events. */
    var name: String

    /** Marks the step done. Shows a checkmark instead of the step number. */
    var completed: Boolean

    /** Shows a loading indicator instead of the step number, e.g. while an async transition is in progress. */
    var loading: Boolean

    /** Makes the step non-interactive. It can't be clicked or reached with `next()`/`goTo()`, and it renders as a
      * disabled button when the stepper is `clickable`.
      */
    var disabled: Boolean

    /** Colors the step's marker with a semantic color. Upcoming `brand` steps keep a neutral outline so a default
      * stepper reads quietly. The color is cosmetic; pair it with an icon in the `icon` slot and a clear label when a
      * step needs to read as failed or flagged. Valid values: "neutral", "brand", "success", "warning", "danger".
      */
    var variant: ThemeVariant

    /** Adds an animation to the step's marker to draw attention to it, e.g. the step the user should do next. Valid
      * values: "none", "pulse", "bounce".
      */
    var attention: Attention

    /** Only required for SSR. Set to `true` if you're slotting in a `description` element, so the server-rendered
      * markup includes it before the component hydrates on the client.
      */
    var withDescription: Boolean

    /** Draws the step as the stepper's current step. The parent `<wa-stepper>` sets this from its own `active`
      * attribute, so you only need to set it yourself for SSR.
      */
    var active: Boolean

    var role: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleCompletedChange(): Unit = js.native

    def handleLoadingChange(): Unit = js.native

    def handleDisabledChange(): Unit = js.native

    def handleActiveChange(): Unit = js.native

    def handleLockedChange(): Unit = js.native

    def handleClickableChange(): Unit = js.native

  }
}
