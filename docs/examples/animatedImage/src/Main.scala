package examples.animatedImage

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
      AnimatedImage(
        _.src := "https://shoelace.style/assets/images/walk.gif",
        _.alt := "Animation of untied shoes walking on pavement"
      )()
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
      AnimatedImage(
        _.src := "https://shoelace.style/assets/images/tie.webp",
        _.alt := "Animation of a shoe being tied"
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
      AnimatedImage(
        _.src   := "https://shoelace.style/assets/images/walk.gif",
        _.alt   := "Animation of untied shoes walking on pavement",
        _.style := "width: 150px; height: 200px;"
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
      div(
        styleTag("""
          .animated-image-custom-control-box::part(control-box) {
            top: auto;
            right: auto;
            bottom: 1rem;
            left: 1rem;
            background-color: deeppink;
            border: none;
            color: pink;
          }
        """),
        AnimatedImage(
          _.src := "https://shoelace.style/assets/images/walk.gif",
          _.alt := "Animation of untied shoes walking on pavement"
        )(
          cls := "animated-image-custom-control-box"
        )
      )
    })
  }
}
