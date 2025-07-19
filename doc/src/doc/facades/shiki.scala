package doc.facades

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

object Shiki {
  @js.native
  @JSImport("shiki", "codeToHtml")
  def codeToHtml(code: String, options: CodeToHtmlOptions = js.native): js.Promise[String] = js.native
}

@js.native
@JSImport("@shikijs/transformers", JSImport.Namespace)
object ShikiTransformers extends js.Object {
  def transformerNotationDiff(): js.Object      = js.native
  def transformerNotationHighlight(): js.Object = js.native
  def transformerNotationFocus(): js.Object = js.native
  def transformerNotationWordHighlight(): js.Object = js.native
}

trait CodeToHtmlOptions extends js.Object {
  val lang: js.UndefOr[String]                   = js.undefined
  val theme: js.UndefOr[String]                  = js.undefined
  val transformers: js.UndefOr[js.Array[js.Any]] = js.undefined
}

object CodeToHtmlOptions {
  def apply(
      lang: js.UndefOr[String] = js.undefined,
      theme: js.UndefOr[String] = js.undefined,
      transformers: js.UndefOr[js.Array[js.Any]] = js.undefined
  ): CodeToHtmlOptions = {
    val options = js.Dynamic.literal()
    lang.foreach(options.lang = _)
    theme.foreach(options.theme = _)
    transformers.foreach(options.transformers = _)
    options.asInstanceOf[CodeToHtmlOptions] // scalafix:ok
  }
}
