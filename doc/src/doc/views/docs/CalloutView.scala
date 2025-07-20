package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import doc.components.Locator.withLocator

case class CalloutView()
    extends ExampleView(
      "Callout",
      Some("https://webawesome.com/docs/components/callout/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Callout, Icon}

        Callout(
          _.slots.icon(Icon(_.name := "circle-info")())
        )(
          "This is a standard callout. You can customize its content and even the icon."
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
