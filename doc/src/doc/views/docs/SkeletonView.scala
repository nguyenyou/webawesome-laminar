package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class SkeletonView()
    extends ExampleView(
      "Skeleton",
      Some("https://webawesome.com/docs/components/skeleton/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        div(
          styleTag("""
            .skeleton-overview .skeleton-header {
              display: flex;
              align-items: center;
              margin-bottom: 1rem;
            }

            .skeleton-overview .skeleton-header wa-skeleton:last-child {
              flex: 0 0 auto;
              width: 30%;
            }

            .skeleton-overview wa-skeleton {
              margin-bottom: 1rem;
            }

            .skeleton-overview wa-skeleton:nth-child(1) {
              float: left;
              width: 3rem;
              height: 3rem;
              margin-right: 1rem;
              vertical-align: middle;
            }

            .skeleton-overview wa-skeleton:nth-child(3) {
              width: 95%;
            }

            .skeleton-overview wa-skeleton:nth-child(4) {
              width: 80%;
            }
          """),
          div(
            cls := "skeleton-overview",
            div(
              cls := "skeleton-header",
              Skeleton(_.effect.sheen)(),
              Skeleton(_.effect.sheen)()
            ),
            Skeleton(_.effect.sheen)(),
            Skeleton(_.effect.sheen)(),
            Skeleton(_.effect.sheen)()
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Effects",
        description =
          "There are two built-in effects, `sheen` and `pulse`. Effects are intentionally subtle, as they can be distracting when used extensively. The default is `none`, which displays a static, non-animated skeleton.",
        content = Source.annotate {
          div(
            cls := "skeleton-effects",
            styleTag("""
              .skeleton-effects {
                font-size: var(--wa-font-size-s);
              }

              .skeleton-effects wa-skeleton:not(:first-child) {
                margin-top: 1rem;
              }
            """),
            Skeleton(_.effect.none)(),
            "None",
            br(),
            Skeleton(_.effect.sheen)(),
            "Sheen",
            br(),
            Skeleton(_.effect.pulse)(),
            "Pulse"
          )
        }
      )().withLocator,
      Demo(
        title = "Paragraphs",
        description = "Use multiple skeletons and some clever styles to simulate paragraphs.",
        content = Source.annotate {
          div(
            cls := "skeleton-paragraphs",
            styleTag("""
              .skeleton-paragraphs wa-skeleton {
                margin-bottom: 1rem;
              }

              .skeleton-paragraphs wa-skeleton:nth-child(2) {
                width: 95%;
              }

              .skeleton-paragraphs wa-skeleton:nth-child(4) {
                width: 90%;
              }

              .skeleton-paragraphs wa-skeleton:last-child {
                width: 50%;
              }
            """),
            Skeleton()(),
            Skeleton()(),
            Skeleton()(),
            Skeleton()(),
            Skeleton()()
          )
        }
      )().withLocator,
      Demo(
        title = "Avatars",
        description = "Set a matching width and height to make a circle, square, or rounded avatar skeleton.",
        content = Source.annotate {
          div(
            styleTag("""
              .skeleton-avatars wa-skeleton {
                display: inline-flex;
                width: 3rem;
                height: 3rem;
                margin-right: 0.5rem;
              }

              .skeleton-avatars wa-skeleton:nth-child(1)::part(indicator) {
                border-radius: 0;
              }

              .skeleton-avatars wa-skeleton:nth-child(2)::part(indicator) {
                border-radius: var(--wa-border-radius-m);
              }
            """),
            div(
              cls := "skeleton-avatars",
              Skeleton()(),
              Skeleton()(),
              Skeleton()()
            )
          )

        }
      )().withLocator,
      Demo(
        title = "Custom Shapes",
        description =
          "Set a `border-radius` on the `indicator` part to make circles, squares, and rectangles. For more complex shapes, you can apply `clip-path` to the `indicator` part. Try Clippy if you need help generating custom shapes.",
        content = Source.annotate {
          div(
            cls := "skeleton-shapes",
            styleTag("""
              .skeleton-shapes wa-skeleton {
                display: inline-flex;
                width: 50px;
                height: 50px;
              }

              .skeleton-shapes .square::part(indicator) {
                border-radius: var(--wa-border-radius-m);
              }

              .skeleton-shapes .circle::part(indicator) {
                border-radius: var(--wa-border-radius-circle);
              }

              .skeleton-shapes .triangle::part(indicator) {
                border-radius: 0;
                clip-path: polygon(50% 0, 0 100%, 100% 100%);
              }

              .skeleton-shapes .cross::part(indicator) {
                border-radius: 0;
                clip-path: polygon(
                  20% 0%,
                  0% 20%,
                  30% 50%,
                  0% 80%,
                  20% 100%,
                  50% 70%,
                  80% 100%,
                  100% 80%,
                  70% 50%,
                  100% 20%,
                  80% 0%,
                  50% 30%
                );
              }

              .skeleton-shapes .comment::part(indicator) {
                border-radius: 0;
                clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
              }

              .skeleton-shapes wa-skeleton:not(:last-child) {
                margin-right: 0.5rem;
              }
            """),
            Skeleton()(cls := "square"),
            Skeleton()(cls := "circle"),
            Skeleton()(cls := "triangle"),
            Skeleton()(cls := "cross"),
            Skeleton()(cls := "comment")
          )
        }
      )().withLocator,
      Demo(
        title = "Custom Colors",
        description = "Set the `--color` and `--sheen-color` custom properties to adjust the skeleton's color.",
        content = Source.annotate {
          Skeleton(
            _.effect.sheen
          )(
            styleAttr := "--color: tomato; --sheen-color: #ffb094;"
          )
        }
      )().withLocator
    )
  }
}
