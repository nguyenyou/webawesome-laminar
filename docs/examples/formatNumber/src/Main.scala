package examples.formatNumber

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
      val valueVar = Var("1000")
      
      div(
        cls := "format-number-overview",
        p(FormatNumber(_.value <-- valueVar.signal.map(_.toDouble))()),
        Input(
          _.`type`.number,
          _.value <-- valueVar,
          _.label := "Number to Format"
        )(
          onInput.mapToValue --> valueVar,
          maxWidth.px(180)
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
      FormatNumber(_.`type`.percent, _.value := 0)()
      FormatNumber(_.`type`.percent, _.value := 0.25)()
      FormatNumber(_.`type`.percent, _.value := 0.50)()
      FormatNumber(_.`type`.percent, _.value := 0.75)()
      FormatNumber(_.`type`.percent, _.value := 1)()
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
      div("USD: ", FormatNumber(_.`type`.currency, _.currency := "USD", _.value := 2000)())
      div("GBP: ", FormatNumber(_.`type`.currency, _.currency := "GBP", _.value := 2000)())
      div("EUR: ", FormatNumber(_.`type`.currency, _.currency := "EUR", _.value := 2000)())
      div("JPY: ", FormatNumber(_.`type`.currency, _.currency := "JPY", _.value := 2000)())
      div("CNY: ", FormatNumber(_.`type`.currency, _.currency := "CNY", _.value := 2000)())
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
      div("Default: ", FormatNumber(_.value := 3.14159)())
      div("Min 2 digits: ", FormatNumber(_.value := 3.14159, _.minimumFractionDigits := 2.0)())
      div("Max 2 digits: ", FormatNumber(_.value := 3.14159, _.maximumFractionDigits := 2.0)())
      div(
        "Min 0, Max 0: ",
        FormatNumber(_.value := 3.14159, _.minimumFractionDigits := 0.0, _.maximumFractionDigits := 0.0)()
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
      div("With grouping: ", FormatNumber(_.value := 1000000)())
      div("Without grouping: ", FormatNumber(_.value := 1000000, _.withoutGrouping := true)())
    })
  }
}
