package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class PopupView()
    extends ExampleView(
      "Popup",
      Some("https://webawesome.com/docs/components/popup/")
    ) {
  def playground: HtmlElement = {
    val placementVar = Var("top")

    Demo(
      content = Source.annotate {
        div(
          Popup(
            _.placement <-- placementVar,
            _.active    := true,
            _.slots.anchor(
              span(
                display.inlineBlock,
                width.px(150),
                height.px(150),
                border := "1px dashed var(--wa-color-neutral-fill-loud)",
                margin.px(50)
              )
            )
          )(
            div(
              width.px(100),
              height.px(50),
              background   := "var(--wa-color-brand-fill-loud)",
              borderRadius := "var(--wa-border-radius-m)"
            )
          ),
          div(
            tw.flex.gap2,
            Select(
              _.label := "Placement",
              _.name  := "placement",
              _.value <-- placementVar,
              _.onChange.mapToValue --> placementVar
            )(
              UOption(_.value := "top")("top"),
              UOption(_.value := "top-start")("top-start"),
              UOption(_.value := "top-end")("top-end"),
              UOption(_.value := "bottom")("bottom"),
              UOption(_.value := "bottom-start")("bottom-start"),
              UOption(_.value := "bottom-end")("bottom-end"),
              UOption(_.value := "right")("right"),
              UOption(_.value := "right-start")("right-start"),
              UOption(_.value := "right-end")("right-end"),
              UOption(_.value := "left")("left"),
              UOption(_.value := "left-start")("left-start"),
              UOption(_.value := "left-end")("left-end")
            ),
            Input(
              _.label  := "Distance",
              _.`type` := "number",
              _.value  := "0"
            )(
              nameAttr := "distance"
            ),
            Input(
              _.label  := "Skidding",
              _.`type` := "number",
              _.value  := "0"
            )(
              nameAttr := "skidding"
            )
          )
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
