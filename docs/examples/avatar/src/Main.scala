package examples.avatar

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
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
      Avatar(_.label := "User avatar")()
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
          Avatar(
            _.image := "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // [!code highlight]
            _.label := "Avatar of a gray tabby kitten looking dow"
          )(),
          Avatar(
            _.image := "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // [!code highlight]
            _.label := "Avatar of a white and grey kitten on grey textile",
            _.loading.`lazy`
          )(),
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
      Avatar(
        _.initials := "WA", // [!code highlight]
        _.label    := "Avatar with initials: SL"
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
      Avatar(
        _.label := "Avatar with an image icon",
        // [!code highlight:6]
        _.slots.icon(
          Icon(
            _.name    := "image",
            _.variant := "solid"
          )()
        )
      )()
      Avatar(
        _.label := "Avatar with an archive icon",
        _.slots.icon(
          Icon(
            _.name    := "archive",
            _.variant := "solid"
          )()
        )
      )()
      Avatar(
        _.label := "Avatar with a briefcase icon",
        _.slots.icon(
          Icon(
            _.name    := "briefcase",
            _.variant := "solid"
          )()
        )
      )()
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
      Avatar(
        _.shape.square, // [!code highlight]
        _.label := "Square avatar"
      )()
      Avatar(
        _.shape.rounded, // [!code highlight]
        _.label := "Rounded avatar"
      )()
      Avatar(
        _.shape.circle, // [!code highlight]
        _.label := "Circle avatar"
      )()
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
      div(
        cls("avatar-group"),
        styleTag("""
          .avatar-group wa-avatar:not(:first-of-type) {
            margin-left: calc(-1 * var(--wa-space-m));
          }
      
          .avatar-group wa-avatar {
            border: solid 2px var(--wa-color-surface-default);
          }
        """),
        Avatar(
          _.image := "https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right",
          _.label := "Avatar 1 of 4"
        )(),
        Avatar(
          _.image := "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80",
          _.label := "Avatar 2 of 4"
        )(),
        Avatar(
          _.image := "https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80",
          _.label := "Avatar 3 of 4"
        )(),
        Avatar(
          _.image := "https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80",
          _.label := "Avatar 4 of 4"
        )()
      )
    })
  }
}
