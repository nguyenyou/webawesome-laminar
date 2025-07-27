package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class ProgressRingView()
    extends ExampleView(
      "Progress Ring",
      Some("https://webawesome.com/docs/components/progress-ring/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        ProgressRing(_.value := "25")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
