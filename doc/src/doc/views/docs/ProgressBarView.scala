package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import org.scalajs.dom

case class ProgressBarView()
    extends ExampleView(
      "ProgressBar",
      Some("https://webawesome.com/docs/components/progress-bar/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        ProgressBar(_.value := "40")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Labels",
        description =
          "Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.",
        content = Source.annotate {
          ProgressBar(
            _.value := "50",
            _.label := "Upload progress"
          )()
        }
      )().withLocator,
      Demo(
        title = "Custom Height",
        description = "Use the `height` CSS property to set the progress bar's height.",
        content = Source.annotate {
          ProgressBar(
            _.value := "50",
            _.style := "--track-height: 6px;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Showing Values",
        description = "Use the default slot to show a value.",
        content = Source.annotate {
          val progressValue = Var(50.0)

          div(
            tw.flex.flexCol.gap4,
            ProgressBar(
              _.value <-- progressValue.signal.map(_.toString)
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
      )().withLocator,
      Demo(
        title = "Indeterminate",
        description =
          "The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.",
        content = Source.annotate {
          ProgressBar(_.indeterminate := true)()
        }
      )().withLocator
    )
  }

}
