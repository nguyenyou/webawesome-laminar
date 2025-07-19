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
            Button(_.variant := "brand")("Brand"),
            Button(_.variant := "danger")("Danger"),
            Button(_.variant := "neutral")("Neutral"),
            Button(_.variant := "success")("Success"),
            Button(_.variant := "warning")("Warning")
            // </show>
          )
        }
      ),
      
    )
  }

}
