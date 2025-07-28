package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class CopyButtonView()
    extends ExampleView(
      "Copy Button",
      Some("https://webawesome.com/docs/components/copy-button/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        CopyButton(
          _.value := "Web Awesome rocks!"
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Custom Labels",
        description =
          "Copy Buttons display feedback in a tooltip. You can customize the labels using the `copy-label`, `success-label`, and `error-label` attributes.",
        content = Source.annotate {
          CopyButton(
            _.value        := "Custom labels are easy",
            _.copyLabel    := "Click to copy",
            _.successLabel := "You did it!",
            _.errorLabel   := "Whoops, your browser doesn't support this!"
          )()
        }
      )().withLocator,
      Demo(
        title = "Custom Icons",
        description =
          "Use the `copy-icon`, `success-icon`, and `error-icon` slots to customize the icons that get displayed for each state. You can use `<wa-icon>` or your own images.",
        content = Source.annotate {
          CopyButton(
            _.value := "Copied from a custom button",
            _.slots.copyIcon(Icon(_.name := "clipboard", _.variant := "regular")()),
            _.slots.successIcon(Icon(_.name := "thumbs-up", _.variant := "solid")()),
            _.slots.errorIcon(Icon(_.name := "xmark", _.variant := "solid")())
          )()
        }
      )().withLocator,
      Demo(
        title = "Copying Values From Other Elements",
        description = """
        | Normally, the data that gets copied will come from the component's `value` attribute, but you can copy data from any element within the same document by providing its `id` to the `from` attribute.
        | When using the `from` attribute, the element's `textContent` will be copied by default. Passing an attribute or property modifier will let you copy data from one of the element's attributes or properties instead.
        """.stripMargin,
        content = Source.annotate {
          div(
            // Copies the span's textContent
            span(idAttr := "my-phone", "+1 (234) 456-7890"),
            " ",
            CopyButton(_.from := "my-phone")(),
            br(),
            br(),

            // Copies the input's "value" property
            span(
              tw.flex.itemsCenter.gap1,
              Input(
                _.id    := "my-input",
                _.tpe   := "text",
                _.value := "User input"
              )(
                styleAttr := "display: inline-block; max-width: 300px;"
              ),
              CopyButton(_.from := "my-input.value")()
            ),
            br(),

            // Copies the link's "href" attribute
            a(idAttr := "my-link", href := "https://webawesome.com/", "Web Awesome Website"),
            " ",
            CopyButton(_.from := "my-link[href]")()
          )
        }
      )().withLocator,
      Demo(
        title = "Handling Errors",
        description = """
        | A copy error will occur if the value is an empty string, if the `from` attribute points to an id that doesn't exist, or if the browser rejects the operation for any reason. When this happens, the `wa-error` event will be emitted.
        | This example demonstrates what happens when a copy error occurs. You can customize the error label and icon using the `error-label` attribute and the `error-icon` slot, respectively.
        """.stripMargin,
        content = Source.annotate {
          CopyButton(_.from := "i-do-not-exist")()
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Copy buttons can be disabled by adding the `disabled` attribute.",
        content = Source.annotate {
          CopyButton(
            _.value    := "You can't copy me",
            _.disabled := true
          )()
        }
      )().withLocator,
      Demo(
        title = "Changing Feedback Duration",
        description =
          "A success indicator is briefly shown after copying. You can customize the length of time the indicator is shown using the `feedback-duration` attribute.",
        content = Source.annotate {
          CopyButton(
            _.value            := "Web Awesome rocks!",
            _.feedbackDuration := 250
          )()
        }
      )().withLocator,
      Demo(
        title = "Custom Styles",
        description = "You can customize the button to your liking with CSS.",
        content = Source.annotate {
          div(
            CopyButton(
              _.value := "I'm so stylish",
              _.slots.copyIcon(Icon(_.name := "clipboard")()),
              _.slots.successIcon(Icon(_.name := "thumbs-up")()),
              _.slots.errorIcon(Icon(_.name := "thumbs-down")())
            )(
              className := "custom-styles"
            ),
            styleTag("""
              .custom-styles,
              .custom-styles::part(success-icon),
              .custom-styles::part(error-icon) {
                color: white;
              }

              .custom-styles::part(button) {
                background-color: #ff1493;
                border: solid 2px #ff7ac1;
                border-right-color: #ad005c;
                border-bottom-color: #ad005c;
                border-radius: 6px;
                transition: all var(--wa-transition-slow) var(--wa-transition-easing);
              }

              .custom-styles::part(button):hover {
                transform: scale(1.05);
              }

              .custom-styles::part(button):active {
                transform: translateY(1px);
              }

              .custom-styles::part(button):focus-visible {
                outline: dashed 2px deeppink;
                outline-offset: 4px;
              }
            """)
          )
        }
      )().withLocator
    )
  }
}
