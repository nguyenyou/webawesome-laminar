package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.std.TemplateStringsArray
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* Rewritten from type alias, can be one of: 
  - `io.github.nguyenyou.webawesome`.litHtml.mod.UncompiledTemplateResult[T]
  - `io.github.nguyenyou.webawesome`.litHtml.mod.CompiledTemplateResult
*/
trait MaybeCompiledTemplateResult[T /* <: ResultType */] extends StObject
object MaybeCompiledTemplateResult {
  
  inline def CompiledTemplateResult(_DollarlitTypeDollar: CompiledTemplate, values: js.Array[Any]): io.github.nguyenyou.webawesome.litHtml.mod.CompiledTemplateResult = {
    val __obj = js.Dynamic.literal(values = values.asInstanceOf[js.Any])
    __obj.updateDynamic("_$litType$")(_DollarlitTypeDollar.asInstanceOf[js.Any])
    __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.mod.CompiledTemplateResult]
  }
  
  inline def UncompiledTemplateResult[T /* <: ResultType */](_DollarlitTypeDollar: T, strings: TemplateStringsArray, values: js.Array[Any]): io.github.nguyenyou.webawesome.litHtml.mod.UncompiledTemplateResult[T] = {
    val __obj = js.Dynamic.literal(strings = strings.asInstanceOf[js.Any], values = values.asInstanceOf[js.Any])
    __obj.updateDynamic("_$litType$")(_DollarlitTypeDollar.asInstanceOf[js.Any])
    __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.mod.UncompiledTemplateResult[T]]
  }
}
