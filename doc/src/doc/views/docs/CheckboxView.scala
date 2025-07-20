package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class CheckboxView()
    extends ExampleView(
      "Checkbox",
      Some("https://webawesome.com/docs/components/checkbox/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Checkbox

        Checkbox()("Checkbox")
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
