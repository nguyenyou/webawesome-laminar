package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait AfterMouseDown extends StObject {
  
  var afterMouseDown: js.UndefOr[js.Function0[Unit | js.Promise[Unit]]] = js.undefined
  
  var afterMouseMove: js.UndefOr[js.Function0[Unit | js.Promise[Unit]]] = js.undefined
}
object AfterMouseDown {
  
  inline def apply(): AfterMouseDown = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[AfterMouseDown]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: AfterMouseDown] (val x: Self) extends AnyVal {
    
    inline def setAfterMouseDown(value: () => Unit | js.Promise[Unit]): Self = StObject.set(x, "afterMouseDown", js.Any.fromFunction0(value))
    
    inline def setAfterMouseDownUndefined: Self = StObject.set(x, "afterMouseDown", js.undefined)
    
    inline def setAfterMouseMove(value: () => Unit | js.Promise[Unit]): Self = StObject.set(x, "afterMouseMove", js.Any.fromFunction0(value))
    
    inline def setAfterMouseMoveUndefined: Self = StObject.set(x, "afterMouseMove", js.undefined)
  }
}
