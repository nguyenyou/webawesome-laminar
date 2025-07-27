package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import org.scalajs.dom.window

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
                _.variant.brand,
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
        title = "Drawer without Header",
        description =
          "Headers are enabled by default. To render a drawer without a header, add the `without-header` attribute.",
        content = Source.annotate {
          val openEvent = EventBus[Boolean]()

          div(
            Drawer(
              _.open <-- openEvent,
              _.label         := "Drawer",
              _.withoutHeader := true,
              _.slots.footer(
                Button(
                  _.variant.brand,
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
      )().withLocator,
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
      )().withLocator,
      Demo(
        title = "Opening and Closing Drawers Declaratively",
        description = """
          |You can open and close drawers with JavaScript by toggling the `open` attribute, but you can also do it declaratively. Add the `data-drawer="open id"` to any button on the page, where `id` is the ID of the drawer you want to open. 
          """.stripMargin,
        content = Source.annotate {

          div(
            Drawer(
              _.id    := "drawer-opening",
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.open.drawer("drawer-opening")
            )(
              "Open Drawer"
            )
          )
        }
      )().withLocator,
      Demo(
        description = """
          |Similarly, you can add `data-drawer="close"` to a button _inside_ of a drawer to tell it to close.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id    := "drawer-dismiss",
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            Button(
              _.open.drawer("drawer-dismiss")
            )(
              "Open Drawer"
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Slide in From Start",
        description = """
          |By default, drawers slide in from the end. To make the drawer slide in from the start, set the `placement` attribute to `start`.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id := "drawer-placement-start",
              _.placement.start,
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )("This drawer slides in from the start."),
            Button(
              _.open.drawer("drawer-placement-start")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Slide in From Top",
        description = """
          |To make the drawer slide in from the top, set the `placement` attribute to `top`.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id := "drawer-placement-top",
              _.placement.top,
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )("This drawer slides in from the top."),
            Button(
              _.open.drawer("drawer-placement-top")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Slide in From Bottom",
        description = """
          |To make the drawer slide in from the bottom, set the `placement` attribute to `bottom`.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id := "drawer-placement-bottom",
              _.placement.bottom,
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )("This drawer slides in from the bottom."),
            Button(
              _.open.drawer("drawer-placement-bottom")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Custom Size",
        description = """
          |Use the `--size` custom property to set the drawer's size. This will be applied to the drawer's width or height depending on its `placement`.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id    := "drawer-custom-size",
              _.label := "Drawer",
              _.style := "--size: 50%",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )(
              "This drawer is always 50% of the viewport."
            ),
            Button(
              _.open.drawer("drawer-custom-size")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Scrolling",
        description = """
          |By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id    := "drawer-scrolling",
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )(
              div(
                height.vh(150),
                border  := "2px dashed var(--wa-color-surface-border)",
                padding := "0 1rem",
                p(
                  "Scroll down and give it a try! 👇"
                )
              )
            ),
            Button(
              _.open.drawer("drawer-scrolling")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Header Actions",
        description = """
          |The header shows a functional close button by default. You can use the `header-actions` slot to add additional [buttons](/docs/components/button) if needed.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id    := "drawer-header-actions",
              _.label := "Drawer",
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
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ),
            Button(
              _.open.drawer("drawer-header-actions")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Light Dismissal",
        description = """
          |If you want the drawer to close when the user clicks on the overlay, add the `light-dismiss` attribute.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id           := "drawer-light-dismiss",
              _.lightDismiss := true,
              _.label        := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )("This drawer closes when the user clicks on the overlay."),
            Button(
              _.open.drawer("drawer-light-dismiss")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Preventing the Drawer from Closing",
        description = """
        | By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.
        |
        | To keep the drawer open in such cases, you can cancel the `wa-hide` event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.
        |
        | You can use `event.detail.source` to determine which element triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it.
        """.stripMargin,
        content = Source.annotate {

          val closeDrawerButton = Button(
            _.variant := "brand",
            _.close.drawer
          )("Only this button will close it")

          div(
            Drawer(
              _.id    := "drawer-deny-close",
              _.label := "Drawer",
              _.onHide.map { event =>
                if (event.detail.source != closeDrawerButton.ref) {
                  event.preventDefault()
                }
              } --> Observer.empty,
              _.slots.footer(
                closeDrawerButton
              )
            )("This drawer will only close when you click the button below."),
            Button(
              _.open.drawer("drawer-deny-close")
            )("Open Drawer")
          )
        }
      )().withLocator,
      Demo(
        title = "Setting Initial Focus",
        description = """
          |To give focus to a specific element when the drawer opens, use the `autofocus` attribute.
          """.stripMargin,
        content = Source.annotate {
          div(
            Drawer(
              _.id    := "drawer-autofocus",
              _.label := "Drawer",
              _.slots.footer(
                Button(
                  _.variant.brand,
                  _.close.drawer
                )("Close")
              )
            )(
              Input(
                _.autofocus   := true,
                _.placeholder := "I will have focus when the drawer is opened"
              )()
            ),
            Button(
              _.open.drawer("drawer-autofocus")
            )("Open Drawer")
          )
        }
      )().withLocator
    )
  }

}
