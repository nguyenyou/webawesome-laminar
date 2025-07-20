package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import org.scalajs.dom.PointerEvent
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* Inlined std.Partial<@awesome.me/webawesome.@awesome.me/webawesome/dist/internal/drag.DragOptions> */
trait PartialDragOptions extends StObject {
  
  var initialEvent: js.UndefOr[PointerEvent] = js.undefined
  
  var onMove: js.UndefOr[js.Function2[/* x */ Double, /* y */ Double, Unit]] = js.undefined
  
  var onStop: js.UndefOr[js.Function0[Unit]] = js.undefined
}
object PartialDragOptions {
  
  inline def apply(): PartialDragOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[PartialDragOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: PartialDragOptions] (val x: Self) extends AnyVal {
    
    inline def setInitialEvent(value: PointerEvent): Self = StObject.set(x, "initialEvent", value.asInstanceOf[js.Any])
    
    inline def setInitialEventUndefined: Self = StObject.set(x, "initialEvent", js.undefined)
    
    inline def setOnMove(value: (/* x */ Double, /* y */ Double) => Unit): Self = StObject.set(x, "onMove", js.Any.fromFunction2(value))
    
    inline def setOnMoveUndefined: Self = StObject.set(x, "onMove", js.undefined)
    
    inline def setOnStop(value: () => Unit): Self = StObject.set(x, "onStop", js.Any.fromFunction0(value))
    
    inline def setOnStopUndefined: Self = StObject.set(x, "onStop", js.undefined)
  }
}
