package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class BadgeView()
    extends ExampleView(
      "Badge",
      Some("https://webawesome.com/docs/components/badge/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Badge

        Badge()("Badge")
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
