package doc.components

import com.raquo.laminar.api.L.*

trait UILayoutComponent extends Locator {
  def render(children: HtmlElement*): HtmlElement

  def apply(children: HtmlElement*): HtmlElement = {
    locatorModifiers(render(children*))
  }

}
