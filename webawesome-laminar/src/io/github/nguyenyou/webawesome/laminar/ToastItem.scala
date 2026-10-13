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

/** Toast items are individual notifications displayed within a toast container.
  *
  * [[https://webawesome.com/docs/components/toast WebAwesome docs]]
  */
object ToastItem extends WebComponent("wa-toast-item") {

  @JSImport("@awesome.me/webawesome/dist/components/toast-item/toast-item.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = ToastItem.type

  type Ref = WaToastItemComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the toast item begins to show. */
  lazy val onShow: EventProp[CustomEvent[Ref]] = eventProp("wa-show")

  /** Emitted after the toast item has finished showing. */
  lazy val onAfterShow: EventProp[CustomEvent[Ref]] = eventProp("wa-after-show")

  /** Emitted when the toast item begins to hide. */
  lazy val onHide: EventProp[CustomEvent[Ref] & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the toast item has finished hiding. */
  lazy val onAfterHide: EventProp[CustomEvent[Ref]] = eventProp("wa-after-hide")

  // -- Attributes --

  /** The toast item's variant. Valid values: "brand", "success", "warning", "danger", "neutral". */
  lazy val variant: CommonKeys.ThemeVariant.type = CommonKeys.ThemeVariant

  /** The toast item's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
  lazy val size: CommonKeys.ComponentSize.type = CommonKeys.ComponentSize

  /** The length of time in milliseconds before the toast item is automatically dismissed. Set to 0 to keep the toast
    * item open until the user dismisses it.
    */
  lazy val duration: HtmlAttr[Double] = doubleAttr("duration")

  /** Only required for SSR. Set to `true` if you're slotting in an `icon` element so the server-rendered markup
    * includes the icon before the component hydrates on the client.
    */
  lazy val withIcon: HtmlAttr[Boolean] = boolAttr("with-icon")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** The toast item's message content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** An optional icon to show at the start of the toast item. */
    lazy val icon: Slot = Slot("icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The width of the accent line. Defaults to 4px. */
    lazy val accentWidth: String = "--accent-width"

    /** The internal spacing of the toast item. Scales with the `size` attribute. */
    lazy val padding: String = "--padding"

    /** The animation duration when showing. Default: var(--wa-transition-normal) */
    lazy val showDuration: String = "--show-duration"

    /** The animation duration when hiding. Default: var(--wa-transition-normal) */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The toast item's main container. */
    lazy val toastItem: String = "toast-item"

    /** The colored accent line on the start side. */
    lazy val accent: String = "accent"

    /** The icon container. */
    lazy val icon: String = "icon"

    /** The message content container. */
    lazy val content: String = "content"

    /** The close button element. */
    lazy val closeButton: String = "close-button"

    /** The progress ring component. */
    lazy val progressRing: String = "progress-ring"

    /** The progress ring's exported base part. */
    lazy val progressRing__base: String = "progress-ring__base"

    /** The progress ring's exported label part. */
    lazy val progressRing__label: String = "progress-ring__label"

    /** The progress ring's exported track part. */
    lazy val progressRing__track: String = "progress-ring__track"

    /** The progress ring's exported indicator part. */
    lazy val progressRing__indicator: String = "progress-ring__indicator"

    /** The close icon element. */
    lazy val closeIcon: String = "close-icon"

    /** The close icon's exported svg part. */
    lazy val closeIcon__svg: String = "close-icon__svg"

  }

  // -- Element type --

  @js.native
  trait WaToastItemComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The toast item's variant. Valid values: "brand", "success", "warning", "danger", "neutral". */
    var variant: ThemeVariant

    /** The toast item's size. Valid values: "xs", "s", "m", "l", "xl", "small", "medium", "large". */
    var size: ComponentSize

    /** The length of time in milliseconds before the toast item is automatically dismissed. Set to 0 to keep the toast
      * item open until the user dismisses it.
      */
    var duration: Double

    /** Only required for SSR. Set to `true` if you're slotting in an `icon` element so the server-rendered markup
      * includes the icon before the component hydrates on the client.
      */
    var withIcon: Boolean

    var dir: String

    var lang: String

    var didSSR: String

    def handleSizeChange(): Unit = js.native

    /** Hides the toast item with animation and removes it from the DOM. */
    def hide(): js.Promise[js.Any] = js.native

  }
}
