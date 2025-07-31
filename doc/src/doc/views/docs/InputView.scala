package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class InputView()
    extends ExampleView(
      "Input",
      Some("https://webawesome.com/docs/components/input/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        val valueVar = Var("Enter something...")
        Input(
          _.controlled(
            _.value <-- valueVar,
            _.onInput.mapToValue --> valueVar
          )
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Labels",
        description =
          "Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.",
        content = Source.annotate {
          Input(
            _.label := "What is your name?"
          )()
        }
      )().withLocator,
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to an input with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          Input(
            _.label := "Nickname",
            _.hint  := "What would you like people to call you?"
          )()
        }
      )().withLocator,
      Demo(
        title = "Placeholders",
        description = "Use the `placeholder` attribute to add a placeholder.",
        content = Source.annotate {
          Input(
            _.placeholder := "Type something"
          )()
        }
      )().withLocator,
      Demo(
        title = "Clearable",
        description = "Add the `with-clear` attribute to add a clear button when the input has content.",
        content = Source.annotate {
          Input(
            _.placeholder := "Clearable",
            _.withClear   := true
          )()
        }
      )().withLocator,
      Demo(
        title = "Toggle Password",
        description =
          "Add the `password-toggle` attribute to add a toggle button that will show the password when activated.",
        content = Source.annotate {
          Input(
            _.typ            := "password",
            _.placeholder    := "Password Toggle",
            _.passwordToggle := true
          )()
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description = "Use the `appearance` attribute to change the input's visual appearance.",
        content = Source.annotate {
          Input(
            _.placeholder := "Type something",
            _.appearance.filled
          )()
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable an input.",
        content = Source.annotate {
          Input(
            _.placeholder := "Disabled"
          )(
            disabled := true
          )
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change an input's size.",
        content = Source.annotate {
          div(
            Input(
              _.placeholder := "Small",
              _.size.small
            )(),
            br(),
            Input(
              _.placeholder := "Medium",
              _.size.medium
            )(),
            br(),
            Input(
              _.placeholder := "Large",
              _.size.large
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Pill",
        description = "Use the `pill` attribute to give inputs rounded edges.",
        content = Source.annotate {
          div(
            Input(
              _.placeholder := "Small",
              _.size.small,
              _.pill := true
            )(),
            br(),
            Input(
              _.placeholder := "Medium",
              _.size.medium,
              _.pill := true
            )(),
            br(),
            Input(
              _.placeholder := "Large",
              _.size.large,
              _.pill := true
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Input Types",
        description = "The `type` attribute controls the type of input the browser renders.",
        content = Source.annotate {
          div(
            Input(
              _.typ.email,
              _.placeholder := "Email"
            )(),
            br(),
            Input(
              _.typ.number,
              _.placeholder := "Number"
            )(),
            br(),
            Input(
              _.typ.date,
              _.placeholder := "Date"
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Start & End Decorations",
        description =
          "Use the `start` and `end` slots to add presentational elements like `<wa-icon>` within the input.",
        content = Source.annotate {
          div(
            Input(
              _.placeholder := "Small",
              _.size.small,
              _.slots.start(Icon(_.name := "house")()),
              _.slots.end(Icon(_.name := "comment")())
            )(),
            br(),
            Input(
              _.placeholder := "Medium",
              _.size.medium,
              _.slots.start(Icon(_.name := "house")()),
              _.slots.end(Icon(_.name := "comment")())
            )(),
            br(),
            Input(
              _.placeholder := "Large",
              _.size.large,
              _.slots.start(Icon(_.name := "house")()),
              _.slots.end(Icon(_.name := "comment")())
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Customizing Label Position",
        description =
          "Use CSS parts to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.",
        content = Source.annotate {
          div(
            cls := "label-on-left",
            styleTag("""
              .label-on-left {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: var(--wa-space-l);
                align-items: center;
              }
              
              .label-on-left wa-input,
              .label-on-left wa-textarea {
                grid-column: 1 / -1;
                grid-row-end: span 2;
                display: grid;
                grid-template-columns: subgrid;
                gap: 0 var(--wa-space-l);
                align-items: center;
              }
              
              .label-on-left ::part(label) {
                text-align: right;
              }
              
              .label-on-left ::part(hint) {
                grid-column: 2;
              }
            """),
            Input(
              _.label := "Name",
              _.hint  := "Enter your name"
            )(),
            Input(
              _.label := "Email",
              _.typ.email,
              _.hint := "Enter your email"
            )(),
            Textarea(
              _.label := "Bio",
              _.hint  := "Tell us something about yourself"
            )()
          )
        }
      )().withLocator
    )
  }
}
