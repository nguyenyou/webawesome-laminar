package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class QrCodeView()
    extends ExampleView(
      "QrCode",
      Some("https://webawesome.com/docs/components/qr-code/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        val qrValue = Var("https://shoelace.style/")

        div(
          maxWidth.px(256),
          QrCode(
            _.value <-- qrValue.signal,
            _.label := "Scan this code to visit Web Awesome on the web!"
          )(),
          br(),
          Input(
            _.maxlength := 255.0,
            _.withClear := true,
            _.label     := "Value",
            _.value <-- qrValue.signal,
            _.slots.start(Icon(_.name := "link")())
          )(
            onInput.mapToValue --> qrValue.writer
          )
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Colors",
        description =
          "Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.",
        content = Source.annotate {
          QrCode(
            _.value      := "https://shoelace.style/",
            _.fill       := "deeppink",
            _.background := "white"
          )()
        }
      )().withLocator,
      Demo(
        title = "Size",
        description = "Use the `size` attribute to change the size of the QR code.",
        content = Source.annotate {
          QrCode(
            _.value := "https://shoelace.style/",
            _.size  := 64.0
          )()
        }
      )().withLocator,
      Demo(
        title = "Radius",
        description = "Create a rounded effect with the `radius` attribute.",
        content = Source.annotate {
          QrCode(
            _.value  := "https://shoelace.style/",
            _.radius := 0.5
          )()
        }
      )().withLocator,
      Demo(
        title = "Error Correction",
        description =
          "QR codes can be rendered with various levels of error correction that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap4,
            QrCode(
              _.value           := "https://shoelace.style/",
              _.errorCorrection := "L"
            )(),
            QrCode(
              _.value           := "https://shoelace.style/",
              _.errorCorrection := "M"
            )(),
            QrCode(
              _.value           := "https://shoelace.style/",
              _.errorCorrection := "Q"
            )(),
            QrCode(
              _.value           := "https://shoelace.style/",
              _.errorCorrection := "H"
            )()
          )
        }
      )().withLocator
    )
  }

}
