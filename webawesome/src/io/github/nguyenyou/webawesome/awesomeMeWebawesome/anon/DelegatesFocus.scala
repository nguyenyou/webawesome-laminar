package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import io.github.nguyenyou.webawesome.std.ShadowRootMode
import io.github.nguyenyou.webawesome.std.SlotAssignmentMode
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait DelegatesFocus extends StObject {
  
  var delegatesFocus: Boolean
  
  var mode: ShadowRootMode
  
  var serializable: js.UndefOr[Boolean] = js.undefined
  
  var slotAssignment: js.UndefOr[SlotAssignmentMode] = js.undefined
}
object DelegatesFocus {
  
  inline def apply(delegatesFocus: Boolean, mode: ShadowRootMode): DelegatesFocus = {
    val __obj = js.Dynamic.literal(delegatesFocus = delegatesFocus.asInstanceOf[js.Any], mode = mode.asInstanceOf[js.Any])
    __obj.asInstanceOf[DelegatesFocus]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: DelegatesFocus] (val x: Self) extends AnyVal {
    
    inline def setDelegatesFocus(value: Boolean): Self = StObject.set(x, "delegatesFocus", value.asInstanceOf[js.Any])
    
    inline def setMode(value: ShadowRootMode): Self = StObject.set(x, "mode", value.asInstanceOf[js.Any])
    
    inline def setSerializable(value: Boolean): Self = StObject.set(x, "serializable", value.asInstanceOf[js.Any])
    
    inline def setSerializableUndefined: Self = StObject.set(x, "serializable", js.undefined)
    
    inline def setSlotAssignment(value: SlotAssignmentMode): Self = StObject.set(x, "slotAssignment", value.asInstanceOf[js.Any])
    
    inline def setSlotAssignmentUndefined: Self = StObject.set(x, "slotAssignment", js.undefined)
  }
}
