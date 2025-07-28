package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class SplitPanelView()
    extends ExampleView(
      "Split Panel",
      Some("https://webawesome.com/docs/components/split-panel/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        SplitPanel(
          _.slots.start(
            div(
              height.px(200),
              background := "var(--wa-color-surface-lowered)",
              tw.flex.itemsCenter.justifyCenter.overflowHidden,
              "Start"
            )
          ),
          _.slots.end(
            div(
              height.px(200),
              background := "var(--wa-color-surface-lowered)",
              tw.flex.itemsCenter.justifyCenter.overflowHidden,
              "End"
            )
          )
        )()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Initial Position",
        description =
          "To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.",
        content = Source.annotate {
          SplitPanel(
            _.position := 75,
            _.slots.start(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "End"
              )
            )
          )()
        }
      )().withLocator,
      Demo(
        title = "Initial Position in Pixels",
        description =
          "To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.",
        content = Source.annotate {
          SplitPanel(
            _.positionInPixels := 150,
            _.slots.start(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "End"
              )
            )
          )()
        }
      )().withLocator,
      Demo(
        title = "Orientation",
        description =
          "Set the `orientation` attribute to `vertical` and provide a height to render the split panel in a vertical orientation where the start and end panels are stacked.",
        content = Source.annotate {
          SplitPanel(
            _.orientation.vertical,
            _.style := "height: 400px;",
            _.slots.start(
              div(
                background := "var(--wa-color-surface-lowered)",
                tw.hFull.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                background := "var(--wa-color-surface-lowered)",
                tw.hFull.flex.itemsCenter.justifyCenter.overflowHidden,
                "End"
              )
            )
          )()
        }
      )().withLocator,
      Demo(
        title = "Snapping",
        description =
          "To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap=\"100px 50%\"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.",
        content = Source.annotate {
          div(
            cls("split-panel-snapping"),
            styleTag("""
            .split-panel-snapping {
              position: relative;
            }

            .split-panel-snapping-dots::before,
            .split-panel-snapping-dots::after {
              content: '';
              position: absolute;
              bottom: -12px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: var(--wa-color-neutral-fill-loud);
              transform: translateX(-3px);
            }

            .split-panel-snapping-dots::before {
              left: 100px;
            }

            .split-panel-snapping-dots::after {
              left: 50%;
            }
            """),
            SplitPanel(
              _.snap := "100px 50%",
              _.slots.start(
                div(
                  height.px(200),
                  background := "var(--wa-color-surface-lowered)",
                  tw.flex.itemsCenter.justifyCenter.overflowHidden,
                  "Start"
                )
              ),
              _.slots.end(
                div(
                  height.px(200),
                  background := "var(--wa-color-surface-lowered)",
                  tw.flex.itemsCenter.justifyCenter.overflowHidden,
                  "End"
                )
              )
            )(),
            div(cls("split-panel-snapping-dots"))
          )
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Add the `disabled` attribute to prevent the divider from being repositioned.",
        content = Source.annotate {
          SplitPanel(
            _.disabled := true,
            _.slots.start(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "End"
              )
            )
          )()
        }
      )().withLocator,
      Demo(
        title = "Min & Max",
        description = """
        |To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.
        |
        |This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.
        |""".stripMargin,
        content = Source.annotate {
          SplitPanel(
            _.style := "--min: 150px; --max: calc(100% - 150px);",
            _.slots.start(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "End"
              )
            )
          )()
        }
      )().withLocator,
      Demo(
        title = "Nested Split Panels",
        description = """
        |Create complex layouts that can be repositioned independently by nesting split panels.
        |""".stripMargin,
        content = Source.annotate {
          SplitPanel(
            _.slots.start(
              div(
                height.px(400),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                SplitPanel(
                  _.orientation.vertical,
                  _.style := "height: 400px;",
                  _.slots.start(
                    div(
                      background := "var(--wa-color-surface-lowered)",
                      tw.hFull.flex.itemsCenter.justifyCenter.overflowHidden,
                      "Top"
                    )
                  ),
                  _.slots.end(
                    div(
                      background := "var(--wa-color-surface-lowered)",
                      tw.hFull.flex.itemsCenter.justifyCenter.overflowHidden,
                      "Bottom"
                    )
                  )
                )()
              )
            )
          )()
        }
      )().withLocator,
      Demo(
        title = "Customizing the Divider",
        description = """
        |You can target the `divider` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the `divider` slot. When customizing the divider, make sure to think about focus styles for keyboard users.
        |""".stripMargin,
        content = Source.annotate {
          SplitPanel(
            _.style := "--divider-width: 20px;",
            _.slots.divider(
              Icon(
                _.name := "grip-vertical"
              )()
            ),
            _.slots.start(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "Start"
              )
            ),
            _.slots.end(
              div(
                height.px(200),
                background := "var(--wa-color-surface-lowered)",
                tw.flex.itemsCenter.justifyCenter.overflowHidden,
                "End"
              )
            )
          )(
          )
        }
      )().withLocator
    )
  }

}
