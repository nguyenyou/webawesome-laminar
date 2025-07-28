package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.libs.scalawind.*

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
      )().withLocator
    )
  }
}
