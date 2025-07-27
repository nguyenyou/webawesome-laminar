package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.components.Markdown
import doc.libs.scalawind.*

case class FormatDateView()
    extends ExampleView(
      "Format Date",
      Some("https://webawesome.com/docs/components/format-date/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        div(
          p("Web Awesome 2 release date 🎉"),
          FormatDate(_.date := "2020-07-15T09:17:00-04:00")()
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
          "Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required."
        )()
      ),
      Callout(
        _.variant := "neutral",
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        tw.mt4,
        Markdown(
          "When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients."
        )()
      ),
      Demo(
        title = "Date & Time Formatting",
        description = "Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("Human-readable date: ", FormatDate(_.month := "long", _.day := "numeric", _.year := "numeric")()),
            div("Time: ", FormatDate(_.hour := "numeric", _.minute := "numeric")()),
            div("Weekday: ", FormatDate(_.weekday := "long")()),
            div("Month: ", FormatDate(_.month := "long")()),
            div("Year: ", FormatDate(_.year := "numeric")()),
            div("No formatting options: ", FormatDate()())
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Hour Formatting",
        description = "By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("12-hour: ", FormatDate(_.hour := "numeric", _.minute := "numeric", _.hourFormat := "12")()),
            div("24-hour: ", FormatDate(_.hour := "numeric", _.minute := "numeric", _.hourFormat := "24")())
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Time Zone",
        description = "Use the `time-zone` attribute to express the time in a specific time zone.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("UTC: ", FormatDate(_.hour := "numeric", _.minute := "numeric", _.timeZone := "UTC")()),
            div("Pacific: ", FormatDate(_.hour := "numeric", _.minute := "numeric", _.timeZone := "America/Los_Angeles")()),
            div("Tokyo: ", FormatDate(_.hour := "numeric", _.minute := "numeric", _.timeZone := "Asia/Tokyo")())
            // </show>
          )
        }
      )().withLocator
    )
  }
} 