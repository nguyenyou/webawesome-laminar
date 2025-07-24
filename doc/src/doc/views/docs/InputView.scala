package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class InputView()
    extends ExampleView(
      "Input",
      Some("https://webawesome.com/docs/components/input/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        Input()()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
