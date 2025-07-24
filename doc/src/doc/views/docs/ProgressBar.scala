package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class ProgressBarView()
    extends ExampleView(
      "ProgressBar",
      Some("https://webawesome.com/docs/components/progress-bar/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        ProgressBar(_.value := "40")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
