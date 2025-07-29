package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class TooltipView()
    extends ExampleView(
      "Tooltip",
      Some("https://webawesome.com/docs/components/tooltip/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
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
      Demo(
        title = "Placement",
        description = "Use the `placement` attribute to set the preferred placement of the tooltip.",
        content = Source.annotate {
          div(
            styleTag("""
            .tooltip-placement-example {
              width: 250px;
              margin: 1rem;
            }

            .tooltip-placement-example wa-button {
              width: 2.5rem;
            }

            .tooltip-placement-example-row {
              display: flex;
              justify-content: space-between;
              gap: 0.5rem;
              margin-bottom: 0.5rem;
            }

            .tooltip-placement-example-row:nth-child(1),
            .tooltip-placement-example-row:nth-child(5) {
              justify-content: center;
            }""".stripMargin),
            // <show> 
            div(
              cls("tooltip-placement-example"),
              div(
                cls("tooltip-placement-example-row"),
                Button(
                  _.id := "tooltip-top-start"
                )(),
                Button(
                  _.id := "tooltip-top"
                )(),
                Button(
                  _.id := "tooltip-top-end"
                )()
              ),
              div(
                cls("tooltip-placement-example-row"),
                Button(
                  _.id := "tooltip-left-start"
                )(),
                Button(
                  _.id := "tooltip-right-start"
                )()
              ),
              div(
                cls("tooltip-placement-example-row"),
                Button(
                  _.id := "tooltip-left"
                )(),
                Button(
                  _.id := "tooltip-right"
                )()
              ),
              div(
                cls("tooltip-placement-example-row"),
                Button(
                  _.id := "tooltip-left-end"
                )(),
                Button(
                  _.id := "tooltip-right-end"
                )()
              ),
              div(
                cls("tooltip-placement-example-row"),
                Button(
                  _.id := "tooltip-bottom-start"
                )(),
                Button(
                  _.id := "tooltip-bottom"
                )(),
                Button(
                  _.id := "tooltip-bottom-end"
                )()
              )
            ),
            Tooltip(
              _.forId     := "tooltip-top-start",
              _.placement.topStart
            )("top-start"),
            Tooltip(
              _.forId     := "tooltip-top",
              _.placement.top
            )("top"),
            Tooltip(
              _.forId     := "tooltip-top-end",
              _.placement.topEnd
            )("top-end"),
            Tooltip(
              _.forId     := "tooltip-left-start",
              _.placement.leftStart
            )("left-start"),
            Tooltip(
              _.forId     := "tooltip-right-start",
              _.placement.rightStart
            )("right-start"),
            Tooltip(
              _.forId     := "tooltip-left",
              _.placement.left
            )("left"),
            Tooltip(
              _.forId     := "tooltip-right",
              _.placement.right
            )("right"),
            Tooltip(
              _.forId     := "tooltip-left-end",
              _.placement.leftEnd
            )("left-end"),
            Tooltip(
              _.forId     := "tooltip-right-end",
              _.placement.rightEnd
            )("right-end"),
            Tooltip(
              _.forId     := "tooltip-bottom-start",
              _.placement.bottomStart
            )("bottom-start"),
            Tooltip(
              _.forId     := "tooltip-bottom",
              _.placement.bottom
            )("bottom"),
            Tooltip(
              _.forId     := "tooltip-bottom-end",
              _.placement.bottomEnd
            )("bottom-end")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Click Trigger",
        description = "Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.",
        content = Source.annotate {
          div(
            Tooltip(
              _.forId   := "toggle-button",
              _.trigger := "click"
            )("Click to Toggle"),
            Button(
              _.id := "toggle-button"
            )("Hover Me")
          )
        }
      )().withLocator,
      Demo(
        title = "Manual Trigger",
        description =
          "Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.",
        content = Source.annotate {
          val openVar = Var(false)
          div(
            Button(
            )(
              onClick --> Observer { _ =>
                openVar.update(!_)
              },
              marginRight.rem(4),
              "Toggle Manually"
            ),
            Tooltip(
              _.open <-- openVar,
              _.forId   := "manual-trigger-tooltip",
              _.trigger := "manual"
            )("This is an avatar!"),
            Avatar(
              _.id := "manual-trigger-tooltip"
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Removing Arrows",
        description =
          "You can control the size of tooltip arrows by overriding the `--wa-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.",
        content = Source.annotate {
          div(
            Tooltip(
              _.forId := "no-arrow",
              _.style := "--wa-tooltip-arrow-size: 0;"
            )("This is a tooltip with no arrow"),
            Button(
              _.id := "no-arrow"
            )("No Arrow")
          )
        }
      )().withLocator,
      Demo(
        title = "HTML in Tooltips",
        description =
          "Use the default slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.",
        content = Source.annotate {
          div(
            Tooltip(
              _.forId := "rich-tooltip",
              _.style := "--wa-tooltip-arrow-size: 0;"
            )(
              div(
                "I'm not ",
                strong("just"),
                " a tooltip, I'm a ",
                em("tooltip"),
                " with HTML!"
              )
            ),
            Button(
              _.id := "rich-tooltip"
            )("Hover me")
          )
        }
      )().withLocator,
      Demo(
        title = "Setting a Maximum Width",
        description =
          "Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.",
        content = Source.annotate {
          div(
            Tooltip(
              _.forId := "wrapping-tooltip",
              _.style := "--max-width: 80px;"
            )(
              "This tooltip will wrap after only 80 pixels."
            ),
            Button(
              _.id := "wrapping-tooltip"
            )("Hover me")
          )
        }
      )().withLocator
    )
  }

}
