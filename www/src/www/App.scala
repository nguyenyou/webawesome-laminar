package www

import com.raquo.laminar.api.L.*
import io.github.nguyenyou.webawesome.laminar.*

case class App() {
  val btn = Button("Click me")
  btn.ref.variant = "brand"

  def apply(): HtmlElement = {
    div(
      h1("WebAwesome Laminar Components Demo"),
      div(
        h2("Basic Components"),
        btn,
      )
    )
  }
}
