package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class DropdownView()
    extends ExampleView(
      "Dropdown",
      Some("https://webawesome.com/docs/components/dropdown/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Dropdown, DropdownItem, Button}

        Dropdown(
          _.onSelect.map { event =>
            println(event)
          } --> Observer.empty,
          _.slots.trigger(
            Button(_.withCaret := true)("View")
          )
        )(
          DropdownItem(_.value := "full-screen")("Enter full screen"),
          DropdownItem(_.value := "actual")("Actual size"),
          DropdownItem(_.value := "zoom-in")("Zoom in"),
          DropdownItem(_.value := "zoom-out")("Zoom out")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
