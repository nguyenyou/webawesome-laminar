package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class AnimationView()
    extends ExampleView(
      "Animation",
      Some("https://webawesome.com/docs/components/animation/")
    ) {

  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        div(
          styleTag("""
           .animation-overview .box {
              display: inline-block;
              width: 100px;
              height: 100px;
              background-color: var(--wa-color-brand-fill-loud);
              margin: 1.5rem;
            }
          """),
          cls("animation-overview"),
          // <show>
          Animation(
            _.name     := "bounce",
            _.duration := 2000,
            _.play     := true
          )(
            div(cls("box"))
          ),
          Animation(
            _.name     := "jello",
            _.duration := 2000,
            _.play     := true
          )(
            div(cls("box"))
          ),
          Animation(
            _.name     := "heartBeat",
            _.duration := 2000,
            _.play     := true
          )(
            div(cls("box"))
          ),
          Animation(
            _.name     := "flip",
            _.duration := 2000,
            _.play     := true
          )(
            div(cls("box"))
          )
          // </show>
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
    )
  }

}
