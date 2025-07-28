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
        Spinner()()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Size",
        description =
          "Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.",
        content = Source.annotate {
          div(
            Spinner()(),
            Spinner(
              _.style := "font-size: 2rem;"
            )(),
            Spinner(
              _.style := "font-size: 3rem;"
            )()
          )
        }
      )().withLocator
    )
  }

}
