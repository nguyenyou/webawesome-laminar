package doc.components

import com.raquo.laminar.api.L.*
import io.github.nguyenyou.webawesome.laminar.*
import scala.language.implicitConversions
import org.scalajs.dom

case class ThemeSwitcher() extends UIComponent {

  type Theme = "dark" | "light"

  val themeVar = Var[Theme]("dark")

  def render(): HtmlElement = {
    Button(
      _.appearance.plain,
      _.onClick --> Observer { _ =>
        themeVar.update {
          case "dark" => "light"
          case "light" => "dark"
        }
      }
    )(
      themeVar --> Observer[Theme] { theme =>
        theme match {
          case "dark" =>
            dom.document.documentElement.classList.add("wa-dark")
            dom.document.documentElement.classList.add("dark")
          case "light" =>
            dom.document.documentElement.classList.remove("dark")
            dom.document.documentElement.classList.remove("wa-dark")
        }
      },
      Icon(
        _.name <-- themeVar.signal.map {
          case "dark" => "sun"
          case "light" => "moon"
        }
      )()
    )
  }
}
