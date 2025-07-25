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

/** Details show a brief summary and expand to show additional content.
  *
  * [[https://webawesome.com/docs/components/details WebAwesome docs]]
  */
object Details extends WebComponent("wa-details") {

  @JSImport("@awesome.me/webawesome/dist/components/details/details.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Details.type

  type Ref = WaDetailsComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the details opens. */
  lazy val onShow: EventProp[dom.Event] = eventProp("wa-show")

  /** Emitted after the details opens and all animations are complete. */
  lazy val onAfterShow: EventProp[dom.Event] = eventProp("wa-after-show")

  /** Emitted when the details closes. */
  lazy val onHide: EventProp[dom.Event & EventDetail[WaHideEvent]] = eventProp("wa-hide")

  /** Emitted after the details closes and all animations are complete. */
  lazy val onAfterHide: EventProp[dom.Event] = eventProp("wa-after-hide")

  // -- Attributes --

  /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
    * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
    */
  lazy val open: HtmlAttr[Boolean] = boolAttr("open")

  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  lazy val summary: HtmlAttr[String] = stringAttr("summary")

  /** Groups related details elements. When one opens, others with the same name will close. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** Disables the details so it can't be toggled. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  /** The element's visual appearance. Valid values: "filled", "outlined", "plain". */
  lazy val appearance: CommonKeys.DetailsAppearance.type = CommonKeys.DetailsAppearance

  // -- Slots --

  object slots {

    /** The details' main content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The details' summary. Alternatively, you can use the `summary` attribute. */
    lazy val summary: Slot = Slot("summary")

    /** Optional expand icon to use instead of the default. Works best with `<wa-icon>`. */
    lazy val expandIcon: Slot = Slot("expand-icon")

    /** Optional collapse icon to use instead of the default. Works best with `<wa-icon>`. */
    lazy val collapseIcon: Slot = Slot("collapse-icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The amount of space around and between the details' content. Expects a single value. */
    lazy val spacing: String = "--spacing"

    /** The show duration to use when applying built-in animation classes. Default: 200ms */
    lazy val showDuration: String = "--show-duration"

    /** The hide duration to use when applying built-in animation classes. Default: 200ms */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The inner `<details>` element used to render the component. Styles you apply to the component are automatically
      * applied to this part, so you usually don't need to deal with it unless you need to set the `display` property.
      */
    lazy val base: String = "base"

    /** The header that wraps both the summary and the expand/collapse icon. */
    lazy val header: String = "header"

    /** The container that wraps the summary. */
    lazy val summary: String = "summary"

    /** The container that wraps the expand/collapse icons. */
    lazy val icon: String = "icon"

    /** The details content. */
    lazy val content: String = "content"

  }

  // -- Element type --

  @js.native
  trait WaDetailsComponent extends js.Object {
    this: dom.HTMLElement =>

    /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
      * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
      */
    var open: Boolean

    /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
    var summary: String

    /** Groups related details elements. When one opens, others with the same name will close. */
    var name: String

    /** Disables the details so it can't be toggled. */
    var disabled: Boolean

    /** The element's visual appearance. Valid values: "filled", "outlined", "plain". */
    var appearance: DetailsAppearance

    def handleOpenChange(): js.Any = js.native

    /** Shows the details. */
    def show(): js.Any = js.native

    /** Hides the details */
    def hide(): js.Any = js.native

  }
}
