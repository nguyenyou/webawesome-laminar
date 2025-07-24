package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class DividerView()
    extends ExampleView(
      "Divider",
      Some("https://webawesome.com/docs/components/divider/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        Divider()()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
