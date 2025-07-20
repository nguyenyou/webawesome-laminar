package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class SwitchView()
    extends ExampleView(
      "Switch",
      Some("https://webawesome.com/docs/components/switch/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Switch

        Switch()("Switch")
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
