package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.components.Markdown
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

import scala.scalajs.js

case class RelativeTimeView()
    extends ExampleView(
      "Relative Time",
      Some("https://webawesome.com/docs/components/relative-time/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        div(
          p("Web Awesome 2 release date 🎉"),
          RelativeTime(_.date := "2020-07-15T09:17:00-04:00")()
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
          "Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required."
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
        title = "Keeping Time in Sync",
        description = "Use the `sync` attribute to update the displayed value automatically as time passes.",
        content = Source.annotate {
          RelativeTime(
            _.sync := true,
            _.date := {
              // Set the date to 1 minute ago
              val oneMinuteAgo = new js.Date(js.Date.now() - 60000)
              oneMinuteAgo.toISOString()
            }
          )()
        }
      )().withLocator,
      Demo(
        title = "Formatting Styles",
        description =
          "You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("Narrow: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00", _.format.narrow)()),
            div("Short: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00", _.format.short)()),
            div("Long: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00", _.format.long)())
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Localization",
        description = "Use the `lang` attribute to set the desired locale.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            div("English: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "en-US")),
            div("Chinese: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "zh-CN")),
            div("German: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "de")),
            div("Greek: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "el")),
            div("Russian: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "ru"))
            // </show>
          )
        }
      )().withLocator
    )
  }
}
