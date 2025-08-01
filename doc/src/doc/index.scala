package doc

import com.raquo.laminar.api.L.*
import org.scalajs.dom

@main
def main(): Unit = {
  val container = dom.document.getElementById("app")
  Option(container).foreach(render(_, App()()))
}
