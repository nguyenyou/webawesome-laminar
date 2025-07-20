package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
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
      )().withLocator
    )
  }

}
