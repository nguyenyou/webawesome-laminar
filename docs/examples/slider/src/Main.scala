package examples.slider

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
  example7()
  example8()
  example9()
  example10()
  example11()
  example12()
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
      val valueVar = Var(3.0)
      
      Slider(
        _.label := "Number of cats",
        _.hint  := "Limit six per household",
        _.name  := "value",
        _.value <-- valueVar.signal.map(_.toString),
        _.onInput.map(_.target.value) --> valueVar,
        _.min         := 0,
        _.max         := 6,
        _.withMarkers := true,
        _.withTooltip := true,
        _.slots.reference(span("Less")),
        _.slots.reference(span("More"))
      )()
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
      Slider(
        _.label := "Volumn",
        _.min   := 0,
        _.max   := 100
      )()
    })
  }
}

def example3() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example3")
  if (container != null) {
    render(container, {
      Slider(
        _.label := "Volumn",
        _.hint  := "Controls the volume of the current song.",
        _.min   := 0,
        _.max   := 100,
        _.value := "50"
      )()
    })
  }
}

def example4() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example4")
  if (container != null) {
    render(container, {
      Slider(
        _.label       := "Quality",
        _.name        := "quality",
        _.withTooltip := true,
        _.hint        := "Controls the volume of the current song.",
        _.min         := 0,
        _.max         := 100,
        _.value       := "50"
      )()
    })
  }
}

def example5() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example5")
  if (container != null) {
    render(container, {
      Slider(
        _.label       := "Between zero and one",
        _.hint        := "Controls the volume of the current song.",
        _.withTooltip := true,
        _.min         := 0,
        _.max         := 1,
        _.step        := 0.1,
        _.value       := "0.5"
      )()
    })
  }
}

def example6() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example6")
  if (container != null) {
    render(container, {
      Slider(
        _.label       := "Size",
        _.name        := "size",
        _.withMarkers := true,
        _.min         := 0,
        _.max         := 8,
        _.value       := "4"
      )()
    })
  }
}

def example7() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example7")
  if (container != null) {
    render(container, {
      Slider(
        _.label       := "Speed",
        _.name        := "speed",
        _.withMarkers := true,
        _.min         := 1,
        _.max         := 5,
        _.value       := "3",
        _.hint        := "Controls the speed of the thing you're currently doing.",
        _.slots.reference(span("Slow")),
        _.slots.reference(span("Medium")),
        _.slots.reference(span("Fast"))
      )()
    })
  }
}

def example8() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example8")
  if (container != null) {
    render(container, {
      div(
        cls("flex gap-4"),
        Slider(
          _.label := "Volume",
          _.name  := "volume",
          _.orientation.vertical,
          _.value := "65",
          _.style := "width: 80px"
        )(),
        Slider(
          _.label := "Bass",
          _.name  := "bass",
          _.value := "50",
          _.orientation.vertical,
          _.style := "width: 80px"
        )(),
        Slider(
          _.label := "Treble",
          _.name  := "treble",
          _.value := "40",
          _.orientation.vertical,
          _.style := "width: 80px"
        )()
      )
    })
  }
}

def example9() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example9")
  if (container != null) {
    render(container, {
      Slider(
        _.label := "Small",
        _.size.small,
        _.value := "50"
      )()
      Slider(
        _.label := "Medium",
        _.size.medium,
        _.value := "50"
      )()
      Slider(
        _.label := "Large",
        _.size.large,
        _.value := "50"
      )()
    })
  }
}

def example10() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example10")
  if (container != null) {
    render(container, {
      Slider(
        _.label           := "User Friendliness",
        _.hint            := "Did you find our product easy to use?",
        _.name            := "value",
        _.value           := "0",
        _.min             := -5,
        _.max             := 5,
        _.indicatorOffset := 0,
        _.withMarkers     := true,
        _.withTooltip     := true,
        _.slots.reference(span("Easy")),
        _.slots.reference(span("Moderate")),
        _.slots.reference(span("Difficult"))
      )()
    })
  }
}

def example11() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example11")
  if (container != null) {
    render(container, {
      Slider(
        _.label    := "Disabled",
        _.value    := "50",
        _.disabled := true // [!code highlight]
      )()
    })
  }
}

def example12() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example12")
  if (container != null) {
    render(container, {
      Slider(
        _.label    := "Required slider",
        _.min      := 0,
        _.max      := 10,
        _.required := true // [!code highlight]
      )()
    })
  }
}
