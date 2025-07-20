package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import doc.components.Locator.withLocator

case class DialogView()
    extends ExampleView(
      "Dialog",
      Some("https://webawesome.com/docs/components/dialog/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Dialog, Button}
        val openVar = Var(false)
        div(
          Dialog(
            _.open <-- openVar.signal,
            _.label := "Dialog",
            _.slots.footer(
              Button(
                _.variant := "brand"
              )(
                dataAttr("dialog") := "close",
                "Close"
              )
            )
          )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
          Button(
            _.onClick.mapTo(true) --> openVar.writer,
          )(
            "Open Dialog"
          )
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
