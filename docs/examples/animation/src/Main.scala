package examples.animation

@main
def app = {
  example1()
  example2()
}

def example1() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example1")
  if (container != null) {
    render(container, {
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
      )
    })
  }
}

def example2() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example2")
  if (container != null) {
    render(container, {
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
      )
    })
  }
}
