package doc.facades

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@js.native
@JSImport("dedent", JSImport.Default)
object Dedent extends js.Object {
  def apply(strings: String*): String = js.native
}
