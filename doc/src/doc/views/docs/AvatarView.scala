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
      )().withLocator
    )
  }

}
