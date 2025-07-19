package doc.facades

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

object Marked {

  @js.native
  @JSImport("marked", "parse")
  def parse(markdown: String): String = js.native

}
