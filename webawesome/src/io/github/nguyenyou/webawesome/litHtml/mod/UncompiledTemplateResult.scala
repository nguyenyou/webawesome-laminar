package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.std.TemplateStringsArray
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait UncompiledTemplateResult[T /* <: ResultType */]
  extends StObject
     with MaybeCompiledTemplateResult[T] {
  
  @JSName("_$litType$")
  var _DollarlitTypeDollar: T
  
  var strings: TemplateStringsArray
  
  var values: js.Array[Any]
}
object UncompiledTemplateResult {
  
  inline def apply[T /* <: ResultType */](_DollarlitTypeDollar: T, strings: TemplateStringsArray, values: js.Array[Any]): UncompiledTemplateResult[T] = {
    val __obj = js.Dynamic.literal(strings = strings.asInstanceOf[js.Any], values = values.asInstanceOf[js.Any])
    __obj.updateDynamic("_$litType$")(_DollarlitTypeDollar.asInstanceOf[js.Any])
    __obj.asInstanceOf[UncompiledTemplateResult[T]]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: UncompiledTemplateResult[?], T /* <: ResultType */] (val x: Self & UncompiledTemplateResult[T]) extends AnyVal {
    
    inline def setStrings(value: TemplateStringsArray): Self = StObject.set(x, "strings", value.asInstanceOf[js.Any])
    
    inline def setValues(value: js.Array[Any]): Self = StObject.set(x, "values", value.asInstanceOf[js.Any])
    
    inline def setValuesVarargs(value: Any*): Self = StObject.set(x, "values", js.Array(value*))
    
    inline def set_DollarlitTypeDollar(value: T): Self = StObject.set(x, "_$litType$", value.asInstanceOf[js.Any])
  }
}
