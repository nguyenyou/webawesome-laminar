package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class TextareaView()
    extends ExampleView(
      "Textarea",
      Some("https://webawesome.com/docs/components/textarea/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        Textarea(_.label := "Type something', will ya")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
