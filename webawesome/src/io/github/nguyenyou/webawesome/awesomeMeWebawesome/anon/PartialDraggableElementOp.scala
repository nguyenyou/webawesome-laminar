package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* Inlined std.Partial<@awesome.me/webawesome.@awesome.me/webawesome/dist/internal/drag.DraggableElementOptions> */
trait PartialDraggableElementOp extends StObject {
  
  var move: js.UndefOr[js.Function2[/* clientX */ Double, /* clientY */ Double, Unit]] = js.undefined
  
  var start: js.UndefOr[js.Function2[/* clientX */ Double, /* clientY */ Double, Unit]] = js.undefined
  
  var stop: js.UndefOr[js.Function2[/* clientX */ Double, /* clientY */ Double, Unit]] = js.undefined
}
object PartialDraggableElementOp {
  
  inline def apply(): PartialDraggableElementOp = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[PartialDraggableElementOp]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: PartialDraggableElementOp] (val x: Self) extends AnyVal {
    
    inline def setMove(value: (/* clientX */ Double, /* clientY */ Double) => Unit): Self = StObject.set(x, "move", js.Any.fromFunction2(value))
    
    inline def setMoveUndefined: Self = StObject.set(x, "move", js.undefined)
    
    inline def setStart(value: (/* clientX */ Double, /* clientY */ Double) => Unit): Self = StObject.set(x, "start", js.Any.fromFunction2(value))
    
    inline def setStartUndefined: Self = StObject.set(x, "start", js.undefined)
    
    inline def setStop(value: (/* clientX */ Double, /* clientY */ Double) => Unit): Self = StObject.set(x, "stop", js.Any.fromFunction2(value))
    
    inline def setStopUndefined: Self = StObject.set(x, "stop", js.undefined)
  }
}
