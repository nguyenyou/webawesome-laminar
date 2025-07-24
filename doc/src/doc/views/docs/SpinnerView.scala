package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class SpinnerView()
    extends ExampleView(
      "Spinner",
      Some("https://webawesome.com/docs/components/spinner/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        Spinner()()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
