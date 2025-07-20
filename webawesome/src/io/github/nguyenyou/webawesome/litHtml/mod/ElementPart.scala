package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@JSImport("lit-html", "ElementPart")
@js.native
open class ElementPart protected ()
  extends StObject
     with Disconnectable
     with Part {
  def this(element: Element, parent: Disconnectable) = this()
  def this(element: Element, parent: Disconnectable, options: RenderOptions) = this()
  
  @JSName("_$committedValue")
  var _$committedValue: Unit = js.native
  
  /* CompleteClass */
  @JSName("_$isConnected")
  var _$isConnected: Boolean = js.native
  @JSName("_$isConnected")
  def _$isConnected_MElementPart: Boolean = js.native
  
  @JSName("_$setValue")
  def _$setValue(value: Any): Unit = js.native
  
  var element: Element = js.native
  
  var options: js.UndefOr[RenderOptions] = js.native
  
  val `type`: /* 6 */ Double = js.native
}
