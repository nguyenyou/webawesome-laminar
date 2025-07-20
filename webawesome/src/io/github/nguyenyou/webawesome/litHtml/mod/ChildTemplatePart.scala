package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ChildTemplatePart
  extends StObject
     with TemplatePart {
  
  val index: Double
  
  val `type`: /* 2 */ Double
}
object ChildTemplatePart {
  
  inline def apply(index: Double, `type`: /* 2 */ Double): ChildTemplatePart = {
    val __obj = js.Dynamic.literal(index = index.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[ChildTemplatePart]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ChildTemplatePart] (val x: Self) extends AnyVal {
    
    inline def setIndex(value: Double): Self = StObject.set(x, "index", value.asInstanceOf[js.Any])
    
    inline def setType(value: /* 2 */ Double): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
  }
}
