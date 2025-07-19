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
        title = "Sizes",
        description = "Use the `size` attribute to change a button's size.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small")("Small"),
            Button(_.size := "medium")("Medium"),
            Button(_.size := "large")("Large")
            // </show>
          )
        }
      ),
      Demo(
        title = "Pill Buttons",
        description = "Use the `pill` attribute to give buttons rounded edges.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small", _.pill := true)("Small"),
            Button(_.size := "medium", _.pill := true)("Medium"),
            Button(_.size := "large", _.pill := true)("Large")
            // </show>
          )
        }
      ),
      Demo(
        title = "Link Buttons",
        description = """
        | It's often helpful to have a button that works like a link. 
        | This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. 
        | This gives you all the default link behavior the browser provides (e.g. `CMD/CTRL/SHIFT + CLICK`) and exposes the `rel`, `target`, and `download` attributes.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.href := "https://example.com/")("Link"),
            Button(_.href := "https://example.com/", _.target := "_blank")("Link with target"),
            Button(_.href := "/assets/images/logo.svg", _.download := "shoelace.svg")("Download")
            // </show>
          )
        }
      ),
      Demo(
        title = "Setting a Custom Width",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small")(tw.wFull, "Small"),
            Button(_.size := "medium")(tw.wFull,"Medium"),
            Button(_.size := "large")(tw.wFull, "Large")
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
