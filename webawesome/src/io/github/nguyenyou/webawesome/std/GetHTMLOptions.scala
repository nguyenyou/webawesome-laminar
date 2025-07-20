package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait GetHTMLOptions extends StObject {
  
  /* standard dom */
  var serializableShadowRoots: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var shadowRoots: js.UndefOr[js.Array[ShadowRoot]] = js.undefined
}
object GetHTMLOptions {
  
  inline def apply(): GetHTMLOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[GetHTMLOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: GetHTMLOptions] (val x: Self) extends AnyVal {
    
    inline def setSerializableShadowRoots(value: Boolean): Self = StObject.set(x, "serializableShadowRoots", value.asInstanceOf[js.Any])
    
    inline def setSerializableShadowRootsUndefined: Self = StObject.set(x, "serializableShadowRoots", js.undefined)
    
    inline def setShadowRoots(value: js.Array[ShadowRoot]): Self = StObject.set(x, "shadowRoots", value.asInstanceOf[js.Any])
    
    inline def setShadowRootsUndefined: Self = StObject.set(x, "shadowRoots", js.undefined)
    
    inline def setShadowRootsVarargs(value: ShadowRoot*): Self = StObject.set(x, "shadowRoots", js.Array(value*))
  }
}
