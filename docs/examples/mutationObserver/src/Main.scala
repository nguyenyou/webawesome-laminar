package examples.mutationObserver

@main
def app = {
  example1()
  example2()
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
      val variants  = List[ThemeVariant]("brand", "success", "neutral", "warning", "danger")
      val clicksVar = Var(0)
      
      div(
        MutationObserver(
          _.attr := "variant",
          _.onMutation.map { event =>
            println(event.detail)
          } --> Observer.empty
        )(
          Button(
            _.variant <-- clicksVar.signal.map(clicks => variants(clicks % variants.length))
          )(
            onClick --> Observer[dom.MouseEvent] { _ =>
              clicksVar.update(_ + 1)
            },
            "Click to mutate"
          )
        ),
        br(),
        "👆 Click the button and watch the console"
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
      val buttonCountVar = Var(0)
      
      div(
        MutationObserver(
          _.childList := true,
          _.onMutation.map { event =>
            println(event.detail)
          } --> Observer.empty
        )(
          div(
            cls("flex flex-wrap gap-2"),
            Button(_.variant := "brand")(
              onClick --> Observer[dom.MouseEvent] { _ =>
                buttonCountVar.update(_ + 1)
              },
              "Add button"
            ),
            children <-- buttonCountVar.signal.map { count =>
              (1 to count).map { i =>
                Button()(
                  onClick --> Observer[dom.MouseEvent] { event =>
                    event.target.asInstanceOf[dom.Element].remove()
                    event.stopPropagation()
                  },
                  i
                )
              }
            }
          )
        ),
        "👆 Add and remove buttons and watch the console"
      )
    })
  }
}
