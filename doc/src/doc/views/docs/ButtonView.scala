package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import org.scalajs.dom
import io.github.nguyenyou.webawesome.laminar.*

object ButtonView
    extends ExampleView("Button") {

  override def component: HtmlElement = {
    div(
      Demo(
        title = "Variants",
        description = "Use the `variant` attribute to set the button's semantic variant.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.variant := "brand")("Brand"),
            Button(_.variant := "danger")("Danger"),
            Button(_.variant := "neutral")("Neutral"),
            Button(_.variant := "success")("Success"),
            Button(_.variant := "warning")("Warning")
            // </show>
          )
        }
      ),
      Demo(
        title = "Appearance",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.appearance := "accent"  , _.variant := "neutral")("Accent"),
            Button(_.appearance := "filled"  , _.variant := "neutral")("Filled"),
            Button(_.appearance := "outlined"  , _.variant := "neutral")("Outlined"),
            Button(_.appearance := "plain"  , _.variant := "neutral")("Plain")
            // </show>
          )
        }
      ),
      Demo(
        title = "Icon Buttons",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.appearance := "accent"  , _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            ),
            Button(_.appearance := "filled"  , _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            ),
            Button(_.appearance := "outlined"  , _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            ),
            Button(_.appearance := "plain"  , _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            )
            // </show>
          )
        }
      ),
      
    )
  }

}
