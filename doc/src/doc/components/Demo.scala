package doc.components

import com.raquo.laminar.api.L.*
import doc.macros.Source.AnnotationType

case class Demo(
    title: String = "",
    description: String = "",
    content: AnnotationType,
    resizable: Boolean = PreviewContainer.defaultResizable,
    containerMinWidth: Double = PreviewContainer.defaultContainerMinWidth,
    center: Boolean = PreviewContainer.defaultCenter
) {

  def apply(): HtmlElement = {
    Preview(
      title = title,
      description = description,
      resizable = resizable,
      containerMinWidth = containerMinWidth,
      center = center
    )(
      preview = content.element
    )(
      sourceCode = content.source,
      fullSourceCode = content.fullSource
    )
  }

}
