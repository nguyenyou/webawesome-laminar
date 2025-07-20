package io.github.nguyenyou.webawesome.std

import org.scalajs.dom.SVGAnimatedString
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait SVGURIReference extends StObject {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAElement/href) */
  /* standard dom */
  val href: SVGAnimatedString
}
object SVGURIReference {
  
  inline def apply(href: SVGAnimatedString): SVGURIReference = {
    val __obj = js.Dynamic.literal(href = href.asInstanceOf[js.Any])
    __obj.asInstanceOf[SVGURIReference]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: SVGURIReference] (val x: Self) extends AnyVal {
    
    inline def setHref(value: SVGAnimatedString): Self = StObject.set(x, "href", value.asInstanceOf[js.Any])
  }
}
