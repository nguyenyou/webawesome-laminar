package doc.components

import com.raquo.laminar.api.L.*
import org.scalajs.dom.HTMLTextAreaElement
import org.scalajs.dom.document

case class Copy(
    content: Signal[String],
    renderChildren: Copy.RenderChildren => HtmlElement
) {

  private val isCopied = Var(false)

  private def copy(text: String) = {
    val textAreaEle =
      document.createElement("textarea").asInstanceOf[HTMLTextAreaElement]

    textAreaEle.style.border = "0"
    textAreaEle.style.padding = "0"
    textAreaEle.style.margin = "0"

    textAreaEle.style.position = "absolute"
    textAreaEle.style.left = "-9999px"
    textAreaEle.style.opacity = "0"
    textAreaEle.style.top = s"${document.documentElement.scrollTop}px"

    textAreaEle.value = text

    document.body.appendChild(textAreaEle)

    textAreaEle.focus()
    textAreaEle.select()

    try {
      document.execCommand("copy")
    } catch {
      case _: Exception => ()
    } finally {
      document.body.removeChild(textAreaEle)
      ()
    }
    isCopied.set(true)
    ()
  }

  def apply(): HtmlElement = {
    div(
      child <-- content.map { text =>
        renderChildren(
          Copy.RenderChildren(
            isCopied = isCopied.signal,
            content = text,
            copy = Observer[Unit] { _ =>
              copy(text)
            },
            markAsNotCopiedYet = Observer[Unit] { _ =>
              isCopied.set(false)
            }
          )
        )
      }
    )
  }

}

object Copy {

  case class RenderChildren(
      isCopied: Signal[Boolean],
      content: String,
      copy: Observer[Unit],
      markAsNotCopiedYet: Observer[Unit]
  )

}
