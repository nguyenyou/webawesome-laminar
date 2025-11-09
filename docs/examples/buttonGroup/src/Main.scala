package examples.buttonGroup

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
      ButtonGroup(_.label := "Alignment")(
        Button()("Left"),
        Button()("Center"),
        Button()("Right")
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
      ButtonGroup(_.orientation.vertical, _.label := "Options")(
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
      ButtonGroup(_.label := "Alignment", _.variant.brand)(
        Button()("Left"),
        Button()("Center"),
        Button()("Right")
      )
      ButtonGroup(_.label := "Alignment", _.variant.success)(
        Button()("Left"),
        Button()("Center"),
        Button()("Right")
      )
      ButtonGroup(_.label := "Alignment")(
        Button()("Left"),
        Button()("Center"),
        Button()("Right")
      )
      ButtonGroup(_.label := "Alignment", _.variant.warning)(
        Button()("Left"),
        Button()("Center"),
        Button()("Right")
      )
      ButtonGroup(_.label := "Alignment", _.variant.danger)(
        Button()("Left"),
        Button()("Center"),
        Button()("Right")
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
      ButtonGroup(_.label := "Alignment", _.variant.brand)(
        Button()("Left"),
        Button()("Center"),
        Button(_.variant.neutral)("Right")
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
      ButtonGroup(_.label := "Alignment")(
        Button(_.size.small, _.pill := true)("Left"),
        Button(_.size.small, _.pill := true)("Center"),
        Button(_.size.small, _.pill := true)("Right")
      )
      ButtonGroup(_.label := "Alignment")(
        Button(_.size.medium, _.pill := true)("Left"),
        Button(_.size.medium, _.pill := true)("Center"),
        Button(_.size.medium, _.pill := true)("Right")
      )
      ButtonGroup(_.label := "Alignment")(
        Button(_.size.large, _.pill := true)("Left"),
        Button(_.size.large, _.pill := true)("Center"),
        Button(_.size.large, _.pill := true)("Right")
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
      ButtonGroup(_.label := "Example Button Group")(
        Button(_.variant.brand)("Save"),
        Dropdown(
          _.placement.bottomEnd,
          _.slots.trigger(
            Button(_.variant.brand)(
              Icon(_.name := "chevron-down", _.label := "More options")() // [!code highlight]
            )
          )
        )(
          DropdownItem()("Save"),
          DropdownItem()("Save as…"),
          DropdownItem()("Save all")
        )
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
      div(
        ButtonGroup(_.label := "Alignment")(
          Button(_.id := "button-left")("Left"),
          Button(_.id := "button-center")("Center"),
          Button(_.id := "button-right")("Right")
        ),
        Tooltip(_.forId := "button-left")("I'm on the left"),
        Tooltip(_.forId := "button-center")("I'm in the middle"),
        Tooltip(_.forId := "button-right")("I'm on the right")
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
    })
  }
}
