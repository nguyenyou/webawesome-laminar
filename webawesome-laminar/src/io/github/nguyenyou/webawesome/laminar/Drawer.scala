package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import com.raquo.laminar.tags.CustomHtmlTag
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Drawers slide in from a container to expose additional options and information.
  *
  * [[https://backers.webawesome.com/docs/components/drawer WebAwesome  docs]]
  */
object Drawer extends WebComponent("wa-drawer") {

  @JSImport("@awesome.me/webawesome/dist/components/drawer/drawer.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Drawer.type

  type Ref = WaDrawerComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the drawer opens. */
  lazy val onShow: EventProp[dom.Event] = eventProp("wa-show")

  /** Emitted after the drawer opens and all animations are complete. */
  lazy val onAfterShow: EventProp[dom.Event] = eventProp("wa-after-show")

  /** Emitted when the drawer is requesting to close. Calling `event.preventDefault()` will prevent the drawer from closing. You can inspect `event.detail.source` to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed [[Escape]] or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
  lazy val onHide: EventProp[dom.Event] = eventProp("wa-hide")

  /** Emitted after the drawer closes and all animations are complete. */
  lazy val onAfterHide: EventProp[dom.Event] = eventProp("wa-after-hide")

  // -- Attributes --

  /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
  proper accessibility. If you need to display HTML, use the `label` slot instead. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The direction from which the drawer will open. Valid values: "top", "end", "bottom", "start". */
  lazy val placement: HtmlAttr[ComponentPlacement] = unionAttr("placement")

  /** Disables the header. This will also remove the default close button. */
  lazy val withoutHeader: HtmlAttr[Boolean] = boolAttr("without-header")

  /** When enabled, the drawer will be closed when the user clicks outside of it. */
  lazy val lightDismiss: HtmlAttr[Boolean] = boolAttr("light-dismiss")

  // -- Slots --

  object slots {
    /** The drawer's main content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The drawer's label. Alternatively, you can use the `label` attribute. */
    lazy val label: Slot = Slot("label")

    /** Optional actions to add to the header. Works best with `<wa-button>`. */
    lazy val headerActions: Slot = Slot("header-actions")

    /** The drawer's footer, usually one or more buttons representing various options. */
    lazy val footer: Slot = Slot("footer")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The amount of space around and between the drawer's content. */
    lazy val spacing: String = "--spacing"

    /** The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. */
    lazy val size: String = "--size"

    /** The animation duration when showing the drawer. Default: 200ms */
    lazy val showDuration: String = "--show-duration"

    /** The animation duration when hiding the drawer. Default: 200ms */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The drawer's header. This element wraps the title and header actions. */
    lazy val header: String = "header"

    /** Optional actions to add to the header. Works best with `<wa-button>`. */
    lazy val headerActions: String = "header-actions"

    /** The drawer's title. */
    lazy val title: String = "title"

    /** The close button, a `<wa-button>`. */
    lazy val closeButton: String = "close-button"

    /** The close button's exported `base` part. */
    lazy val closeButton__base: String = "close-button__base"

    /** The drawer's body. */
    lazy val body: String = "body"

    /** The drawer's footer. */
    lazy val footer: String = "footer"

  }

  // -- Element type --

  @js.native trait WaDrawerComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    var open: Boolean

    /** The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
    proper accessibility. If you need to display HTML, use the `label` slot instead. */
    var label: String

    /** The direction from which the drawer will open. Valid values: "top", "end", "bottom", "start". */
    var placement: ComponentPlacement

    /** Disables the header. This will also remove the default close button. */
    var withoutHeader: Boolean

    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    var lightDismiss: Boolean

    def handleOpenChange(): js.Any = js.native

  }
}