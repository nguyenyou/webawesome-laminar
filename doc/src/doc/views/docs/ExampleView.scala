package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.libs.scalawind.*

trait ExampleView(
    val name: String,
    val ui5Link: Option[String] = None,
    val designLink: Option[String] = None
) {
  def component: HtmlElement

  def apply(): HtmlElement = {
    div(
      tw.p2,
      h1(
        tw.text2xl.fontBold.mb5.mt0.flex.itemsEnd.gap1,
        name
      ),
      h2(
        tw.fontSemibold.textXl,
        "Usage"
      ),
      div(
        component
      ),
      h2(
        tw.fontSemibold.textXl,
        "References"
      ),
      div(
      )
    )
  }

}
