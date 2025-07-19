package doc.components

import com.raquo.laminar.api.L.*
import doc.macros.Source.AnnotationType

object Demo {

  def apply(
      title: => String = "",
      description: => String = "",
      content: => AnnotationType,
      resizable: => Boolean = PreviewContainer.defaultResizable,
      containerMinWidth: => Double = PreviewContainer.defaultContainerMinWidth
  ): HtmlElement = {
    Preview(
      title = title,
      description = description,
      resizable = resizable,
      containerMinWidth = containerMinWidth
    )(
      preview = content.element
    )(
      sourceCode = content.source,
      fullSourceCode = content.fullSource
    )
  }

}
