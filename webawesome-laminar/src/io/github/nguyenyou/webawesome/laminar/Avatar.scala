package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}
import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.Slot
import com.raquo.laminar.tags.CustomHtmlTag
import org.scalajs.dom
import io.github.nguyenyou.webawesome.laminar.events.*

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*

// This file is generated at compile-time by WebAwesome generator

/**
  * Avatars are used to represent a person or object.
  *
  * [[https://webawesome.com/docs/components/avatar WebAwesome  docs]]
  */
object Avatar extends WebComponent("wa-avatar") {

  @JSImport("@awesome.me/webawesome/dist/components/avatar/avatar.js", JSImport.Namespace)
  @js.native object RawImport extends js.Object

  type Self = Avatar.type

  type Ref = WaAvatarComponent & dom.HTMLElement

  // -- Events --

  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  lazy val onError: EventProp[dom.Event] = eventProp("wa-error")

  // -- Attributes --

  /** The image source to use for the avatar. */
  lazy val image: HtmlAttr[String] = stringAttr("image")

  /** A label to use to describe the avatar to assistive devices. */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  lazy val initials: HtmlAttr[String] = stringAttr("initials")

  /** Indicates how the browser should load the image. Valid values: "eager", "lazy". */
  lazy val loading: CommonKeys.LoadingStrategy.type = CommonKeys.LoadingStrategy

  /** The shape of the avatar. Valid values: "circle", "square", "rounded". */
  lazy val shape: CommonKeys.AvatarShape.type = CommonKeys.AvatarShape

  // -- Slots --

  object slots {
    /** The default icon to use when no image or initials are present. Works best with `<wa-icon>`. */
    lazy val icon: Slot = Slot("icon")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {
    /** The size of the avatar. */
    lazy val size: String = "--size"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {
    /** The container that wraps the avatar's icon. */
    lazy val icon: String = "icon"

    /** The container that wraps the avatar's initials. */
    lazy val initials: String = "initials"

    /** The avatar image. Only shown when the `image` attribute is set. */
    lazy val image: String = "image"

  }

  // -- Element type --

  @js.native trait WaAvatarComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The image source to use for the avatar. */
    var image: String

    /** A label to use to describe the avatar to assistive devices. */
    var label: String

    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    var initials: String

    /** Indicates how the browser should load the image. Valid values: "eager", "lazy". */
    var loading: LoadingStrategy

    /** The shape of the avatar. Valid values: "circle", "square", "rounded". */
    var shape: AvatarShape

    def handleImageChange(): js.Any = js.native

  }
}