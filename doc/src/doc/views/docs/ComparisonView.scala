package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class ComparisonView()
    extends ExampleView(
      "Comparison",
      Some("https://webawesome.com/docs/components/comparison/")
    ) {

  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        Comparison(
          _.slots.before(
            img(
              src := "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5",
              alt := "Grayscale version of kittens in a basket looking around."
            )
          ),
          _.slots.after(
            img(
              src := "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
              alt := "Color version of kittens in a basket looking around."
            )
          )
        )()
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Initial Position",
        description =
          "Use the `position` attribute to set the initial position of the slider. This is a percentage from `0` to `100`.",
        content = Source.annotate {
          Comparison(
            _.position := 25,
            _.slots.before(
              img(
                src := "https://images.unsplash.com/photo-1520903074185-8eca362b3dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
                alt := "A person sitting on bricks wearing untied boots."
              )
            ),
            _.slots.after(
              img(
                src := "https://images.unsplash.com/photo-1520640023173-50a135e35804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
                alt := "A person sitting on a yellow curb tying shoelaces on a boot."
              )
            )
          )()
        }
      )().withLocator
    )
  }
}
