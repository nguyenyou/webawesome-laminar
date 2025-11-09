package examples.resizeObserver

@main
def app = {
  example1()
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
        ResizeObserver(
          _.onResize.map { event =>
            dom.console.log(event.detail)
          } --> Observer.empty
        )(
          div(
            cls("flex items-center justify-center text-center"),
            border  := "2px solid var(--wa-color-surface-border)",
            padding := "4rem 2rem",
            "Resize this box and watch the console 👉"
          )
        )
      )
    })
  }
}
