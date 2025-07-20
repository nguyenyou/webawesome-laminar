package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormControl
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait Init[T /* <: WebAwesomeFormControl */] extends StObject {
  
  var init: js.UndefOr[js.Function1[/* control */ T, Unit]] = js.undefined
  
  var tagName: String
  
  var variantName: String
}
object Init {
  
  inline def apply[T /* <: WebAwesomeFormControl */](tagName: String, variantName: String): Init[T] = {
    val __obj = js.Dynamic.literal(tagName = tagName.asInstanceOf[js.Any], variantName = variantName.asInstanceOf[js.Any])
    __obj.asInstanceOf[Init[T]]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: Init[?], T /* <: WebAwesomeFormControl */] (val x: Self & Init[T]) extends AnyVal {
    
    inline def setInit(value: /* control */ T => Unit): Self = StObject.set(x, "init", js.Any.fromFunction1(value))
    
    inline def setInitUndefined: Self = StObject.set(x, "init", js.undefined)
    
    inline def setTagName(value: String): Self = StObject.set(x, "tagName", value.asInstanceOf[js.Any])
    
    inline def setVariantName(value: String): Self = StObject.set(x, "variantName", value.asInstanceOf[js.Any])
  }
}
