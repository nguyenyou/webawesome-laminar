package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class DetailsView()
    extends ExampleView(
      "Details",
      Some("https://webawesome.com/docs/components/details/")
    ) {

  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        Details(
          _.summary := "Toggle Details"
        )(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to prevent the details from expanding.",
        content = Source.annotate {
          Details(
            _.summary  := "Disabled",
            _.disabled := true
          )(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          )
        }
      )().withLocator,
      Demo(
        title = "Customizing the Summary Icon",
        description =
          "Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively.",
        content = Source.annotate {
          Details(
            _.summary := "Toggle Me",
            _.slots.expandIcon(Icon(_.name := "square-plus", _.variant := "regular")()),
            _.slots.collapseIcon(Icon(_.name := "square-minus", _.variant := "regular")())
          )(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          )
        }
      )().withLocator,
      Demo(
        title = "HTML in Summary",
        description =
          "To use HTML in the summary, use the `summary` slot. Links and other interactive elements will still retain their behavior.",
        content = Source.annotate {
          Details(
            _.slots.summary(
              span(
                "Some text ",
                a(href := "https://webawesome.com", target := "_blank", "a link"),
                " more text"
              )
            )
          )(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          )
        }
      )().withLocator,
      Demo(
        title = "Right-to-Left Languages",
        description = "The details component automatically adapts to right-to-left languages.",
        content = Source.annotate {
          Details(
            _.summary := "تبديلني"
          )(
            lang := "ar",
            dir  := "rtl",
            "استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن"
          )
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description = "Use the `appearance` attribute to change the element's visual appearance.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap4,
            // <show>
            Details(
              _.summary := "Outlined (default)"
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ),
            Details(
              _.summary := "Filled + Outlined",
              _.appearance.filledOutlined
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ),
            Details(
              _.summary := "Filled",
              _.appearance.filled
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ),
            Details(
              _.summary := "Plain",
              _.appearance.plain
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Grouping Details",
        description = """
        | Use the `name` attribute to create accordion-like behavior where only one details element with the same name can be open at a time. 
        | This matches the behavior of native `<details>` elements.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap4,
            // <show>
            Details(
              _.name    := "group-1",
              _.summary := "Section 1",
              _.open    := true
            )(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ),
            Details(
              _.name    := "group-1",
              _.summary := "Section 2"
            )(
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            ),
            Details(
              _.name    := "group-1",
              _.summary := "Section 3"
            )(
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
            )
            // </show>
          )
        }
      )().withLocator
    )
  }
}
