package examples.dropdown

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
  example7()
  example8()
  example9()
  example10()
  example11()
  example12()
}

def example1() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example1")
  if (container != null) {
    render(container, {
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
          _.`type`.checkbox,
          _.checked := true
        )("Emoji Shortcuts"),
        DropdownItem(
          _.`type`.checkbox,
          _.checked := true
        )("Word Wrap"),
        Divider()(),
        DropdownItem(
          _.variant.danger,
          _.slots.icon(Icon(_.name := "trash")())
        )("Delete")
      )
    })
  }
}

def example2() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example2")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example3() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example3")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example4() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example4")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example5() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example5")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example6() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example6")
  if (container != null) {
    render(container, {
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
        DropdownItem(_.`type`.checkbox, _.value := "canvas", _.checked := true)("Show canvas"),
        DropdownItem(_.`type`.checkbox, _.value := "grid", _.checked := true)("Show grid"),
        DropdownItem(_.`type`.checkbox, _.value := "source")("Show source"),
        Divider()(),
        DropdownItem(_.value := "preferences")("Preferences…")
      )
    })
  }
}

def example7() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example7")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example8() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example8")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example9() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example9")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example10() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example10")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example11() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example11")
  if (container != null) {
    render(container, {
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
          _.slots.submenu(DropdownItem(_.`type`.checkbox, _.value := "compress")("Compress files")),
          _.slots.submenu(
            DropdownItem(_.`type`.checkbox, _.checked := true, _.value := "metadata")("Include metadata")
          ),
          _.slots.submenu(DropdownItem(_.`type`.checkbox, _.value := "password")("Password protect"))
        )("Options")
      )
    })
  }
}

def example12() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example12")
  if (container != null) {
    render(container, {
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
    })
  }
}
