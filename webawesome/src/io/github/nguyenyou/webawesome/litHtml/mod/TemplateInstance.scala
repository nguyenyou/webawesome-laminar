package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalajs.dom.Node
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * An updateable instance of a Template. Holds references to the Parts used to
  * update the template instance.
  */
@JSImport("lit-html", "TemplateInstance")
@js.native
open class TemplateInstance protected ()
  extends StObject
     with Disconnectable {
  def this(template: Template, parent: ChildPart) = this()
  
  /* CompleteClass */
  @JSName("_$isConnected")
  var _$isConnected: Boolean = js.native
  @JSName("_$isConnected")
  def _$isConnected_MTemplateInstance: Boolean = js.native
  
  @JSName("_$parts")
  var _$parts: js.Array[js.UndefOr[Part]] = js.native
  
  @JSName("_$template")
  var _$template: Template = js.native
  
  def _clone(): Node = js.native
  def _clone(options: RenderOptions): Node = js.native
  
  def _update(values: js.Array[Any]): Unit = js.native
  
  def parentNode: Node = js.native
}
