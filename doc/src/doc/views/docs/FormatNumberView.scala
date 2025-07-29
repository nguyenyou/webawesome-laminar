package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.components.Markdown
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class FormatNumberView()
    extends ExampleView(
      "Format Number",
      Some("https://webawesome.com/docs/components/format-number/")
    ) {
  def playground: HtmlElement = {
    val valueVar = Var("1000")

    Demo(
      content = Source.annotate {
        div(
          cls := "format-number-overview",
          p(FormatNumber(_.value <-- valueVar)()),
          Input(
            _.`type`.number,
            _.value <-- valueVar,
            _.label := "Number to Format"
          )(
            onInput.mapToValue --> valueVar,
            maxWidth.px(180)
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Callout(
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        Markdown(
          "Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required."
        )()
      ),
      Demo(
        title = "Percentages",
        description = "To get the value as a percent, set the `type` attribute to `percent`.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            FormatNumber(_.`type`.percent, _.value := "0")(),
            FormatNumber(_.`type`.percent, _.value := "0.25")(),
            FormatNumber(_.`type`.percent, _.value := "0.50")(),
            FormatNumber(_.`type`.percent, _.value := "0.75")(),
            FormatNumber(_.`type`.percent, _.value := "1")()
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Currency",
        description =
          "To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("USD: ", FormatNumber(_.`type`.currency, _.currency := "USD", _.value := "2000")()),
            div("GBP: ", FormatNumber(_.`type`.currency, _.currency := "GBP", _.value := "2000")()),
            div("EUR: ", FormatNumber(_.`type`.currency, _.currency := "EUR", _.value := "2000")()),
            div("JPY: ", FormatNumber(_.`type`.currency, _.currency := "JPY", _.value := "2000")()),
            div("CNY: ", FormatNumber(_.`type`.currency, _.currency := "CNY", _.value := "2000")())
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Fraction Digits",
        description = "Use `minimum-fraction-digits` and `maximum-fraction-digits` to control decimal precision.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("Default: ", FormatNumber(_.value := "3.14159")()),
            div("Min 2 digits: ", FormatNumber(_.value := "3.14159", _.minimumFractionDigits := 2.0)()),
            div("Max 2 digits: ", FormatNumber(_.value := "3.14159", _.maximumFractionDigits := 2.0)()),
            div(
              "Min 0, Max 0: ",
              FormatNumber(_.value := "3.14159", _.minimumFractionDigits := 0.0, _.maximumFractionDigits := 0.0)()
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Grouping Separators",
        description = "Use the `without-grouping` attribute to turn off grouping separators.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("With grouping: ", FormatNumber(_.value := "1000000")()),
            div("Without grouping: ", FormatNumber(_.value := "1000000", _.withoutGrouping := true)())
            // </show>
          )
        }
      )().withLocator
    )
  }
}
