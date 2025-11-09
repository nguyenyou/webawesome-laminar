package examples.formatDate

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
        FormatDate(_.date := "2020-07-15T09:17:00-04:00")()
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
      div("Human-readable date: ", FormatDate(_.month.long, _.day.numeric, _.year.numeric)())
      div("Time: ", FormatDate(_.hour.numeric, _.minute.numeric)())
      div("Weekday: ", FormatDate(_.weekday.long)())
      div("Month: ", FormatDate(_.month.long)())
      div("Year: ", FormatDate(_.year.numeric)())
      div("No formatting options: ", FormatDate()())
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
      div("12-hour: ", FormatDate(_.hour.numeric, _.minute.numeric, _.hourFormat := "12")())
      div("24-hour: ", FormatDate(_.hour.numeric, _.minute.numeric, _.hourFormat := "24")())
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
      div("UTC: ", FormatDate(_.hour.numeric, _.minute.numeric, _.timeZone := "UTC")())
      div(
        "Pacific: ",
        FormatDate(_.hour.numeric, _.minute.numeric, _.timeZone := "America/Los_Angeles")()
      )
      div("Tokyo: ", FormatDate(_.hour.numeric, _.minute.numeric, _.timeZone := "Asia/Tokyo")())
    })
  }
}
