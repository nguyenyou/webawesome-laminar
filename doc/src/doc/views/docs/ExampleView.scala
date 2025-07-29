package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Locator
import doc.libs.scalawind.*
import io.github.nguyenyou.webawesome.laminar.*

trait ExampleView(
    val name: String,
    val webawesomeLink: Option[String] = None
) extends Locator {
  def component: HtmlElement
  def playground: HtmlElement

  def apply(): HtmlElement = {
    locatorModifiers(
      div(
        tw.p2,
        h1(
          tw.text2xl.fontBold.mb5.mt0.flex.itemsEnd.gap1,
          name
        ),
        div(
          playground
        ),
        h2(
          tw.fontSemibold.textXl.mt4.mb0,
          "Exampless"
        ),
        div(
          component
        ),
        h2(
          tw.fontSemibold.textXl,
          "References"
        ),
        div(
          div(
            webawesomeLink.map(l =>
              div(
                tw.flex.itemsCenter.gap2.hover(tw.underline),
                Icon(
                  _.name  := "arrow-up-right-from-square",
                  _.label := "Open in new tab"
                )(),
                a(
                  href   := l,
                  target := "_blank",
                  s"$name - WebAwesome Documentation"
                )
              )
            )
          )
        )
      )
    )
  }

}
