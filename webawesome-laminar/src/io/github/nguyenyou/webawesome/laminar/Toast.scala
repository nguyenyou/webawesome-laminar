package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Toasts display brief, non-blocking notifications that appear temporarily above the page content.
  *
  * [[https://webawesome.com/docs/components/toast WebAwesome docs]]
  */
object Toast extends WebComponent("wa-toast") {

  @JSImport("@awesome.me/webawesome/dist/components/toast/toast.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Toast.type

  type Ref = WaToastComponent & dom.HTMLElement

  // -- Attributes --

  /** The placement of the toast stack on the screen. Valid values: "top-start", "top-center", "top-end",
    * "bottom-start", "bottom-center", "bottom-end".
    */
  lazy val placement: CommonKeys.ToastPlacement.type = CommonKeys.ToastPlacement

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** Place `<wa-toast-item>` elements here to show them as notifications. Note: You can just say `_ => element`
      * instead of `_.slots.default(element)`
      */
    lazy val default: Slot = Slot("")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The gap between stacked toast items. Default: var(--wa-space-s) */
    lazy val gap: String = "--gap"

    /** The width of the toast stack. Default: 28rem */
    lazy val width: String = "--width"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The container that holds the toast items. */
    lazy val stack: String = "stack"

  }

  // -- Element type --

  @js.native
  trait WaToastComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The placement of the toast stack on the screen. Valid values: "top-start", "top-center", "top-end",
      * "bottom-start", "bottom-center", "bottom-end".
      */
    var placement: ToastPlacement

    var dir: String

    var lang: String

    var didSSR: String

    /** Creates a toast notification programmatically and adds it to the stack. Returns a reference to the created toast
      * item element.
      */
    def create(message: String, options: js.UndefOr[js.Any] = js.undefined): js.Promise[js.Any] = js.native

  }
}
