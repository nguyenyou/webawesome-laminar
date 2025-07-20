package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import doc.components.Locator.withLocator

case class ButtonGroupView()
    extends ExampleView(
      "ButtonGroup",
      Some("https://webawesome.com/docs/components/button-group/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{Button, ButtonGroup}

        ButtonGroup(_.label := "Alignment")(
          Button()("Left"),
          Button()("Center"),
          Button()("Right")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
