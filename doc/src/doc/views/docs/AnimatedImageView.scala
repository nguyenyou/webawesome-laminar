package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class AnimatedImageView()
    extends ExampleView(
      "Animated Image",
      Some("https://webawesome.com/docs/components/animated-image/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        AnimatedImage(
          _.src := "https://shoelace.style/assets/images/walk.gif",
          _.alt := "Animation of untied shoes walking on pavement"
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "WEBP Images",
        description = "Both GIF and WEBP images are supported.",
        content = Source.annotate {
          AnimatedImage(
            _.src := "https://shoelace.style/assets/images/tie.webp",
            _.alt := "Animation of a shoe being tied"
          )()
        }
      )().withLocator,
      Demo(
        title = "Setting a Width and Height",
        description = "To set a custom size, apply a width and/or height to the host element.",
        content = Source.annotate {
          AnimatedImage(
            _.src := "https://shoelace.style/assets/images/walk.gif",
            _.alt := "Animation of untied shoes walking on pavement",
            _.style := "width: 150px; height: 200px;"
          )()
        }
      )().withLocator,
      Demo(
        title = "Customizing the Control Box",
        description = "You can change the appearance and location of the control box by targeting the control-box part in your styles.",
        content = Source.annotate {
          div(
            styleTag("""
              .animated-image-custom-control-box::part(control-box) {
                top: auto;
                right: auto;
                bottom: 1rem;
                left: 1rem;
                background-color: deeppink;
                border: none;
                color: pink;
              }
            """),
            AnimatedImage(
              _.src := "https://shoelace.style/assets/images/walk.gif",
              _.alt := "Animation of untied shoes walking on pavement",
            )(
              cls := "animated-image-custom-control-box"
            )
          )
        }
      )().withLocator
    )
  }

} 