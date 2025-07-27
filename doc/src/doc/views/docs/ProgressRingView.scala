package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import org.scalajs.dom

case class ProgressRingView()
    extends ExampleView(
      "ProgressRing",
      Some("https://webawesome.com/docs/components/progress-ring/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        ProgressRing(_.value := "25")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Size",
        description = "Use the `--size` custom property to set the diameter of the progress ring.",
        content = Source.annotate {
          ProgressRing(
            _.value := "50",
            _.style := "--size: 200px;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Track and Indicator Width",
        description = "Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.",
        content = Source.annotate {
          ProgressRing(
            _.value := "50",
            _.style := "--track-width: 6px; --indicator-width: 12px;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Colors",
        description = "To change the color, use the `--track-color` and `--indicator-color` custom properties.",
        content = Source.annotate {
          ProgressRing(
            _.value := "50",
            _.style := "--track-color: pink; --indicator-color: deeppink;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Labels",
        description = "Use the default slot to show a label inside the progress ring.",
        content = Source.annotate {
          val progressValue = Var(50.0)
          
          div(
            tw.flex.flexCol.gap4,
            ProgressRing(
              _.value <-- progressValue.signal.map(_.toString),
            )(
              child.text <-- progressValue.signal.map(v => s"${v.toInt}%")
            ),
            div(
              tw.flex.gap2,
              Button(
                _.pill := true
              )(
                onClick --> Observer[dom.MouseEvent] { _ =>
                  progressValue.update(current => math.max(0, current - 10))
                },
                Icon(_.name := "minus")()
              ),
              Button(
                _.pill := true
              )(
                onClick --> Observer[dom.MouseEvent] { _ =>
                  progressValue.update(current => math.min(100, current + 10))
                },
                Icon(_.name := "plus")()
              )
            )
          )
        }
      )().withLocator
    )
  }

}
