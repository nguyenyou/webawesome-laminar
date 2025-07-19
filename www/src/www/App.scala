package www

import com.raquo.laminar.api.L.*
import io.github.nguyenyou.webawesome.laminar.*

case class App() {
  def apply(): HtmlElement = {
    div(
      h1("WebAwesome Laminar Components Demo"),
      div(
        h2("Basic Components"),
        Button(
          _.variant := "success",
          _.slots.start(
            Icon(
              _.name := "check"
            )()
          )
        )(
          "Click me"
        )
      )
    )
  }
}
