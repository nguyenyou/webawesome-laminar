package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source

case class TreeView()
    extends ExampleView(
      "Tree",
      Some("https://webawesome.com/docs/components/tree/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        Tree(_.selection := "multiple")(
          TreeItem()(
            "Parent Node",
            TreeItem(_.selected := true)("Child Node 1"),
            TreeItem()("Child Node 2", TreeItem()("Child Node 2 - 1"), TreeItem()("Child Node 2 - 2"))
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
