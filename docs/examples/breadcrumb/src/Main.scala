package examples.breadcrumb

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
      Breadcrumb()(
        BreadcrumbItem()("Catalog"),
        BreadcrumbItem()("Clothing"),
        BreadcrumbItem()("Women's"),
        BreadcrumbItem()("Shirts & Tops")
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
      Breadcrumb()(
        BreadcrumbItem(_.href := "https://example.com/home")("Homepage"),
        BreadcrumbItem(_.href := "https://example.com/home/services")("Our Services"),
        BreadcrumbItem(_.href := "https://example.com/home/services/digital")("Digital Media"),
        BreadcrumbItem(_.href := "https://example.com/home/services/digital/web-design")("Web Design")
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
      Breadcrumb()(
        BreadcrumbItem(
          _.slots.start(Icon(_.name := "house")())
        )("Home"),
        BreadcrumbItem()("Articles"),
        BreadcrumbItem(
          _.slots.end(Icon(_.name := "tree-palm")())
        )("Traveling")
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
      Breadcrumb(
        _.slots.separator(Icon(_.name := "angles-right", _.variant := "solid")()) // [!code highlight]
      )(
        BreadcrumbItem()("First"),
        BreadcrumbItem()("Second"),
        BreadcrumbItem()("Third")
      )
      Breadcrumb(
        _.slots.separator(Icon(_.name := "arrow-right", _.variant := "solid")()) // [!code highlight]
      )(
        BreadcrumbItem()("First"),
        BreadcrumbItem()("Second"),
        BreadcrumbItem()("Third")
      )
      Breadcrumb(
        _.slots.separator(span("/")) // [!code highlight]
      )(
        BreadcrumbItem()("First"),
        BreadcrumbItem()("Second"),
        BreadcrumbItem()("Third")
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
        styleTag(
          """
          .redcrumbs wa-breadcrumb-item {
            color: firebrick;
          }
          .redcrumbs wa-breadcrumb-item:last-of-type {
            color: crimson;
          }
          .redcrumbs wa-breadcrumb-item::part(separator) {
            color: pink;
          }
          .redcrumbs wa-breadcrumb-item::part(start),
          .redcrumbs wa-breadcrumb-item::part(end) {
            color: currentColor;
          }
        """
        ),
        Breadcrumb()(
          className := "redcrumbs",
          BreadcrumbItem(
            _.slots.start(Icon(_.name := "house", _.variant := "solid")())
          )("Home"),
          BreadcrumbItem()("Articles"),
          BreadcrumbItem()("Traveling")
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
      Breadcrumb()(
        BreadcrumbItem()("Homepage"),
        BreadcrumbItem()(
          Dropdown(
            _.slots.trigger(
              Button(_.size.small, _.appearance.filled, _.pill := true)(
                Icon(_.label := "More options", _.name := "ellipsis", _.variant := "solid")() // [!code highlight]
              )
            )
          )(
            DropdownItem(_.`type` := "checkbox", _.checked := true)("Web Design"),
            DropdownItem(_.`type` := "checkbox")("Web Development"),
            DropdownItem(_.`type` := "checkbox")("Marketing")
          )
        ),
        BreadcrumbItem()("Our Services"),
        BreadcrumbItem()("Digital Media")
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
      Breadcrumb()(
        BreadcrumbItem()("Homepage"),
        BreadcrumbItem()("Our Services"),
        BreadcrumbItem()("Digital Media"),
        BreadcrumbItem(
          _.slots.end(
            Dropdown(
              _.slots.trigger(
                Button(_.size.small, _.appearance.filled, _.pill := true)(
                  Icon(_.label := "More options", _.name := "ellipsis", _.variant := "solid")() // [!code highlight]
                )
              )
            )(
              DropdownItem(_.`type` := "checkbox", _.checked := true)("Web Design"),
              DropdownItem(_.`type` := "checkbox")("Web Development"),
              DropdownItem(_.`type` := "checkbox")("Marketing")
            )
          )
        )("Web Design")
      )
    })
  }
}
