package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class ColorPickerView()
    extends ExampleView(
      "ColorPicker",
      Some("https://webawesome.com/docs/components/color-picker/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.ColorPicker

        ColorPicker(_.label := "Select a color")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
