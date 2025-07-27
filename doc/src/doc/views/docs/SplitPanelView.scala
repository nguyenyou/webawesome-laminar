package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source

case class SplitPanelView()
    extends ExampleView(
      "Split Panel",
      Some("https://webawesome.com/docs/components/split-panel/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        SplitPanel(
          _.slots.start(
            div(
              height.px(200),
              tw.bgNeutral100.flex.itemsCenter.justifyCenter.overflowHidden,
              "Start"
            )
          ),
          _.slots.end(
            div(
              height.px(200),
              tw.bgNeutral100.flex.itemsCenter.justifyCenter.overflowHidden,
              "End"
            )
          )
        )()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
