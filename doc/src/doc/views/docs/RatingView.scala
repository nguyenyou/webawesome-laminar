package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class RatingView()
    extends ExampleView(
      "Rating",
      Some("https://webawesome.com/docs/components/rating/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        Rating(_.label := "Rating")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Labels",
        description =
          "Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the `label` attribute.",
        content = Source.annotate {
          Rating(_.label := "Rate this component")()
        }
      )().withLocator,
      Demo(
        title = "Maximum Value",
        description = "Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.",
        content = Source.annotate {
          Rating(_.label := "Rating", _.max := 3)()
        }
      )().withLocator,
      Demo(
        title = "Precision",
        description = "Use the `precision` attribute to let users select fractional ratings.",
        content = Source.annotate {
          Rating(_.label := "Rating", _.precision := 0.5, _.value := 2.5)()
        }
      )().withLocator,
      Demo(
        title = "Sizing",
        description = "Use the `size` attribute to adjust the size of the rating.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            Rating(_.label := "Rating", _.size.small)(),
            Rating(_.label := "Rating", _.size.medium)(),
            Rating(_.label := "Rating", _.size.large)()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        description = "For more granular sizing, you can use the `font-size` property.",
        content = Source.annotate {
          Rating(
            _.label := "Rating",
            _.style := "font-size: 2rem;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Readonly",
        description = "Use the `readonly` attribute to display a rating that users can't change.",
        content = Source.annotate {
          Rating(_.label := "Rating", _.readonly := true, _.value := 3)()
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable the rating.",
        content = Source.annotate {
          Rating(_.label := "Rating", _.disabled := true, _.value := 3)()
        }
      )().withLocator,
      Demo(
        title = "Detecting Hover",
        description = """
        |Use the `wa-hover` event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.
        |
        |The event has a payload with `phase` and `value` properties. The `phase` property tells when hovering starts, moves to a new value, and ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
        |""".stripMargin,
        content = Source.annotate {
          val hoverText = Var("")
          val terms     = List("No rating", "Terrible", "Bad", "OK", "Good", "Excellent")

          div(
            Rating(
              _.label := "Rating",
              _.onHover.map { event =>
                val value = event.detail.value
                hoverText.set(terms.lift(value).getOrElse(""))
                if (event.detail.phase == "end") {
                  hoverText.set("")
                }
              } --> Observer.empty
            )(),
            span(
              tw.relative.textCenter.py1.px2,
              tw.hidden <-- hoverText.signal.map(_.isEmpty),
              top.px(-4),
              left.px(8),
              borderRadius    := "var(--wa-border-radius-m)",
              backgroundColor := "var(--wa-color-neutral-fill-loud)",
              color           := "var(--wa-color-neutral-on-loud)",
              text <-- hoverText.signal
            )
          )
        }
      )().withLocator
    )
  }

}
