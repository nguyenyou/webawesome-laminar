package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
  *
  * [[https://webawesome.com/docs/components/dialog WebAwesome docs]]
  */
object Dialog extends WebComponent("wa-dialog") {

  @JSImport("@awesome.me/webawesome/dist/components/dialog/dialog.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Dialog.type

  type Ref = WaDialogComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the dialog opens. */
  lazy val onShow: EventProp[dom.Event] = eventProp("wa-show")

  /** Emitted after the dialog opens and all animations are complete. */
  lazy val onAfterShow: EventProp[dom.Event] = eventProp("wa-after-show")

  /** Emitted when the dialog is requested to close. Calling `event.preventDefault()` will prevent the dialog from
    * closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is
    * the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid
    * using this unless closing the dialog will result in destructive behavior such as data loss.
    */
  lazy val onHide: EventProp[dom.Event & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the dialog closes and all animations are complete. */
  lazy val onAfterHide: EventProp[dom.Event] = eventProp("wa-after-hide")

  // -- Attributes --

  /** Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
    * proper accessibility. If you need to display HTML, use the `label` slot instead.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** Disables the header. This will also remove the default close button. */
  lazy val withoutHeader: HtmlAttr[Boolean] = boolAttr("without-header")

  /** When enabled, the dialog will be closed when the user clicks outside of it. */
  lazy val lightDismiss: HtmlAttr[Boolean] = boolAttr("light-dismiss")

  // -- Slots --

  object slots {

    /** The dialog's main content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The dialog's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Optional actions to add to the header. Works best with `<wa-button>`. */
    lazy val headerActions: Slot = Slot("header-actions")

    /** The dialog's footer, usually one or more buttons representing various options. */
    lazy val footer: Slot = Slot("footer")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The amount of space around and between the dialog's content. */
    lazy val spacing: String = "--spacing"

    /** The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. */
    lazy val width: String = "--width"

    /** The animation duration when showing the dialog. Default: 200ms */
    lazy val showDuration: String = "--show-duration"

    /** The animation duration when hiding the dialog. Default: 200ms */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The dialog's header. This element wraps the title and header actions. */
    lazy val header: String = "header"

    /** Optional actions to add to the header. Works best with `<wa-button>`. */
    lazy val headerActions: String = "header-actions"

    /** The dialog's title. */
    lazy val title: String = "title"

    /** The close button, a `<wa-button>`. */
    lazy val closeButton: String = "close-button"

    /** The close button's exported `base` part. */
    lazy val closeButton__base: String = "close-button__base"

    /** The dialog's body. */
    lazy val body: String = "body"

    /** The dialog's footer. */
    lazy val footer: String = "footer"

  }

  // -- Element type --

  @js.native
  trait WaDialogComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog. */
    var open: Boolean

    /** The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
      * proper accessibility. If you need to display HTML, use the `label` slot instead.
      */
    var label: String

    /** Disables the header. This will also remove the default close button. */
    var withoutHeader: Boolean

    /** When enabled, the dialog will be closed when the user clicks outside of it. */
    var lightDismiss: Boolean

    def handleOpenChange(): js.Any = js.native

  }
}
