package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.facades.WebAwesome
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
      Demo(
        title = "Animations & Easings",
        description =
          "This example demonstrates all of the baked-in animations and easings. Animations are based on those found in the popular Animate.css library.",
        content = Source.annotate {
          val animationNames = WebAwesome.getAnimationNames()
          val easingNames    = WebAwesome.getEasingNames()

          val animationNameVar = Var("bounce")
          val easingNameVar    = Var("easeInOut")
          val playbackRateVar  = Var("1")

          div(
            styleTag("""
            .animation-sandbox {
              padding: 2rem 1rem;
            }
           .animation-sandbox .box {
              width: 100px;
              height: 100px;
              background-color: var(--wa-color-brand-fill-loud);
            }
            .animation-sandbox .controls {
              max-width: 300px;
              margin-top: 2rem;
            }
            .animation-sandbox .controls wa-select {
              margin-bottom: 1rem;
            }
          """),
            cls("animation-sandbox"),
            // <show>
            Animation(
              _.name <-- animationNameVar,
              _.easing <-- easingNameVar,
              _.duration := 2000,
              _.play     := true
            )(
              div(cls("box"))
            ),
            div(
              cls("controls"),
              Select(
                _.label := "Animation",
                _.value <-- animationNameVar,
                _.onInput.mapToValue --> animationNameVar
              )(
                animationNames.map(name => UOption(_.value := name)(name))
              ),
              Select(
                _.label := "Easing",
                _.value <-- easingNameVar,
                _.onInput.mapToValue --> easingNameVar
              )(
                easingNames.map(name => UOption(_.value := name)(name))
              ),
              Input(
                _.label := "Playback Rate",
                _.`type`.number,
                _.min  := "0",
                _.max  := "2",
                _.step := "0.25",
                _.value <-- playbackRateVar,
                _.onInput.mapToValue --> playbackRateVar
              )()
            )
            // </show>
          )
        }
      )().withLocator
    )
  }

}
