package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class TextareaView()
    extends ExampleView(
      "Textarea",
      Some("https://webawesome.com/docs/components/textarea/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        Textarea(_.label := "Type something', will ya")()
      }
    )().withLocator
  }
  
  def component: HtmlElement = {
    div(
      Demo(
        title = "Labels",
        description = "Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.",
        content = Source.annotate {
          Textarea(_.label := "Comments")()
        }
      )().withLocator,
      
      Demo(
        title = "Hint",
        description = "Add descriptive hint to a textarea with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          Textarea(_.label := "Feedback", _.hint := "Please tell us what you think.")()
        }
      )().withLocator,
      
      Demo(
        title = "Rows",
        description = "Use the `rows` attribute to change the number of text rows that get shown.",
        content = Source.annotate {
          Textarea(_.rows := 2)()
        }
      )().withLocator,
      
      Demo(
        title = "Placeholders",
        description = "Use the `placeholder` attribute to add a placeholder.",
        content = Source.annotate {
          Textarea(_.placeholder := "Type something")()
        }
      )().withLocator,
      
      Demo(
        title = "Appearance",
        description = "Use the `appearance` attribute to change the textarea's visual appearance.",
        content = Source.annotate {
          Textarea(_.placeholder := "Type something", _.appearance := "filled")()
        }
      )().withLocator,
      
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable a textarea.",
        content = Source.annotate {
          Textarea(_.placeholder := "Textarea", _.disabled := true)()
        }
      )().withLocator,
      
      Demo(
        title = "Value",
        description = "Use the `value` attribute to set an initial value.",
        content = Source.annotate {
          Textarea(_.value := "Write something awesome!")()
        }
      )().withLocator,
      
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change a textarea's size.",
        content = Source.annotate {
          div(
            tw.spaceY4,
            // <show>
            Textarea(_.placeholder := "Small", _.size := "small")(),
            Textarea(_.placeholder := "Medium", _.size := "medium")(),
            Textarea(_.placeholder := "Large", _.size := "large")()
            // </show>
          )
        }
      )().withLocator,
      
      Demo(
        title = "Prevent Resizing",
        description = "By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.",
        content = Source.annotate {
          Textarea(_.resize := "none")()
        }
      )().withLocator,
      
      Demo(
        title = "Expand with Content",
        description = "Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.",
        content = Source.annotate {
          Textarea(_.resize := "auto")()
        }
      )().withLocator,
      
      Demo(
        title = "Resize horizontal",
        description = "Textareas can be made to resize horizontally when `resize` is set to `\"horizontal\"`",
        content = Source.annotate {
          Textarea(_.resize := "horizontal")()
        }
      )().withLocator,
      
      Demo(
        title = "Resize both",
        description = "Textareas can be made to resize both vertically and horizontally when `resize` is set to `\"both\"`",
        content = Source.annotate {
          Textarea(_.resize := "both")()
        }
      )().withLocator
    )
  }
}
