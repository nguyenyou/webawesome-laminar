package www

import org.scalajs.dom
import com.raquo.laminar.api.L.*

object Main {
  @main
  def run(): Unit = {
    render(dom.document.getElementById("app"), div("Mill + Vite + Scala.js"))
  }

  def hello(): String = "Hello World"
}
