package examples.radioGroup

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
      RadioGroup(_.label := "Select an option", _.name := "a", _.value := "1")(
        Radio(_.value := "1")("Option 1"),
        Radio(_.value := "2")("Option 2"),
        Radio(_.value := "3")("Option 3")
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
      RadioGroup(
        _.label := "Select an option",
        _.hint  := "Choose the most appropriate option.",
        _.name  := "a",
        _.value := "1"
      )(
        Radio(_.value := "1")("Option 1"),
        Radio(_.value := "2")("Option 2"),
        Radio(_.value := "3")("Option 3")
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
      RadioGroup(
        _.label := "Horizontal options",
        _.hint  := "Select an option that makes you proud.",
        _.orientation.horizontal,
        _.name  := "a",
        _.value := "1"
      )(
        Radio(_.appearance.button, _.value := "1")("Option 1"),
        Radio(_.appearance.button, _.value := "2")("Option 2"),
        Radio(_.appearance.button, _.value := "3")("Option 3")
      )
      RadioGroup(
        _.label := "Vertical options",
        _.hint  := "Select an option that makes you proud.",
        _.orientation.vertical,
        _.name  := "a",
        _.value := "1"
      )(
        maxWidth.px(300),
        Radio(_.appearance.button, _.value := "1")("Option 1"),
        Radio(_.appearance.button, _.value := "2")("Option 2"),
        Radio(_.appearance.button, _.value := "3")("Option 3")
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
      RadioGroup(
        _.label    := "Select an option",
        _.disabled := true
      )(
        Radio(_.value := "1")("Option 1"),
        Radio(_.value := "2", _.disabled := true)("Option 2"),
        Radio(_.value := "3")("Option 3")
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
      RadioGroup(_.label := "Select an option")(
        Radio(_.value := "1")("Option 1"),
        Radio(_.value := "2", _.disabled := true)("Option 2"),
        Radio(_.value := "3")("Option 3")
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
      RadioGroup(
        _.label := "Select an option",
        _.hint  := "Choose the most appropriate option.",
        _.orientation.horizontal,
        _.name  := "a",
        _.value := "1"
      )(
        Radio(_.value := "1")("Option 1"),
        Radio(_.value := "2")("Option 2"),
        Radio(_.value := "3")("Option 3")
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
      RadioGroup(
        _.size.small
      )(
        Radio(_.value := "small")("Small"),
        Radio(_.value := "medium")("Medium"),
        Radio(_.value := "large")("Large")
      )
      RadioGroup(
        _.size.medium
      )(
        Radio(_.value := "small")("Small"),
        Radio(_.value := "medium")("Medium"),
        Radio(_.value := "large")("Large")
      )
      RadioGroup(
        _.size.large
      )(
        Radio(_.value := "small")("Small"),
        Radio(_.value := "medium")("Medium"),
        Radio(_.value := "large")("Large")
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
      form(
        onSubmit.preventDefault --> Observer[dom.Event] { _ =>
          dom.window.alert("All fields are valid!")
        },
        RadioGroup(
          _.label    := "Select an option",
          _.name     := "a",
          _.required := true
        )(
          Radio(_.value := "1")("Option 1"),
          Radio(_.value := "2")("Option 2"),
          Radio(_.value := "3")("Option 3")
        ),
        br(),
        Button(
          _.typ.submit,
          _.variant.brand
        )("Submit")
      )
    })
  }
}
