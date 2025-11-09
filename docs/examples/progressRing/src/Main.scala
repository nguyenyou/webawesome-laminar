package examples.progressRing

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
      ProgressRing(_.value := 25)()
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
      ProgressRing(
        _.value := 50,
        _.style := "--size: 200px;"
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
      ProgressRing(
        _.value := 50,
        _.style := "--track-width: 6px; --indicator-width: 12px;"
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
      ProgressRing(
        _.value := 50,
        _.style := "--track-color: pink; --indicator-color: deeppink;"
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
      val progressValue = Var(50.0)
      
      div(
        cls("flex flex-col gap-4"),
        ProgressRing(
          _.value <-- progressValue.signal
        )(
          child.text <-- progressValue.signal.map(v => s"${v.toInt}%")
        ),
        div(
          cls("flex gap-2"),
          Button(
            _.pill := true
          )(
            onClick --> Observer[dom.MouseEvent] { _ =>
              progressValue.update(current => math.max(0, current - 10))
            },
            Icon(_.name := "minus")()
          ),
          Button(
            _.pill := true
          )(
            onClick --> Observer[dom.MouseEvent] { _ =>
              progressValue.update(current => math.min(100, current + 10))
            },
            Icon(_.name := "plus")()
          )
        )
      )
    })
  }
}
