package doc.components

import scala.scalajs.LinkingInfo.developmentMode

import com.raquo.laminar.api.L.*
import com.raquo.laminar.codecs.{IntAsStringCodec, StringAsIsCodec}

trait Locator(using
    n: sourcecode.FileName,
    f: sourcecode.File,
    l: sourcecode.Line
) {

  def locatorModifiers(el: HtmlElement): HtmlElement = {
    el.amend(
      Locator.scalaFileName := n.value,
      Locator.scalaSourcePath := f.value,
      Locator.scalaLineNumber := l.value,
      dataAttr("source-path") := f.value
    )
  }

}

object Locator {

  private lazy val scalaSourcePath =
    htmlProp("__scalasourcepath", StringAsIsCodec)

  private lazy val scalaFileName =
    htmlProp("__scalafilename", StringAsIsCodec)

  private lazy val scalaLineNumber =
    htmlProp("__scalasourceline", IntAsStringCodec)

  extension (element: HtmlElement) {
    inline def withLocator: HtmlElement = {
      val fileName = sourcecode.FileName()
      val file = sourcecode.File()
      val line = sourcecode.Line()

      element.amend(
        scalaFileName := fileName,
        scalaSourcePath := file,
        scalaLineNumber := line,
        dataAttr("source-path") := s"${fileName}:${line}"
      )
    }
  }
}
