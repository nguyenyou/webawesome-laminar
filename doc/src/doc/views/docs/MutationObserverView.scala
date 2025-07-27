package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

case class MutationObserverView()
    extends ExampleView(
      "Mutation Observer",
      Some("https://webawesome.com/docs/components/mutation-observer/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
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
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Child List",
        description = "Use the `child-list` attribute to watch for new child elements that are added or removed.",
        content = Source.annotate {
          val buttonCountVar = Var(0)

          div(
            MutationObserver(
              _.childList := true,
              _.onMutation.map { event =>
                println(event.detail)
              } --> Observer.empty
            )(
              div(
                tw.flex.flexWrap.gap2,
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
                        event.target.asInstanceOf[dom.Element].remove() // scalafix:ok
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
        }
      )().withLocator
    )
  }
}
