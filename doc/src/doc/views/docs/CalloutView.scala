package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class CalloutView()
    extends ExampleView(
      "Callout",
      Some("https://webawesome.com/docs/components/callout/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        Callout(
          _.slots.icon(Icon(_.name := "circle-info")())
        )(
          "This is a standard callout. You can customize its content and even the icon."
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Variants",
        description = "Use the `variant` attribute to set the callout's semantic variant.",
        content = Source.annotate {
          div(
            tw.spaceY4,
            // <show>
            Callout(
              _.variant := "brand",
              _.slots.icon(Icon(_.name := "circle-info")())
            )(
              strong("This is super informative"),
              br(),
              "You can tell by how pretty the callout is."
            ),
            Callout(
              _.variant := "success",
              _.slots.icon(Icon(_.name := "circle-check")())
            )(
              strong("Your changes have been saved"),
              br(),
              "You can safely exit the app now."
            ),
            Callout(
              _.variant := "neutral",
              _.slots.icon(Icon(_.name := "gear")())
            )(
              strong("Your settings have been updated"),
              br(),
              "Settings will take effect on next login."
            ),
            Callout(
              _.variant := "warning",
              _.slots.icon(Icon(_.name := "triangle-exclamation")())
            )(
              strong("Your session has ended"),
              br(),
              "Please login again to continue."
            ),
            Callout(
              _.variant := "danger",
              _.slots.icon(Icon(_.name := "circle-exclamation")())
            )(
              strong("Your account has been deleted"),
              br(),
              "We're very sorry to see you go!"
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description =
          "Use the `appearance` attribute to change the callout's visual appearance (the default is `outlined filled`).",
        content = Source.annotate {
          div(
            tw.spaceY4,
            // <show>
            Callout(
              _.variant    := "brand",
              _.appearance := "accent",
              _.slots.icon(Icon(_.name := "square-check")())
            )(
              "This ",
              strong("accent"),
              " callout draws attention"
            ),
            Callout(
              _.variant    := "brand",
              _.appearance := "outlined filled",
              _.slots.icon(Icon(_.name := "fill-drip")())
            )(
              "This callout is both ",
              strong("filled"),
              " and ",
              strong("outlined")
            ),
            Callout(
              _.variant    := "brand",
              _.appearance := "filled",
              _.slots.icon(Icon(_.name := "fill")())
            )(
              "This callout is only ",
              strong("filled")
            ),
            Callout(
              _.variant    := "brand",
              _.appearance := "outlined",
              _.slots.icon(Icon(_.name := "lines-leaning")())
            )(
              "Here's an ",
              strong("outlined"),
              " callout"
            ),
            Callout(
              _.variant    := "brand",
              _.appearance := "plain",
              _.slots.icon(Icon(_.name := "font")())
            )(
              "No bells and whistles on this ",
              strong("plain"),
              " callout"
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change a callout's size.",
        content = Source.annotate {
          div(
            tw.spaceY4,
            // <show>
            Callout(
              _.size := "large",
              _.slots.icon(Icon(_.name := "circle-info")())
            )(
              "This is meant to be very emphasized."
            ),
            Callout(
              _.size := "medium",
              _.slots.icon(Icon(_.name := "circle-info")())
            )(
              "Normal-sized callout."
            ),
            Callout(
              _.size := "small",
              _.slots.icon(Icon(_.name := "circle-info")())
            )(
              "Just a small tip!"
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Without Icons",
        description = "Icons are optional. Simply omit the `icon` slot if you don't want them.",
        content = Source.annotate {
          // <show>
          Callout(_.variant := "brand")(
            "Nothing fancy here, just a simple callout."
          )
          // </show>
        }
      )().withLocator
    )
  }
}
