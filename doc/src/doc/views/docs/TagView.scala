package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.libs.scalawind.*

case class TagView()
    extends ExampleView(
      "Tag",
      Some("https://webawesome.com/docs/components/tag/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        div(
          tw.flex.flexWrap.gap2,
          Tag(_.variant := "brand")("Brand"),
          Tag(_.variant := "neutral")("Neutral"),
          Tag(_.variant := "success")("Success"),
          Tag(_.variant := "warning")("Warning"),
          Tag(_.variant := "danger")("Danger")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
