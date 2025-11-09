package examples.formatBytes

@main
def app = {
  example1()
  example2()
  example3()
  example4()
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
      val valueVar = Var("1000")
      
      div(
        p("The file is ", FormatBytes(_.value <-- valueVar.signal.map(_.toDouble))(), " in size."),
        Input(
          _.`type`.number,
          _.value <-- valueVar,
          _.label := "Number to Format"
        )(
          onInput.mapToValue --> valueVar,
          maxWidth.px(180)
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
      FormatBytes(_.value := 12)()
      FormatBytes(_.value := 1200)()
      FormatBytes(_.value := 1200000)()
      FormatBytes(_.value := 1200000000)()
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
      FormatBytes(_.value := 12, _.unit.bit)()
      FormatBytes(_.value := 1200, _.unit.bit)()
      FormatBytes(_.value := 1200000, _.unit.bit)()
      FormatBytes(_.value := 1200000000, _.unit.bit)()
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
      FormatBytes(_.value := 1200000, _.display.long)()
      FormatBytes(_.value := 1200000, _.display.short)()
      FormatBytes(_.value := 1200000, _.display.narrow)()
    })
  }
}
