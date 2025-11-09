package examples.tag

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
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
        cls("flex flex-wrap gap-2"),
        Tag(_.variant.brand)("Brand"),
        Tag(_.variant.success)("Success"),
        Tag(_.variant.neutral)("Neutral"),
        Tag(_.variant.warning)("Warning"),
        Tag(_.variant.danger)("Danger")
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
        cls("space-y-4"),
        p(
          cls("flex flex-wrap gap-2"),
          Tag(_.variant.brand, _.appearance.accent)("Accent"),
          Tag(_.variant.brand, _.appearance.filledOutlined)("Filled + Outlined"),
          Tag(_.variant.brand, _.appearance.filled)("Filled"),
          Tag(_.variant.brand, _.appearance.outlined)("Outlined")
        ),
        p(
          cls("flex flex-wrap gap-2"),
          Tag(_.variant.success, _.appearance.accent)("Accent"),
          Tag(_.variant.success, _.appearance.filledOutlined)("Filled + Outlined"),
          Tag(_.variant.success, _.appearance.filled)("Filled"),
          Tag(_.variant.success, _.appearance.outlined)("Outlined")
        ),
        p(
          cls("flex flex-wrap gap-2"),
          Tag(_.variant.neutral, _.appearance.accent)("Accent"),
          Tag(_.variant.neutral, _.appearance.filledOutlined)("Filled + Outlined"),
          Tag(_.variant.neutral, _.appearance.filled)("Filled"),
          Tag(_.variant.neutral, _.appearance.outlined)("Outlined")
        ),
        p(
          cls("flex flex-wrap gap-2"),
          Tag(_.variant.warning, _.appearance.accent)("Accent"),
          Tag(_.variant.warning, _.appearance.filledOutlined)("Filled + Outlined"),
          Tag(_.variant.warning, _.appearance.filled)("Filled"),
          Tag(_.variant.warning, _.appearance.outlined)("Outlined")
        ),
        p(
          cls("flex flex-wrap gap-2"),
          Tag(_.variant.danger, _.appearance.accent)("Accent"),
          Tag(_.variant.danger, _.appearance.filledOutlined)("Filled + Outlined"),
          Tag(_.variant.danger, _.appearance.filled)("Filled"),
          Tag(_.variant.danger, _.appearance.outlined)("Outlined")
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
        cls("flex flex-wrap gap-2"),
        Tag(_.size.small)("Small"),
        Tag(_.size.medium)("Medium"),
        Tag(_.size.large)("Large")
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
        cls("flex flex-wrap gap-2"),
        Tag(_.size.small, _.pill := true)("Small"),
        Tag(_.size.medium, _.pill := true)("Medium"),
        Tag(_.size.large, _.pill := true)("Large")
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
        div(
          cls("flex flex-wrap gap-2"),
          Tag(_.size.small, _.withRemove := true)("Small"),
          Tag(_.size.medium, _.withRemove := true)("Medium"),
          Tag(_.size.large, _.withRemove := true)("Large")
        )
      )
    })
  }
}
