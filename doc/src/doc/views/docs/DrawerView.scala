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
                border := "2px dashed var(--wa-color-surface-border)",
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
      )().withLocator
    )
  }

}
