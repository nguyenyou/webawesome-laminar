package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait Wapopup extends StObject {
  
  var `wa-popup`: TypeofWaPopup
}
object Wapopup {
  
  inline def apply(`wa-popup`: TypeofWaPopup): Wapopup = {
    val __obj = js.Dynamic.literal()
    __obj.updateDynamic("wa-popup")(`wa-popup`.asInstanceOf[js.Any])
    __obj.asInstanceOf[Wapopup]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: Wapopup] (val x: Self) extends AnyVal {
    
    inline def `setWa-popup`(value: TypeofWaPopup): Self = StObject.set(x, "wa-popup", value.asInstanceOf[js.Any])
  }
}
