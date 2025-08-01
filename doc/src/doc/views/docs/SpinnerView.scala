package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
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
            tw.flex.gap2,
            // <show>
            Spinner()(),
            Spinner(
              _.style := "font-size: 2rem;"
            )(),
            Spinner(
              _.style := "font-size: 3rem;"
            )()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Track Width",
        description = "The width of the spinner's track can be changed by setting the `--track-width` custom property.",
        content = Source.annotate {
          Spinner(
            _.style := "font-size: 50px; --track-width: 10px;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Color",
        description =
          "The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.",
        content = Source.annotate {
          Spinner(
            _.style := "font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"
          )()
        }
      )().withLocator
    )
  }

}
