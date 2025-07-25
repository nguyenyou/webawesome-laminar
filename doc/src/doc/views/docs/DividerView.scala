package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class DividerView()
    extends ExampleView(
      "Divider",
      Some("https://webawesome.com/docs/components/divider/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Divider

        Divider()()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      // Width
      Demo(
        title = "Width",
        description = "Use the `--width` custom property to change the width of the divider.",
        content = Source.annotate {
          Divider()(
            styleAttr := "--width: 4px;" // [!code highlight]
          )
        }
      )(),

      // Color
      Demo(
        title = "Color",
        description = "Use the `--color` custom property to change the color of the divider.",
        content = Source.annotate {
          Divider()(
            styleAttr := "--color: tomato;" // [!code highlight]
          )
        }
      )(),

      // Spacing
      Demo(
        title = "Spacing",
        description =
          "Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.",
        content = Source.annotate {
          div(
            textAlign := "center",
            "Above",
            Divider()(
              styleAttr := "--spacing: 2rem;" // [!code highlight]
            ),
            "Below"
          )
        }
      )(),

      // Orientation
      Demo(
        title = "Orientation",
        description =
          "The default orientation for dividers is `horizontal`. Set `orientation` attribute to `vertical` to draw a vertical divider. The divider will span the full height of its container.",
        content = Source.annotate {
          div(
            display    := "flex",
            alignItems := "center",
            "First",
            Divider(
              _.orientation := "vertical" // [!code highlight]
            )(),
            "Middle",
            Divider(
              _.orientation := "vertical" // [!code highlight]
            )(),
            "Last"
          )
        }
      )(),

      // Menu Dividers
      Demo(
        title = "Menu Dividers",
        description = "Use dividers in menus to visually group menu items.",
        content = Source.annotate {
          Dropdown(
            _.slots.trigger(
              Button(
                _.withCaret := true
              )("Menu")
            )
          )(
            styleAttr := "max-width: 200px;", // [!code highlight]
            DropdownItem(
              _.value := "1"
            )("Option 1"),
            DropdownItem(
              _.value := "2"
            )("Option 2"),
            DropdownItem(
              _.value := "3"
            )("Option 3"),
            Divider()(), // [!code highlight]
            DropdownItem(
              _.value := "4"
            )("Option 4"),
            DropdownItem(
              _.value := "5"
            )("Option 5"),
            DropdownItem(
              _.value := "6"
            )("Option 6")
          )
        }
      )()
    )
  }
}
