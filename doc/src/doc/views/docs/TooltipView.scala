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
          /*
          <div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <wa-button id="tooltip-top-start"></wa-button>
    <wa-button id="tooltip-top"></wa-button>
    <wa-button id="tooltip-top-end"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button id="tooltip-left-start"></wa-button>
    <wa-button id="tooltip-right-start"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button id="tooltip-left"></wa-button>
    <wa-button id="tooltip-right"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button id="tooltip-left-end"></wa-button>
    <wa-button id="tooltip-right-end"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button id="tooltip-bottom-start"></wa-button>
    <wa-button id="tooltip-bottom"></wa-button>
    <wa-button id="tooltip-bottom-end"></wa-button>
  </div>
</div>

<wa-tooltip for="tooltip-top-start" placement="top-start">top-start</wa-tooltip>
<wa-tooltip for="tooltip-top" placement="top">top</wa-tooltip>
<wa-tooltip for="tooltip-top-end" placement="top-end">top-end</wa-tooltip>
<wa-tooltip for="tooltip-left-start" placement="left-start">left-start</wa-tooltip>
<wa-tooltip for="tooltip-right-start" placement="right-start">right-start</wa-tooltip>
<wa-tooltip for="tooltip-left" placement="left">left</wa-tooltip>
<wa-tooltip for="tooltip-right" placement="right">right</wa-tooltip>
<wa-tooltip for="tooltip-left-end" placement="left-end">left-end</wa-tooltip>
<wa-tooltip for="tooltip-right-end" placement="right-end">right-end</wa-tooltip>
<wa-tooltip for="tooltip-bottom-start" placement="bottom-start">bottom-start</wa-tooltip>
<wa-tooltip for="tooltip-bottom" placement="bottom">bottom</wa-tooltip>
<wa-tooltip for="tooltip-bottom-end" placement="bottom-end">bottom-end</wa-tooltip>
           */
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
              _.forId := "tooltip-top-start",
              _.placement := "top-start"
            )("top-start"),
            Tooltip(
              _.forId := "tooltip-top",
              _.placement := "top"
            )("top"),
            Tooltip(
              _.forId := "tooltip-top-end",
              _.placement := "top-end"
            )("top-end"),
            Tooltip(
              _.forId := "tooltip-left-start",
              _.placement := "left-start"
            )("left-start"),
            Tooltip(
              _.forId := "tooltip-right-start",
              _.placement := "right-start"
            )("right-start"),
            Tooltip(
              _.forId := "tooltip-left",
              _.placement := "left"
            )("left"),
            Tooltip(
              _.forId := "tooltip-right",
              _.placement := "right"
            )("right"),
            Tooltip(
              _.forId := "tooltip-left-end",
              _.placement := "left-end"
            )("left-end"),
            Tooltip(
              _.forId := "tooltip-right-end",
              _.placement := "right-end"
            )("right-end"),
            Tooltip(
              _.forId := "tooltip-bottom-start",
              _.placement := "bottom-start"
            )("bottom-start"),
            Tooltip(
              _.forId := "tooltip-bottom",
              _.placement := "bottom"
            )("bottom"),
            Tooltip(
              _.forId := "tooltip-bottom-end",
              _.placement := "bottom-end"
            )("bottom-end")
          )
        }
      )().withLocator
    )
  }

}
