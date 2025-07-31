package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

import scala.language.implicitConversions

case class SelectView()
    extends ExampleView(
      "Select",
      Some("https://webawesome.com/docs/components/select/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        val selectedVar = Var("")
        Select(
          _.value <-- selectedVar,
          _.onInput.mapToValue --> selectedVar
        )(
          UOption(_.value := "")("Option 1"),
          UOption(_.value := "option-2")("Option 2"),
          UOption(_.value := "option-3")("Option 3"),
          UOption(_.value := "option-4")("Option 4"),
          UOption(_.value := "option-5")("Option 5"),
          UOption(_.value := "option-6")("Option 6")
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Labels",
        description =
          "Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.",
        content = Source.annotate {
          Select(
            _.label := "Select one"
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to a select with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          Select(
            _.label := "Experience",
            _.hint  := "Please tell us your skill level."
          )(
            UOption(_.value := "1")("Novice"),
            UOption(_.value := "2")("Intermediate"),
            UOption(_.value := "3")("Advanced")
          )
        }
      )().withLocator,
      Demo(
        title = "Placeholders",
        description = "Use the `placeholder` attribute to add a placeholder.",
        content = Source.annotate {
          Select(
            _.placeholder := "Select one"
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Clearable",
        description =
          "Use the `with-clear` attribute to make the control clearable. The clear button only appears when an option is selected.",
        content = Source.annotate {
          Select(
            _.withClear := true,
            _.value     := "option-1"
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description = "Use the `appearance` attribute to change the select's visual appearance.",
        content = Source.annotate {
          Select(
            _.appearance.filled
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Pill",
        description = "Use the `pill` attribute to give selects rounded edges.",
        content = Source.annotate {
          Select(
            _.pill := true
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable a select.",
        content = Source.annotate {
          Select(
            _.placeholder := "Disabled",
            _.disabled    := true
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Multiple",
        description =
          "To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `with-clear` when this option is enabled. You can select multiple options by adding the `selected` attribute to individual options.",
        content = Source.annotate {
          Select(
            _.label     := "Select a Few",
            _.multiple  := true,
            _.withClear := true
          )(
            UOption(_.value := "option-1", _.selected := true)("Option 1"),
            UOption(_.value := "option-2", _.selected := true)("Option 2"),
            UOption(_.value := "option-3", _.selected := true)("Option 3"),
            UOption(_.value := "option-4")("Option 4"),
            UOption(_.value := "option-5")("Option 5"),
            UOption(_.value := "option-6")("Option 6")
          )
        }
      )().withLocator,
      Callout(
        _.variant.brand,
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "Selecting multiple options may result in wrapping, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once."
      ),
      Demo(
        title = "Setting Initial Values",
        description =
          "Use the `selected` attribute on individual options to set the initial selection, similar to native HTML.",
        content = Source.annotate {
          Select()(
            UOption(_.value := "option-1", _.selected := true)("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3"),
            UOption(_.value := "option-4")("Option 4")
          )
        }
      )().withLocator,
      Demo(
        description = "For multiple selections, apply it to all selected options.",
        content = Source.annotate {
          Select(
            _.multiple  := true,
            _.withClear := true
          )(
            UOption(_.value := "option-1", _.selected := true)("Option 1"),
            UOption(_.value := "option-2", _.selected := true)("Option 2"),
            UOption(_.value := "option-3")("Option 3"),
            UOption(_.value := "option-4")("Option 4")
          )
        }
      )().withLocator,
      Callout(
        _.variant.brand,
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "Framework users can bind directly to the `value` property for reactive data binding and form state management."
      ),
      Demo(
        title = "Grouping Options",
        description =
          "Use `<wa-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.",
        content = Source.annotate {
          Select()(
            small("Section 1"),
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3"),
            Divider()(),
            small("Section 2"),
            UOption(_.value := "option-4")("Option 4"),
            UOption(_.value := "option-5")("Option 5"),
            UOption(_.value := "option-6")("Option 6")
          )
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change a select's size.",
        content = Source.annotate {
          div(
            tw.spaceY4,
            Select(
              _.placeholder := "Small",
              _.size.small
            )(
              UOption(_.value := "option-1")("Option 1"),
              UOption(_.value := "option-2")("Option 2"),
              UOption(_.value := "option-3")("Option 3")
            ),
            Select(
              _.placeholder := "Medium",
              _.size.medium
            )(
              UOption(_.value := "option-1")("Option 1"),
              UOption(_.value := "option-2")("Option 2"),
              UOption(_.value := "option-3")("Option 3")
            ),
            Select(
              _.placeholder := "Large",
              _.size.large
            )(
              UOption(_.value := "option-1")("Option 1"),
              UOption(_.value := "option-2")("Option 2"),
              UOption(_.value := "option-3")("Option 3")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Placement",
        description =
          "The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.",
        content = Source.annotate {
          Select(
            _.placement.top
          )(
            UOption(_.value := "option-1")("Option 1"),
            UOption(_.value := "option-2")("Option 2"),
            UOption(_.value := "option-3")("Option 3")
          )
        }
      )().withLocator,
      Demo(
        title = "Start & End Decorations",
        description =
          "Use the `start` and `end` slots to add presentational elements like `<wa-icon>` within the combobox.",
        content = Source.annotate {
          div(
            tw.spaceY4,
            Select(
              _.placeholder := "Small",
              _.size.small,
              _.withClear := true,
              _.slots.start(Icon(_.name := "house", _.variant := "solid")()),
              _.slots.end(Icon(_.name := "flag-checkered")())
            )(
              UOption(_.value := "option-1")("Option 1"),
              UOption(_.value := "option-2")("Option 2"),
              UOption(_.value := "option-3")("Option 3")
            ),
            Select(
              _.placeholder := "Medium",
              _.size.medium,
              _.withClear := true,
              _.slots.start(Icon(_.name := "house", _.variant := "solid")()),
              _.slots.end(Icon(_.name := "flag-checkered")())
            )(
              UOption(_.value := "option-1")("Option 1"),
              UOption(_.value := "option-2")("Option 2"),
              UOption(_.value := "option-3")("Option 3")
            ),
            Select(
              _.placeholder := "Large",
              _.size.large,
              _.withClear := true,
              _.slots.start(Icon(_.name := "house", _.variant := "solid")()),
              _.slots.end(Icon(_.name := "flag-checkered")())
            )(
              UOption(_.value := "option-1")("Option 1"),
              UOption(_.value := "option-2")("Option 2"),
              UOption(_.value := "option-3")("Option 3")
            )
          )
        }
      )().withLocator
    )
  }
}
