package examples.qrCode

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
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
      val qrValue = Var("https://shoelace.style/")
      
      div(
        maxWidth.px(256),
        QrCode(
          _.value <-- qrValue.signal,
          _.label := "Scan this code to visit Web Awesome on the web!"
        )(),
        br(),
        Input(
          _.maxlength := 255.0,
          _.withClear := true,
          _.label     := "Value",
          _.value <-- qrValue.signal,
          _.slots.start(Icon(_.name := "link")())
        )(
          onInput.mapToValue --> qrValue.writer
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
      QrCode(
        _.value      := "https://shoelace.style/",
        _.fill       := "deeppink",
        _.background := "white"
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
      QrCode(
        _.value := "https://shoelace.style/",
        _.size  := 64.0
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
      QrCode(
        _.value  := "https://shoelace.style/",
        _.radius := 0.5
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
      QrCode(
        _.value           := "https://shoelace.style/",
        _.errorCorrection := "L"
      )()
      QrCode(
        _.value           := "https://shoelace.style/",
        _.errorCorrection := "M"
      )()
      QrCode(
        _.value           := "https://shoelace.style/",
        _.errorCorrection := "Q"
      )()
      QrCode(
        _.value           := "https://shoelace.style/",
        _.errorCorrection := "H"
      )()
    })
  }
}
