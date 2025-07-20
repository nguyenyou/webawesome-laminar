package doc

import com.raquo.laminar.api.L.*
import doc.AppRouter.navigateTo
import doc.components.Sidebar
import doc.components.TableOfContents
import doc.libs.scalawind.*
import doc.Pages.*

case class App() {

  enum Layout derives CanEqual {
    case Docs
    case Icons
  }

  val layoutSignal = AppRouter.currentPageSignal.map { page =>
    page match
      case IconsPage => Layout.Icons
      case _         => Layout.Docs
  }.distinct

  def renderIconsLayout() = {
    mainTag(
      tw.flex.flex1.flexCol,
      sectionTag(
        div(
          tw.containerWrapper,
          div(
            tw.container.flex.flexCol.itemsStart.gap1.py8.md(tw.py10).lg(tw.py12),
            h1(
              tw.text2xl.fontBold.leadingTight.trackingTighter.sm(tw.text3xl).md(tw.text4xl).m0.p0,
              "Icons"
            ),
            p(
              tw.maxW2xl.textBase.fontLight.sm(tw.textLg).m0.p0,
              "Icons are a great way to add visual identity to your application. They can be used to represent actions, entities, or concepts."
            )
          )
        )
      ),
      div(
        tw.containerWrapper.flex1,
        div(
          tw.container.py6,
          child <-- pageViews
        )
      )
    )
  }

  def renderDocsLayout(): HtmlElement = {
    mainTag(
      tw.flex.flex1.flexCol,
      div(
        tw.containerWrapper.flex1.flex.flexCol,
        div(
          tw.container.flex1.itemsStart,
          tw.md(tw.grid.gap6.grid_cols_("220px_minmax(0,1fr)")),
          tw.lg(tw.grid.gap6.grid_cols_("240px_minmax(0,1fr)")),
          Sidebar()(),
          mainTag(
            tw.relative.py6
              .lg(tw.gap10.py8)
              .xl(tw.grid.grid_cols_("1fr_300px")),
            div(
              tw.mxAuto.wFull.minW0.maxW4xl,
              child <-- pageViews
            ),
            div(
              tw.hidden.textSm.xl(tw.block),
              div(
                tw.sticky.top20._mt6.pt4,
                tw.h_("calc(100vh-3.5rem)"),
                TableOfContents()()
              )
            )
          )
        )
      )
    )
  }

  def renderApp(): HtmlElement = {
    div(
      tw.relative.flex.minHSvh.flexCol,
      div(
        tw.flex.flexCol.flex1,
        headerTag(
          tw.sticky.top0.z50.wFull.bgOpacity95.backdropBlur,
          div(
            tw.containerWrapper,
            div(
              tw.container.flex.h14.itemsCenter.gap2.md(tw.gap4),
              div(
                tw.mr4.flex.hFull,
                a(
                  navigateTo(HomePage),
                  tw.hFull.mr4.flex.itemsCenter.gap2.lg(tw.mr6),
                  img(
                    src := "/logo.png",
                    tw.h6.w6.objectContain
                  ),
                  div(
                    tw.fontMono.hFull.flex.itemsCenter.relative.fontBold,
                    div(
                      "WebAwesome Laminar"
                    )
                  )
                ),
                navTag(
                  tw.flex.itemsCenter.gap4.textSm.fontMedium.xl(tw.gap6),
                  a(
                    navigateTo(HomePage),
                    "Docs"
                  ),
                  a(
                    navigateTo(IconsPage),
                    "Icons"
                  )
                )
              ),
              div(
                tw.mlAuto.flex.itemsCenter.gap2.md(tw.flex1.justifyEnd),
                navTag(
                  tw.flex.itemsCenter.gap2
                )
              )
            )
          )
        ),
        child <-- layoutSignal.map {
          case Layout.Icons => renderIconsLayout()
          case Layout.Docs  => renderDocsLayout()
        },
        footerTag(
          tw.py6.md(tw.py0),
          div(
            tw.containerWrapper,
            div(
              tw.container.py4,
              div(
                tw.textBalance.textCenter.textSm.leadingLoose.textMutedForeground,
                "Built by ",
                a(
                  tw.important(tw.underline),
                  target := "_blank",
                  rel := "noopener noreferrer",
                  href := "https://github.com/nguyenyou",
                  "Tu Nguyen"
                ),
                ". The source code is available on ",
                a(
                  tw.important(tw.underline),
                  target := "_blank",
                  rel := "noopener noreferrer",
                  href := "https://github.com/nguyenyou/webawesome-laminar",
                  "GitHub"
                )
              )
            )
          )
        )
      )
    )
  }

  def apply(): HtmlElement = {
    renderApp()
  }

}
