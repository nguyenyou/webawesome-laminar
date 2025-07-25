package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import org.scalajs.dom.window

case class DialogView()
    extends ExampleView(
      "Dialog",
      Some("https://webawesome.com/docs/components/dialog/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
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
          Button()(
            onClick.mapTo(true) --> openEvent,
            "Open Dialog"
          )
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
            Button()(
              onClick.mapTo(true) --> openEvent,
              "Open Dialog"
            )
          )
        }
      )(),

      // Dialog with Footer
      Demo(
        title = "Dialog with Footer",
        description =
          "Footers can be used to display titles and more. Use the footer slot to add a footer to the dialog.",
        content = Source.annotate {
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
            Button()(
              onClick.mapTo(true) --> openEvent,
              "Open Dialog"
            )
          )
        }
      )(),
      Demo(
        title = "Opening and Closing Dialogs Declaratively",
        description = """
        | You can open and close dialogs with JavaScript by toggling the `open` attribute, but you can also do it declaratively. Add the `data-dialog="open id"` to any button on the page, where `id` is the ID of the dialog you want to open.
        """.stripMargin,
        content = Source.annotate {
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
      )(),
      Demo(
        title = "Scrolling",
        description = """
        | By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.
        """.stripMargin,
        content = Source.annotate {
          div(
            Dialog(
              _.id    := "dialog-scrolling",
              _.label := "Dialog",
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )(
              div(
                height.vh(150),
                border  := "1px dashed var(--wa-color-surface-border)",
                padding := "0 1rem",
                p(
                  "Scroll down and give it a try! 👇"
                )
              )
            ),
            Button(
              _.dialog("dialog-scrolling")
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        title = "Header Actions",
        description = """
        | The header shows a functional close button by default. You can use the `header-actions` slot to add additional [buttons](/docs/components/button) if needed.
        """.stripMargin,
        content = Source.annotate {
          div(
            Dialog(
              _.id    := "dialog-header-actions",
              _.label := "Dialog",
              _.slots.headerActions(
                Button(
                  _.appearance := "plain"
                )(
                  onClick --> Observer { _ =>
                    window.open(window.location.href)
                  },
                  Icon(
                    _.name  := "arrow-up-right-from-square",
                    _.label := "Open in new window"
                  )()
                )
              ),
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ),
            Button(
              _.dialog("dialog-header-actions")
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        title = "Light Dismissal",
        description = """
        | If you want the dialog to close when the user clicks on the overlay, add the `light-dismiss` attribute.
        """.stripMargin,
        content = Source.annotate {
          div(
            Dialog(
              _.id           := "dialog-light-dismiss",
              _.label        := "Dialog",
              _.lightDismiss := true, // [!code highlight]
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.dialog("dialog-light-dismiss")
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        title = "Preventing the Dialog from Closing",
        description = """
        | By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.
        |
        | To keep the dialog open in such cases, you can cancel the `wa-hide` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.
        |
        | You can use `event.detail.source` to determine which element triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it.
        """.stripMargin,
        content = Source.annotate {

          val closeDialogButton = Button(
            _.variant := "brand",
            _.closeDialog
          )("Only this button will close it")

          div(
            Dialog(
              _.id    := "dialog-deny-close",
              _.label := "Dialog",
              _.onHide.map { event =>
                if (event.detail.source != closeDialogButton.ref) {
                  event.preventDefault()
                }
              } --> Observer.empty,
              _.slots.footer(
                closeDialogButton
              )
            )("This dialog will only close when you click the button below."),
            Button(
              _.dialog("dialog-deny-close")
            )("Open Dialog")
          )
        }
      )(),
      Demo(
        title = "Setting Initial Focus",
        description = """
        | To give focus to a specific element when the dialog opens, use the `autofocus` attribute.
        """.stripMargin,
        content = Source.annotate {
          div(
            Dialog(
              _.id    := "dialog-focus",
              _.label := "Dialog",
              _.slots.footer(
                Button(
                  _.variant := "brand",
                  _.closeDialog
                )("Close")
              )
            )(
              Input(
                _.autofocus   := true, // [!code highlight]
                _.placeholder := "I will have focus when the dialog is opened"
              )()
            ),
            Button(
              _.dialog("dialog-focus")
            )("Open Dialog")
          )
        }
      )()
    )
  }
}
