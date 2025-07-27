package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source

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
        import io.github.nguyenyou.webawesome.laminar.{Popover, Button}

        div(
          Popover(
            _.forId := "popover__overview"
          )(
            div(
              tw.flex.flexCol.gap4,
              p("This popover contains interactive content that users can engage with directly."),
              Button(
                _.variant := "brand",
                _.size    := "small"
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
    )
  }

}
