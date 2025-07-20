package doc.components

import com.raquo.laminar.api.L.*
import doc.AppRouter.*
import doc.Pages.*
import doc.*
import doc.facades.ScrollOptions
import doc.facades.scrollIntoViewIfNeeded
import doc.libs.scalawind.*
import org.scalajs.dom

case class Sidebar() {
  private case class IndicatorStyles(height: Int, width: Int, top: Int)

  private val activeLinkRefVar = Var[Option[dom.Element]](None)

  private val hoverLinkVar    = Var[Option[Page]](None)
  private val hoverLinkSignal = hoverLinkVar.signal.distinct

  private val hoverStylesVar = Var[IndicatorStyles](
    IndicatorStyles(
      0,
      0,
      0
    )
  )

  private val hoverStylesSignal = hoverStylesVar.signal

  private val scrollContainer = div(tw.relative.hFull.overflowYAuto)

  private def pageLink(
      page: Page,
      title: Option[String] = None
  ): HtmlElement = {
    val tag            = a()
    val isActiveSignal = currentPageSignal.map(_ == page).distinct
    tag
      .amend(
        tw.group.relative.flex.h8.wFull.itemsCenter.roundedLg.px3.textBase,
        tw.fontSemibold.sidebarItemHover <-- isActiveSignal,
        tw.fontMedium,
        navigateTo(page),
        title.getOrElse(page.title),
        isActiveSignal --> Observer[Boolean] { isActive =>
          if (isActive) {
            activeLinkRefVar.set(Some(tag.ref))
          }
        },
        onMouseLeave.mapTo(None) --> hoverLinkVar
      )
      .amendThis { thisNode =>
        onMouseEnter --> Observer { _ =>
          Var.set(
            hoverLinkVar -> Some(page),
            hoverStylesVar ->
              IndicatorStyles(
                thisNode.ref.offsetHeight.toInt,
                thisNode.ref.offsetWidth.toInt,
                thisNode.ref.offsetTop.toInt - scrollContainer.ref.scrollTop.toInt
              )
          )
        }
      }
  }

  private val hoverIndicator: HtmlElement = {
    div(
      tw.absolute.roundedLg.transitionAll.duration300.easeOut,
      tw.sidebarItemHover,
      cls <-- hoverLinkSignal.map {
        case Some(_) => tw.opacity100.css
        case None    => tw.opacity0.css
      },
      top.px <-- hoverStylesSignal.map(_.top),
      height.px <-- hoverStylesSignal.map(_.height),
      width.px <-- hoverStylesSignal.map(_.width),
      left.rem(0.25),
    )
  }

  private val scrollToViewSubscription =
    activeLinkRefVar.signal.distinct --> Observer[Option[dom.Element]] {
      case Some(ref) =>
        dom.window.requestAnimationFrame { _ =>
          scrollIntoViewIfNeeded(
            ref,
            ScrollOptions(
              behavior = ScrollOptions.SMOOTH,
              block = ScrollOptions.CENTER,
              inline = ScrollOptions.CENTER,
              scrollMode = ScrollOptions.IF_NEEDED,
              boundary = scrollContainer.ref
            )
          )
        }
      case None => ()
    }

  def Section(title: String, pages: List[Page]) = {
    div(
      div(
        tw.roundedMd.px2.py1.textXs.fontBold.uppercase,
        title
      ),
      div(
        tw.grid.gridFlowRow.autoRowsMax.`gap_0.5`.textSm,
        pages.map(page => pageLink(page))
      )
    )
  }

  def apply(): HtmlElement = {
    asideTag(
      tw.relative.fixed.top14.z30.hidden,
      tw.wFull.shrink0.md(tw.sticky.block),
      tw.h_("calc(100vh-3.5rem)"),
      hoverIndicator,
      scrollContainer.amend(
        tw.noScrollbar.hFull.overflowAuto.py6.pr3.pl1.lg(tw.py8),
        div(
          tw.flex.flexCol.gap6,
          Section(
            title = "Components",
            pages = componentsPages
          ),
        )
      )
    ).amend(
      scrollToViewSubscription
    )
  }

}
