package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.components.Markdown

case class DropdownView()
    extends ExampleView(
      "Dropdown",
      Some("https://webawesome.com/docs/components/dropdown/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        Dropdown(
          _.slots.trigger(
            Button(_.withCaret := true)("View")
          )
        )(
          DropdownItem(
            _.slots.icon(Icon(_.name := "scissors")())
          )("Cut"),
          DropdownItem(
            _.slots.icon(Icon(_.name := "copy")())
          )("Copy"),
          DropdownItem(
            _.slots.icon(Icon(_.name := "paste")())
          )("Paste"),
          Divider()(),
          DropdownItem(
            _.slots.submenu(DropdownItem(_.value := "show-all-images")("Show All Images")),
            _.slots.submenu(DropdownItem(_.value := "show-thumbnails")("Show Thumbnails"))
          )("Show images"),
          Divider()(),
          DropdownItem(
            _.`type`  := "checkbox",
            _.checked := true
          )("Emoji Shortcuts"),
          DropdownItem(
            _.`type`  := "checkbox",
            _.checked := true
          )("Word Wrap"),
          Divider()(),
          DropdownItem(
            _.variant := "danger",
            _.slots.icon(Icon(_.name := "trash")())
          )("Delete")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Getting the Selected Item",
        description =
          "When an item is selected, the `wa-select` event will be emitted by the dropdown. You can inspect `event.detail.item` to get a reference to the selected item. If you've provided a value for each [dropdown item](/docs/components/dropdown-item), it will be available in `event.detail.item.value`.",
        content = Source.annotate {
          div(
            Dropdown(
              _.onSelect.map(_.detail.item.value.toOption) --> Observer[Option[String]](println),
              _.slots.trigger(
                Button(_.withCaret := true)("View")
              )
            )(
              DropdownItem(_.value := "full-screen")("Enter full screen"),
              DropdownItem(_.value := "actual")("Actual size"),
              DropdownItem(_.value := "zoom-in")("Zoom in"),
              DropdownItem(_.value := "zoom-out")("Zoom out")
            )
          )
        }
      )().withLocator,
      Callout(
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        Markdown(
          "To keep the dropdown open after selection, call `event.preventDefault()` in the `wa-select` event's callback."
        )()
      ),
      Demo(
        title = "Showing Icons",
        description = """
          |Use the `icon` slot to add icons to [dropdown items](/docs/components/dropdown-item). This works best with [icon](/docs/components/icon) elements..
          """.stripMargin,
        content = Source.annotate {
          div(
            Dropdown(
              _.onSelect.map(_.detail.item.value.toOption) --> Observer[Option[String]](println),
              _.slots.trigger(
                Button(_.withCaret := true)("Edit")
              )
            )(
              DropdownItem(_.value := "cut", _.slots.icon(Icon(_.name := "scissors")()))("Cut"),
              DropdownItem(_.value := "copy", _.slots.icon(Icon(_.name := "copy")()))("Copy"),
              DropdownItem(_.value := "paste", _.slots.icon(Icon(_.name := "paste")()))("Paste"),
              DropdownItem(_.value := "delete", _.slots.icon(Icon(_.name := "trash")()))("Delete")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Showing Labels & Dividers",
        description = """
          |Use any heading, e.g. `<h1>`–`<h6>` to add labels and the [`<wa-divider>`](/docs/components/divider) element for separators.
          """.stripMargin,
        content = Source.annotate {
          div(
            Dropdown(
              _.onSelect.map(_.detail.item.value.toOption) --> Observer[Option[String]](println),
              _.slots.trigger(
                Button(_.withCaret := true)("Device")
              )
            )(
              h3("Type"),
              DropdownItem(_.value := "phone")("Phone"),
              DropdownItem(_.value := "tablet")("Tablet"),
              DropdownItem(_.value := "desktop")("Desktop"),
              Divider()(),
              DropdownItem(_.value := "more")("More options...")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Showing Details",
        description = """
          |Use the `details` slot to display details, such as keyboard shortcuts, inside [dropdown items](/docs/components/dropdown-item).
          """.stripMargin,
        content = Source.annotate {
          div(
            Dropdown(
              _.onSelect.map(_.detail.item.value.toOption) --> Observer[Option[String]](println),
              _.slots.trigger(
                Button(_.withCaret := true)("Message")
              )
            )(
              DropdownItem(
                _.value := "reply",
                _.slots.details(span("⌘R"))
              )("Reply"),
              DropdownItem(
                _.value := "forward",
                _.slots.details(span("⌘F"))
              )("Forward"),
              DropdownItem(
                _.value := "move",
                _.slots.details(span("⌘M"))
              )("Move"),
              Divider()(),
              DropdownItem(
                _.value := "archive",
                _.slots.details(span("⌘A"))
              )("Archive"),
              DropdownItem(
                _.value := "delete",
                _.slots.details(span("Del"))
              )("Delete")
            )
          )
        }
      )().withLocator
    )
  }

}
