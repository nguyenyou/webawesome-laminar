package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class TooltipView()
    extends ExampleView(
      "Tooltip",
      Some("https://webawesome.com/docs/components/tooltip/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Tooltip, Button}

        div(
          Tooltip(
            _.forId := "tooltip-trigger"
          )("This is a tooltip"),
          Button(
            _.id := "tooltip-trigger"
          )("Hover Me")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
