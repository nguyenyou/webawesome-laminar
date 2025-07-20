package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait CompiledTemplateResult
  extends StObject
     with MaybeCompiledTemplateResult[Any] {
  
  @JSName("_$litType$")
  var _DollarlitTypeDollar: CompiledTemplate
  
  var values: js.Array[Any]
}
object CompiledTemplateResult {
  
  inline def apply(_DollarlitTypeDollar: CompiledTemplate, values: js.Array[Any]): CompiledTemplateResult = {
    val __obj = js.Dynamic.literal(values = values.asInstanceOf[js.Any])
    __obj.updateDynamic("_$litType$")(_DollarlitTypeDollar.asInstanceOf[js.Any])
    __obj.asInstanceOf[CompiledTemplateResult]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: CompiledTemplateResult] (val x: Self) extends AnyVal {
    
    inline def setValues(value: js.Array[Any]): Self = StObject.set(x, "values", value.asInstanceOf[js.Any])
    
    inline def setValuesVarargs(value: Any*): Self = StObject.set(x, "values", js.Array(value*))
    
    inline def set_DollarlitTypeDollar(value: CompiledTemplate): Self = StObject.set(x, "_$litType$", value.asInstanceOf[js.Any])
  }
}
