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

/** Steppers visually guide users through a process step by step, breaking content into clear, logical stages. Use them
  * for checkout flows, multi-step setup, onboarding, or just to show the status of a process.
  *
  * [[https://webawesome.com/docs/components/stepper WebAwesome docs]]
  */
object Stepper extends WebComponent("wa-stepper") {

  @JSImport("@awesome.me/webawesome/dist/components/stepper/stepper.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Stepper.type

  type Ref = WaStepperComponent & dom.HTMLElement

  // -- Events --

  lazy val onDetail: EventProp[CustomEvent[Ref]] = eventProp("detail")

  /** Emitted before the active step changes. Calling `event.preventDefault()` prevents the change, to guard against
    * invalid or unsaved data.
    */
  lazy val onBeforeStepChange: EventProp[CustomEvent[Ref] & EventDetail[WaBeforeStepChangeEvent]] = eventProp(
    "wa-before-step-change"
  )

  /** Emitted after the active step changes. */
  lazy val onStepChange: EventProp[CustomEvent[Ref] & EventDetail[WaStepChangeEvent]] = eventProp("wa-step-change")

  // -- Attributes --

  /** The name of the active step. Falls back to the first step if unset, or if it doesn't match any step's name. */
  lazy val active: HtmlAttr[String] = stringAttr("active")

  /** The stepper's layout direction. `auto` lays steps out in a row and stacks them when the stepper is too narrow to
    * give each step about 6em of width, so labels stay legible on small screens; use it for anything shown on a phone.
    * It relies on measuring the stepper, so a server-rendered `auto` stepper starts as a row and stacks once it
    * hydrates, which is why `horizontal` is the default. Valid values: "horizontal", "vertical", "auto".
    */
  lazy val orientation: CommonKeys.StepperOrientation.type = CommonKeys.StepperOrientation

  /** Requires steps to be completed in order. When set, `next()`/`goTo()`/a `data-stepper` invoker and, if `clickable`
    * is also set, clicking or activating a step can't reach a step until every step before it is completed. Every step
    * past that point renders as locked.
    */
  lazy val linear: HtmlAttr[Boolean] = boolAttr("linear")

  /** Allows clicking a step, or focusing it and pressing Enter/Space, to jump straight to it. When unset (the default),
    * only `next()`/`previous()`/`goTo()` change the active step, e.g. from your own Next/Back buttons or a
    * `data-stepper` invoker.
    */
  lazy val clickable: HtmlAttr[Boolean] = boolAttr("clickable")

  /** A label that describes the stepper to assistive devices. Especially useful when more than one is on the page. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** One or more `<wa-step>` elements. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The space between steps. Default: var(--wa-space-l) */
    lazy val gap: String = "--gap"

    /** The size of each step's marker. Default: 2em */
    lazy val markerSize: String = "--marker-size"

    /** The color of the connector line after a step that isn't completed. Default: var(--wa-color-neutral-fill-normal)
      */
    lazy val connectorColor: String = "--connector-color"

    /** The color of the connector line after a completed step. Unset by default, so the line takes the completed
      * marker's fill and follows its `variant`.
      */
    lazy val connectorColorActive: String = "--connector-color-active"

    /** The thickness of the connector line, in either orientation. Default: var(--wa-border-width-m) */
    lazy val connectorWidth: String = "--connector-width"

    /** The gap between a marker's edge and the connector line, on both sides. Kept clear of the marker geometrically,
      * so it holds even if a marker's background is transparent. Default: 0.35em
      */
    lazy val connectorGap: String = "--connector-gap"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's outer wrapper. A `<nav>` landmark when the stepper is `clickable`, since its steps are then
      * controls you can navigate with; otherwise a labeled `role="group"`, since a display-only stepper has nothing to
      * navigate.
      */
    lazy val stepper: String = "stepper"

    /** Visually hidden "Step X of Y" text that tells assistive technology where the active step sits. */
    lazy val summary: String = "summary"

    /** The `<ol>` that lays out the steps. */
    lazy val steps: String = "steps"

  }

  // -- Element type --

  @js.native
  trait WaStepperComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name of the active step. Falls back to the first step if unset, or if it doesn't match any step's name. */
    var active: String

    /** The stepper's layout direction. `auto` lays steps out in a row and stacks them when the stepper is too narrow to
      * give each step about 6em of width, so labels stay legible on small screens; use it for anything shown on a
      * phone. It relies on measuring the stepper, so a server-rendered `auto` stepper starts as a row and stacks once
      * it hydrates, which is why `horizontal` is the default. Valid values: "horizontal", "vertical", "auto".
      */
    var orientation: StepperOrientation

    /** Requires steps to be completed in order. When set, `next()`/`goTo()`/a `data-stepper` invoker and, if
      * `clickable` is also set, clicking or activating a step can't reach a step until every step before it is
      * completed. Every step past that point renders as locked.
      */
    var linear: Boolean

    /** Allows clicking a step, or focusing it and pressing Enter/Space, to jump straight to it. When unset (the
      * default), only `next()`/`previous()`/`goTo()` change the active step, e.g. from your own Next/Back buttons or a
      * `data-stepper` invoker.
      */
    var clickable: Boolean

    /** A label that describes the stepper to assistive devices. Especially useful when more than one is on the page. */
    var label: String

    var dir: String

    var lang: String

    var didSSR: String

    def handleStateChange(): Unit = js.native

    /** Requests a change to the named step. Emits a cancelable `wa-before-step-change`; if not canceled, updates
      * `active`, emits `wa-step-change`, and announces the new position to assistive technology. No-ops silently if the
      * step doesn't exist, is disabled, or (in `linear` mode) isn't reachable yet.
      */
    def goTo(name: String): Unit = js.native

    /** Advances to the step after the active one, if any. */
    def next(): Unit = js.native

    /** Goes back to the step before the active one, if any. */
    def previous(): Unit = js.native

  }
}
