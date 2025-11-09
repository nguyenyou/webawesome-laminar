package examples.button

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
      Button(
        _.onClick --> Observer[dom.MouseEvent] { event =>
          dom.window.alert(s"Clicked at clientX ${event.clientX}, clientY ${event.clientY}")
        }
      )("Button")
    })
  }
}

def example2() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example2")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.variant.brand)("Brand"),
          Button(_.variant.danger)("Danger"),
          Button(_.variant.neutral)("Neutral"),
          Button(_.variant.success)("Success"),
          Button(_.variant.warning)("Warning"),
        )
      )
    })
  }
}

def example3() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example3")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.appearance.accent, _.variant.neutral)("Accent"),
          Button(_.appearance.filledOutlined, _.variant.neutral)("Filled + Outlined"),
          Button(_.appearance.filled, _.variant.neutral)("Filled"),
          Button(_.appearance.outlined, _.variant.neutral)("Outlined"),
          Button(_.appearance := "plain", _.variant := "neutral")("Plain"),
        ),
        Examples(
          Button(_.appearance.accent, _.variant.brand)("Accent"),
          Button(_.appearance.filledOutlined, _.variant.brand)("Filled + Outlined"),
          Button(_.appearance.filled, _.variant.brand)("Filled"),
          Button(_.appearance.outlined, _.variant.brand)("Outlined"),
          Button(_.appearance.plain, _.variant.brand)("Plain"),
        ),
        Examples(
          Button(_.appearance.accent, _.variant.success)("Accent"),
          Button(_.appearance.filledOutlined, _.variant.success)("Filled + Outlined"),
          Button(_.appearance.filled, _.variant.success)("Filled"),
          Button(_.appearance.outlined, _.variant.success)("Outlined"),
          Button(_.appearance.plain, _.variant.success)("Plain"),
        ),
        Examples(
          Button(_.appearance.accent, _.variant.warning)("Accent"),
          Button(_.appearance.filledOutlined, _.variant.warning)("Filled + Outlined"),
          Button(_.appearance.filled, _.variant.warning)("Filled"),
          Button(_.appearance.outlined, _.variant.warning)("Outlined"),
          Button(_.appearance.plain, _.variant.warning)("Plain"),
        ),
        Examples(
          Button(_.appearance.accent, _.variant.danger)("Accent"),
          Button(_.appearance.filledOutlined, _.variant.danger)("Filled + Outlined"),
          Button(_.appearance.filled, _.variant.danger)("Filled"),
          Button(_.appearance.outlined, _.variant.danger)("Outlined"),
          Button(_.appearance.plain, _.variant.danger)("Plain"),
        )
      )
    })
  }
}

def example4() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example4")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.size.small)("Small"),
          Button(_.size.medium)("Medium"),
          Button(_.size.large)("Large"),
        )
      )
    })
  }
}

def example5() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example5")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.size.small, _.pill := true)("Small"),
          Button(_.size.medium, _.pill := true)("Medium"),
          Button(_.size.large, _.pill := true)("Large"),
        )
      )
    })
  }
}

def example6() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example6")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.href := "https://example.com/")("Link"),
          Button(_.href := "https://example.com/", _.target := "_blank")("Link with target"),
          Button(
            _.href     := "/assets/images/logo.svg",
            _.download := "shoelace.svg"
          )("Download"),
        )
      )
    })
  }
}

def example7() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example7")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.appearance.accent, _.variant.neutral)(
            Icon(_.name := "house", _.label := "Home")()
          ),
          Button(_.appearance.filled, _.variant.neutral)(
            Icon(_.name := "house", _.label := "Home")()
          ),
          Button(_.appearance.outlined, _.variant.neutral)(
            Icon(_.name := "house", _.label := "Home")()
          ),
          Button(_.appearance.plain, _.variant.neutral)(
            Icon(_.name := "house", _.label := "Home")()
          ),
        )
      )
    })
  }
}

def example8() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example8")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.size.small)("Small"),
          Button(_.size.medium)("Medium"),
          Button(_.size.large)("Large"),
        )
      )
    })
  }
}

def example9() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example9")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(
            _.size.small,
            _.slots.start(Icon(_.name := "gear", _.label := "Settings")())
          )("Settings"),
          Button(
            _.size.small,
            _.slots.end(Icon(_.name := "undo", _.label := "Refresh")())
          )("Refresh"),
          Button(
            _.size.small,
            _.slots.start(Icon(_.name := "link", _.label := "Link")()),
            _.slots.end(
              Icon(
                _.name  := "arrow-up-right-from-square",
                _.label := "Open in new tab"
              )()
            )
          )("Open"),
        ),
        Examples(
          Button(
            _.size.medium,
            _.slots.start(Icon(_.name := "gear", _.label := "Settings")())
          )("Settings"),
          Button(
            _.size.medium,
            _.slots.end(Icon(_.name := "undo", _.label := "Refresh")())
          )("Refresh"),
          Button(
            _.size.medium,
            _.slots.start(Icon(_.name := "link", _.label := "Link")()),
            _.slots.end(
              Icon(
                _.name  := "arrow-up-right-from-square",
                _.label := "Open in new tab"
              )()
            )
          )("Open"),
        ),
        Examples(
          Button(
            _.size.large,
            _.slots.start(Icon(_.name := "gear", _.label := "Settings")())
          )("Settings"),
          Button(
            _.size.large,
            _.slots.end(Icon(_.name := "undo", _.label := "Refresh")())
          )("Refresh"),
          Button(
            _.size.large,
            _.slots.start(Icon(_.name := "link", _.label := "Link")()),
            _.slots.end(
              Icon(
                _.name  := "arrow-up-right-from-square",
                _.label := "Open in new tab"
              )()
            )
          )("Open"),
        )
      )
    })
  }
}

def example10() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example10")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.size.small, _.withCaret := true)("Small"),
          Button(_.size.medium, _.withCaret := true)("Medium"),
          Button(_.size.large, _.withCaret := true)("Large"),
        )
      )
    })
  }
}

def example11() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example11")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.variant.brand, _.loading := true)("Brand"),
          Button(_.variant.danger, _.loading := true)("Danger"),
          Button(_.variant.neutral, _.loading := true)("Neutral"),
          Button(_.variant.success, _.loading := true)("Success"),
          Button(_.variant.warning, _.loading := true)("Warning"),
        )
      )
    })
  }
}

def example12() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#example12")
  if (container != null) {
    render(container, {
      ExampleGroups(
        Examples(
          Button(_.variant.brand, _.disabled := true)("Brand"),
          Button(_.variant.danger, _.disabled := true)("Danger"),
          Button(_.variant.neutral, _.disabled := true)("Neutral"),
          Button(_.variant.success, _.disabled := true)("Success"),
          Button(_.variant.warning, _.disabled := true)("Warning"),
        )
      )
    })
  }
}
