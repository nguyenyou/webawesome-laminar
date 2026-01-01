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

/** Buttons represent actions that are available to the user.
  *
  * [[https://webawesome.com/docs/components/button WebAwesome docs]]
  */
object Button extends WebComponent("wa-button") {

  @JSImport("@awesome.me/webawesome/dist/components/button/button.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Button.type

  type Ref = WaButtonComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the button loses focus. */
  lazy val onBlur: EventProp[CustomEvent[Ref]] = eventProp("blur")

  /** Emitted when the button gains focus. */
  lazy val onFocus: EventProp[CustomEvent[Ref]] = eventProp("focus")

  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  lazy val onInvalid: EventProp[CustomEvent[Ref]] = eventProp("wa-invalid")

  // -- Attributes --

  lazy val title: HtmlAttr[String] = stringAttr("title")

  /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values:
    * "neutral", "brand", "success", "warning", "danger".
    */
  lazy val variant: CommonKeys.ThemeVariant.type = CommonKeys.ThemeVariant

  /** The button's visual appearance. Valid values: "accent", "filled", "outlined", "filled-outlined", "plain". */
  lazy val appearance: CommonKeys.ExtendedAppearance.type = CommonKeys.ExtendedAppearance

  /** The button's size. Valid values: "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  lazy val withCaret: HtmlAttr[Boolean] = boolAttr("with-caret")

  /** Disables the button. Does not apply to link buttons. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** Draws the button in a loading state. */
  lazy val loading: HtmlAttr[Boolean] = boolAttr("loading")

  /** Draws a pill-style button with rounded edges. */
  lazy val pill: HtmlAttr[Boolean] = boolAttr("pill")

  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
    * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. Valid values:
    * "button", "submit", "reset".
    */
  lazy val `type`: CommonKeys.ButtonButtonType.type = CommonKeys.ButtonButtonType

  lazy val typ: CommonKeys.ButtonButtonType.type = `type`

  lazy val tpe: CommonKeys.ButtonButtonType.type = `type`

  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
    * This attribute is ignored when `href` is present.
    */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
    * button is the submitter. This attribute is ignored when `href` is present.
    */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  lazy val href: HtmlAttr[String] = stringAttr("href")

  /** Tells the browser where to open the link. Only used when `href` is present. Valid values: "_blank", "_parent",
    * "_self", "_top".
    */
  lazy val target: CommonKeys.ButtonLinkTarget.type = CommonKeys.ButtonLinkTarget

  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
  lazy val rel: HtmlAttr[String] = stringAttr("rel")

  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  lazy val download: HtmlAttr[String] = stringAttr("download")

  /** Used to override the form owner's `action` attribute. */
  lazy val formAction: HtmlAttr[String] = stringAttr("formaction")

  /** Used to override the form owner's `enctype` attribute. Valid values: "application/x-www-form-urlencoded",
    * "multipart/form-data", "text/plain".
    */
  lazy val formEnctype: CommonKeys.ButtonFormenctype.type = CommonKeys.ButtonFormenctype

  /** Used to override the form owner's `method` attribute. Valid values: "post", "get". */
  lazy val formMethod: CommonKeys.ButtonFormmethod.type = CommonKeys.ButtonFormmethod

  /** Used to override the form owner's `novalidate` attribute. */
  lazy val formNoValidate: HtmlAttr[Boolean] = boolAttr("formnovalidate")

  /** Used to override the form owner's `target` attribute. */
  lazy val formTarget: HtmlAttr[String] = stringAttr("formtarget")

  // -- Custom Attributes --
  lazy val close: CustomKeys.Close.type = CustomKeys.Close

  lazy val open: CustomKeys.Open.type = CustomKeys.Open

  // -- Slots --

  object slots {

    /** The button's label. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An element, such as `<wa-icon>`, placed before the label. */
    lazy val start: Slot = Slot("start")

    /** An element, such as `<wa-icon>`, placed after the label. */
    lazy val end: Slot = Slot("end")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's base wrapper. */
    lazy val base: String = "base"

    /** The container that wraps the `start` slot. */
    lazy val start: String = "start"

    /** The button's label. */
    lazy val label: String = "label"

    /** The container that wraps the `end` slot. */
    lazy val end: String = "end"

    /** The button's caret icon, a `<wa-icon>` element. */
    lazy val caret: String = "caret"

    /** The spinner that shows when the button is in the loading state. */
    lazy val spinner: String = "spinner"

  }

  // -- Element type --

  @js.native
  trait WaButtonComponent extends js.Object {
    this: dom.HTMLElement =>

    var title: String

    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. Valid values:
      * "neutral", "brand", "success", "warning", "danger".
      */
    var variant: ThemeVariant

    /** The button's visual appearance. Valid values: "accent", "filled", "outlined", "filled-outlined", "plain". */
    var appearance: ExtendedAppearance

    /** The button's size. Valid values: "small", "medium", "large". */
    var size: ComponentSize

    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    var withCaret: Boolean

    /** Disables the button. Does not apply to link buttons. */
    var disabled: Boolean

    /** Draws the button in a loading state. */
    var loading: Boolean

    /** Draws a pill-style button with rounded edges. */
    var pill: Boolean

    /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
      * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. Valid
      * values: "button", "submit", "reset".
      */
    var `type`: ButtonButtonType

    /** The name of the button, submitted as a name/value pair with form data, but only when this button is the
      * submitter. This attribute is ignored when `href` is present.
      */
    var name: String

    /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
      * button is the submitter. This attribute is ignored when `href` is present.
      */
    var value: String

    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    var href: String

    /** Tells the browser where to open the link. Only used when `href` is present. Valid values: "_blank", "_parent",
      * "_self", "_top".
      */
    var target: ButtonLinkTarget

    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    var rel: String

    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    var download: String

    /** Used to override the form owner's `action` attribute. */
    var formAction: String

    /** Used to override the form owner's `enctype` attribute. Valid values: "application/x-www-form-urlencoded",
      * "multipart/form-data", "text/plain".
      */
    var formEnctype: ButtonFormenctype

    /** Used to override the form owner's `method` attribute. Valid values: "post", "get". */
    var formMethod: ButtonFormmethod

    /** Used to override the form owner's `novalidate` attribute. */
    var formNoValidate: Boolean

    /** Used to override the form owner's `target` attribute. */
    var formTarget: String

    def handleDisabledChange(): js.Any = js.native

    def setValue(_args: js.Any): js.Any = js.native

    /** Simulates a click on the button. */
    def click(): js.Any = js.native

    /** Sets focus on the button. */
    def focus(options: js.UndefOr[js.Any]): js.Any = js.native

    /** Removes focus from the button. */
    def blur(): js.Any = js.native

  }
}
