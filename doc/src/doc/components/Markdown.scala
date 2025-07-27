package doc.components

import com.raquo.laminar.api.L.*
import doc.facades.Marked

case class Markdown(content: String) {

  def apply(): HtmlElement = {
    div(
      cls("typography"),
      onMountCallback { ctx =>
        ctx.thisNode.ref.innerHTML = Marked.parse(content)
      }
    )
  }

}
