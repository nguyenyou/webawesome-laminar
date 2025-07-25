package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

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
        val openEvent = EventBus[Boolean]()
        div(
          Dialog(
            _.open <-- openEvent,
            _.label := "Dialog",
            _.slots.footer(
              Button(
                _.variant := "brand",
                _.closeDialog
              )("Close")
            )
          )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
          Button(
            _.onClick.mapTo(true) --> openEvent
          )("Open Dialog")
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      // Dialog without Header
      Demo(
        title = "Dialog without Header",
        description =
          "Headers are enabled by default. To render a dialog without a header, add the without-header attribute.",
        content = Source.annotate {
          import io.github.nguyenyou.webawesome.laminar.{Dialog, Button}
          val openEvent = EventBus[Boolean]()
          div(
            Dialog(
              _.open <-- openEvent,
              _.label         := "Dialog",
              _.withoutHeader := true,
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.onClick.mapTo(true) --> openEvent
            )("Open Dialog")
          )
        }
      )(),

      // Dialog with Footer
      Demo(
        title = "Dialog with Footer",
        description =
          "Footers can be used to display titles and more. Use the footer slot to add a footer to the dialog.",
        content = Source.annotate {
          import io.github.nguyenyou.webawesome.laminar.{Dialog, Button}
          val openEvent = EventBus[Boolean]()
          div(
            Dialog(
              _.open <-- openEvent,
              _.label := "Dialog",
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.onClick.mapTo(true) --> openEvent
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        title = "Opening and Closing Dialogs Declaratively",
        description = """
        | You can open and close dialogs with JavaScript by toggling the `open` attribute, but you can also do it declaratively. Add the `data-dialog="open id"` to any button on the page, where `id` is the ID of the dialog you want to open.
        """.stripMargin,
        content = Source.annotate {
          import io.github.nguyenyou.webawesome.laminar.{Dialog, Button}
          div(
            Dialog(
              _.id    := "dialog-opening", // [!code highlight]
              _.label := "Dialog"
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.dialog("dialog-opening") // [!code highlight]
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        description = """
        | Similarly, you can add `_.closeDialog` to a button _inside_ of a dialog to tell it to close.
        """.stripMargin,
        content = Source.annotate {
          import io.github.nguyenyou.webawesome.laminar.{Dialog, Button}
          div(
            Dialog(
              _.id    := "dialog-dismiss", // [!code highlight]
              _.label := "Dialog",
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog // [!code highlight]
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.dialog("dialog-dismiss") // [!code highlight]
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        title = "Custom Width",
        description = """
        | Just use the `--width` custom property to set the dialog's width.
        """.stripMargin,
        content = Source.annotate {
          import io.github.nguyenyou.webawesome.laminar.{Dialog, Button}
          div(
            Dialog(
              _.id    := "dialog-custom-width",
              _.label := "Dialog",
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )(
              styleAttr := "--width: 50vw;", // [!code highlight]
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ),
            Button(
              _.dialog("dialog-custom-width")
            )("Open Dialog")
          )
        }
      )()
    )
  }
}
