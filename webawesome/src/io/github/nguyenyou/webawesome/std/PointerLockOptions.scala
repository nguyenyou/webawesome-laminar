package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait PointerLockOptions extends StObject {
  
  /* standard dom */
  var unadjustedMovement: js.UndefOr[Boolean] = js.undefined
}
object PointerLockOptions {
  
  inline def apply(): PointerLockOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[PointerLockOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: PointerLockOptions] (val x: Self) extends AnyVal {
    
    inline def setUnadjustedMovement(value: Boolean): Self = StObject.set(x, "unadjustedMovement", value.asInstanceOf[js.Any])
    
    inline def setUnadjustedMovementUndefined: Self = StObject.set(x, "unadjustedMovement", js.undefined)
  }
}
