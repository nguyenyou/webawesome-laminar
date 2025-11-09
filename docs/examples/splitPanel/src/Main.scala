package examples.splitPanel

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
      SplitPanel(
        _.slots.start(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
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
      SplitPanel(
        _.position := 75,
        _.slots.start(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
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
      SplitPanel(
        _.positionInPixels := 150,
        _.slots.start(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
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
      SplitPanel(
        _.orientation.vertical,
        _.style := "height: 400px;",
        _.slots.start(
          div(
            background := "var(--wa-color-surface-lowered)",
            cls("h-full flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            background := "var(--wa-color-surface-lowered)",
            cls("h-full flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
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
        cls("split-panel-snapping"),
        styleTag("""
          .split-panel-snapping {
            position: relative;
          }
      
          .split-panel-snapping-dots::before,
          .split-panel-snapping-dots::after {
            content: '';
            position: absolute;
            bottom: -12px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--wa-color-neutral-fill-loud);
            transform: translateX(-3px);
          }
      
          .split-panel-snapping-dots::before {
            left: 100px;
          }
      
          .split-panel-snapping-dots::after {
            left: 50%;
          }
        """),
        SplitPanel(
          _.snap := "100px 50%",
          _.slots.start(
            div(
              height.px(200),
              background := "var(--wa-color-surface-lowered)",
              cls("flex items-center justify-center overflow-hidden"),
              "Start"
            )
          ),
          _.slots.end(
            div(
              height.px(200),
              background := "var(--wa-color-surface-lowered)",
              cls("flex items-center justify-center overflow-hidden"),
              "End"
            )
          )
        )(),
        div(cls("split-panel-snapping-dots"))
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
      SplitPanel(
        _.disabled := true,
        _.slots.start(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
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
      SplitPanel(
        _.style := "--min: 150px; --max: calc(100% - 150px);",
        _.slots.start(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
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
      SplitPanel(
        _.slots.start(
          div(
            height.px(400),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            SplitPanel(
              _.orientation.vertical,
              _.style := "height: 400px;",
              _.slots.start(
                div(
                  background := "var(--wa-color-surface-lowered)",
                  cls("h-full flex items-center justify-center overflow-hidden"),
                  "Top"
                )
              ),
              _.slots.end(
                div(
                  background := "var(--wa-color-surface-lowered)",
                  cls("h-full flex items-center justify-center overflow-hidden"),
                  "Bottom"
                )
              )
            )()
          )
        )
      )()
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
      SplitPanel(
        _.style := "--divider-width: 20px;",
        _.slots.divider(
          Icon(
            _.name := "grip-vertical"
          )()
        ),
        _.slots.start(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "Start"
          )
        ),
        _.slots.end(
          div(
            height.px(200),
            background := "var(--wa-color-surface-lowered)",
            cls("flex items-center justify-center overflow-hidden"),
            "End"
          )
        )
      )()
    })
  }
}
