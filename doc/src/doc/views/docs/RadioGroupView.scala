package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class RadioGroupView()
    extends ExampleView(
      "RadioGroup",
      Some("https://webawesome.com/docs/components/radio-group/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        RadioGroup(_.label := "Select an option", _.name := "a", _.value := "1")(
          Radio(_.value := "1")("Option 1"),
          Radio(_.value := "2")("Option 2"),
          Radio(_.value := "3")("Option 3")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
