package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait IncludeDisabled extends StObject {
  
  var includeDisabled: js.UndefOr[Boolean] = js.undefined
}
object IncludeDisabled {
  
  inline def apply(): IncludeDisabled = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[IncludeDisabled]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: IncludeDisabled] (val x: Self) extends AnyVal {
    
    inline def setIncludeDisabled(value: Boolean): Self = StObject.set(x, "includeDisabled", value.asInstanceOf[js.Any])
    
    inline def setIncludeDisabledUndefined: Self = StObject.set(x, "includeDisabled", js.undefined)
  }
}
