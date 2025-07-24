package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source

case class SkeletonView()
    extends ExampleView(
      "Skeleton",
      Some("https://webawesome.com/docs/components/skeleton/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        div(
          div(
            tw.flex.itemsCenter.gap4.mb4,
            Skeleton(_.effect := "sheen")(
              tw.w12.h12
            ),
            Skeleton(_.effect := "sheen")(
              width.percent(30)
            )
          ),
          Skeleton(_.effect := "sheen")(tw.mb4),
          Skeleton(_.effect := "sheen")(width.percent(95), tw.mb4),
          Skeleton(_.effect := "sheen")(width.percent(80), tw.mb4)
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
