package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class CarouselView()
    extends ExampleView(
      "Carousel",
      Some("https://webawesome.com/docs/components/carousel/")
    ) {

  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
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
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Pagination",
        description =
          "Use the `pagination` attribute to show the total number of slides and the current slide as a set of interactive dots.",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Navigation",
        description = "Use the `navigation` attribute to show previous and next buttons.",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Looping",
        description =
          """By default, the carousel will not advance beyond the first and last slides. You can change this behavior and force the carousel to "wrap" with the `loop` attribute.""",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Autoplay",
        description =
          """The carousel will automatically advance when the `autoplay` attribute is used. To change how long a slide is shown before advancing, set `autoplay-interval` to the desired number of milliseconds. For best results, use the `loop` attribute when autoplay is enabled. Note that autoplay will pause while the user interacts with the carousel.""",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Mouse Dragging",
        description =
          """The carousel uses scroll snap to position slides at various snap positions. This allows users to scroll through the slides very naturally, especially on touch devices. Unfortunately, desktop users won't be able to click and drag with a mouse, which can feel unnatural. Adding the `mouse-dragging` attribute can help with this.""",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Multiple Slides Per View",
        description =
          "The `slides-per-page` attribute makes it possible to display multiple slides at a time. You can also use the `slides-per-move` attribute to advance more than one slide at a time, if desired.",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Vertical Scrolling",
        description =
          """Setting the `orientation` attribute to `vertical` will render the carousel in a vertical layout. If the content of your slides vary in height, you will need to set an explicit `height` or `max-height` on the carousel using CSS.""",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Aspect Ratio",
        description =
          "Use the `--aspect-ratio` custom property to customize the size of the carousel's viewport from the default value of 16/9.",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Scroll Hint",
        description =
          "Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.",
        content = Source.annotate {
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
        }
      )().withLocator,
      Demo(
        title = "Gallery Example",
        description =
          "The carousel has a robust API that makes it possible to extend and customize. This example syncs the active slide with a set of thumbnails, effectively creating a gallery-style carousel.",
        content = Source.annotate {
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
        }
      )().withLocator
    )
  }
}
