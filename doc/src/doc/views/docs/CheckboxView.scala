package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class CheckboxView()
    extends ExampleView(
      "Checkbox",
      Some("https://webawesome.com/docs/components/checkbox/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        Checkbox()("Checkbox")
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Checked",
        description = "Use the `checked` attribute to activate the checkbox.",
        content = Source.annotate {
          Checkbox(_.checked := true)("Checked")
        }
      )().withLocator,
      Demo(
        title = "Indeterminate",
        description = "Use the `indeterminate` attribute to make the checkbox indeterminate.",
        content = Source.annotate {
          Checkbox(_.indeterminate := true)("Indeterminate")
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable the checkbox.",
        content = Source.annotate {
          Checkbox(_.disabled := true)("Disabled")
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change a checkbox's size.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap4,
            // <show>
            Checkbox(_.size.small)("Small"),
            Checkbox(_.size.medium)("Medium"),
            Checkbox(_.size.large)("Large")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to a checkbox with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          Checkbox(_.hint := "What should the user know about the checkbox?")("Label")
        }
      )().withLocator,
      Demo(
        title = "Custom Validity",
        description = """
        | Use the `setCustomValidity()` method to set a custom validation message. 
        | This will prevent the form from submitting and make the browser display the error message you provide. 
        | To clear the error, call this function with an empty string.
        """.stripMargin,
        content = Source.annotate {
          form(
            tw.flex.flexCol.itemsStart.gap4,
            Checkbox(
              _.name     := "agree",
              _.required := true
            )("Check me"),
            Button(
              _.`type`.submit,
              _.variant.brand
            )("Submit")
          )
        }
      )().withLocator
    )
  }
}
