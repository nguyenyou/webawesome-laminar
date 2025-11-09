package examples.drawer

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
  example13()
  example14()
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
        Drawer(
          _.open <-- openEvent,
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button()(
          onClick.mapTo(true) --> openEvent,
          "Open Drawer"
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
        Drawer(
          _.open <-- openEvent,
          _.label         := "Drawer",
          _.withoutHeader := true,
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button()(
          onClick.mapTo(true) --> openEvent,
          "Open Drawer"
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
        Drawer(
          _.open <-- openEvent,
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button()(
          onClick.mapTo(true) --> openEvent,
          "Open Drawer"
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
        Drawer(
          _.id    := "drawer-opening",
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button(
          _.open.drawer("drawer-opening")
        )(
          "Open Drawer"
        )
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
        Drawer(
          _.id    := "drawer-dismiss",
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        Button(
          _.open.drawer("drawer-dismiss")
        )(
          "Open Drawer"
        )
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
        Drawer(
          _.id := "drawer-placement-start",
          _.placement.start,
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("This drawer slides in from the start."),
        Button(
          _.open.drawer("drawer-placement-start")
        )("Open Drawer")
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
        Drawer(
          _.id := "drawer-placement-top",
          _.placement.top,
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("This drawer slides in from the top."),
        Button(
          _.open.drawer("drawer-placement-top")
        )("Open Drawer")
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
        Drawer(
          _.id := "drawer-placement-bottom",
          _.placement.bottom,
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("This drawer slides in from the bottom."),
        Button(
          _.open.drawer("drawer-placement-bottom")
        )("Open Drawer")
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
        Drawer(
          _.id    := "drawer-custom-size",
          _.label := "Drawer",
          _.style := "--size: 50%",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )(
          "This drawer is always 50% of the viewport."
        ),
        Button(
          _.open.drawer("drawer-custom-size")
        )("Open Drawer")
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
      div(
        Drawer(
          _.id    := "drawer-scrolling",
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )(
          div(
            height.vh(150),
            border  := "2px dashed var(--wa-color-surface-border)",
            padding := "0 1rem",
            p(
              "Scroll down and give it a try! 👇"
            )
          )
        ),
        Button(
          _.open.drawer("drawer-scrolling")
        )("Open Drawer")
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
        Drawer(
          _.id    := "drawer-header-actions",
          _.label := "Drawer",
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
              _.close.drawer
            )("Close")
          )
        )(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ),
        Button(
          _.open.drawer("drawer-header-actions")
        )("Open Drawer")
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
      div(
        Drawer(
          _.id           := "drawer-light-dismiss",
          _.lightDismiss := true,
          _.label        := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )("This drawer closes when the user clicks on the overlay."),
        Button(
          _.open.drawer("drawer-light-dismiss")
        )("Open Drawer")
      )
    })
  }
}

def example13() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example13")
  if (container != null) {
    render(container, {
      val closeDrawerButton = Button(
        _.variant.brand,
        _.close.drawer
      )("Only this button will close it")
      
      div(
        Drawer(
          _.id    := "drawer-deny-close",
          _.label := "Drawer",
          _.onHide.map { event =>
            if (event.detail.source != closeDrawerButton.ref) {
              event.preventDefault()
            }
          } --> Observer.empty,
          _.slots.footer(
            closeDrawerButton
          )
        )("This drawer will only close when you click the button below."),
        Button(
          _.open.drawer("drawer-deny-close")
        )("Open Drawer")
      )
    })
  }
}

def example14() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example14")
  if (container != null) {
    render(container, {
      div(
        Drawer(
          _.id    := "drawer-autofocus",
          _.label := "Drawer",
          _.slots.footer(
            Button(
              _.variant.brand,
              _.close.drawer
            )("Close")
          )
        )(
          Input(
            _.autofocus   := true,
            _.placeholder := "I will have focus when the drawer is opened"
          )()
        ),
        Button(
          _.open.drawer("drawer-autofocus")
        )("Open Drawer")
      )
    })
  }
}
