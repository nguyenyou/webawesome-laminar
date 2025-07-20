package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.libs.scalawind.*
import doc.macros.Source
import doc.components.Locator.withLocator

case class BreadcrumbView()
    extends ExampleView(
      "Breadcrumb",
      Some("https://webawesome.com/docs/components/breadcrumb/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.{
          Breadcrumb,
          BreadcrumbItem
        }

        Breadcrumb()(
          BreadcrumbItem()("Catalog"),
          BreadcrumbItem()("Clothing"),
          BreadcrumbItem()("Women's"),
          BreadcrumbItem()("Shirts & Tops")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
