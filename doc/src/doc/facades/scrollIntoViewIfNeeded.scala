package doc.facades

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

/** Scala.js facade for the scroll-into-view-if-needed library
  * @see
  *   https://github.com/stipsan/scroll-into-view-if-needed
  */
@js.native
@JSImport("scroll-into-view-if-needed", JSImport.Default)
object scrollIntoViewIfNeeded extends js.Object {

  /** Scrolls an element into view if needed
    *
    * @param element
    *   The element to scroll into view
    * @param options
    *   Optional configuration object
    */
  def apply(element: dom.Element, options: ScrollOptions = js.native): Unit = js.native
}

@js.native
trait ScrollOptions extends js.Object {

  /** Whether to scroll the element into view if needed Values: "if-needed", "always"
    */
  val scrollMode: js.UndefOr[String] = js.native

  /** Whether to scroll smoothly (true) or instantly (false)
    */
  val behavior: js.UndefOr[String] = js.native

  /** Defines which area of the element should be in view Values: "start", "center", "end", "nearest"
    */
  val block: js.UndefOr[String] = js.native

  /** Defines which area of the element should be in view Values: "start", "center", "end", "nearest"
    */
  val inline: js.UndefOr[String] = js.native

  /** Whether to check if element is already visible
    */
  val skipOverflowHiddenElements: js.UndefOr[Boolean] = js.native

  /** The boundary element for checking if scroll is needed
    */
  val boundary: js.UndefOr[dom.Element | js.Function0[Boolean]] = js.native
}

object ScrollOptions {

  def apply(
      scrollMode: js.UndefOr[String] = js.undefined,
      behavior: js.UndefOr[String] = js.undefined,
      block: js.UndefOr[String] = js.undefined,
      inline: js.UndefOr[String] = js.undefined,
      skipOverflowHiddenElements: js.UndefOr[Boolean] = js.undefined,
      boundary: js.UndefOr[dom.Element | js.Function0[Boolean]] = js.undefined
  ): ScrollOptions = {
    js.Dynamic
      .literal(
        scrollMode = scrollMode.asInstanceOf[js.Any],
        behavior = behavior.asInstanceOf[js.Any],
        block = block.asInstanceOf[js.Any],
        inline = inline.asInstanceOf[js.Any],
        skipOverflowHiddenElements = skipOverflowHiddenElements.asInstanceOf[js.Any],
        boundary = boundary.asInstanceOf[js.Any]
      )
      .asInstanceOf[ScrollOptions]
  }

  // Common scrollMode values as constants
  val IF_NEEDED = "if-needed"
  val ALWAYS    = "always"

  // Common behavior values as constants
  val SMOOTH = "smooth"
  val AUTO   = "auto"

  // Common block/inline position values as constants
  val START   = "start"
  val CENTER  = "center"
  val END     = "end"
  val NEAREST = "nearest"
}
