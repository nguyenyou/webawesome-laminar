package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source

case class CardView()
    extends ExampleView(
      "Card",
      Some("https://webawesome.com/docs/components/card/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.*

        Card(
          _.slots.footer(
            div(
              tw.flex.justifyBetween.itemsCenter,
              Button(_.variant := "brand", _.pill := true)("More Info"),
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
    )
  }

}
