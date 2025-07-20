package doc.components

import com.raquo.laminar.api.L.*
import doc.facades.Marked
import doc.libs.scalawind.*

object Preview {

  private type Tab = "Preview" | "Code"
  private val initialTab: Tab = "Preview"
  private case class IndicatorStyles(width: Int, left: Int)

  

  private def render(
      title: => String,
      description: => String,
      preview: => Node,
      sourceCode: => String,
      fullSourceCode: => String,
      resizable: => Boolean,
      containerMinWidth: => Double,
      center: => Boolean
  ) = {
    val activeTabVar    = Var[Tab](initialTab)
    val activeTabSignal = activeTabVar.signal.distinct

    def TabItem(name: Tab, isActiveSignal: Signal[Boolean]) = {
      div(
        tw.flex.itemsCenter.justifyCenter.transitionColors.duration300.py1.h9.cursorPointer.gap2.textBase.fontMedium,
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
        tw.mb4,
        cls("typography"),
        onMountCallback { ctx =>
          ctx.thisNode.ref.innerHTML = Marked.parse(description)
        }
      ),
      div(
        tw.relative.flex.flexCol.gap2,
        div(
          tw.relative,
          div(
            tw.flex.relative.gap4.py1,
            previewNode,
            codeNode
          )
        ),
        div(
          div(
            tw.relative.roundedXl.overflowHidden.flex.flexCol.gap1.p1,
            cls("bg-gray-800/20 inset-ring inset-ring-gray-800/20"),
            tw.hidden <-- activeTabSignal.map(_ == "Preview").not,
            PreviewContainer(
              resizable = resizable,
              containerMinWidth = containerMinWidth,
              center = center
            )(preview)
          ),
          div(
            tw.relative.shadowMd.roundedXl.overflowHidden.p1,
            cls("bg-gray-800/60"),
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
      containerMinWidth: => Double = PreviewContainer.defaultContainerMinWidth,
      center: => Boolean = PreviewContainer.defaultCenter
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
      containerMinWidth = containerMinWidth,
      center = center
    )
  }

}
