package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class DrawerView()
    extends ExampleView(
      "Drawer",
      Some("https://webawesome.com/docs/components/drawer/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        val openEvent = EventBus[Boolean]()

        div(
          Drawer(
            _.open <-- openEvent,
            _.label := "Drawer",
            _.slots.footer(
              Button(
                _.variant := "brand",
                _.close.drawer
              )("Close")
            )
          )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
          Button()(
            onClick.mapTo(true) --> openEvent,
            "Open Drawer"
          )
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Drawer with Footer",
        description =
          "Footers can be used to display titles and more. Use the `footer` slot to add a footer to the drawer.",
        content = Source.annotate {
          val openEvent = EventBus[Boolean]()

          div(
            Drawer(
              _.open <-- openEvent,
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.close.drawer
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button()(
              onClick.mapTo(true) --> openEvent,
              "Open Drawer"
            )
          )
        }
      )().withLocator
    )
  }

}
