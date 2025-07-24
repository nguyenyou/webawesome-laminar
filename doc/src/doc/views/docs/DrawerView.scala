package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class DrawerView()
    extends ExampleView(
      "Drawer",
      Some("https://webawesome.com/docs/components/drawer/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Drawer, Button}

        val openVar = Var(false)

        div(
          Drawer(
            _.open <-- openVar.signal,
            _.label := "Drawer",
            _.slots.footer(
              Button(
                _.variant            := "brand",
                _.dataAttr("drawer") := "close"
              )("Close")
            )
          )(),
          Button(
            _.onClick.mapTo(true) --> openVar.writer
          )("Open Drawer")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
