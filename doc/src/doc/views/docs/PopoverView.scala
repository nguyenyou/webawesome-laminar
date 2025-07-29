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
                _.variant.brand,
                _.size.small
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
      )().withLocator,
      Demo(
        title = "Placement",
        description = """
                      |Use the `placement` attribute to set where the popover appears relative to its anchor. The popover will automatically reposition if there isn't enough space in the preferred location. The default placement is `top`.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap4.itemsCenter,
            div(
              Button(
                _.id := "popover__top"
              )("Top"),
              Popover(
                _.forId     := "popover__top",
                _.placement := "top"
              )("I'm on the top")
            ),
            div(
              Button(
                _.id := "popover__bottom"
              )("Bottom"),
              Popover(
                _.forId     := "popover__bottom",
                _.placement := "bottom"
              )("I'm on the bottom")
            ),
            div(
              Button(
                _.id := "popover__left"
              )("Left"),
              Popover(
                _.forId     := "popover__left",
                _.placement := "left"
              )("I'm on the left")
            ),
            div(
              Button(
                _.id := "popover__right"
              )("Right"),
              Popover(
                _.forId     := "popover__right",
                _.placement := "right"
              )("I'm on the right")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Distance",
        description = """
                      |Use the `distance` attribute to control how far the popover appears from its anchor.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap4.itemsCenter,
            div(
              Button(
                _.id := "popover__distance-near"
              )("Near"),
              Popover(
                _.forId    := "popover__distance-near",
                _.distance := 0
              )("I'm very close")
            ),
            div(
              Button(
                _.id := "popover__distance-far"
              )("Far"),
              Popover(
                _.forId    := "popover__distance-far",
                _.distance := 30
              )("I'm farther away")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Arrow Size",
        description = """
                      |Use the `--arrow-size` custom property to change the size of the popover's arrow. Set it to `0` to remove the arrow entirely.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap4.itemsCenter,
            div(
              Button(
                _.id := "popover__big-arrow"
              )("Big arrow"),
              Popover(
                _.forId := "popover__big-arrow",
                _.style := "--arrow-size: 8px;"
              )("I have a big arrow")
            ),
            div(
              Button(
                _.id := "popover__no-arrow"
              )("No arrow"),
              Popover(
                _.forId := "popover__no-arrow",
                _.style := "--arrow-size: 0;"
              )("I don't have an arrow")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Setting a Maximum Width",
        description = """
                      |Use the `--max-width` custom property to control the maximum width of the popover.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            Button(
              _.id := "popover__max-width"
            )("Toggle me"),
            Popover(
              _.forId := "popover__max-width",
              _.style := "--max-width: 160px;"
            )(
              "Popovers will usually grow to be much wider, but this one has a custom max width that forces text to wrap."
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Setting Focus",
        description = """
                      |Use the `autofocus` global attribute to move focus to a specific form control when the popover opens.
                      |""".stripMargin,
        content = Source.annotate {
          div(
            Popover(
              _.forId := "popover__autofocus"
            )(
              div(
                tw.flex.flexCol.gap4,
                Textarea(
                  _.autofocus   := true,
                  _.placeholder := "What's on your mind?",
                  _.size.small,
                  _.resize := "none",
                  _.rows   := 3
                )(),
                Button(
                  _.variant.brand,
                  _.size.small,
                  _.close.popover
                )("Submit")
              )
            ),
            Button(
              _.id := "popover__autofocus",
              _.slots.start(
                Icon(
                  _.name := "comment"
                )()
              )
            )(
              "Feedback"
            )
          )
        }
      )().withLocator
    )
  }

}
