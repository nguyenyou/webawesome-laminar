package examples.skeleton

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
      div(
        styleTag("""
          .skeleton-overview .skeleton-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
          }
      
          .skeleton-overview .skeleton-header wa-skeleton:last-child {
            flex: 0 0 auto;
            width: 30%;
          }
      
          .skeleton-overview wa-skeleton {
            margin-bottom: 1rem;
          }
      
          .skeleton-overview wa-skeleton:nth-child(1) {
            float: left;
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
            vertical-align: middle;
          }
      
          .skeleton-overview wa-skeleton:nth-child(3) {
            width: 95%;
          }
      
          .skeleton-overview wa-skeleton:nth-child(4) {
            width: 80%;
          }
        """),
        div(
          cls := "skeleton-overview",
          div(
            cls := "skeleton-header",
            Skeleton(_.effect.sheen)(),
            Skeleton(_.effect.sheen)()
          ),
          Skeleton(_.effect.sheen)(),
          Skeleton(_.effect.sheen)(),
          Skeleton(_.effect.sheen)()
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
      Skeleton(_.effect.none)()
      Skeleton(_.effect.sheen)()
      Skeleton(_.effect.pulse)()
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
      div(
        cls := "skeleton-paragraphs",
        styleTag("""
          .skeleton-paragraphs wa-skeleton {
            margin-bottom: 1rem;
          }
      
          .skeleton-paragraphs wa-skeleton:nth-child(2) {
            width: 95%;
          }
      
          .skeleton-paragraphs wa-skeleton:nth-child(4) {
            width: 90%;
          }
      
          .skeleton-paragraphs wa-skeleton:last-child {
            width: 50%;
          }
        """),
        Skeleton()(),
        Skeleton()(),
        Skeleton()(),
        Skeleton()(),
        Skeleton()()
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
      div(
        styleTag("""
          .skeleton-avatars wa-skeleton {
            display: inline-flex;
            width: 3rem;
            height: 3rem;
            margin-right: 0.5rem;
          }
      
          .skeleton-avatars wa-skeleton:nth-child(1)::part(indicator) {
            border-radius: 0;
          }
      
          .skeleton-avatars wa-skeleton:nth-child(2)::part(indicator) {
            border-radius: var(--wa-border-radius-m);
          }
        """),
        div(
          cls := "skeleton-avatars",
          Skeleton()(),
          Skeleton()(),
          Skeleton()()
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
      div(
        cls := "skeleton-shapes",
        styleTag("""
          .skeleton-shapes wa-skeleton {
            display: inline-flex;
            width: 50px;
            height: 50px;
          }
      
          .skeleton-shapes .square::part(indicator) {
            border-radius: var(--wa-border-radius-m);
          }
      
          .skeleton-shapes .circle::part(indicator) {
            border-radius: var(--wa-border-radius-circle);
          }
      
          .skeleton-shapes .triangle::part(indicator) {
            border-radius: 0;
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
          }
      
          .skeleton-shapes .cross::part(indicator) {
            border-radius: 0;
            clip-path: polygon(
              20% 0%,
              0% 20%,
              30% 50%,
              0% 80%,
              20% 100%,
              50% 70%,
              80% 100%,
              100% 80%,
              70% 50%,
              100% 20%,
              80% 0%,
              50% 30%
            );
          }
      
          .skeleton-shapes .comment::part(indicator) {
            border-radius: 0;
            clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
          }
      
          .skeleton-shapes wa-skeleton:not(:last-child) {
            margin-right: 0.5rem;
          }
        """),
        Skeleton()(cls := "square"),
        Skeleton()(cls := "circle"),
        Skeleton()(cls := "triangle"),
        Skeleton()(cls := "cross"),
        Skeleton()(cls := "comment")
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
      Skeleton(
        _.effect.sheen
      )(
        styleAttr := "--color: tomato; --sheen-color: #ffb094;"
      )
    })
  }
}
