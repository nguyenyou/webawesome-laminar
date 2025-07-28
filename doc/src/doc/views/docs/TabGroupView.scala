package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class TabGroupView()
    extends ExampleView(
      "TabGroup",
      Some("https://webawesome.com/docs/components/tab-group/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        TabGroup()(
          Tab(_.panel := "general")(
            "General"
          ),
          Tab(_.panel := "custom")(
            "Custom"
          ),
          Tab(_.panel := "advanced")(
            "Advanced"
          ),
          Tab(_.panel := "disabled", _.disabled := true)(
            "Disabled"
          ),
          TabPanel(_.name := "general")(
            "This is the general tab panel."
          ),
          TabPanel(_.name := "custom")(
            "This is the custom tab panel."
          ),
          TabPanel(_.name := "advanced")(
            "This is the advanced tab panel."
          ),
          TabPanel(_.name := "disabled")(
            disabled := true,
            "This is the disabled tab panel."
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Setting the Active Tab",
        description = "To make a tab active, set the `active` attribute to the name of the appropriate panel.",
        content = Source.annotate {
          TabGroup(_.active := "advanced")(
            Tab(_.panel := "general")("General"),
            Tab(_.panel := "custom")("Custom"),
            Tab(_.panel := "advanced")("Advanced"),
            TabPanel(_.name := "general")("This is the general tab panel."),
            TabPanel(_.name := "custom")("This is the custom tab panel."),
            TabPanel(_.name := "advanced")("This is the advanced tab panel.")
          )
        }
      )().withLocator,
      Demo(
        title = "Tabs on Bottom",
        description = "Tabs can be shown on the bottom by setting `placement` to `bottom`.",
        content = Source.annotate {
          TabGroup(_.placement := "bottom")(
            Tab(_.panel := "general")("General"),
            Tab(_.panel := "custom")("Custom"),
            Tab(_.panel := "advanced")("Advanced"),
            Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
            TabPanel(_.name := "general")("This is the general tab panel."),
            TabPanel(_.name := "custom")("This is the custom tab panel."),
            TabPanel(_.name := "advanced")("This is the advanced tab panel."),
            TabPanel(_.name := "disabled")("This is a disabled tab panel.")
          )
        }
      )().withLocator,
      Demo(
        title = "Tabs on Start",
        description = "Tabs can be shown on the starting side by setting `placement` to `start`.",
        content = Source.annotate {
          TabGroup(_.placement := "start")(
            Tab(_.panel := "general")("General"),
            Tab(_.panel := "custom")("Custom"),
            Tab(_.panel := "advanced")("Advanced"),
            Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
            TabPanel(_.name := "general")("This is the general tab panel."),
            TabPanel(_.name := "custom")("This is the custom tab panel."),
            TabPanel(_.name := "advanced")("This is the advanced tab panel."),
            TabPanel(_.name := "disabled")("This is a disabled tab panel.")
          )
        }
      )().withLocator,
      Demo(
        title = "Tabs on End",
        description = "Tabs can be shown on the ending side by setting `placement` to `end`.",
        content = Source.annotate {
          TabGroup(_.placement := "end")(
            Tab(_.panel := "general")("General"),
            Tab(_.panel := "custom")("Custom"),
            Tab(_.panel := "advanced")("Advanced"),
            Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
            TabPanel(_.name := "general")("This is the general tab panel."),
            TabPanel(_.name := "custom")("This is the custom tab panel."),
            TabPanel(_.name := "advanced")("This is the advanced tab panel."),
            TabPanel(_.name := "disabled")("This is a disabled tab panel.")
          )
        }
      )().withLocator,
      Demo(
        title = "Scrolling Tabs",
        description = "When there are more tabs than horizontal space allows, the nav will be scrollable.",
        content = Source.annotate {
          TabGroup()(
            Tab(_.panel := "tab-1")("Tab 1"),
            Tab(_.panel := "tab-2")("Tab 2"),
            Tab(_.panel := "tab-3")("Tab 3"),
            Tab(_.panel := "tab-4")("Tab 4"),
            Tab(_.panel := "tab-5")("Tab 5"),
            Tab(_.panel := "tab-6")("Tab 6"),
            Tab(_.panel := "tab-7")("Tab 7"),
            Tab(_.panel := "tab-8")("Tab 8"),
            Tab(_.panel := "tab-9")("Tab 9"),
            Tab(_.panel := "tab-10")("Tab 10"),
            Tab(_.panel := "tab-11")("Tab 11"),
            Tab(_.panel := "tab-12")("Tab 12"),
            Tab(_.panel := "tab-13")("Tab 13"),
            Tab(_.panel := "tab-14")("Tab 14"),
            Tab(_.panel := "tab-15")("Tab 15"),
            Tab(_.panel := "tab-16")("Tab 16"),
            Tab(_.panel := "tab-17")("Tab 17"),
            Tab(_.panel := "tab-18")("Tab 18"),
            Tab(_.panel := "tab-19")("Tab 19"),
            Tab(_.panel := "tab-20")("Tab 20"),
            TabPanel(_.name := "tab-1")("Tab panel 1"),
            TabPanel(_.name := "tab-2")("Tab panel 2"),
            TabPanel(_.name := "tab-3")("Tab panel 3"),
            TabPanel(_.name := "tab-4")("Tab panel 4"),
            TabPanel(_.name := "tab-5")("Tab panel 5"),
            TabPanel(_.name := "tab-6")("Tab panel 6"),
            TabPanel(_.name := "tab-7")("Tab panel 7"),
            TabPanel(_.name := "tab-8")("Tab panel 8"),
            TabPanel(_.name := "tab-9")("Tab panel 9"),
            TabPanel(_.name := "tab-10")("Tab panel 10"),
            TabPanel(_.name := "tab-11")("Tab panel 11"),
            TabPanel(_.name := "tab-12")("Tab panel 12"),
            TabPanel(_.name := "tab-13")("Tab panel 13"),
            TabPanel(_.name := "tab-14")("Tab panel 14"),
            TabPanel(_.name := "tab-15")("Tab panel 15"),
            TabPanel(_.name := "tab-16")("Tab panel 16"),
            TabPanel(_.name := "tab-17")("Tab panel 17"),
            TabPanel(_.name := "tab-18")("Tab panel 18"),
            TabPanel(_.name := "tab-19")("Tab panel 19"),
            TabPanel(_.name := "tab-20")("Tab panel 20")
          )
        }
      )().withLocator,
      Demo(
        title = "Manual Activation",
        description = """
        | When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. 
        | By default, the corresponding tab panel will be shown immediately (automatic activation). 
        | You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).
        """.stripMargin,
        content = Source.annotate {
          TabGroup(_.activation := "manual")(
            Tab(_.panel := "general")("General"),
            Tab(_.panel := "custom")("Custom"),
            Tab(_.panel := "advanced")("Advanced"),
            Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
            TabPanel(_.name := "general")("This is the general tab panel."),
            TabPanel(_.name := "custom")("This is the custom tab panel."),
            TabPanel(_.name := "advanced")("This is the advanced tab panel."),
            TabPanel(_.name := "disabled")("This is a disabled tab panel.")
          )
        }
      )().withLocator
    )
  }
}
