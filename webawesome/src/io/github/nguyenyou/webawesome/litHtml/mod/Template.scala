package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait Template extends StObject {
  
  var parts: js.Array[TemplatePart]
}
object Template {
  
  inline def apply(parts: js.Array[TemplatePart]): Template = {
    val __obj = js.Dynamic.literal(parts = parts.asInstanceOf[js.Any])
    __obj.asInstanceOf[Template]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: Template] (val x: Self) extends AnyVal {
    
    inline def setParts(value: js.Array[TemplatePart]): Self = StObject.set(x, "parts", value.asInstanceOf[js.Any])
    
    inline def setPartsVarargs(value: TemplatePart*): Self = StObject.set(x, "parts", js.Array(value*))
  }
}
