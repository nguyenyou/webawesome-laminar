package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import io.github.nguyenyou.webawesome.std.ShadowRoot
import org.scalajs.dom.Document
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* Inlined std.Partial<@awesome.me/webawesome.@awesome.me/webawesome/dist/utilities/defined.AllDefinedOptions> */
trait PartialAllDefinedOptions extends StObject {
  
  var additionalElements: js.UndefOr[String | js.Array[String]] = js.undefined
  
  var `match`: js.UndefOr[js.Function1[/* tagName */ String, Boolean]] = js.undefined
  
  var root: js.UndefOr[Document | ShadowRoot] = js.undefined
}
object PartialAllDefinedOptions {
  
  inline def apply(): PartialAllDefinedOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[PartialAllDefinedOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: PartialAllDefinedOptions] (val x: Self) extends AnyVal {
    
    inline def setAdditionalElements(value: String | js.Array[String]): Self = StObject.set(x, "additionalElements", value.asInstanceOf[js.Any])
    
    inline def setAdditionalElementsUndefined: Self = StObject.set(x, "additionalElements", js.undefined)
    
    inline def setAdditionalElementsVarargs(value: String*): Self = StObject.set(x, "additionalElements", js.Array(value*))
    
    inline def setMatch(value: /* tagName */ String => Boolean): Self = StObject.set(x, "match", js.Any.fromFunction1(value))
    
    inline def setMatchUndefined: Self = StObject.set(x, "match", js.undefined)
    
    inline def setRoot(value: Document | ShadowRoot): Self = StObject.set(x, "root", value.asInstanceOf[js.Any])
    
    inline def setRootUndefined: Self = StObject.set(x, "root", js.undefined)
  }
}
