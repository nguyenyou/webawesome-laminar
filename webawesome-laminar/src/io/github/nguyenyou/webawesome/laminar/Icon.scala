package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Icons are symbols that can be used to represent various options within an application.
  *
  * [[https://webawesome.com/docs/components/icon WebAwesome docs]]
  */
object Icon extends WebComponent("wa-icon") {

  @JSImport("@awesome.me/webawesome/dist/components/icon/icon.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Icon.type

  type Ref = WaIconComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  lazy val onLoad: EventProp[dom.Event] = eventProp("wa-load")

  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  lazy val onError: EventProp[dom.Event] = eventProp("wa-error")

  // -- Attributes --

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  lazy val name: HtmlAttr[String] = stringAttr("name")

  /** The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For Font
    * Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`. A
    * valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
    * one.
    */
  lazy val family: HtmlAttr[String] = stringAttr("family")

  /** The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid`
    * for the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon
    * libraries may or may not use this property.
    */
  lazy val variant: HtmlAttr[String] = stringAttr("variant")

  /** Draws the icon in a fixed-width both. */
  lazy val fixedWidth: HtmlAttr[String] = stringAttr("fixed-width")

  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code
    * and can result in XSS attacks.
    */
  lazy val src: HtmlAttr[String] = stringAttr("src")

  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
    * ignored by assistive devices.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The name of a registered custom icon library. */
  lazy val library: HtmlAttr[String] = stringAttr("library")

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** Sets a duotone icon's primary color. Default: currentColor */
    lazy val primaryColor: String = "--primary-color"

    /** Sets a duotone icon's primary opacity. Default: 1 */
    lazy val primaryOpacity: String = "--primary-opacity"

    /** Sets a duotone icon's secondary color. Default: currentColor */
    lazy val secondaryColor: String = "--secondary-color"

    /** Sets a duotone icon's secondary opacity. Default: 0.4 */
    lazy val secondaryOpacity: String = "--secondary-opacity"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The internal SVG element. */
    lazy val svg: String = "svg"

    /** The `<use>` element generated when using `spriteSheet: true` */
    lazy val use: String = "use"

  }

  // -- Element type --

  @js.native
  trait WaIconComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The name of the icon to draw. Available names depend on the icon library being used. */
    var name: String

    /** The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
      * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and
      * `brands`. A valid kit code must be present to show pro icons via CDN. You can set `<html
      * data-fa-kit-code="...">` to provide one.
      */
    var family: String

    /** The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid`
      * for the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon
      * libraries may or may not use this property.
      */
    var variant: String

    /** Draws the icon in a fixed-width both. */
    var fixedWidth: js.Any

    /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code
      * and can result in XSS attacks.
      */
    var src: String

    /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational
      * and ignored by assistive devices.
      */
    var label: String

    /** The name of a registered custom icon library. */
    var library: String

    def handleLabelChange(): js.Any = js.native

    def setIcon(): js.Any = js.native

  }
}
