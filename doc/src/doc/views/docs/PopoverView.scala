package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class PopoverView()
    extends ExampleView(
      "Popover",
      Some("https://webawesome.com/docs/components/popover/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      description = """
                      |Popovers display interactive content when their anchor element is clicked. Unlike [tooltips](/docs/components/tooltip), popovers can contain links, buttons, and form controls. They appear without an overlay and will close when you click outside or press [[Escape]]. Only one popover can be open at a time.
                      |""".stripMargin,
      content = Source.annotate {
        div(
          Popover(
            _.forId := "popover__overview"
          )(
            div(
              tw.flex.flexCol.gap4,
              p("This popover contains interactive content that users can engage with directly."),
              Button(
                _.variant := "brand",
                _.size    := "small"
              )("Take Action")
            )
          ),
          Button(
            _.id := "popover__overview"
          )("Show popover")
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Assigning an Anchor",
        description = """
                      |Use `<wa-button>` or `<button>` elements as popover anchors. Connect the popover to its anchor by setting the `for` attribute to match the anchor's `id`.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexCol.itemsStart.gap4,
            div(
              Popover(
                _.forId := "popover__anchor-button"
              )(
                "I'm anchored to a Web Awesome button."
              ),
              Button(
                _.id := "popover__anchor-button"
              )("Show popover")
            ),
            div(
              Popover(
                _.forId := "popover__anchor-native-button"
              )(
                "I'm anchored to a native button."
              ),
              button(
                idAttr := "popover__anchor-native-button",
                "Show Popover"
              )
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Opening and Closing",
        description = """
                      |Popovers show when you click their anchor element. You can also control them programmatically by setting the `open` property to `true` or `false`.
                      |
                      |Use `_.close.popover` on any button inside a popover to close it automatically.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            Popover(
              _.forId := "popover__opening"
            )(
              div(
                tw.flex.flexCol.gap4,
                "Click the button below to close the popover",
                Button(
                  _.variant.brand,
                  _.close.popover
                )("Dismiss")
              )
            ),
            Button(
              _.id := "popover__opening"
            )("Show popover")
          )
        }
      )().withLocator
    )
  }

}
