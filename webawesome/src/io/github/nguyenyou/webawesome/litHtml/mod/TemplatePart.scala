package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalablytyped.runtime.Instantiable5
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * A TemplatePart represents a dynamic part in a template, before the template
  * is instantiated. When a template is instantiated Parts are created from
  * TemplateParts.
  */
/* Rewritten from type alias, can be one of: 
  - `io.github.nguyenyou.webawesome`.litHtml.mod.ChildTemplatePart
  - `io.github.nguyenyou.webawesome`.litHtml.mod.AttributeTemplatePart
  - `io.github.nguyenyou.webawesome`.litHtml.mod.ElementTemplatePart
  - `io.github.nguyenyou.webawesome`.litHtml.mod.CommentTemplatePart
*/
trait TemplatePart extends StObject
object TemplatePart {
  
  inline def AttributeTemplatePart(
    ctor: Instantiable5[
      /* element */ HTMLElement, 
      /* name */ String, 
      /* strings */ js.Array[String], 
      /* parent */ Disconnectable, 
      /* options */ js.UndefOr[RenderOptions], 
      AttributePart
    ],
    index: Double,
    name: String,
    strings: js.Array[String],
    `type`: /* 1 */ Double
  ): io.github.nguyenyou.webawesome.litHtml.mod.AttributeTemplatePart = {
    val __obj = js.Dynamic.literal(ctor = ctor.asInstanceOf[js.Any], index = index.asInstanceOf[js.Any], name = name.asInstanceOf[js.Any], strings = strings.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.mod.AttributeTemplatePart]
  }
  
  inline def ChildTemplatePart(index: Double, `type`: /* 2 */ Double): io.github.nguyenyou.webawesome.litHtml.mod.ChildTemplatePart = {
    val __obj = js.Dynamic.literal(index = index.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.mod.ChildTemplatePart]
  }
  
  inline def CommentTemplatePart(index: Double, `type`: /* 7 */ Double): io.github.nguyenyou.webawesome.litHtml.mod.CommentTemplatePart = {
    val __obj = js.Dynamic.literal(index = index.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.mod.CommentTemplatePart]
  }
  
  inline def ElementTemplatePart(index: Double, `type`: /* 6 */ Double): io.github.nguyenyou.webawesome.litHtml.mod.ElementTemplatePart = {
    val __obj = js.Dynamic.literal(index = index.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.mod.ElementTemplatePart]
  }
}
