package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class BreadcrumbView()
    extends ExampleView(
      "Breadcrumb",
      Some("https://webawesome.com/docs/components/breadcrumb/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
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
      Demo(
        title = "Breadcrumb Links",
        description = """
          | By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications.
          | For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it.
        """.stripMargin,
        content = Source.annotate {
          Breadcrumb()(
            BreadcrumbItem(_.href := "https://example.com/home")("Homepage"),
            BreadcrumbItem(_.href := "https://example.com/home/services")("Our Services"),
            BreadcrumbItem(_.href := "https://example.com/home/services/digital")("Digital Media"),
            BreadcrumbItem(_.href := "https://example.com/home/services/digital/web-design")("Web Design")
          )
        }
      )().withLocator,
      Demo(
        title = "Start & End Decorations",
        description = """
          | Use the `start` and `end` slots to add presentational elements like `<wa-icon>` next to any breadcrumb item.
        """.stripMargin,
        content = Source.annotate {
          Breadcrumb()(
            BreadcrumbItem(
              _.slots.start(Icon(_.name := "house")())
            )("Home"),
            BreadcrumbItem()("Articles"),
            BreadcrumbItem(
              _.slots.end(Icon(_.name := "tree-palm")())
            )("Traveling")
          )
        }
      )().withLocator,
      Demo(
        title = "Custom Separators",
        description = """
          | Use the `separator` slot to change the separator that goes between breadcrumb items. 
          | Icons work well, but you can also use text or an image.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.spaceY4,
            // <show>
            Breadcrumb(
              _.slots.separator(Icon(_.name := "angles-right", _.variant := "solid")()) // [!code highlight]
            )(
              BreadcrumbItem()("First"),
              BreadcrumbItem()("Second"),
              BreadcrumbItem()("Third")
            ),
            Breadcrumb(
              _.slots.separator(Icon(_.name := "arrow-right", _.variant := "solid")()) // [!code highlight]
            )(
              BreadcrumbItem()("First"),
              BreadcrumbItem()("Second"),
              BreadcrumbItem()("Third")
            ),
            Breadcrumb(
              _.slots.separator(span("/")) // [!code highlight]
            )(
              BreadcrumbItem()("First"),
              BreadcrumbItem()("Second"),
              BreadcrumbItem()("Third")
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Custom Colors",
        description = """
          | Breadcrumb labels match the color set on `<wa-breadcrumb-item>`. 
          | Content in the `start`, `end`, and `separator` slots can be styled using CSS parts.
        """.stripMargin,
        content = Source.annotate {
          div(
            styleTag(
              """
              .redcrumbs wa-breadcrumb-item {
                color: firebrick;
              }
              .redcrumbs wa-breadcrumb-item:last-of-type {
                color: crimson;
              }
              .redcrumbs wa-breadcrumb-item::part(separator) {
                color: pink;
              }
              .redcrumbs wa-breadcrumb-item::part(start),
              .redcrumbs wa-breadcrumb-item::part(end) {
                color: currentColor;
              }
            """
            ),
            Breadcrumb()(
              className := "redcrumbs",
              BreadcrumbItem(
                _.slots.start(Icon(_.name := "house", _.variant := "solid")())
              )("Home"),
              BreadcrumbItem()("Articles"),
              BreadcrumbItem()("Traveling")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "With Dropdowns",
        description = """
          | Dropdown menus can be placed in the default slot to provide additional options.
        """.stripMargin,
        content = Source.annotate {
          Breadcrumb()(
            BreadcrumbItem()("Homepage"),
            BreadcrumbItem()(
              Dropdown(
                _.slots.trigger(
                  Button(_.size.small, _.appearance.filled, _.pill := true)(
                    Icon(_.label := "More options", _.name := "ellipsis", _.variant := "solid")() // [!code highlight]
                  )
                )
              )(
                DropdownItem(_.`type` := "checkbox", _.checked := true)("Web Design"),
                DropdownItem(_.`type` := "checkbox")("Web Development"),
                DropdownItem(_.`type` := "checkbox")("Marketing")
              )
            ),
            BreadcrumbItem()("Our Services"),
            BreadcrumbItem()("Digital Media")
          )
        }
      )().withLocator,
      Demo(
        description = """
          | Alternative placement in end slot
        """.stripMargin,
        content = Source.annotate {
          Breadcrumb()(
            BreadcrumbItem()("Homepage"),
            BreadcrumbItem()("Our Services"),
            BreadcrumbItem()("Digital Media"),
            BreadcrumbItem(
              _.slots.end(
                Dropdown(
                  _.slots.trigger(
                    Button(_.size.small, _.appearance.filled, _.pill := true)(
                      Icon(_.label := "More options", _.name := "ellipsis", _.variant := "solid")() // [!code highlight]
                    )
                  )
                )(
                  DropdownItem(_.`type` := "checkbox", _.checked := true)("Web Design"),
                  DropdownItem(_.`type` := "checkbox")("Web Development"),
                  DropdownItem(_.`type` := "checkbox")("Marketing")
                )
              )
            )("Web Design")
          )
        }
      )().withLocator
    )
  }

}
