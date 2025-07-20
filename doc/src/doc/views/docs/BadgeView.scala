package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import doc.components.Locator.withLocator

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
