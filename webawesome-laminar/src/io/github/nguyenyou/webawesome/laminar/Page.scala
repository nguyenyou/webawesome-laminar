package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Pages offer an easy way to scaffold entire page layouts using minimal markup.
  *
  * [[https://webawesome.com/docs/components/page WebAwesome docs]]
  */
object Page extends WebComponent("wa-page") {

  @JSImport("@awesome.me/webawesome/dist/components/page/page.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Page.type

  type Ref = WaPageComponent & dom.HTMLElement

  // -- Attributes --

  /** The view is a reflection of the "mobileBreakpoint", when the page is larger than the `mobile-breakpoint` (768px by
    * default), it is considered to be a "desktop" view. The view is merely a way to distinguish when to show/hide the
    * navigation. You can use additional media queries to make other adjustments to content as necessary. The default is
    * "desktop" because the "mobile navigation drawer" isn't accessible via SSR due to drawer requiring JS. Valid
    * values: "mobile", "desktop".
    */
  lazy val view: CommonKeys.PageView.type = CommonKeys.PageView

  /** Whether or not the navigation drawer is open. Note, the navigation drawer is only "open" on mobile views. */
  lazy val navOpen: HtmlAttr[Boolean] = boolAttr("nav-open")

  /** At what page width to hide the "navigation" slot and collapse into a hamburger button. Accepts both numbers
    * (interpreted as px) and CSS lengths (e.g. `50em`), which are resolved based on the root element.
    */
  lazy val mobileBreakpoint: HtmlAttr[String] = stringAttr("mobile-breakpoint")

  /** Where to place the navigation when in the mobile viewport. Valid values: "start", "end". */
  lazy val navigationPlacement: CommonKeys.IconPosition.type = CommonKeys.IconPosition

  /** Determines whether or not to hide the default hamburger button. This will automatically flip to "true" if you add
    * an element with `data-toggle-nav` anywhere in the element light DOM. Generally this will be set for you and you
    * don't need to do anything, unless you're using SSR, in which case you should set this manually for initial page
    * loads.
    */
  lazy val disableNavigationToggle: HtmlAttr[Boolean] = boolAttr("disable-navigation-toggle")

  // -- Slots --

  object slots {

    /** The page's main content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The banner that gets display above the header. The banner will not be shown if no content is provided. */
    lazy val banner: Slot = Slot("banner")

    /** The header to display at the top of the page. If a banner is present, the header will appear below the banner.
      * The header will not be shown if there is no content.
      */
    lazy val header: Slot = Slot("header")

    /** A subheader to display below the `header`. This is a good place to put things like breadcrumbs. */
    lazy val subheader: Slot = Slot("subheader")

    /** The left side of the page. If you slot an element in here, you will override the default `navigation` slot and
      * will be handling navigation on your own. This also will not disable the fallback behavior of the navigation
      * button. This section "sticks" to the top as the page scrolls.
      */
    lazy val menu: Slot = Slot("menu")

    /** The header for a navigation area. On mobile this will be the header for `<wa-drawer>`. */
    lazy val navigationHeader: Slot = Slot("navigation-header")

    /** The main content to display in the navigation area. This is displayed on the left side of the page, if `menu` is
      * not used. This section "sticks" to the top as the page scrolls.
      */
    lazy val navigation: Slot = Slot("navigation")

    /** The footer for a navigation area. On mobile this will be the footer for `<wa-drawer>`. */
    lazy val navigationFooter: Slot = Slot("navigation-footer")

    /** Use this slot to slot in your own button + icon for toggling the navigation drawer. By default it is a
      * `<wa-button>` + a 3 bars `<wa-icon>`
      */
    lazy val navigationToggle: Slot = Slot("navigation-toggle")

    /** Use this to slot in your own icon for toggling the navigation drawer. By default it is 3 bars `<wa-icon>`. */
    lazy val navigationToggleIcon: Slot = Slot("navigation-toggle-icon")

    /** Header to display inline above the main content. */
    lazy val mainHeader: Slot = Slot("main-header")

    /** Footer to display inline below the main content. */
    lazy val mainFooter: Slot = Slot("main-footer")

    /** Content to be shown on the right side of the page. Typically contains a table of contents, ads, etc. This
      * section "sticks" to the top as the page scrolls.
      */
    lazy val aside: Slot = Slot("aside")

    /** The "skip to content" slot. You can override this If you would like to override the `Skip to content` button and
      * add additional "Skip to X", they can be inserted here.
      */
    lazy val skipToContent: Slot = Slot("skip-to-content")

    /** The content to display in the footer. This is always displayed underneath the viewport so will always make the
      * page "scrollable".
      */
    lazy val footer: Slot = Slot("footer")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The width of the page's "menu" section. Default: auto */
    lazy val menuWidth: String = "--menu-width"

    /** The width of the page's "main" section. Default: 1fr */
    lazy val mainWidth: String = "--main-width"

    /** The wide of the page's "aside" section. Default: auto */
    lazy val asideWidth: String = "--aside-width"

    /** The height of the banner. This gets calculated when the page initializes. If the height is known, you can set it
      * here to prevent shifting when the page loads. Default: 0px
      */
    lazy val bannerHeight: String = "--banner-height"

    /** The height of the header. This gets calculated when the page initializes. If the height is known, you can set it
      * here to prevent shifting when the page loads. Default: 0px
      */
    lazy val headerHeight: String = "--header-height"

    /** The height of the subheader. This gets calculated when the page initializes. If the height is known, you can set
      * it here to prevent shifting when the page loads. Default: 0px
      */
    lazy val subheaderHeight: String = "--subheader-height"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The component's base wrapper. */
    lazy val base: String = "base"

    /** The banner to show above header. */
    lazy val banner: String = "banner"

    /** The header, usually for top level navigation / branding. */
    lazy val header: String = "header"

    /** Shown below the header, usually intended for things like breadcrumbs and other page level navigation. */
    lazy val subheader: String = "subheader"

    /** The wrapper around menu, main, and aside. */
    lazy val body: String = "body"

    /** The left hand side of the page. Generally intended for navigation. */
    lazy val menu: String = "menu"

    /** The `<nav>` that wraps the navigation slots on desktop viewports. */
    lazy val navigation: String = "navigation"

    /** The header for a navigation area. On mobile this will be the header for `<wa-drawer>`. */
    lazy val navigationHeader: String = "navigation-header"

    /** The footer for a navigation area. On mobile this will be the footer for `<wa-drawer>`. */
    lazy val navigationFooter: String = "navigation-footer"

    /** The default `<wa-button>` that will toggle the `<wa-drawer>` for mobile viewports. */
    lazy val navigationToggle: String = "navigation-toggle"

    /** The default `<wa-icon>` displayed inside of the navigation-toggle button. */
    lazy val navigationToggleIcon: String = "navigation-toggle-icon"

    /** The header above main content. */
    lazy val mainHeader: String = "main-header"

    /** The main content. */
    lazy val mainContent: String = "main-content"

    /** The footer below main content. */
    lazy val mainFooter: String = "main-footer"

    /** The right hand side of the page. Used for things like table of contents, ads, etc. */
    lazy val aside: String = "aside"

    /** Wrapper around skip-link */
    lazy val skipLinks: String = "skip-links"

    /** The "skip to main content" link */
    lazy val skipLink: String = "skip-link"

    /** The footer of the page. This is always below the initial viewport size. */
    lazy val footer: String = "footer"

    /** A wrapper around elements such as dialogs or other modal-like elements. */
    lazy val dialogWrapper: String = "dialog-wrapper"

  }

  // -- Element type --

  @js.native
  trait WaPageComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The view is a reflection of the "mobileBreakpoint", when the page is larger than the `mobile-breakpoint` (768px
      * by default), it is considered to be a "desktop" view. The view is merely a way to distinguish when to show/hide
      * the navigation. You can use additional media queries to make other adjustments to content as necessary. The
      * default is "desktop" because the "mobile navigation drawer" isn't accessible via SSR due to drawer requiring JS.
      * Valid values: "mobile", "desktop".
      */
    var view: PageView

    /** Whether or not the navigation drawer is open. Note, the navigation drawer is only "open" on mobile views. */
    var navOpen: Boolean

    /** At what page width to hide the "navigation" slot and collapse into a hamburger button. Accepts both numbers
      * (interpreted as px) and CSS lengths (e.g. `50em`), which are resolved based on the root element.
      */
    var mobileBreakpoint: String

    /** Where to place the navigation when in the mobile viewport. Valid values: "start", "end". */
    var navigationPlacement: IconPosition

    /** Determines whether or not to hide the default hamburger button. This will automatically flip to "true" if you
      * add an element with `data-toggle-nav` anywhere in the element light DOM. Generally this will be set for you and
      * you don't need to do anything, unless you're using SSR, in which case you should set this manually for initial
      * page loads.
      */
    var disableNavigationToggle: Boolean

    /** Shows the mobile navigation drawer */
    def showNavigation(): js.Any = js.native

    /** Hides the mobile navigation drawer */
    def hideNavigation(): js.Any = js.native

    /** Toggles the mobile navigation drawer */
    def toggleNavigation(): js.Any = js.native

  }
}
