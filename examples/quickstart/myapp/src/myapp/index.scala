package myapp

import org.scalajs.dom

import com.raquo.laminar.api.L.*
import io.github.nguyenyou.webawesome.laminar.*

@main
def main(): Unit = {
  val container = dom.document.getElementById("app")
  render(
    container,
    div(  
      Button()("Click me")
    )
  )
}