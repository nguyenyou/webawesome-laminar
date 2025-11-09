package examples.popover

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
        Popover(
          _.forId := "popover__overview"
        )(
          div(
            cls("flex flex-col gap-4"),
      
            p("This popover contains interactive content that users can engage with directly."),
            Button(
              _.variant.brand,
              _.size.small
            )("Take Action")
          )
        ),
        Button(
          _.id := "popover__overview"
        )("Show popover")
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
      div(
        cls("flex flex-col items-start gap-4"),
        div(
          Popover(
            _.forId := "popover__anchor-button"
          )(
            "I'm anchored to a Web Awesome button."
          ),
          Button(
            _.id := "popover__anchor-button"
          )("Show popover")
        ),
        div(
          Popover(
            _.forId := "popover__anchor-native-button"
          )(
            "I'm anchored to a native button."
          ),
          button(
            idAttr := "popover__anchor-native-button",
            "Show Popover"
          )
        )
      )
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
      div(
        Popover(
          _.forId := "popover__opening"
        )(
          div(
            cls("flex flex-col gap-4"),
            "Click the button below to close the popover",
            Button(
              _.variant.brand,
              _.close.popover
            )("Dismiss")
          )
        ),
        Button(
          _.id := "popover__opening"
        )("Show popover")
      )
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
      div(
        cls("flex gap-4 items-center"),
        div(
          Button(
            _.id := "popover__top"
          )("Top"),
          Popover(
            _.forId     := "popover__top",
            _.placement := "top"
          )("I'm on the top")
        ),
        div(
          Button(
            _.id := "popover__bottom"
          )("Bottom"),
          Popover(
            _.forId     := "popover__bottom",
            _.placement := "bottom"
          )("I'm on the bottom")
        ),
        div(
          Button(
            _.id := "popover__left"
          )("Left"),
          Popover(
            _.forId     := "popover__left",
            _.placement := "left"
          )("I'm on the left")
        ),
        div(
          Button(
            _.id := "popover__right"
          )("Right"),
          Popover(
            _.forId     := "popover__right",
            _.placement := "right"
          )("I'm on the right")
        )
      )
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
      div(
        cls("flex gap-4 items-center"),
        div(
          Button(
            _.id := "popover__distance-near"
          )("Near"),
          Popover(
            _.forId    := "popover__distance-near",
            _.distance := 0
          )("I'm very close")
        ),
        div(
          Button(
            _.id := "popover__distance-far"
          )("Far"),
          Popover(
            _.forId    := "popover__distance-far",
            _.distance := 30
          )("I'm farther away")
        )
      )
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
      div(
        cls("flex gap-4 items-center"),
        div(
          Button(
            _.id := "popover__big-arrow"
          )("Big arrow"),
          Popover(
            _.forId := "popover__big-arrow",
            _.style := "--arrow-size: 8px;"
          )("I have a big arrow")
        ),
        div(
          Button(
            _.id := "popover__no-arrow"
          )("No arrow"),
          Popover(
            _.forId := "popover__no-arrow",
            _.style := "--arrow-size: 0;"
          )("I don't have an arrow")
        )
      )
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
      div(
        Button(
          _.id := "popover__max-width"
        )("Toggle me"),
        Popover(
          _.forId := "popover__max-width",
          _.style := "--max-width: 160px;"
        )(
          "Popovers will usually grow to be much wider, but this one has a custom max width that forces text to wrap."
        )
      )
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
        Popover(
          _.forId := "popover__autofocus"
        )(
          div(
            cls("flex flex-col gap-4"),
            Textarea(
              _.autofocus   := true,
              _.placeholder := "What's on your mind?",
              _.size.small,
              _.resize := "none",
              _.rows   := 3
            )(),
            Button(
              _.variant.brand,
              _.size.small,
              _.close.popover
            )("Submit")
          )
        ),
        Button(
          _.id := "popover__autofocus",
          _.slots.start(
            Icon(
              _.name := "comment"
            )()
          )
        )(
          "Feedback"
        )
      )
    })
  }
}
