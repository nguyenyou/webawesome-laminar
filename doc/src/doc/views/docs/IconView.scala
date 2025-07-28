package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class IconView()
    extends ExampleView(
      "Icon",
      Some("https://webawesome.com/docs/components/icon/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        Icon(
          _.name := "star"
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Families & Variants",
        description = """
        |The default icon library is Font Awesome Free, which comes with two icon families: `classic` and `brands`. Use the `family` attribute to set the icon family.
        |
        |Many Font Awesome Pro icon families have variants such as `thin`, `light`, `regular`, and `solid`. Font Awesome Pro users can [provide their kit code](/docs/#using-font-awesome-kit-codes) to unlock additional families, including `sharp`, `duotone`, and `sharp-duotone`. For these icon families, use the `variant` attribute to set the variant.
        |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            // <show>
            Icon(
              _.name := "eyedropper"
            )(),
            Icon(
              _.name := "grip-vertical"
            )(),
            Icon(
              _.name := "play"
            )(),
            Icon(
              _.name := "star"
            )(),
            Icon(
              _.name := "user"
            )()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Colors",
        description = """
        |Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<wa-icon>` element or an ancestor to change the color.
        |""".stripMargin,
        content = Source.annotate {
          div(
            // <show>
            div(
              color := "#4a90e2",
              tw.flex.gap2.mb2,
              Icon(_.name := "exclamation-triangle")(),
              Icon(_.name := "archive")(),
              Icon(_.name := "battery-three-quarters")(),
              Icon(_.name := "bell")()
            ),
            div(
              color := "#9013fe",
              tw.flex.gap2.mb2,
              Icon(_.name := "clock")(),
              Icon(_.name := "cloud")(),
              Icon(_.name := "download")(),
              Icon(_.name := "file")()
            ),
            div(
              color := "#417505",
              tw.flex.gap2.mb2,
              Icon(_.name := "flag")(),
              Icon(_.name := "heart")(),
              Icon(_.name := "image")(),
              Icon(_.name := "bolt-lightning")()
            ),
            div(
              color := "#f5a623",
              tw.flex.gap2,
              Icon(_.name := "microphone")(),
              Icon(_.name := "search")(),
              Icon(_.name := "star")(),
              Icon(_.name := "trash")()
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Sizing",
        description = """
        |Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.
        |""".stripMargin,
        content = Source.annotate {
          div(
            fontSize := "32px",
            tw.flex.gap2,
            // <show>
            Icon(_.name := "bell")(),
            Icon(_.name := "heart")(),
            Icon(_.name := "image")(),
            Icon(_.name := "microphone")(),
            Icon(_.name := "search")(),
            Icon(_.name := "star")()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Fixed Width Icons",
        description = """
        |By default, icons have a 1em height and a variable width. Use the `fixed-width` attribute to render the host element in a 1em by 1em box.
        |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            // <show>
            Icon(
              _.fixedWidth := "true",
              _.name       := "cloud"
            )(),
            Icon(
              _.fixedWidth := "true",
              _.name       := "user"
            )(),
            Icon(
              _.fixedWidth := "true",
              _.name       := "truck"
            )(),
            Icon(
              _.fixedWidth := "true",
              _.name       := "file"
            )(),
            Icon(
              _.fixedWidth := "true",
              _.name       := "skating"
            )(),
            Icon(
              _.fixedWidth := "true",
              _.name       := "snowplow"
            )()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Labels",
        description = """
        |For non-decorative icons, use the `label` attribute to announce it to assistive devices.
        |""".stripMargin,
        content = Source.annotate {
          Icon(
            _.name  := "star",
            _.label := "Add to favorites"
          )()
        }
      )().withLocator,
      Demo(
        title = "Custom Icons",
        description = """
        |Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).
        |""".stripMargin,
        content = Source.annotate {
          Icon(
            _.src   := "https://shoelace.style/assets/images/shoe.svg",
            _.style := "font-size: 4rem;"
          )()
        }
      )().withLocator
    )
  }
}
