package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class IncludeView()
    extends ExampleView(
      "Include",
      Some("https://webawesome.com/docs/components/include/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        Include(
          _.src := "https://shoelace.style/assets/examples/include.html"
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
    )
  }
}
