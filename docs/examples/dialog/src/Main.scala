package examples.dialog

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
      val openEvent = EventBus[Boolean]()
      div(
        Dialog(
          _.open <-- openEvent,
          _.label := "Dialog",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button()(
          onClick.mapTo(true) --> openEvent,
          "Open Dialog"
        )
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
      val openEvent = EventBus[Boolean]()
      div(
        Dialog(
          _.open <-- openEvent,
          _.label         := "Dialog",
          _.withoutHeader := true,
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button()(
          onClick.mapTo(true) --> openEvent,
          "Open Dialog"
        )
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
      val openEvent = EventBus[Boolean]()
      div(
        Dialog(
          _.open <-- openEvent,
          _.label := "Dialog",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button()(
          onClick.mapTo(true) --> openEvent,
          "Open Dialog"
        )
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
      div(
        Dialog(
          _.id    := "dialog-opening", // [!code highlight]
          _.label := "Dialog"
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button(
          _.open.dialog("dialog-opening") // [!code highlight]
        )("Open Dialog")
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
      div(
        Dialog(
          _.id    := "dialog-dismiss", // [!code highlight]
          _.label := "Dialog",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog // [!code highlight]
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button(
          _.open.dialog("dialog-dismiss") // [!code highlight]
        )("Open Dialog")
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
      div(
        Dialog(
          _.id    := "dialog-custom-width",
          _.label := "Dialog",
          _.style := "--width: 50vw;", // [!code highlight]
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ),
        Button(
          _.open.dialog("dialog-custom-width")
        )("Open Dialog")
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
      div(
        Dialog(
          _.id    := "dialog-scrolling",
          _.label := "Dialog",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )(
          div(
            height.vh(150),
            border  := "1px dashed var(--wa-color-surface-border)",
            padding := "0 1rem",
            p(
              "Scroll down and give it a try! 👇"
            )
          )
        ),
        Button(
          _.open.dialog("dialog-scrolling")
        )("Open Dialog")
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
        Dialog(
          _.id    := "dialog-header-actions",
          _.label := "Dialog",
          _.slots.headerActions(
            Button(
              _.appearance.plain
            )(
              onClick --> Observer { _ =>
                window.open(window.location.href)
              },
              Icon(
                _.name  := "arrow-up-right-from-square",
                _.label := "Open in new window"
              )()
            )
          ),
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ),
        Button(
          _.open.dialog("dialog-header-actions")
        )("Open Dialog")
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
        Dialog(
          _.id           := "dialog-light-dismiss",
          _.label        := "Dialog",
          _.lightDismiss := true, // [!code highlight]
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button(
          _.open.dialog("dialog-light-dismiss")
        )("Open Dialog")
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
      val closeDialogButton = Button(
        _.variant.brand,
        _.close.dialog
      )("Only this button will close it")
      
      div(
        Dialog(
          _.id    := "dialog-deny-close",
          _.label := "Dialog",
          _.onHide.map { event =>
            if (event.detail.source != closeDialogButton.ref) {
              event.preventDefault()
            }
          } --> Observer.empty,
          _.slots.footer(
            closeDialogButton
          )
        )("This dialog will only close when you click the button below."),
        Button(
          _.open.dialog("dialog-deny-close")
        )("Open Dialog")
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
      div(
        Dialog(
          _.id    := "dialog-focus",
          _.label := "Dialog",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.dialog
            )("Close")
          )
        )(
          Input(
            _.autofocus   := true, // [!code highlight]
            _.placeholder := "I will have focus when the dialog is opened"
          )()
        ),
        Button(
          _.open.dialog("dialog-focus")
        )("Open Dialog")
      )
    })
  }
}
