package examples.badge

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
  example7()
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
      Badge()("Badge")
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
          Badge(_.variant.brand)("Brand"),
          Badge(_.variant.success)("Success"),
          Badge(_.variant.neutral)("Neutral"),
          Badge(_.variant.warning)("Warning"),
          Badge(_.variant.danger)("Danger"),
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
      Badge(_.appearance.accent, _.variant.neutral)("Accent")
      Badge(_.appearance.filledOutlined, _.variant.neutral)("Filled + Outlined")
      Badge(_.appearance.filled, _.variant.neutral)("Filled")
      Badge(_.appearance.outlined, _.variant.neutral)("Outlined")
      
      Badge(_.appearance.accent, _.variant.brand)("Accent")
      Badge(_.appearance.filledOutlined, _.variant.brand)("Filled + Outlined")
      Badge(_.appearance.filled, _.variant.brand)("Filled")
      Badge(_.appearance.outlined, _.variant.brand)("Outlined")
      
      Badge(_.appearance.accent, _.variant.success)("Accent")
      Badge(_.appearance.filledOutlined, _.variant.success)("Filled + Outlined")
      Badge(_.appearance.filled, _.variant.success)("Filled")
      Badge(_.appearance.outlined, _.variant.success)("Outlined")
      
      Badge(_.appearance.accent, _.variant.warning)("Accent")
      Badge(_.appearance.filledOutlined, _.variant.warning)("Filled + Outlined")
      Badge(_.appearance.filled, _.variant.warning)("Filled")
      Badge(_.appearance.outlined, _.variant.warning)("Outlined")
      
      Badge(_.appearance.accent, _.variant.danger)("Accent")
      Badge(_.appearance.filledOutlined, _.variant.danger)("Filled + Outlined")
      Badge(_.appearance.filled, _.variant.danger)("Filled")
      Badge(_.appearance.outlined, _.variant.danger)("Outlined")
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
      Badge(
        _.variant.brand
      )(
        fontSize.px(12), // [!code highlight]
        "Brand"
      )
      Badge(
        _.variant.brand
      )(
        fontSize.px(14), // [!code highlight]
        "Brand"
      )
      Badge(
        _.variant.brand
      )(
        fontSize.px(16), // [!code highlight]
        "Brand"
      )
      Badge(
        _.variant.brand
      )(
        fontSize.px(18), // [!code highlight]
        "Brand"
      )
      Badge(
        _.variant.brand
      )(
        fontSize.px(20), // [!code highlight]
        "Brand"
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
      Badge(_.variant.brand, _.pill := true)("Brand")
      Badge(_.variant.success, _.pill := true)("Success")
      Badge(_.variant.neutral, _.pill := true)("Neutral")
      Badge(_.variant.warning, _.pill := true)("Warning")
      Badge(_.variant.danger, _.pill := true)("Danger")
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
      Badge(_.variant.brand, _.attention.pulse, _.pill := true)("1")
      Badge(_.variant.success, _.attention.pulse, _.pill := true)("1")
      Badge(_.variant.neutral, _.attention.pulse, _.pill := true)("1")
      Badge(_.variant.warning, _.attention.pulse, _.pill := true)("1")
      Badge(_.variant.danger, _.attention.pulse, _.pill := true)("1")
      
      Badge(_.variant.brand, _.attention.bounce, _.pill := true)("1")
      Badge(_.variant.success, _.attention.bounce, _.pill := true)("1")
      Badge(_.variant.neutral, _.attention.bounce, _.pill := true)("1")
      Badge(_.variant.warning, _.attention.bounce, _.pill := true)("1")
      Badge(_.variant.danger, _.attention.bounce, _.pill := true)("1")
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
      Button()(
        "Requests",
        Badge(_.pill := true)("30")
      )
      Button()(
        "Warnings",
        Badge(_.variant.warning, _.pill := true)("8")
      )
      Button()(
        "Errors",
        Badge(_.variant.danger, _.pill := true)("6")
      )
    })
  }
}
