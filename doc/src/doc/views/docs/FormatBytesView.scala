package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.components.Markdown
import doc.libs.scalawind.*

case class FormatBytesView()
    extends ExampleView(
      "Format Bytes",
      Some("https://webawesome.com/docs/components/format-bytes/")
    ) {
  def playground: HtmlElement = {
    val valueVar = Var("1000")

    Demo(
      content = Source.annotate {
        div(
          p("The file is ", FormatBytes(_.value <-- valueVar)(), " in size."),
          Input(
            _.`type` := "number",
            _.value <-- valueVar,
            _.label := "Number to Format",
          )(
            onInput.mapToValue --> valueVar,
            maxWidth.px(180)
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Formatting Bytes",
        description = "Set the `value` attribute to a number to get the value in bytes.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            FormatBytes(_.value := "12")(),
            FormatBytes(_.value := "1200")(),
            FormatBytes(_.value := "1200000")(),
            FormatBytes(_.value := "1200000000")()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Formatting Bits",
        description = "To get the value in bits, set the `unit` attribute to `bit`.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            FormatBytes(_.value := "12", _.unit.bit)(),
            FormatBytes(_.value := "1200", _.unit.bit)(),
            FormatBytes(_.value := "1200000", _.unit.bit)(),
            FormatBytes(_.value := "1200000000", _.unit.bit)()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Display Format",
        description =
          "Use the `display` attribute to control how the result is displayed. Valid values are \"long\", \"short\", and \"narrow\".",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            FormatBytes(_.value := "1200000", _.display.long)(),
            FormatBytes(_.value := "1200000", _.display.short)(),
            FormatBytes(_.value := "1200000", _.display.narrow)(),
            // </show>
          )
        }
      )().withLocator
    )
  }
}
