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

/** Copy buttons copy text to the clipboard when the user activates them. They provide built-in success and error
  * feedback so users know the copy worked.
  *
  * [[https://webawesome.com/docs/components/copy WebAwesome docs]]
  */
object CopyButton extends WebComponent("wa-copy-button") {

  @JSImport("@awesome.me/webawesome/dist/components/copy-button/copy-button.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = CopyButton.type

  type Ref = WaCopyButtonComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the data has been copied. */
  lazy val onCopy: EventProp[CustomEvent[Ref] & EventDetail[WaCopyEvent]] = eventProp("wa-copy")

  /** Emitted when the data could not be copied. */
  lazy val onError: EventProp[CustomEvent[Ref]] = eventProp("wa-error")

  // -- Attributes --

  /** The text value to copy. */
  lazy val value: HtmlAttr[String] = stringAttr("value")

  /** An id that references an element in the same document from which data will be copied. If both this and `value` are
    * present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy
    * an attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
    * append a dot and the property name, e.g. `from="el.value"`.
    */
  lazy val from: HtmlAttr[String] = stringAttr("from")

  /** Disables the copy button. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** A custom label to use as the accessible name and tooltip text in the default copy state. */
  lazy val copyLabel: HtmlAttr[String] = stringAttr("copy-label")

  /** A custom label to show in the tooltip after copying. */
  lazy val successLabel: HtmlAttr[String] = stringAttr("success-label")

  /** A custom label to show in the tooltip when a copy error occurs. */
  lazy val errorLabel: HtmlAttr[String] = stringAttr("error-label")

  /** The length of time to show feedback before restoring the default trigger. */
  lazy val feedbackDuration: HtmlAttr[Double] = doubleAttr("feedback-duration")

  /** The preferred placement of the tooltip. Valid values: "top", "right", "bottom", "left". */
  lazy val tooltipPlacement: CommonKeys.TooltipPlacement.type = CommonKeys.TooltipPlacement

  /** Controls the built-in tooltip. `full` (default) shows the tooltip on hover and focus and during copy feedback.
    * `copy` keeps the tooltip silent on hover/focus and only shows it briefly to confirm a successful or failed copy.
    * `none` disables the tooltip entirely. Applies to both the default and custom triggers. Valid values: "full",
    * "copy", "none".
    */
  lazy val tooltip: CommonKeys.CopyButtonTooltip.type = CommonKeys.CopyButtonTooltip

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The trigger element. By default, a copy icon button is rendered so this is optional. If desired, you can slot in
      * a custom element such as `<wa-button>` or `<button>`. Note: You can just say `_ => element` instead of
      * `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

    /** The icon to show in the default copy state. Works best with `<wa-icon>`. */
    lazy val copyIcon: Slot = Slot("copy-icon")

    /** The icon to show when the content is copied. Works best with `<wa-icon>`. */
    lazy val successIcon: Slot = Slot("success-icon")

    /** The icon to show when a copy error occurs. Works best with `<wa-icon>`. */
    lazy val errorIcon: Slot = Slot("error-icon")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The internal `<button>` element. */
    lazy val button: String = "button"

    /** The container that holds the copy icon. */
    lazy val copyIcon: String = "copy-icon"

    /** The container that holds the success icon. */
    lazy val successIcon: String = "success-icon"

    /** The container that holds the error icon. */
    lazy val errorIcon: String = "error-icon"

    /** The internal `<wa-tooltip>` element. */
    lazy val feedback: String = "feedback"

  }

  // -- Element type --

  @js.native
  trait WaCopyButtonComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The text value to copy. */
    var value: String

    /** An id that references an element in the same document from which data will be copied. If both this and `value`
      * are present, this value will take precedence. By default, the target element's `textContent` will be copied. To
      * copy an attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a
      * property, append a dot and the property name, e.g. `from="el.value"`.
      */
    var from: String

    /** Disables the copy button. */
    var disabled: Boolean

    /** A custom label to use as the accessible name and tooltip text in the default copy state. */
    var copyLabel: String

    /** A custom label to show in the tooltip after copying. */
    var successLabel: String

    /** A custom label to show in the tooltip when a copy error occurs. */
    var errorLabel: String

    /** The length of time to show feedback before restoring the default trigger. */
    var feedbackDuration: Double

    /** The preferred placement of the tooltip. Valid values: "top", "right", "bottom", "left". */
    var tooltipPlacement: TooltipPlacement

    /** Controls the built-in tooltip. `full` (default) shows the tooltip on hover and focus and during copy feedback.
      * `copy` keeps the tooltip silent on hover/focus and only shows it briefly to confirm a successful or failed copy.
      * `none` disables the tooltip entirely. Applies to both the default and custom triggers. Valid values: "full",
      * "copy", "none".
      */
    var tooltip: CopyButtonTooltip

    var dir: String

    var lang: String

    var didSSR: String

    def handleStatusChange(): Unit = js.native

    def handleLabelChange(): Unit = js.native

    def handleTooltipOptionsChange(): Unit = js.native

    def handleTooltipModeChange(oldValue: js.UndefOr[String] = js.undefined): Unit = js.native

  }
}
