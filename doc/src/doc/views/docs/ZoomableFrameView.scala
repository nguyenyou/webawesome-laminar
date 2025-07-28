package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class ZoomableFrameView()
    extends ExampleView(
      "Zoomable Frame",
      Some("https://webawesome.com/docs/components/zoomable-frame/")
    ) {

  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        ZoomableFrame(
          _.src := "https://webawesome.com/",
          _.zoom := 0.5
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Loading external content",
        description = """
        | Use the `src` attribute to embed external websites or resources. The URL must be accessible, 
        | and cross-origin restrictions may apply due to the Same-Origin Policy, potentially limiting access to the iframe's content.
        """.stripMargin,
        content = Source.annotate {
          ZoomableFrame(
            _.src := "https://example.com/"
          )()
        }
      )().withLocator,
      Demo(
        title = "Custom aspect ratio",
        description = """
        | The zoomable frame fills 100% width by default with a 16:9 aspect ratio. 
        | Customize this using the `aspect-ratio` CSS property.
        """.stripMargin,
        content = Source.annotate {
          ZoomableFrame(
            _.src := "https://example.com/"
          )(
            styleAttr := "aspect-ratio: 4/3;"
          )
        }
      )().withLocator,
      Demo(
        title = "Inline HTML content",
        description = """
        | Use the `srcdoc` attribute or property to display custom HTML content directly within the iframe, 
        | perfect for rendering inline content without external resources.
        """.stripMargin,
        content = Source.annotate {
          ZoomableFrame(
            _.srcdoc := "<html><body><h1>Hello, World!</h1><p>This is inline content.</p></body></html>"
          )()
        }
      )().withLocator,
      Demo(
        title = "Controlling zoom behavior",
        description = """
        | Set the `zoom` attribute to control the frame's zoom level. Use `1` for 100%, `2` for 200%, `0.5` for 50%, and so on.
        | Define specific zoom increments with the `zoom-levels` attribute using space-separated percentages and decimal values.
        """.stripMargin,
        content = Source.annotate {
          ZoomableFrame(
            _.src := "https://webawesome.com/",
            _.zoom := 0.5,
            _.zoomLevels := "50% 0.75 100%"
          )()
        }
      )().withLocator,
      Demo(
        title = "Hiding zoom controls",
        description = "Add the `without-controls` attribute to hide the zoom control interface from the frame.",
        content = Source.annotate {
          ZoomableFrame(
            _.src := "https://webawesome.com/",
            _.withoutControls := true,
            _.zoom := 0.5
          )()
        }
      )().withLocator,
      Demo(
        title = "Preventing user interaction",
        description = """
        | Apply the `without-interaction` attribute to make the frame non-interactive. 
        | Note that this prevents keyboard navigation into the frame, which may impact accessibility for some users.
        """.stripMargin,
        content = Source.annotate {
          ZoomableFrame(
            _.src := "https://webawesome.com/",
            _.zoom := 0.5,
            _.withoutInteraction := true
          )()
        }
      )().withLocator
    )
  }
}