package examples.callout

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
      Callout(
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "This is a standard callout. You can customize its content and even the icon."
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
      Callout(
        _.variant.brand,
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        strong("This is super informative"),
        br(),
        "You can tell by how pretty the callout is."
      )
      Callout(
        _.variant.success,
        _.slots.icon(Icon(_.name := "circle-check")())
      )(
        strong("Your changes have been saved"),
        br(),
        "You can safely exit the app now."
      )
      Callout(
        _.variant.neutral,
        _.slots.icon(Icon(_.name := "gear")())
      )(
        strong("Your settings have been updated"),
        br(),
        "Settings will take effect on next login."
      )
      Callout(
        _.variant.warning,
        _.slots.icon(Icon(_.name := "triangle-exclamation")())
      )(
        strong("Your session has ended"),
        br(),
        "Please login again to continue."
      )
      Callout(
        _.variant.danger,
        _.slots.icon(Icon(_.name := "circle-exclamation")())
      )(
        strong("Your account has been deleted"),
        br(),
        "We're very sorry to see you go!"
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
      Callout(
        _.variant.brand,
        _.appearance.accent,
        _.slots.icon(Icon(_.name := "square-check")())
      )(
        "This ",
        strong("accent"),
        " callout draws attention"
      )
      Callout(
        _.variant.brand,
        _.appearance.filledOutlined,
        _.slots.icon(Icon(_.name := "fill-drip")())
      )(
        "This callout is both ",
        strong("filled"),
        " and ",
        strong("outlined")
      )
      Callout(
        _.variant.brand,
        _.appearance.filled,
        _.slots.icon(Icon(_.name := "fill")())
      )(
        "This callout is only ",
        strong("filled")
      )
      Callout(
        _.variant.brand,
        _.appearance.outlined,
        _.slots.icon(Icon(_.name := "lines-leaning")())
      )(
        "Here's an ",
        strong("outlined"),
        " callout"
      )
      Callout(
        _.variant.brand,
        _.appearance.plain,
        _.slots.icon(Icon(_.name := "font")())
      )(
        "No bells and whistles on this ",
        strong("plain"),
        " callout"
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
      Callout(
        _.size.large,
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "This is meant to be very emphasized."
      )
      Callout(
        _.size.medium,
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "Normal-sized callout."
      )
      Callout(
        _.size.small,
        _.slots.icon(Icon(_.name := "circle-info")())
      )(
        "Just a small tip!"
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
      Callout(_.variant.brand)(
        "Nothing fancy here, just a simple callout."
      )
    })
  }
}
