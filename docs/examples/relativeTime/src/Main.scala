package examples.relativeTime

@main
def app = {
  example1()
  example2()
  example3()
  example4()
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
        p("Web Awesome 2 release date 🎉"),
        RelativeTime(_.date := "2020-07-15T09:17:00-04:00")()
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
      RelativeTime(
        _.sync := true,
        _.date := {
          // Set the date to 1 minute ago
          val oneMinuteAgo = new js.Date(js.Date.now() - 60000)
          oneMinuteAgo.toISOString()
        }
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
      div("Narrow: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00", _.format.narrow)())
      div("Short: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00", _.format.short)())
      div("Long: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00", _.format.long)())
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
      div("English: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "en-US"))
      div("Chinese: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "zh-CN"))
      div("German: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "de"))
      div("Greek: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "el"))
      div("Russian: ", RelativeTime(_.date := "2020-07-15T09:17:00-04:00")(lang := "ru"))
    })
  }
}
