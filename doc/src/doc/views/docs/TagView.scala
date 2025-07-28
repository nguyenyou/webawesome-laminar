package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class TagView()
    extends ExampleView(
      "Tag",
      Some("https://webawesome.com/docs/components/tag/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        div(
          tw.flex.flexWrap.gap2,
          // <show>
          Tag(_.variant := "brand")("Brand"),
          Tag(_.variant := "success")("Success"),
          Tag(_.variant := "neutral")("Neutral"),
          Tag(_.variant := "warning")("Warning"),
          Tag(_.variant := "danger")("Danger")
          // </show>
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Appearance",
        description = """
        | Use the `appearance` attribute to change a tag's visual appearance.
        | The default appearance is `outlined filled`.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.spaceY4,
            p(
              tw.flex.flexWrap.gap2,
              // <show>
              Tag(_.variant := "brand", _.appearance := "accent")("Accent"),
              Tag(_.variant := "brand", _.appearance := "filled outlined")("Filled + Outlined"),
              Tag(_.variant := "brand", _.appearance := "filled")("Filled"),
              Tag(_.variant := "brand", _.appearance := "outlined")("Outlined")
              // </show>
            ),
            p(
              tw.flex.flexWrap.gap2,
              // <show>
              Tag(_.variant := "success", _.appearance := "accent")("Accent"),
              Tag(_.variant := "success", _.appearance := "filled outlined")("Filled + Outlined"),
              Tag(_.variant := "success", _.appearance := "filled")("Filled"),
              Tag(_.variant := "success", _.appearance := "outlined")("Outlined")
              // </show>
            ),
            p(
              tw.flex.flexWrap.gap2,
              // <show>
              Tag(_.variant := "neutral", _.appearance := "accent")("Accent"),
              Tag(_.variant := "neutral", _.appearance := "filled outlined")("Filled + Outlined"),
              Tag(_.variant := "neutral", _.appearance := "filled")("Filled"),
              Tag(_.variant := "neutral", _.appearance := "outlined")("Outlined")
              // </show>
            ),
            p(
              tw.flex.flexWrap.gap2,
              // <show>
              Tag(_.variant := "warning", _.appearance := "accent")("Accent"),
              Tag(_.variant := "warning", _.appearance := "filled outlined")("Filled + Outlined"),
              Tag(_.variant := "warning", _.appearance := "filled")("Filled"),
              Tag(_.variant := "warning", _.appearance := "outlined")("Outlined")
              // </show>
            ),
            p(
              tw.flex.flexWrap.gap2,
              // <show>
              Tag(_.variant := "danger", _.appearance := "accent")("Accent"),
              Tag(_.variant := "danger", _.appearance := "filled outlined")("Filled + Outlined"),
              Tag(_.variant := "danger", _.appearance := "filled")("Filled"),
              Tag(_.variant := "danger", _.appearance := "outlined")("Outlined")
              // </show>
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change a tag's size.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Tag(_.size := "small")("Small"),
            Tag(_.size := "medium")("Medium"),
            Tag(_.size := "large")("Large")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Pill",
        description = "Use the `pill` attribute to give tags rounded edges.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Tag(_.size := "small", _.pill := true)("Small"),
            Tag(_.size := "medium", _.pill := true)("Medium"),
            Tag(_.size := "large", _.pill := true)("Large")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Removable",
        description = "Use the `with-remove` attribute to add a remove button to the tag.",
        content = Source.annotate {
          div(
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Tag(_.size := "small", _.withRemove := true)("Small"),
              Tag(_.size := "medium", _.withRemove := true)("Medium"),
              Tag(_.size := "large", _.withRemove := true)("Large")
              // </show>
            )
          )
        }
      )().withLocator
    )
  }
}
