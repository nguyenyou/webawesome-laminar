package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class SliderView()
    extends ExampleView(
      "Slider",
      Some("https://webawesome.com/docs/components/slider/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        Slider(
          _.label := "Number of cats",
          _.hint  := "Limit six per household",
          _.name  := "value",
          _.value := "3",
          _.onChange.map { v =>
            org.scalajs.dom.console.log(v)
          } --> Observer.empty,
          _.onInput.map { v =>
            org.scalajs.dom.console.log(v)
            org.scalajs.dom.console.log(v.target)
            val x = v.target.asInstanceOf[Slider.Ref].value // scalafix: ok
            org.scalajs.dom.console.log(x)
          } --> Observer.empty,
          _.min         := 0,
          _.max         := 6,
          _.withMarkers := true,
          _.withTooltip := true,
          _.slots.reference(span("Less")),
          _.slots.reference(span("More"))
        )()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
    )
  }

}
