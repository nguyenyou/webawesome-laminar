package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import doc.components.Locator.withLocator

case class AvatarView()
    extends ExampleView(
      "Avatar",
      Some("https://webawesome.com/docs/components/avatar/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Avatar

        Avatar(_.label := "User avatar")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
