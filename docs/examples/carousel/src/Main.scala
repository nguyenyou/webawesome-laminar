package examples.carousel

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
  example9()
  example10()
  example11()
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
      Carousel(
        _.pagination    := true,
        _.navigation    := true,
        _.mouseDragging := true,
        _.loop          := true
      )(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
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
      Carousel(_.pagination := true)(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
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
      Carousel(_.navigation := true)(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
        )
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
      Carousel(
        _.loop       := true,
        _.navigation := true,
        _.pagination := true
      )(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
        )
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
      Carousel(
        _.autoplay   := true,
        _.loop       := true,
        _.pagination := true
      )(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
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
      val mouseDragging = Var(false)
      
      div(
        Carousel(
          _.pagination := true,
          _.mouseDragging <-- mouseDragging
        )(
          CarouselItem()(
            img(
              alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
              src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
              src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
              src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
              src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
              src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
            )
          )
        ),
        Divider()(),
        Switch(
          _.checked <-- mouseDragging,
          _.onInput.mapToChecked --> mouseDragging
        )("Enable mouse dragging")
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
      Carousel(
        _.navigation    := true,
        _.pagination    := true,
        _.slidesPerPage := 2,
        _.slidesPerMove := 2
      )(
        CarouselItem(
          _.style := "background: red;"
        )("Slide 1"),
        CarouselItem(
          _.style := "background: orange;"
        )("Slide 2"),
        CarouselItem(
          _.style := "background: yellow;"
        )("Slide 3"),
        CarouselItem(
          _.style := "background: green;"
        )("Slide 4"),
        CarouselItem(
          _.style := "background: blue;"
        )("Slide 5"),
        CarouselItem(
          _.style := "background: purple;"
        )("Slide 6")
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
      div(
        styleTag("""
          .vertical-carousel {
            max-height: 400px;
          }
      
          .vertical-carousel::part(base) {
            grid-template-areas: 'slides slides pagination';
          }
      
          .vertical-carousel::part(pagination) {
            flex-direction: column;
          }
      
          .vertical-carousel::part(navigation) {
            transform: rotate(90deg);
            display: flex;
          }
        """),
        Carousel(
          _.pagination := true,
          _.orientation.vertical
        )(
          cls("vertical-carousel"),
          CarouselItem()(
            img(
              alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
              src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
              src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
              src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
              src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
            )
          ),
          CarouselItem()(
            img(
              alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
              src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
            )
          )
        )
      )
    })
  }
}

def example9() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example9")
  if (container != null) {
    render(container, {
      Carousel(
        _.navigation := true,
        _.pagination := true,
        _.style      := "--aspect-ratio: 3/2;"
      )(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
        )
      )
    })
  }
}

def example10() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example10")
  if (container != null) {
    render(container, {
      Carousel(
        _.pagination := true,
        _.style      := "--scroll-hint: 10%;"
      )(
        CarouselItem()(
          img(
            alt := "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
            src := "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
            src := "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
            src := "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
            src := "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          )
        ),
        CarouselItem()(
          img(
            alt := "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
            src := "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          )
        )
      )
    })
  }
}

def example11() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example11")
  if (container != null) {
    render(container, {
      type Item = (imgSrc: String, description: String, thumbnailAlt: String)
      
      val activeSlide = Var(0.0)
      
      val items: Seq[Item] = Seq(
        (
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10",
          "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
          "Thumbnail by 1"
        ),
        (
          "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10",
          "A river winding through an evergreen forest (by Luca Bravo on Unsplash)",
          "Thumbnail by 2"
        ),
        (
          "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10",
          "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
          "Thumbnail by 3"
        ),
        (
          "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10",
          "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
          "Thumbnail by 4"
        ),
        (
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10",
          "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
          "Thumbnail by 5"
        )
      )
      div(
        styleTag("""
          .carousel-thumbnails {
            --slide-aspect-ratio: 3 / 2;
          }
      
          .thumbnails {
            display: flex;
            justify-content: center;
          }
      
          .scroller {
            display: flex;
            gap: var(--wa-space-s);
            overflow-x: auto;
            scrollbar-width: none;
            scroll-behavior: smooth;
            scroll-padding: var(--wa-space-s);
          }
      
          .scroller::-webkit-scrollbar {
            display: none;
          }
      
          .image {
            width: 64px;
            height: 64px;
            object-fit: cover;
      
            opacity: 0.3;
            will-change: opacity;
            transition: 250ms opacity;
      
            cursor: pointer;
          }
      
          .image.active {
            opacity: 1;
          }
        """),
        Carousel(
          _.navigation := true,
          _.loop       := true,
          _.onSlideChange.map(_.detail.index.toDouble) --> activeSlide
        )(
          inContext { ctx =>
            activeSlide --> Observer[Double] { slide =>
              ctx.ref.goToSlide(slide, "smooth")
            }
          },
          items.map { item =>
            CarouselItem()(
              img(
                alt := item.description,
                src := item.imgSrc
              )
            )
          }
        ),
        div(
          cls("thumbnails"),
          div(
            cls("scroller"),
            items.zipWithIndex.map { case (item, index) =>
              img(
                alt := item.thumbnailAlt,
                cls("image"),
                cls("active") <-- activeSlide.signal.map(_ == index),
                src := item.imgSrc,
                onClick.mapTo(index.toDouble) --> activeSlide
              )
            }
          )
        )
      )
    })
  }
}
