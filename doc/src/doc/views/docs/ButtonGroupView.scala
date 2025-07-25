package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class ButtonGroupView()
    extends ExampleView(
      "ButtonGroup",
      Some("https://webawesome.com/docs/components/button-group/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        ButtonGroup(_.label := "Alignment")(
          Button()("Left"),
          Button()("Center"),
          Button()("Right")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Button Sizes",
        description = """
          | Unless otherwise specified, the size of buttons will be determined by the Button Group's `size` attribute.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap4,
            // <show>
            ButtonGroup(_.size := "small", _.label := "Alignment")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            ),
            ButtonGroup(_.size := "medium", _.label := "Alignment")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            ),
            ButtonGroup(_.size := "large", _.label := "Alignment")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Vertical Button Groups",
        description = """
          | Set the `orientation` attribute to `vertical` to make a vertical button group.
        """.stripMargin,
        content = Source.annotate {
          // <show>
          ButtonGroup(_.orientation := "vertical", _.label := "Options")(
            maxWidth.px(120),
            Button(
              _.slots.start(Icon(_.name := "plus")())
            )("New"),
            Button(
              _.slots.start(Icon(_.name := "folder-open")())
            )("Open"),
            Button(
              _.slots.start(Icon(_.name := "save")())
            )("Save"),
            Button(
              _.slots.start(Icon(_.name := "print")())
            )("Print")
          )
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Theme Buttons",
        description = """
          | Theme buttons are supported through the button group's `variant` attribute.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap4,
            // <show>
            ButtonGroup(_.label := "Alignment", _.variant := "brand")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            ),
            ButtonGroup(_.label := "Alignment", _.variant := "success")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            ),
            ButtonGroup(_.label := "Alignment")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            ),
            ButtonGroup(_.label := "Alignment", _.variant := "warning")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            ),
            ButtonGroup(_.label := "Alignment", _.variant := "danger")(
              Button()("Left"),
              Button()("Center"),
              Button()("Right")
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        description = """
          | You can still use the buttons' own `variant` attribute to override the inherited variant.
        """.stripMargin,
        content = Source.annotate {
          // <show>
          ButtonGroup(_.label := "Alignment", _.variant := "brand")(
            Button()("Left"),
            Button()("Center"),
            Button(_.variant := "neutral")("Right")
          )
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Pill Buttons",
        description = """
          | Pill buttons are supported through the button's `pill` attribute.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap4,
            // <show>
            ButtonGroup(_.label := "Alignment")(
              Button(_.size := "small", _.pill := true)("Left"),
              Button(_.size := "small", _.pill := true)("Center"),
              Button(_.size := "small", _.pill := true)("Right")
            ),
            ButtonGroup(_.label := "Alignment")(
              Button(_.size := "medium", _.pill := true)("Left"),
              Button(_.size := "medium", _.pill := true)("Center"),
              Button(_.size := "medium", _.pill := true)("Right")
            ),
            ButtonGroup(_.label := "Alignment")(
              Button(_.size := "large", _.pill := true)("Left"),
              Button(_.size := "large", _.pill := true)("Center"),
              Button(_.size := "large", _.pill := true)("Right")
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Dropdowns in Button Groups",
        description = """
          | Dropdowns can be placed into button groups.
        """.stripMargin,
        content = Source.annotate {
          // <show>
          ButtonGroup(_.label := "Example Button Group")(
            Button()("Button"),
            Dropdown(
              _.slots.trigger(
                Button(_.withCaret := true)("Dropdown")
              )
            )(
              DropdownItem()("Item 1"),
              DropdownItem()("Item 2"),
              DropdownItem()("Item 3")
            ),
            Button()("Button")
          )
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Split Buttons",
        description = """
          | Create a split button using a button and a dropdown. Use a visually hidden label to ensure 
          | the dropdown is accessible to users with assistive devices.
        """.stripMargin,
        content = Source.annotate {
          // <show>
          ButtonGroup(_.label := "Example Button Group")(
            Button(_.variant := "brand")("Save"),
            Dropdown(
              _.placement := "bottom-end",
              _.slots.trigger(
                Button(_.variant := "brand")(
                  Icon(_.name := "chevron-down", _.label := "More options")()
                )
              )
            )(
              DropdownItem()("Save"),
              DropdownItem()("Save as…"),
              DropdownItem()("Save all")
            )
          )
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Tooltips in Button Groups",
        description = """
          | Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.
        """.stripMargin,
        content = Source.annotate {
          div(
            // <show>
            ButtonGroup(_.label := "Alignment")(
              Button(_.id := "button-left")("Left"),
              Button(_.id := "button-center")("Center"),
              Button(_.id := "button-right")("Right")
            ),
            Tooltip(_.forId := "button-left")("I'm on the left"),
            Tooltip(_.forId := "button-center")("I'm in the middle"),
            Tooltip(_.forId := "button-right")("I'm on the right")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Toolbar Example",
        description = """
          | Create interactive toolbars with button groups.
        """.stripMargin,
        content = Source.annotate {
          div(
            styleTag(
              """
              .button-group-toolbar wa-button-group:not(:last-of-type) {
                margin-right: var(--wa-space-xs);
              }
              """
            ),
            div(
              className := "button-group-toolbar",
              // <show>
              ButtonGroup(_.label := "History")(
                Button(_.id := "undo-button")(
                  Icon(_.name := "undo", _.variant := "solid", _.label := "Undo")()
                ),
                Button(_.id := "redo-button")(
                  Icon(_.name := "redo", _.variant := "solid", _.label := "Redo")()
                )
              ),
              ButtonGroup(_.label := "Formatting")(
                Button(_.id := "button-bold")(
                  Icon(_.name := "bold", _.variant := "solid", _.label := "Bold")()
                ),
                Button(_.id := "button-italic")(
                  Icon(_.name := "italic", _.variant := "solid", _.label := "Italic")()
                ),
                Button(_.id := "button-underline")(
                  Icon(_.name := "underline", _.variant := "solid", _.label := "Underline")()
                )
              ),
              ButtonGroup(_.label := "Alignment")(
                Button(_.id := "button-align-left")(
                  Icon(_.name := "align-left", _.variant := "solid", _.label := "Align Left")()
                ),
                Button(_.id := "button-align-center")(
                  Icon(_.name := "align-center", _.variant := "solid", _.label := "Align Center")()
                ),
                Button(_.id := "button-align-right")(
                  Icon(_.name := "align-right", _.variant := "solid", _.label := "Align Right")()
                )
              )
              // </show>
            ),
            Tooltip(_.forId := "undo-button")("Undo"),
            Tooltip(_.forId := "redo-button")("Redo"),
            Tooltip(_.forId := "button-bold")("Bold"),
            Tooltip(_.forId := "button-italic")("Italic"),
            Tooltip(_.forId := "button-underline")("Underline"),
            Tooltip(_.forId := "button-align-left")("Align Left"),
            Tooltip(_.forId := "button-align-center")("Align Center"),
            Tooltip(_.forId := "button-align-right")("Align Right")
          )
        }
      )().withLocator
    )
  }

}
