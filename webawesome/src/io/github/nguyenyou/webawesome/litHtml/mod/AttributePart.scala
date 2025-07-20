package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@JSImport("lit-html", "AttributePart")
@js.native
open class AttributePart protected ()
  extends StObject
     with Disconnectable
     with Part {
  def this(element: HTMLElement, name: String, strings: js.Array[String], parent: Disconnectable) = this()
  def this(
    element: HTMLElement,
    name: String,
    strings: js.Array[String],
    parent: Disconnectable,
    options: RenderOptions
  ) = this()
  
  /* CompleteClass */
  @JSName("_$isConnected")
  var _$isConnected: Boolean = js.native
  @JSName("_$isConnected")
  def _$isConnected_MAttributePart: Boolean = js.native
  
  /* protected */ var _sanitizer: js.UndefOr[ValueSanitizer] = js.native
  
  val element: HTMLElement = js.native
  
  val name: String = js.native
  
  val options: js.UndefOr[RenderOptions] = js.native
  
  /**
    * If this attribute part represents an interpolation, this contains the
    * static strings of the interpolation. For single-value, complete bindings,
    * this is undefined.
    */
  val strings: js.UndefOr[js.Array[String]] = js.native
  
  def tagName: String = js.native
  
  val `type`: /* 1 */ Double = js.native
}
