package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

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
      Demo(
        title = "Initial Value",
        description = "Use the `value` attribute to set an initial value for the color picker.",
        content = Source.annotate {
          // <show>
          ColorPicker(
            _.value := "#4a90e2",
            _.label := "Select a color"
          )()
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Opacity",
        description =
          "Use the `opacity` attribute to enable the opacity slider. When this is enabled, the value will be displayed as HEXA, RGBA, HSLA, or HSVA based on `format`.",
        content = Source.annotate {
          // <show>
          ColorPicker(
            _.value   := "#f5a623ff",
            _.opacity := true,
            _.label   := "Select a color"
          )()
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Formats",
        description = """
        | Set the color picker's format with the `format` attribute. Valid options include `hex`, `rgb`, `hsl`, and `hsv`. 
        | Note that the color picker's input will accept any parsable format (including CSS color names) regardless of this option.
        | To prevent users from toggling the format themselves, add the `without-format-toggle` attribute.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.grid.gridCols2.gap4,
            // <show>
            ColorPicker(
              _.format := "hex",
              _.value  := "#4a90e2",
              _.label  := "Pick a hex color"
            )(),
            ColorPicker(
              _.format := "rgb",
              _.value  := "rgb(80, 227, 194)",
              _.label  := "Pick an RGB color"
            )(),
            ColorPicker(
              _.format := "hsl",
              _.value  := "hsl(290, 87%, 47%)",
              _.label  := "Pick an HSL color"
            )(),
            ColorPicker(
              _.format := "hsv",
              _.value  := "hsv(55, 89%, 97%)",
              _.label  := "Pick an HSV color"
            )()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Swatches",
        description = """
        | Use the `swatches` attribute to add convenient presets to the color picker. 
        | Any format the color picker can parse is acceptable (including CSS color names), 
        | but each value must be separated by a semicolon (`;`).
        """.stripMargin,
        content = Source.annotate {
          // <show>
          ColorPicker(
            _.label := "Select a color",
            _.swatches := "#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;"
          )()
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change the color picker's trigger size.",
        content = Source.annotate {
          div(
            tw.flex.itemsEnd.gap4,
            // <show>
            ColorPicker(
              _.size  := "small",
              _.label := "Select a color"
            )(),
            ColorPicker(
              _.size  := "medium",
              _.label := "Select a color"
            )(),
            ColorPicker(
              _.size  := "large",
              _.label := "Select a color"
            )()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "The color picker can be rendered as disabled.",
        content = Source.annotate {
          // <show>
          ColorPicker(
            _.disabled := true,
            _.label    := "Select a color"
          )()
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to a color picker with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          // <show>
          ColorPicker(
            _.label := "Select a color",
            _.hint  := "Choose a color with appropriate contrast!"
          )()
          // </show>
        }
      )().withLocator
    )
  }
}
