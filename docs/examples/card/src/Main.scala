package examples.card

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
      Card(
        _.slots.footer(
          div(
            cls("flex justify-between items-center"),
            Button(_.variant.brand, _.pill := true)("More Info"),
            Rating()()
          )
        ),
        _.slots.media(
          img(
            src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
          )
        )
      )(
        width.px(300),
        strong("Mittens"),
        br(),
        "This kitten is as cute as he is playful. Bring him home today!",
        br(),
        small("6 weeks old")
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
      Card()(
        maxWidth.px(300),
        "This is just a basic card. No media, no header, and no footer. Just your content."
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
      Card(
        _.slots.header(
          div(
            cls("flex justify-between items-center"),
            "Header Title",
            Button(
              _.appearance.plain,
              _.slots.start(Icon(_.name := "gear", _.variant := "solid", _.label := "Settings")())
            )()
          )
        )
      )(
        maxWidth.px(300),
        "This card has a header. You can put all sorts of things in it!"
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
      Card(
        _.slots.footer(
          div(
            cls("flex justify-between items-center"),
            Rating()(),
            Button(_.variant.brand)("Preview")
          )
        )
      )(
        maxWidth.px(300),
        "This card has a footer. You can put all sorts of things in it!"
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
      Card(
        _.slots.media(
          img(
            src := "https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            alt := "A kitten walks towards camera on top of pallet."
          )
        )
      )(
        maxWidth.px(300),
        "This is a kitten, but not just any kitten. This kitten likes walking along pallets."
      )
      Card(
        _.slots.media(
          videoTag(
            sourceTag(src := "https://uploads.webawesome.com/dog-with-glasses.mp4"),
            p("Your browser doesn't support HTML video")
          )
        )
      )(
        maxWidth.px(300),
        "This is a kitten, but not just any kitten. This kitten likes walking along pallets."
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
      Card(
        _.slots.media(
          img(
            src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
          )
        )
      )(
        maxWidth.px(200),
        "Outlined (default)"
      )
      Card(
        _.appearance := "plain",
        _.slots.media(
          img(
            src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
          )
        )
      )(
        maxWidth.px(200),
        "Plain"
      )
      Card(
        _.appearance := "filled",
        _.slots.media(
          img(
            src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
          )
        )
      )(
        maxWidth.px(200),
        "Filled"
      )
      Card(
        _.appearance := "accent",
        _.slots.media(
          img(
            src := "https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            alt := "A kitten sits patiently between a terracotta pot and decorative grasses."
          )
        )
      )(
        maxWidth.px(200),
        "Accent"
      )
    })
  }
}
