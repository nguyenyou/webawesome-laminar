package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ElementContentEditable extends StObject {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable) */
  /* standard dom */
  var contentEditable: String
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint) */
  /* standard dom */
  var enterKeyHint: String
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode) */
  /* standard dom */
  var inputMode: String
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/isContentEditable) */
  /* standard dom */
  val isContentEditable: Boolean
}
object ElementContentEditable {
  
  inline def apply(contentEditable: String, enterKeyHint: String, inputMode: String, isContentEditable: Boolean): ElementContentEditable = {
    val __obj = js.Dynamic.literal(contentEditable = contentEditable.asInstanceOf[js.Any], enterKeyHint = enterKeyHint.asInstanceOf[js.Any], inputMode = inputMode.asInstanceOf[js.Any], isContentEditable = isContentEditable.asInstanceOf[js.Any])
    __obj.asInstanceOf[ElementContentEditable]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ElementContentEditable] (val x: Self) extends AnyVal {
    
    inline def setContentEditable(value: String): Self = StObject.set(x, "contentEditable", value.asInstanceOf[js.Any])
    
    inline def setEnterKeyHint(value: String): Self = StObject.set(x, "enterKeyHint", value.asInstanceOf[js.Any])
    
    inline def setInputMode(value: String): Self = StObject.set(x, "inputMode", value.asInstanceOf[js.Any])
    
    inline def setIsContentEditable(value: Boolean): Self = StObject.set(x, "isContentEditable", value.asInstanceOf[js.Any])
  }
}
