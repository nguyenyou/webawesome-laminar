package doc.facades

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@js.native
@JSImport("@awesome.me/webawesome", JSImport.Namespace)
object WebAwesome extends js.Object {
  def getAnimationNames(): js.Array[String] = js.native
  def getEasingNames(): js.Array[String]    = js.native
}
