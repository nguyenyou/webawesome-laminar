package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.std.HTMLTemplateElement
import io.github.nguyenyou.webawesome.std.TemplateStringsArray
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* Inlined parent std.Omit<lit-html.lit-html.Template, 'el'> */
trait CompiledTemplate extends StObject {
  
  var el: js.UndefOr[HTMLTemplateElement] = js.undefined
  
  var h: TemplateStringsArray
  
  var parts: js.Array[TemplatePart]
}
object CompiledTemplate {
  
  inline def apply(h: TemplateStringsArray, parts: js.Array[TemplatePart]): CompiledTemplate = {
    val __obj = js.Dynamic.literal(h = h.asInstanceOf[js.Any], parts = parts.asInstanceOf[js.Any])
    __obj.asInstanceOf[CompiledTemplate]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: CompiledTemplate] (val x: Self) extends AnyVal {
    
    inline def setEl(value: HTMLTemplateElement): Self = StObject.set(x, "el", value.asInstanceOf[js.Any])
    
    inline def setElUndefined: Self = StObject.set(x, "el", js.undefined)
    
    inline def setH(value: TemplateStringsArray): Self = StObject.set(x, "h", value.asInstanceOf[js.Any])
    
    inline def setParts(value: js.Array[TemplatePart]): Self = StObject.set(x, "parts", value.asInstanceOf[js.Any])
    
    inline def setPartsVarargs(value: TemplatePart*): Self = StObject.set(x, "parts", js.Array(value*))
  }
}
