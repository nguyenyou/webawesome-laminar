package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class CardView()
    extends ExampleView(
      "Card",
      Some("https://webawesome.com/docs/components/card/")
    ) {

  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        Card(
          _.slots.footer(
            div(
              tw.flex.justifyBetween.itemsCenter,
              Button(_.variant.brand, _.pill := true)("More Info"),
              Rating()()
            )
          ),
          _.slots.media(
            img(
              src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
              alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
            )
          )
        )(
          width.px(300),
          strong("Mittens"),
          br(),
          "This kitten is as cute as he is playful. Bring him home today!",
          br(),
          small("6 weeks old")
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Basic Card",
        description = "Basic cards aren't very exciting, but they can display any content you want them to.",
        content = Source.annotate {
          // <show>
          Card()(
            maxWidth.px(300),
            "This is just a basic card. No media, no header, and no footer. Just your content."
          )
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Card with Header",
        description = """
        | Headers can be used to display titles and more.
        | If using SSR, you need to also use the `with-header` attribute to add a header to the card (if not, it is added automatically).
        """.stripMargin,
        content = Source.annotate {
          // <show>
          Card(
            _.slots.header(
              div(
                tw.flex.justifyBetween.itemsCenter,
                "Header Title",
                Button(
                  _.appearance.plain,
                  _.slots.start(Icon(_.name := "gear", _.variant := "solid", _.label := "Settings")())
                )()
              )
            )
          )(
            maxWidth.px(300),
            "This card has a header. You can put all sorts of things in it!"
          )
          // </show>
        }
      )().withLocator,
      Demo(
        title = "Card with Footer",
        description = """
        | Footers can be used to display actions, summaries, or other relevant content.
        | If using SSR, you need to also use the `with-footer` attribute to add a footer to the card (if not, it is added automatically).
        """.stripMargin,
        content = Source.annotate {
          Card(
            _.slots.footer(
              div(
                tw.flex.justifyBetween.itemsCenter,
                Rating()(),
                Button(_.variant.brand)("Preview")
              )
            )
          )(
            maxWidth.px(300),
            "This card has a footer. You can put all sorts of things in it!"
          )
        }
      )().withLocator,
      Demo(
        title = "Media",
        description = """
        | Card media is displayed atop the card and will stretch to fit.
        | If using SSR, you need to also use the `with-media` attribute to add a media section to the card (if not, it is added automatically).
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap4,
            // <show>
            Card(
              _.slots.media(
                img(
                  src := "https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                  alt := "A kitten walks towards camera on top of pallet."
                )
              )
            )(
              maxWidth.px(300),
              "This is a kitten, but not just any kitten. This kitten likes walking along pallets."
            ),
            Card(
              _.slots.media(
                videoTag(
                  sourceTag(src := "https://uploads.webawesome.com/dog-with-glasses.mp4"),
                  p("Your browser doesn't support HTML video")
                )
              )
            )(
              maxWidth.px(300),
              "This is a kitten, but not just any kitten. This kitten likes walking along pallets."
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description = "Use the `appearance` attribute to change the card's visual appearance.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap4,
            // <show>
            Card(
              _.slots.media(
                img(
                  src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                  alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
                )
              )
            )(
              maxWidth.px(200),
              "Outlined (default)"
            ),
            Card(
              _.appearance := "filled outlined",
              _.slots.media(
                img(
                  src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                  alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
                )
              )
            )(
              maxWidth.px(200),
              "Outlined filled"
            ),
            Card(
              _.appearance := "plain",
              _.slots.media(
                img(
                  src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                  alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
                )
              )
            )(
              maxWidth.px(200),
              "Plain"
            ),
            Card(
              _.appearance := "filled",
              _.slots.media(
                img(
                  src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                  alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
                )
              )
            )(
              maxWidth.px(200),
              "Filled"
            ),
            Card(
              _.appearance := "accent",
              _.slots.media(
                img(
                  src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                  alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
                )
              )
            )(
              maxWidth.px(200),
              "Accent"
            )
            // </show>
          )
        }
      )().withLocator
    )
  }
}
