package examples.copyButton

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
      CopyButton(
        _.value := "Web Awesome rocks!"
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
      CopyButton(
        _.value        := "Custom labels are easy",
        _.copyLabel    := "Click to copy",
        _.successLabel := "You did it!",
        _.errorLabel   := "Whoops, your browser doesn't support this!"
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
      CopyButton(
        _.value := "Copied from a custom button",
        _.slots.copyIcon(Icon(_.name := "clipboard", _.variant := "regular")()),
        _.slots.successIcon(Icon(_.name := "thumbs-up", _.variant := "solid")()),
        _.slots.errorIcon(Icon(_.name := "xmark", _.variant := "solid")())
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
      div(
        // Copies the span's textContent
        span(idAttr := "my-phone", "+1 (234) 456-7890"),
        " ",
        CopyButton(_.from := "my-phone")(),
        br(),
        br(),
      
        // Copies the input's "value" property
        span(
          cls("flex items-center gap-1"),
          Input(
            _.id := "my-input",
            _.`type`.text,
            _.value := "User input"
          )(
            styleAttr := "display: inline-block; max-width: 300px;"
          ),
          CopyButton(_.from := "my-input.value")()
        ),
        br(),
      
        // Copies the link's "href" attribute
        a(idAttr := "my-link", href := "https://webawesome.com/", "Web Awesome Website"),
        " ",
        CopyButton(_.from := "my-link[href]")()
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
      CopyButton(_.from := "i-do-not-exist")()
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
      CopyButton(
        _.value    := "You can't copy me",
        _.disabled := true
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
      CopyButton(
        _.value            := "Web Awesome rocks!",
        _.feedbackDuration := 250
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
        CopyButton(
          _.value := "I'm so stylish",
          _.slots.copyIcon(Icon(_.name := "clipboard")()),
          _.slots.successIcon(Icon(_.name := "thumbs-up")()),
          _.slots.errorIcon(Icon(_.name := "thumbs-down")())
        )(
          className := "custom-styles"
        ),
        styleTag("""
          .custom-styles,
          .custom-styles::part(success-icon),
          .custom-styles::part(error-icon) {
            color: white;
          }
      
          .custom-styles::part(button) {
            background-color: #ff1493;
            border: solid 2px #ff7ac1;
            border-right-color: #ad005c;
            border-bottom-color: #ad005c;
            border-radius: 6px;
            transition: all var(--wa-transition-slow) var(--wa-transition-easing);
          }
      
          .custom-styles::part(button):hover {
            transform: scale(1.05);
          }
      
          .custom-styles::part(button):active {
            transform: translateY(1px);
          }
      
          .custom-styles::part(button):focus-visible {
            outline: dashed 2px deeppink;
            outline-offset: 4px;
          }
        """)
      )
    })
  }
}
