package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import io.github.nguyenyou.webawesome.laminar.SharedTypes.ComponentSize
import org.scalajs.dom

case class RadioGroupView()
    extends ExampleView(
      "RadioGroup",
      Some("https://webawesome.com/docs/components/radio-group/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        RadioGroup(_.label := "Select an option", _.name := "a", _.value := "1")(
          Radio(_.value := "1")("Option 1"),
          Radio(_.value := "2")("Option 2"),
          Radio(_.value := "3")("Option 3")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to a radio group with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          RadioGroup(
            _.label := "Select an option",
            _.hint  := "Choose the most appropriate option.",
            _.name  := "a",
            _.value := "1"
          )(
            Radio(_.value := "1")("Option 1"),
            Radio(_.value := "2")("Option 2"),
            Radio(_.value := "3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Radio Buttons",
        description = "Set the `appearance` attribute to `button` on all radios to render a radio button group.",
        content = Source.annotate {
          div(
            RadioGroup(
              _.label       := "Horizontal options",
              _.hint        := "Select an option that makes you proud.",
              _.orientation := "horizontal",
              _.name        := "a",
              _.value       := "1"
            )(
              Radio(_.appearance := "button", _.value := "1")("Option 1"),
              Radio(_.appearance := "button", _.value := "2")("Option 2"),
              Radio(_.appearance := "button", _.value := "3")("Option 3")
            ),
            br(),
            RadioGroup(
              _.label       := "Vertical options",
              _.hint        := "Select an option that makes you proud.",
              _.orientation := "vertical",
              _.name        := "a",
              _.value       := "1"
            )(
              maxWidth.px(300),
              Radio(_.appearance := "button", _.value := "1")("Option 1"),
              Radio(_.appearance := "button", _.value := "2")("Option 2"),
              Radio(_.appearance := "button", _.value := "3")("Option 3")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Disabling",
        description = "To disable the entire radio group, add the `disabled` attribute to the radio group.",
        content = Source.annotate {
          RadioGroup(
            _.label    := "Select an option",
            _.disabled := true
          )(
            Radio(_.value := "1")("Option 1"),
            Radio(_.value := "2", _.disabled := true)("Option 2"),
            Radio(_.value := "3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        description = "To disable individual options, add the `disabled` attribute to the respective options.",
        content = Source.annotate {
          RadioGroup(_.label := "Select an option")(
            Radio(_.value := "1")("Option 1"),
            Radio(_.value := "2", _.disabled := true)("Option 2"),
            Radio(_.value := "3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Orientation",
        description =
          "The default orientation for radio items is `vertical`. Set the `orientation` to `horizontal` to items on the same row.",
        content = Source.annotate {
          RadioGroup(
            _.label       := "Select an option",
            _.hint        := "Choose the most appropriate option.",
            _.orientation := "horizontal",
            _.name        := "a",
            _.value       := "1"
          )(
            Radio(_.value := "1")("Option 1"),
            Radio(_.value := "2")("Option 2"),
            Radio(_.value := "3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Sizing Options",
        description = "The size of Radios will be determined by the Radio Group's `size` attribute.",
        content = Source.annotate {
          val currentSize = Var("medium")

          RadioGroup(
            _.label := "Select an optionn",
            _.size <-- currentSize.signal.map(_.asInstanceOf[ComponentSize]),
            _.controlled(
              _.value <-- currentSize.signal,
              _.onInput.mapToValue --> currentSize.writer
            )
          )(
            Radio(_.value := "small")("Small"),
            Radio(_.value := "medium")("Medium"),
            Radio(_.value := "large")("Large")
          )
        }
      )().withLocator,
      Demo(
        title = "Validation",
        description =
          "Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.",
        content = Source.annotate {
          form(
            onSubmit.preventDefault --> Observer[dom.Event] { _ =>
              dom.window.alert("All fields are valid!")
            },
            RadioGroup(
              _.label    := "Select an option",
              _.name     := "a",
              _.required := true
            )(
              Radio(_.value := "1")("Option 1"),
              Radio(_.value := "2")("Option 2"),
              Radio(_.value := "3")("Option 3")
            ),
            br(),
            Button(
              _.typ     := "submit",
              _.variant := "brand"
            )("Submit")
          )
        }
      )().withLocator
    )
  }

}
