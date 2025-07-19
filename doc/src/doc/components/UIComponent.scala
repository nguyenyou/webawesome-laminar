package doc.components

import com.raquo.laminar.api.L.*

trait UIComponent extends Locator {

  def render(): HtmlElement

  def apply(): HtmlElement = {
    locatorModifiers(render())
  }

}
