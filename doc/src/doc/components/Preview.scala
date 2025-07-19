package doc.components

import com.raquo.laminar.api.L.*
import doc.facades.Marked
import doc.libs.scalawind.*

object Preview {

  private type Tab = "Preview" | "Code"
  private val initialTab: Tab = "Preview"
  private case class IndicatorStyles(width: Int, left: Int)

  private def getIndicatorStyles(ele: HtmlElement) =
    IndicatorStyles(ele.ref.offsetWidth.toInt, ele.ref.offsetLeft.toInt)


  private def render(
      title: => String,
      description: => String,
      preview: => Node,
      sourceCode: => String,
      fullSourceCode: => String,
      resizable: => Boolean,
      containerMinWidth: => Double
  ) = {
    val activeTabVar    = Var[Tab](initialTab)
    val activeTabSignal = activeTabVar.signal.distinct

    def TabItem(name: Tab, isActiveSignal: Signal[Boolean]) = {
      val isInitialTab = name == initialTab
      div(
        tw.flex.itemsCenter.justifyCenter.transitionColors.duration300.h9.px3.py1.cursorPointer.gap2.textBase.fontMedium,
        cls <-- isActiveSignal.map(
          if (_) tw.important(tw.opacity100).css
          else tw.important(tw.opacity50).css
        ),
        onClick.mapTo(name) --> activeTabVar,
        name
      )
    }

    val previewNode: HtmlElement =
      TabItem(
        name = "Preview",
        isActiveSignal = activeTabSignal.map(_ == "Preview").distinct
      )

    val codeNode: HtmlElement = TabItem(
      name = "Code",
      isActiveSignal = activeTabSignal.map(_ == "Code").distinct
    )

    val initialNode = initialTab match {
      case "Preview" => previewNode
      case "Code"    => codeNode
    }

    // Create an ID from the title for use in the URL hash
    val titleId = title.toLowerCase.replace(" ", "-")

    div(
      tw.spaceY2.mb4,
      when(title.nonEmpty)(
        h3(
          tw.fontSemibold.textLg.group,
          idAttr := titleId,
          a(
            href := s"#${titleId}",
            tw.flex.itemsCenter.gap1.relative,
            span(
              dataAttr("heading-title") := "true",
              title
            )
          )
        )
      ),
      div(
        cls("typography"),
        onMountCallback { ctx =>
          ctx.thisNode.ref.innerHTML = Marked.parse(description)
        }
      ),
      div(
        tw.relative,
        div(
          tw.relative.mb5,
          div(
            tw.flex.relative.gap2,
            previewNode,
            codeNode
          )
        ),
        div(
          div(
            tw.relative.roundedXl.overflowHidden.flex.flexCol.gap1.p1,
            cls("bg-gray-950/5 inset-ring inset-ring-gray-950/5"),
            tw.hidden <-- activeTabSignal.map(_ == "Preview").not,
            PreviewContainer(
              resizable = resizable,
              containerMinWidth = containerMinWidth
            )(preview),
          ),
          div(
            tw.relative.shadowMd.roundedXl.overflowHidden.bgBlack.p1,
            tw.hidden <-- activeTabSignal.map(_ == "Code").not,
            Codeblock(source = sourceCode, fullSource = fullSourceCode)
          )
        )
      )
    )
  }

  def apply(
      title: => String = "",
      description: => String = "",
      resizable: => Boolean = PreviewContainer.defaultResizable,
      containerMinWidth: => Double = PreviewContainer.defaultContainerMinWidth
  )(
      preview: => Node = emptyNode
  )(
      sourceCode: => String = "",
      fullSourceCode: => String = ""
  ): HtmlElement = {
    render(
      title = title,
      description = description,
      preview = preview,
      sourceCode = sourceCode,
      fullSourceCode = fullSourceCode,
      resizable = resizable,
      containerMinWidth = containerMinWidth
    )
  }

}
