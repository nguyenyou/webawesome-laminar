package doc.components

import com.raquo.laminar.api.L.*
import doc.facades.*
import doc.libs.scalawind.*
import io.github.nguyenyou.webawesome.laminar.*

import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.Failure
import scala.util.Success

object Codeblock {

  def apply(source: String, fullSource: String): HtmlElement = {
    val showFullSourceVar    = Var(false)
    val showFullSourceSignal = showFullSourceVar.signal.distinct

    val showSourceSignal = showFullSourceSignal.map {
      case true  => fullSource.trim
      case false => source.trim
    }

    val codeNode = div()

    div(
      tw.relative,
      codeNode.amend(
        showSourceSignal --> Observer[String] { showSource =>
          Shiki
            .codeToHtml(
              showSource,
              CodeToHtmlOptions(
                lang = "scala",
                theme = "github-dark-default",
                transformers = scalajs.js.Array(
                  ShikiTransformers.transformerNotationDiff(),
                  ShikiTransformers.transformerNotationHighlight(),
                  ShikiTransformers.transformerNotationFocus(),
                  ShikiTransformers.transformerNotationWordHighlight()
                )
              )
            )
            .toFuture
            .onComplete {
              case Failure(_) => ()
              case Success(value) =>
                codeNode.ref.innerHTML = value
            }
        }
      ),
      codeNode.amend(
        pre(
          cls("shiki"),
          code(
            text <-- showSourceSignal
          )
        )
      ),
      div(
        tw.absolute.top4.right6,
        div(
          tw.flex.gap2.itemsCenter,
          if (source != fullSource) {
            Button(
              _.size := "small",
              _.onClick --> { _ =>
                showFullSourceVar.invert()
              },
              _.appearance := "filled"
            )(
              text <-- showFullSourceSignal.map {
                case true  => "Collapse code"
                case false => "Expand code"
              }
            )
          } else {
            emptyNode
          },
          Copy(
            content = Val(source.trim),
            renderChildren = renderer => {
              Button(
                _.onClick --> { _ =>
                  renderer.copy.onNext(())
                },
                _.size       := "small",
                _.appearance := "filled"
              )(
                Icon(
                  _.label := "Copy code",
                  _.name <-- renderer.isCopied.map {
                    if (_) "check" else "copy"
                  }
                )()
              )
            }
          )()
        )
      )
    )
  }

}
