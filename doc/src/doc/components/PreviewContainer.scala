package doc.components

import com.raquo.laminar.api.L.*
import doc.libs.scalawind.*
import org.scalajs.dom

case class PreviewContainer(
    containerMinWidth: Double,
    resizable: Boolean,
    center: Boolean
) {
  case class MouseData(isDragging: Boolean, startX: Double, startWidth: Double)

  private val container          = div()
  private val mouseDataVar       = Var[MouseData](MouseData(false, 0.0, 0.0))
  private val mouseDataSignal    = mouseDataVar.signal.distinct
  private val widthVar           = Var(Option.empty[Double])
  private val widthSignal        = widthVar.signal.distinct
  private val initialWidthVar    = Var(Option.empty[Double])
  private val initialWidthSignal = initialWidthVar.signal.distinct

  def apply(preview: => Node): HtmlElement = {
    container.amend(
      tw.relative.z10.roundedLg.overflowHidden.min_h_("118px"),
      tw.py3.pl3.pr5,
      tw.bgBackground,
      tw.flex.itemsCenter.justifyCenter := center,
      onMountBind(ctx => {
        val containerWidth = ctx.thisNode.ref.getBoundingClientRect().width
        Var.set(
          widthVar        -> Some(containerWidth),
          initialWidthVar -> Some(containerWidth)
        )
        width.px <-- widthSignal
          .combineWith(initialWidthSignal)
          .map {
            case (Some(containerWidth), Some(initialWidth)) =>
              if (containerWidth >= initialWidth) {
                initialWidth
              } else if (containerWidth <= containerMinWidth) {
                containerMinWidth
              } else {
                containerWidth
              }
            case _ => containerWidth
          }
          .map(_.toInt)
      }),
      Option.when(resizable) {
        div(
          cls("resize-handle"),
          onMouseDown.map { event =>
            dom.document.body.style.setProperty("cursor", "ew-resize");
            dom.document.body.style.setProperty("user-select", "none")

            mouseDataVar.set(
              MouseData(
                isDragging = true,
                startX = event.clientX,
                startWidth = container.ref.getBoundingClientRect().width
              )
            )
          } --> Observer.empty,
          documentEvents(_.onMouseMove).compose(_.withCurrentValueOf(mouseDataSignal)).map { (event, mouseData) =>
            if (mouseData.isDragging) {
              val deltaX   = event.clientX - mouseData.startX
              val newWidth = deltaX + mouseData.startWidth
              widthVar.set(Some(newWidth))
            }
          } --> Observer.empty,
          documentEvents(_.onMouseUp).map { _ =>
            mouseDataVar.update(_.copy(isDragging = false))

            dom.document.body.style.removeProperty("cursor");
            dom.document.body.style.removeProperty("user-select")
          } --> Observer.empty
        )
      },
      preview
    )
  }
}

object PreviewContainer {
  val defaultContainerMinWidth = 200.0
  val defaultResizable         = true
  val defaultCenter            = false
}
