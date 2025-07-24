package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class BadgeView()
    extends ExampleView(
      "Badge",
      Some("https://webawesome.com/docs/components/badge/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Badge

        Badge()("Badge")
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Variants",
        description = """
          | Set the `variant` attribute to change the badge's variant.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            // <show>
            Badge(_.variant := "brand")("Brand"),
            Badge(_.variant := "success")("Success"),
            Badge(_.variant := "neutral")("Neutral"),
            Badge(_.variant := "warning")("Warning"),
            Badge(_.variant := "danger")("Danger")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description = """
          | Use the `appearance` attribute to change the badge's visual appearance.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.spaceY2,
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.appearance := "accent", _.variant := "neutral")("Accent"),
              Badge(_.appearance := "filled outlined", _.variant := "neutral")("Filled + Outlined"),
              Badge(_.appearance := "filled", _.variant := "neutral")("Filled"),
              Badge(_.appearance := "outlined", _.variant := "neutral")("Outlined")
              // </show>
            ),
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.appearance := "accent", _.variant := "brand")("Accent"),
              Badge(_.appearance := "filled outlined", _.variant := "brand")("Filled + Outlined"),
              Badge(_.appearance := "filled", _.variant := "brand")("Filled"),
              Badge(_.appearance := "outlined", _.variant := "brand")("Outlined")
              // </show>
            ),
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.appearance := "accent", _.variant := "success")("Accent"),
              Badge(_.appearance := "filled outlined", _.variant := "success")("Filled + Outlined"),
              Badge(_.appearance := "filled", _.variant := "success")("Filled"),
              Badge(_.appearance := "outlined", _.variant := "success")("Outlined")
              // </show>
            ),
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.appearance := "accent", _.variant := "warning")("Accent"),
              Badge(_.appearance := "filled outlined", _.variant := "warning")("Filled + Outlined"),
              Badge(_.appearance := "filled", _.variant := "warning")("Filled"),
              Badge(_.appearance := "outlined", _.variant := "warning")("Outlined")
              // </show>
            ),
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.appearance := "accent", _.variant := "danger")("Accent"),
              Badge(_.appearance := "filled outlined", _.variant := "danger")("Filled + Outlined"),
              Badge(_.appearance := "filled", _.variant := "danger")("Filled"),
              Badge(_.appearance := "outlined", _.variant := "danger")("Outlined")
              // </show>
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Size",
        description = """
          | Badges are sized relative to the current font size. You can set `font-size` on any badge (or an ancestor element) to change it.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2.itemsCenter,
            // <show>
            Badge(
              _.variant := "brand"
            )(
              fontSize.px(12),
              "Brand"
            ),
            Badge(
              _.variant := "brand"
            )(fontSize.px(14), "Brand"),
            Badge(
              _.variant := "brand"
            )(
              fontSize.px(16),
              "Brand"
            ),
            Badge(
              _.variant := "brand"
            )(
              fontSize.px(18),
              "Brand"
            ),
            Badge(
              _.variant := "brand"
            )(
              fontSize.px(20),
              "Brand"
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Pill Badges",
        description = """
          | Use the `pill` attribute to give badges rounded edges.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            // <show>
            Badge(_.variant := "brand", _.pill := true)("Brand"),
            Badge(_.variant := "success", _.pill := true)("Success"),
            Badge(_.variant := "neutral", _.pill := true)("Neutral"),
            Badge(_.variant := "warning", _.pill := true)("Warning"),
            Badge(_.variant := "danger", _.pill := true)("Danger")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Drawing Attention",
        description = """
          | Use the `attention` attribute to draw attention to the badge with a subtle animation. Supported effects are `bounce`, `pulse` and `none`.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.spaceY2,
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.variant := "brand", _.attention := "pulse", _.pill := true)("1"),
              Badge(_.variant := "success", _.attention := "pulse", _.pill := true)("1"),
              Badge(_.variant := "neutral", _.attention := "pulse", _.pill := true)("1"),
              Badge(_.variant := "warning", _.attention := "pulse", _.pill := true)("1"),
              Badge(_.variant := "danger", _.attention := "pulse", _.pill := true)("1")
              // </show>
            ),
            div(
              tw.flex.gap2,
              // <show>
              Badge(_.variant := "brand", _.attention := "bounce", _.pill := true)("1"),
              Badge(_.variant := "success", _.attention := "bounce", _.pill := true)("1"),
              Badge(_.variant := "neutral", _.attention := "bounce", _.pill := true)("1"),
              Badge(_.variant := "warning", _.attention := "bounce", _.pill := true)("1"),
              Badge(_.variant := "danger", _.attention := "bounce", _.pill := true)("1")
              // </show>
            )
          )
        }
      )().withLocator,
      Demo(
        title = "With Buttons",
        description = """
          | One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap4,
            // <show>
            Button()(
              "Requests",
              Badge(_.pill := true)("30")
            ),
            Button()(
              "Warnings",
              Badge(_.variant := "warning", _.pill := true)("8")
            ),
            Button()(
              "Errors",
              Badge(_.variant := "danger", _.pill := true)("6")
            )
            // </show>
          )
        }
      )().withLocator
    )
  }

}
