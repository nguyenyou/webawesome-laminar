package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class SelectView()
    extends ExampleView(
      "Select",
      Some("https://webawesome.com/docs/components/select/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Select, UOption}

        Select()(
          UOption(_.value := "")("Option 1"),
          UOption(_.value := "option-2")("Option 2"),
          UOption(_.value := "option-3")("Option 3"),
          UOption(_.value := "option-4")("Option 4"),
          UOption(_.value := "option-5")("Option 5"),
          UOption(_.value := "option-6")("Option 6")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
