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
              _.placement := "top-start"
            )("top-start"),
            Tooltip(
              _.forId     := "tooltip-top",
              _.placement := "top"
            )("top"),
            Tooltip(
              _.forId     := "tooltip-top-end",
              _.placement := "top-end"
            )("top-end"),
            Tooltip(
              _.forId     := "tooltip-left-start",
              _.placement := "left-start"
            )("left-start"),
            Tooltip(
              _.forId     := "tooltip-right-start",
              _.placement := "right-start"
            )("right-start"),
            Tooltip(
              _.forId     := "tooltip-left",
              _.placement := "left"
            )("left"),
            Tooltip(
              _.forId     := "tooltip-right",
              _.placement := "right"
            )("right"),
            Tooltip(
              _.forId     := "tooltip-left-end",
              _.placement := "left-end"
            )("left-end"),
            Tooltip(
              _.forId     := "tooltip-right-end",
              _.placement := "right-end"
            )("right-end"),
            Tooltip(
              _.forId     := "tooltip-bottom-start",
              _.placement := "bottom-start"
            )("bottom-start"),
            Tooltip(
              _.forId     := "tooltip-bottom",
              _.placement := "bottom"
            )("bottom"),
            Tooltip(
              _.forId     := "tooltip-bottom-end",
              _.placement := "bottom-end"
            )("bottom-end")
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
      )().withLocator
    )
  }

}
