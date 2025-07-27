package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import org.scalajs.dom

case class ResizeObserverView()
    extends ExampleView(
      "Resize Observer",
      Some("https://webawesome.com/docs/components/resize-observer/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        div(
          ResizeObserver(
            _.onResize.map { event =>
              dom.console.log(event.detail)
            } --> Observer.empty
          )(
            div(
              tw.flex.itemsCenter.justifyCenter.textCenter,
              border  := "2px solid var(--wa-color-surface-border)",
              padding := "4rem 2rem",
              "Resize this box and watch the console 👉"
            )
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
    )
  }
}
