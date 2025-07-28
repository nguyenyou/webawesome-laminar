package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.components.Markdown
import doc.libs.scalawind.*

case class SliderView()
    extends ExampleView(
      "Slider",
      Some("https://webawesome.com/docs/components/slider/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        val valueVar = Var(3.0)

        Slider(
          _.label := "Number of cats",
          _.hint  := "Limit six per household",
          _.name  := "value",
          _.controlled(
            _.value <-- valueVar.signal.map(_.toString),
            _.onInput.map(_.target.value) --> valueVar
          ),
          _.min         := 0,
          _.max         := 6,
          _.withMarkers := true,
          _.withTooltip := true,
          _.slots.reference(span("Less")),
          _.slots.reference(span("More"))
        )()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Labels",
        description =
          "Use the `label` attribute to give the slider an accessible label. For labels that contain HTML, use the `label` slot instead.",
        content = Source.annotate {
          Slider(
            _.label := "Volumn",
            _.min   := 0,
            _.max   := 100
          )()
        }
      )().withLocator,
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to a slider with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          Slider(
            _.label := "Volumn",
            _.hint  := "Controls the volume of the current song.",
            _.min   := 0,
            _.max   := 100,
            _.value := "50"
          )()
        }
      )().withLocator,
      Demo(
        title = "Showing tooltips",
        description =
          "Use the `with-tooltip` attribute to display a tooltip with the current value when the slider is focused or being dragged.",
        content = Source.annotate {
          Slider(
            _.label       := "Quality",
            _.name        := "quality",
            _.withTooltip := true,
            _.hint        := "Controls the volume of the current song.",
            _.min         := 0,
            _.max         := 100,
            _.value       := "50"
          )()
        }
      )().withLocator,
      Demo(
        title = "Setting min, max, and step",
        description =
          "Use the `min` and `max` attributes to define the slider's range, and the `step` attribute to control the increment between values.",
        content = Source.annotate {
          Slider(
            _.label       := "Between zero and one",
            _.hint        := "Controls the volume of the current song.",
            _.withTooltip := true,
            _.min         := 0,
            _.max         := 1,
            _.step        := 0.1,
            _.value       := "0.5"
          )()
        }
      )().withLocator,
      Demo(
        title = "Showing markers",
        description =
          "Use the `with-markers` attribute to display visual indicators at each step increment. This works best with sliders that have a smaller range of values.",
        content = Source.annotate {
          Slider(
            _.label       := "Size",
            _.name        := "size",
            _.withMarkers := true,
            _.min         := 0,
            _.max         := 8,
            _.value       := "4"
          )()
        }
      )().withLocator,
      Demo(
        title = "Adding references",
        description =
          "Use the `reference` slot to add contextual labels below the slider. References are automatically spaced using `space-between`, making them easy to align with the start, center, and end positions.",
        content = Source.annotate {
          Slider(
            _.label       := "Speed",
            _.name        := "speed",
            _.withMarkers := true,
            _.min         := 1,
            _.max         := 5,
            _.value       := "3",
            _.hint        := "Controls the speed of the thing you're currently doing.",
            _.slots.reference(span("Slow")),
            _.slots.reference(span("Medium")),
            _.slots.reference(span("Fast"))
          )()
        }
      )().withLocator,
      Callout(
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        Markdown(
          "If you want to show a reference next to a specific marker, you can add `position: absolute` to it and set the `left`, `right`, `top`, or `bottom` property to a percentage that corresponds to the marker's position."
        )()
      ),
      Demo(
        title = "Vertical Sliders",
        description =
          "Set the `orientation` attribute to `vertical` to create a vertical slider. Vertical sliders automatically center themselves and fill the available vertical space.",
        content = Source.annotate {
          div(
            tw.flex.gap4,
            Slider(
              _.label := "Volume",
              _.name  := "volume",
              _.orientation.vertical,
              _.value := "65",
              _.style := "width: 80px"
            )(),
            Slider(
              _.label := "Bass",
              _.name  := "bass",
              _.value := "50",
              _.orientation.vertical,
              _.style := "width: 80px"
            )(),
            Slider(
              _.label := "Treble",
              _.name  := "treble",
              _.value := "40",
              _.orientation.vertical,
              _.style := "width: 80px"
            )(),
          )
        }
      )().withLocator
    )
  }

}
