package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import doc.libs.scalawind.*

case class AvatarView()
    extends ExampleView(
      "Avatar",
      Some("https://webawesome.com/docs/components/avatar/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        import io.github.nguyenyou.webawesome.laminar.Avatar

        Avatar(_.label := "User avatar")()
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Images",
        description = """
          | To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.
          | Avatar images can be lazily loaded by setting the `loading` attribute to `lazy`.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            Avatar(
              _.image := "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              _.label := "Avatar of a gray tabby kitten looking dow"
            )(),
            Avatar(
              _.image := "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              _.label   := "Avatar of a white and grey kitten on grey textile",
              _.loading := "lazy"
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Initials",
        description = """
          | When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.
          |""".stripMargin,
        content = Source.annotate {
          Avatar(
            _.initials := "WA",
            _.label    := "Avatar with initials: SL"
          )()
        }
      )().withLocator,
      Demo(
        title = "Custom Icons",
        description = """
          | When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            Avatar(
              _.label := "Avatar with an image icon",
              _.slots.icon(
                Icon(
                  _.name    := "image",
                  _.variant := "solid"
                )()
              )
            )(),
            Avatar(
              _.label := "Avatar with an archive icon",
              _.slots.icon(
                Icon(
                  _.name    := "archive",
                  _.variant := "solid"
                )()
              )
            )(),
            Avatar(
              _.label := "Avatar with a briefcase icon",
              _.slots.icon(
                Icon(
                  _.name    := "briefcase",
                  _.variant := "solid"
                )()
              )
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Shapes",
        description = """
          | Avatars can be shaped using the `shape` attribute.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
            Avatar(
              _.shape := "square",
              _.label := "Square avatar"
            )(),
            Avatar(
              _.shape := "rounded",
              _.label := "Rounded avatar"
            )(),
            Avatar(
              _.shape := "circle",
              _.label := "Circle avatar"
            )()
          )
        }
      )().withLocator,
      Demo(
        title = "Avatar Groups",
        description = """
          | You can group avatars with a few lines of CSS.
          |""".stripMargin,
        content = Source.annotate {
          div(
            tw.flex.gap2,
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
        }
      )().withLocator
    )
  }

}
