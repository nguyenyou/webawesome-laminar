package examples.tooltip

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
  example7()
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
      div(
        Tooltip(
          _.forId := "tooltip-trigger"
        )("This is a tooltip"),
        Button(
          _.id := "tooltip-trigger"
        )("Hover Me")
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
      div(
        styleTag("""
          .tooltip-placement-example {
            width: 250px;
            margin: 1rem;
          }
      
          .tooltip-placement-example wa-button {
            width: 2.5rem;
          }
      
          .tooltip-placement-example-row {
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }
      
          .tooltip-placement-example-row:nth-child(1),
          .tooltip-placement-example-row:nth-child(5) {
            justify-content: center;
          }
        """),
        div(
          cls("tooltip-placement-example"),
          div(
            cls("tooltip-placement-example-row"),
            Button(_.id := "tooltip-top-start")(),
            Button(_.id := "tooltip-top")(),
            Button(_.id := "tooltip-top-end")()
          ),
          div(
            cls("tooltip-placement-example-row"),
            Button(_.id := "tooltip-left-start")(),
            Button(_.id := "tooltip-right-start")()
          ),
          div(
            cls("tooltip-placement-example-row"),
            Button(_.id := "tooltip-left")(),
            Button(_.id := "tooltip-right")()
          ),
          div(
            cls("tooltip-placement-example-row"),
            Button(_.id := "tooltip-left-end")(),
            Button(_.id := "tooltip-right-end")()
          ),
          div(
            cls("tooltip-placement-example-row"),
            Button(_.id := "tooltip-bottom-start")(),
            Button(_.id := "tooltip-bottom")(),
            Button(_.id := "tooltip-bottom-end")()
          )
        ),
        Tooltip(_.forId := "tooltip-top-start", _.placement.topStart)("top-start"),
        Tooltip(_.forId := "tooltip-top", _.placement.top)("top"),
        Tooltip(_.forId := "tooltip-top-end", _.placement.topEnd)("top-end"),
        Tooltip(_.forId := "tooltip-left-start", _.placement.leftStart)("left-start"),
        Tooltip(_.forId := "tooltip-right-start", _.placement.rightStart)("right-start"),
        Tooltip(_.forId := "tooltip-left", _.placement.left)("left"),
        Tooltip(_.forId := "tooltip-right", _.placement.right)("right"),
        Tooltip(_.forId := "tooltip-left-end", _.placement.leftEnd)("left-end"),
        Tooltip(_.forId := "tooltip-right-end", _.placement.rightEnd)("right-end"),
        Tooltip(_.forId := "tooltip-bottom-start", _.placement.bottomStart)("bottom-start"),
        Tooltip(_.forId := "tooltip-bottom", _.placement.bottom)("bottom"),
        Tooltip(_.forId := "tooltip-bottom-end", _.placement.bottomEnd)("bottom-end")
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
      div(
        Tooltip(
          _.forId   := "toggle-button",
          _.trigger := "click"
        )("Click to Toggle"),
        Button(_.id := "toggle-button")("Hover Me")
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
      val openVar = Var(false)
      div(
        Button()(
          onClick --> Observer { _ =>
            openVar.update(!_)
          },
          marginRight.rem(4),
          "Toggle Manually"
        ),
        Tooltip(
          _.open <-- openVar,
          _.forId   := "manual-trigger-tooltip",
          _.trigger := "manual"
        )("This is an avatar!"),
        Avatar(_.id := "manual-trigger-tooltip")()
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
        Tooltip(
          _.forId := "no-arrow",
          _.style := "--wa-tooltip-arrow-size: 0;"
        )("This is a tooltip with no arrow"),
        Button(_.id := "no-arrow")("No Arrow")
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
        Tooltip(
          _.forId := "rich-tooltip",
          _.style := "--wa-tooltip-arrow-size: 0;"
        )(
          div(
            "I'm not ",
            strong("just"),
            " a tooltip, I'm a ",
            em("tooltip"),
            " with HTML!"
          )
        ),
        Button(_.id := "rich-tooltip")("Hover me")
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
        Tooltip(
          _.forId := "wrapping-tooltip",
          _.style := "--max-width: 80px;"
        )(
          "This tooltip will wrap after only 80 pixels."
        ),
        Button(_.id := "wrapping-tooltip")("Hover me")
      )
    })
  }
}
