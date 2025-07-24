package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class ButtonView()
    extends ExampleView(
      "Button",
      Some("https://webawesome.com/docs/components/button/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Button

        Button()("Button")
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Variants",
        description = "Use the `variant` attribute to set the button's semantic variant.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.variant := "brand")("Brand"),
            Button(_.variant := "danger")("Danger"),
            Button(_.variant := "neutral")("Neutral"),
            Button(_.variant := "success")("Success"),
            Button(_.variant := "warning")("Warning")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Appearance",
        description = "Use the `appearance` attribute to change the button's visual appearance.",
        content = Source.annotate {
          div(
            tw.spaceY4,
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(_.appearance := "accent", _.variant := "neutral")("Accent"),
              Button(_.appearance := "filled outlined", _.variant := "neutral")("Filled + Outlined"),
              Button(_.appearance := "filled", _.variant := "neutral")("Filled"),
              Button(_.appearance := "outlined", _.variant := "neutral")(
                "Outlined"
              ),
              Button(_.appearance := "plain", _.variant := "neutral")("Plain")
              // </show>
            ),
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(_.appearance := "accent", _.variant := "brand")("Accent"),
              Button(_.appearance := "filled outlined", _.variant := "brand")("Filled + Outlined"),
              Button(_.appearance := "filled", _.variant := "brand")("Filled"),
              Button(_.appearance := "outlined", _.variant := "brand")(
                "Outlined"
              ),
              Button(_.appearance := "plain", _.variant := "brand")("Plain")
              // </show>
            ),
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(_.appearance := "accent", _.variant := "success")("Accent"),
              Button(_.appearance := "filled outlined", _.variant := "success")("Filled + Outlined"),
              Button(_.appearance := "filled", _.variant := "success")("Filled"),
              Button(_.appearance := "outlined", _.variant := "success")(
                "Outlined"
              ),
              Button(_.appearance := "plain", _.variant := "success")("Plain")
              // </show>
            ),
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(_.appearance := "accent", _.variant := "warning")("Accent"),
              Button(_.appearance := "filled outlined", _.variant := "warning")("Filled + Outlined"),
              Button(_.appearance := "filled", _.variant := "warning")("Filled"),
              Button(_.appearance := "outlined", _.variant := "warning")(
                "Outlined"
              ),
              Button(_.appearance := "plain", _.variant := "warning")("Plain")
              // </show>
            ),
             div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(_.appearance := "accent", _.variant := "danger")("Accent"),
              Button(_.appearance := "filled outlined", _.variant := "danger")("Filled + Outlined"),
              Button(_.appearance := "filled", _.variant := "danger")("Filled"),
              Button(_.appearance := "outlined", _.variant := "danger")(
                "Outlined"
              ),
              Button(_.appearance := "plain", _.variant := "danger")("Plain")
              // </show>
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Sizes",
        description = "Use the `size` attribute to change a button's size.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small")("Small"),
            Button(_.size := "medium")("Medium"),
            Button(_.size := "large")("Large")
            // </show>
          )
        }
      )(),
      Demo(
        title = "Pill Buttons",
        description = "Use the `pill` attribute to give buttons rounded edges.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small", _.pill := true)("Small"),
            Button(_.size := "medium", _.pill := true)("Medium"),
            Button(_.size := "large", _.pill := true)("Large")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Link Buttons",
        description = """
        | It's often helpful to have a button that works like a link. 
        | This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. 
        | This gives you all the default link behavior the browser provides (e.g. `CMD/CTRL/SHIFT + CLICK`) and exposes the `rel`, `target`, and `download` attributes.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.href := "https://example.com/")("Link"),
            Button(_.href := "https://example.com/", _.target := "_blank")(
              "Link with target"
            ),
            Button(
              _.href     := "/assets/images/logo.svg",
              _.download := "shoelace.svg"
            )("Download")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Icon Buttons",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.appearance := "accent", _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            ),
            Button(_.appearance := "filled", _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            ),
            Button(_.appearance := "outlined", _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            ),
            Button(_.appearance := "plain", _.variant := "neutral")(
              Icon(_.name := "house", _.label := "Home")()
            )
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Setting a Custom Width",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small")(tw.wFull, "Small"),
            Button(_.size := "medium")(tw.wFull, "Medium"),
            Button(_.size := "large")(tw.wFull, "Large")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Start & End Decorations ",
        description = """
        | Use the `start` and `end` slots to add presentational elements like `<wa-icon>` next to the button label.
        """.stripMargin,
        content = Source.annotate {
          div(
            tw.spaceY4,
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(
                _.size := "small",
                _.slots.start(Icon(_.name := "gear", _.label := "Settings")())
              )("Settings"),
              Button(
                _.size := "small",
                _.slots.end(Icon(_.name := "undo", _.label := "Refresh")())
              )("Refresh"),
              Button(
                _.size := "small",
                _.slots.start(Icon(_.name := "link", _.label := "Link")()),
                _.slots.end(
                  Icon(
                    _.name  := "arrow-up-right-from-square",
                    _.label := "Open in new tab"
                  )()
                )
              )("Open")
              // </show>
            ),
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(
                _.size := "medium",
                _.slots.start(Icon(_.name := "gear", _.label := "Settings")())
              )("Settings"),
              Button(
                _.size := "medium",
                _.slots.end(Icon(_.name := "undo", _.label := "Refresh")())
              )("Refresh"),
              Button(
                _.size := "medium",
                _.slots.start(Icon(_.name := "link", _.label := "Link")()),
                _.slots.end(
                  Icon(
                    _.name  := "arrow-up-right-from-square",
                    _.label := "Open in new tab"
                  )()
                )
              )("Open")
              // </show>
            ),
            div(
              tw.flex.flexWrap.gap2,
              // <show>
              Button(
                _.size := "large",
                _.slots.start(Icon(_.name := "gear", _.label := "Settings")())
              )("Settings"),
              Button(
                _.size := "large",
                _.slots.end(Icon(_.name := "undo", _.label := "Refresh")())
              )("Refresh"),
              Button(
                _.size := "large",
                _.slots.start(Icon(_.name := "link", _.label := "Link")()),
                _.slots.end(
                  Icon(
                    _.name  := "arrow-up-right-from-square",
                    _.label := "Open in new tab"
                  )()
                )
              )("Open")
              // </show>
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Caret",
        description =
          "Use the `with-caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.size := "small", _.withCaret := true)("Small"),
            Button(_.size := "medium", _.withCaret := true)("Medium"),
            Button(_.size := "large", _.withCaret := true)("Large")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Loading",
        description =
          "Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.variant := "brand", _.loading := true)("Brand"),
            Button(_.variant := "danger", _.loading := true)("Danger"),
            Button(_.variant := "neutral", _.loading := true)("Neutral"),
            Button(_.variant := "success", _.loading := true)("Success"),
            Button(_.variant := "warning", _.loading := true)("Warning")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable a button.",
        content = Source.annotate {
          div(
            tw.flex.flexWrap.gap2,
            // <show>
            Button(_.variant := "brand", _.disabled := true)("Brand"),
            Button(_.variant := "danger", _.disabled := true)("Danger"),
            Button(_.variant := "neutral", _.disabled := true)("Neutral"),
            Button(_.variant := "success", _.disabled := true)("Success"),
            Button(_.variant := "warning", _.disabled := true)("Warning")
            // </show>
          )
        }
      )().withLocator
    )
  }

}
