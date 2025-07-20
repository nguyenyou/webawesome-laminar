package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ElementTemplatePart
  extends StObject
     with TemplatePart {
  
  val index: Double
  
  val `type`: /* 6 */ Double
}
object ElementTemplatePart {
  
  inline def apply(index: Double, `type`: /* 6 */ Double): ElementTemplatePart = {
    val __obj = js.Dynamic.literal(index = index.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[ElementTemplatePart]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ElementTemplatePart] (val x: Self) extends AnyVal {
    
    inline def setIndex(value: Double): Self = StObject.set(x, "index", value.asInstanceOf[js.Any])
    
    inline def setType(value: /* 6 */ Double): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
  }
}
