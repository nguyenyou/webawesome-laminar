package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.components.Markdown
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

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
          Dropdown(
            _.slots.trigger(
              Button(_.withCaret := true)("Edit")
            )
          )(
            DropdownItem(_.value := "cut", _.slots.icon(Icon(_.name := "scissors")()))("Cut"),
            DropdownItem(_.value := "copy", _.slots.icon(Icon(_.name := "copy")()))("Copy"),
            DropdownItem(_.value := "paste", _.slots.icon(Icon(_.name := "paste")()))("Paste"),
            DropdownItem(_.value := "delete", _.slots.icon(Icon(_.name := "trash")()))("Delete")
          )
        }
      )().withLocator,
      Demo(
        title = "Showing Labels & Dividers",
        description = """
          |Use any heading, e.g. `<h1>`–`<h6>` to add labels and the [`<wa-divider>`](/docs/components/divider) element for separators.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
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
        }
      )().withLocator,
      Demo(
        title = "Showing Details",
        description = """
          |Use the `details` slot to display details, such as keyboard shortcuts, inside [dropdown items](/docs/components/dropdown-item).
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
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
        }
      )().withLocator,
      Demo(
        title = "Checkable Items",
        description = """
          |You can turn a [dropdown item](/docs/components/dropdown-item) into a checkable option by setting `type="checkbox"`. Add the `checked` attribute to make it checked initially. When clicked, the item's checked state will toggle and the dropdown will close. You can cancel the `wa-select` event if you want to keep it open instead.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
            _.onSelect.map { event =>
              event.detail.item.`type`.toOption match {
                case Some("checkbox") =>
                  println(event.detail.item.value.toOption)
                  println(event.detail.item.checked.toOption)
                case _ =>
                  println(event.detail.item.value.toOption)
              }
            } --> Observer.empty,
            _.slots.trigger(
              Button(_.withCaret := true)("View")
            )
          )(
            DropdownItem(_.`type` := "checkbox", _.value := "canvas", _.checked := true)("Show canvas"),
            DropdownItem(_.`type` := "checkbox", _.value := "grid", _.checked := true)("Show grid"),
            DropdownItem(_.`type` := "checkbox", _.value := "source")("Show source"),
            Divider()(),
            DropdownItem(_.value := "preferences")("Preferences…")
          )
        }
      )().withLocator,
      Callout(
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "When a checkable option exists anywhere in the dropdown, all items will receive additional padding so they align properly."
      ),
      Demo(
        title = "Destructive Items",
        description = """
          |Add `variant="danger"` to any [dropdown item](/docs/components/dropdown-item) to highlight that it's a dangerous action.
          """.stripMargin,
        content = Source.annotate {
          div(
            Dropdown(
              _.slots.trigger(
                Button(_.withCaret := true)("Project")
              )
            )(
              DropdownItem(
                _.value := "share",
                _.slots.icon(
                  Icon(_.name := "share")()
                )
              )("Share"),
              DropdownItem(
                _.value := "preferences",
                _.slots.icon(
                  Icon(_.name := "gear")()
                )
              )("Preferences"),
              Divider()(),
              h3("Danger zone"),
              DropdownItem(
                _.value := "archive",
                _.slots.icon(
                  Icon(_.name := "archive")()
                )
              )("Archive"),
              DropdownItem(
                _.value   := "delete",
                _.variant := "danger",
                _.slots.icon(
                  Icon(_.name := "trash")()
                )
              )("Delete")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Placement",
        description = """
          |The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
            _.slots.trigger(
              Button(
                _.withCaret := true,
                _.slots.end(
                  Icon(_.name := "chevron-right")()
                )
              )("File formats")
            )
          )(
            DropdownItem(_.value := "pdf")("PDF Document"),
            DropdownItem(_.value := "docx")("Word Document"),
            DropdownItem(_.value := "xlsx")("Excel Spreadsheet"),
            DropdownItem(_.value := "pptx")("PowerPoint Presentation"),
            DropdownItem(_.value := "txt")("Plain Text"),
            DropdownItem(_.value := "json")("JSON File")
          )
        }
      )().withLocator,
      Demo(
        title = "Distance",
        description = """
          |The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
            _.distance := 30.0,
            _.slots.trigger(
              Button(_.withCaret := true)("Edit")
            )
          )(
            DropdownItem()("Cut"),
            DropdownItem()("Copy"),
            DropdownItem()("Paste"),
            Divider()(),
            DropdownItem()("Find"),
            DropdownItem()("Replace")
          )
        }
      )().withLocator,
      Demo(
        title = "Offset",
        description = """
          |The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
            _.skidding := 30.0,
            _.slots.trigger(
              Button(_.withCaret := true)("Edit")
            )
          )(
            DropdownItem()("Cut"),
            DropdownItem()("Copy"),
            DropdownItem()("Paste"),
            Divider()(),
            DropdownItem()("Find"),
            DropdownItem()("Replace")
          )
        }
      )().withLocator,
      Demo(
        title = "Submenus",
        description = """
          |To create submenus, nest [dropdown items](/docs/components/dropdown-item) inside of a dropdown item and assign `slot="submenu"` to each one. You can also add [dividers](/docs/components/divider) as needed.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
            _.slots.trigger(
              Button(_.withCaret := true)("Export")
            )
          )(
            DropdownItem(
              _.slots.submenu(DropdownItem(_.value := "pdf")("PDF")),
              _.slots.submenu(DropdownItem(_.value := "docx")("Word Document"))
            )("Documents"),
            DropdownItem(
              _.slots.submenu(
                DropdownItem(
                  _.slots.submenu(DropdownItem(_.value := "xlsx")("Excel (.xlsx)")),
                  _.slots.submenu(DropdownItem(_.value := "xls")("Excel 97-2003 (.xls)")),
                  _.slots.submenu(DropdownItem(_.value := "csv")("CSV (.csv)"))
                )("Excel Formats")
              ),
              _.slots.submenu(
                DropdownItem(
                  _.slots.submenu(DropdownItem(_.value := "ods")("OpenDocument (.ods)")),
                  _.slots.submenu(DropdownItem(_.value := "tsv")("Tab-separated (.tsv)")),
                  _.slots.submenu(DropdownItem(_.value := "json")("JSON (.json)"))
                )("Other Formats")
              ),
              _.slots.submenu(DropdownItem(_.value := "numbers")("Apple Numbers"))
            )("Spreadsheets"),
            Divider()(),
            DropdownItem(
              _.slots.submenu(DropdownItem(_.`type` := "checkbox", _.value := "compress")("Compress files")),
              _.slots.submenu(
                DropdownItem(_.`type` := "checkbox", _.checked := true, _.value := "metadata")("Include metadata")
              ),
              _.slots.submenu(DropdownItem(_.`type` := "checkbox", _.value := "password")("Password protect"))
            )("Options")
          )
        }
      )().withLocator,
      Callout(
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "Dropdown items that have a submenu will not dispatch the `wa-select` event. However, items inside the submenu will, unless they also have a submenu."
      ),
      Callout(
        _.variant := "warning",
        _.slots.icon(Icon(_.name := "triangle-exclamation")())
      )(
        tw.mt2,
        "As a UX best practice, avoid using more than one level of submenu when possible."
      ),
      Demo(
        title = "Disabling Items",
        description = """
          |Add the `disabled` attribute to any [dropdown item](/docs/components/dropdown-item) to disable it.
          """.stripMargin,
        content = Source.annotate {
          Dropdown(
            _.slots.trigger(
              Button(_.withCaret := true)("Payment method")
            )
          )(
            DropdownItem(_.value := "cash")("Cash"),
            DropdownItem(_.value := "check", _.disabled := true)("Personal check"),
            DropdownItem(_.value := "credit")("Credit card"),
            DropdownItem(_.value := "gift-card")("Gift card")
          )
        }
      )().withLocator
    )
  }

}
