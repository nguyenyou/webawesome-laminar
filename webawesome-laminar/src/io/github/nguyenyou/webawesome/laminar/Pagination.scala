package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import io.github.nguyenyou.webawesome.laminar.events.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Pagination splits long lists of content into pages, letting users navigate between them.
  *
  * [[https://webawesome.com/docs/components/pagination WebAwesome docs]]
  */
object Pagination extends WebComponent("wa-pagination") {

  @JSImport("@awesome.me/webawesome/dist/components/pagination/pagination.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Pagination.type

  type Ref = WaPaginationComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the page is about to change but before it does. Canceling this event with `event.preventDefault()`
    * prevents the page from changing.
    */
  lazy val onBeforePageChange: EventProp[CustomEvent[Ref] & EventDetail[WaBeforePageChangeEvent]] = eventProp(
    "wa-before-page-change"
  )

  /** Emitted after the page changes. */
  lazy val onPageChange: EventProp[CustomEvent[Ref] & EventDetail[WaPageChangeEvent]] = eventProp("wa-page-change")

  // -- Attributes --

  /** The total number of items to paginate. */
  lazy val total: HtmlAttr[Double] = doubleAttr("total")

  /** The number of items shown per page. */
  lazy val pageSize: HtmlAttr[Double] = doubleAttr("page-size")

  /** The current page, starting at 1. */
  lazy val page: HtmlAttr[Double] = doubleAttr("page")

  /** The number of pages to show on each side of the current page. */
  lazy val siblingCount: HtmlAttr[Double] = doubleAttr("sibling-count")

  /** The number of pages to always show at the start and end. */
  lazy val boundaryCount: HtmlAttr[Double] = doubleAttr("boundary-count")

  /** Hides the previous and next buttons. */
  lazy val withoutNav: HtmlAttr[Boolean] = boolAttr("without-nav")

  /** Shows buttons that jump to the first and last pages. */
  lazy val withEdges: HtmlAttr[Boolean] = boolAttr("with-edges")

  /** Shows a summary of the items on the current page, e.g. "1–10 of 237". */
  lazy val withSummary: HtmlAttr[Boolean] = boolAttr("with-summary")

  /** The pagination's layout. The default `standard` format shows the full page list with ellipses; `compact` collapses
    * it into a short "1 of 5" label flanked by the previous and next buttons, useful in tight spaces like toolbars and
    * cards. Valid values: "standard", "compact".
    */
  lazy val format: CommonKeys.PaginationFormat.type = CommonKeys.PaginationFormat

  /** A URL template used to render page items as links instead of buttons. When set, items render as `<a>` elements for
    * SSR, SEO, and no-JS support. Provide a string with `{page}` as a placeholder for the page number, e.g.
    * `/products?page={page}`. In JavaScript, you can also assign a function that receives the page number and returns
    * the URL, e.g. `el.hrefTemplate = page => \`/products?page=${page}\``.
    */
  lazy val hrefTemplate: HtmlAttr[String] = stringAttr("href-template")

  lazy val hrefTemplateProp: HtmlProp[String | js.Function1[Double, String], ?] = asIsProp("hrefTemplate")

  /** Renders nothing when there's only one page. */
  lazy val hideSinglePage: HtmlAttr[Boolean] = boolAttr("hide-single-page")

  /** A label that describes the pagination to assistive devices. This won't be shown on the screen, but it will be
    * announced by screen readers. Especially useful when more than one pagination control exists on the same page.
    */
  lazy val label: HtmlAttr[String] = stringAttr("label")

  /** The pagination's visual appearance. Valid values: "outlined", "filled", "plain". */
  lazy val appearance: CommonKeys.PaginationAppearance.type = CommonKeys.PaginationAppearance

  /** Disables the pagination. */
  lazy val disabled: HtmlAttr[Boolean] = boolAttr("disabled")

  lazy val dir: HtmlAttr[String] = stringAttr("dir")

  lazy val lang: HtmlAttr[String] = stringAttr("lang")

  lazy val didSSR: HtmlAttr[String] = stringAttr("did-ssr")

  // -- Slots --

  object slots {

    /** An icon to use in lieu of the default previous icon. */
    lazy val previousIcon: Slot = Slot("previous-icon")

    /** An icon to use in lieu of the default next icon. */
    lazy val nextIcon: Slot = Slot("next-icon")

    /** An icon to use in lieu of the default first icon. */
    lazy val firstIcon: Slot = Slot("first-icon")

    /** An icon to use in lieu of the default last icon. */
    lazy val lastIcon: Slot = Slot("last-icon")

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** Deprecated. Use the `pagination` part instead. */
    lazy val base: String = "base"

    /** The component's outer wrapper, a `<nav>` element. */
    lazy val pagination: String = "pagination"

    /** Every button or link, including page numbers and navigation controls. */
    lazy val button: String = "button"

    /** The previous button. */
    lazy val previousButton: String = "previous-button"

    /** The next button. */
    lazy val nextButton: String = "next-button"

    /** The first button. */
    lazy val firstButton: String = "first-button"

    /** The last button. */
    lazy val lastButton: String = "last-button"

    /** The list that wraps the page number items. */
    lazy val pages: String = "pages"

    /** A page number button or link. */
    lazy val page: String = "page"

    /** The current page number button or link. */
    lazy val pageCurrent: String = "page-current"

    /** An ellipsis for collapsed pages. Acts as a button that jumps several pages toward that side. */
    lazy val ellipsis: String = "ellipsis"

    /** The summary of items on the current page, shown with the `with-summary` attribute. */
    lazy val summary: String = "summary"

    /** The "1 of 5" label shown between the navigation buttons in the `compact` layout. */
    lazy val label: String = "label"

  }

  // -- Element type --

  @js.native
  trait WaPaginationComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The total number of items to paginate. */
    var total: Double

    /** The number of items shown per page. */
    var pageSize: Double

    /** The current page, starting at 1. */
    var page: Double

    /** The number of pages to show on each side of the current page. */
    var siblingCount: Double

    /** The number of pages to always show at the start and end. */
    var boundaryCount: Double

    /** Hides the previous and next buttons. */
    var withoutNav: Boolean

    /** Shows buttons that jump to the first and last pages. */
    var withEdges: Boolean

    /** Shows a summary of the items on the current page, e.g. "1–10 of 237". */
    var withSummary: Boolean

    /** The pagination's layout. The default `standard` format shows the full page list with ellipses; `compact`
      * collapses it into a short "1 of 5" label flanked by the previous and next buttons, useful in tight spaces like
      * toolbars and cards. Valid values: "standard", "compact".
      */
    var format: PaginationFormat

    /** A URL template used to render page items as links instead of buttons. When set, items render as `<a>` elements
      * for SSR, SEO, and no-JS support. Provide a string with `{page}` as a placeholder for the page number, e.g.
      * `/products?page={page}`. In JavaScript, you can also assign a function that receives the page number and returns
      * the URL, e.g. `el.hrefTemplate = page => \`/products?page=${page}\``.
      */
    var hrefTemplate: String | js.Function1[Double, String]

    /** Renders nothing when there's only one page. */
    var hideSinglePage: Boolean

    /** A label that describes the pagination to assistive devices. This won't be shown on the screen, but it will be
      * announced by screen readers. Especially useful when more than one pagination control exists on the same page.
      */
    var label: String

    /** The pagination's visual appearance. Valid values: "outlined", "filled", "plain". */
    var appearance: PaginationAppearance

    /** Disables the pagination. */
    var disabled: Boolean

    var dir: String

    var lang: String

    var didSSR: String

    def handleDisabledChange(): Unit = js.native

    def handlePageBoundsChange(): Unit = js.native

  }
}
