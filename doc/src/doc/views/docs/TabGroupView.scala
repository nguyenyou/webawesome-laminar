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
        import io.github.nguyenyou.webawesome.laminar.*

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
          TabPanel(_.name := "disabled", _.disabled := true)(
            "This is the disabled tab panel."
          )
        )
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
