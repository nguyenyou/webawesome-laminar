package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ValidityStateFlags extends StObject {
  
  /* standard dom */
  var badInput: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var customError: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var patternMismatch: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var rangeOverflow: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var rangeUnderflow: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var stepMismatch: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var tooLong: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var tooShort: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var typeMismatch: js.UndefOr[Boolean] = js.undefined
  
  /* standard dom */
  var valueMissing: js.UndefOr[Boolean] = js.undefined
}
object ValidityStateFlags {
  
  inline def apply(): ValidityStateFlags = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[ValidityStateFlags]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ValidityStateFlags] (val x: Self) extends AnyVal {
    
    inline def setBadInput(value: Boolean): Self = StObject.set(x, "badInput", value.asInstanceOf[js.Any])
    
    inline def setBadInputUndefined: Self = StObject.set(x, "badInput", js.undefined)
    
    inline def setCustomError(value: Boolean): Self = StObject.set(x, "customError", value.asInstanceOf[js.Any])
    
    inline def setCustomErrorUndefined: Self = StObject.set(x, "customError", js.undefined)
    
    inline def setPatternMismatch(value: Boolean): Self = StObject.set(x, "patternMismatch", value.asInstanceOf[js.Any])
    
    inline def setPatternMismatchUndefined: Self = StObject.set(x, "patternMismatch", js.undefined)
    
    inline def setRangeOverflow(value: Boolean): Self = StObject.set(x, "rangeOverflow", value.asInstanceOf[js.Any])
    
    inline def setRangeOverflowUndefined: Self = StObject.set(x, "rangeOverflow", js.undefined)
    
    inline def setRangeUnderflow(value: Boolean): Self = StObject.set(x, "rangeUnderflow", value.asInstanceOf[js.Any])
    
    inline def setRangeUnderflowUndefined: Self = StObject.set(x, "rangeUnderflow", js.undefined)
    
    inline def setStepMismatch(value: Boolean): Self = StObject.set(x, "stepMismatch", value.asInstanceOf[js.Any])
    
    inline def setStepMismatchUndefined: Self = StObject.set(x, "stepMismatch", js.undefined)
    
    inline def setTooLong(value: Boolean): Self = StObject.set(x, "tooLong", value.asInstanceOf[js.Any])
    
    inline def setTooLongUndefined: Self = StObject.set(x, "tooLong", js.undefined)
    
    inline def setTooShort(value: Boolean): Self = StObject.set(x, "tooShort", value.asInstanceOf[js.Any])
    
    inline def setTooShortUndefined: Self = StObject.set(x, "tooShort", js.undefined)
    
    inline def setTypeMismatch(value: Boolean): Self = StObject.set(x, "typeMismatch", value.asInstanceOf[js.Any])
    
    inline def setTypeMismatchUndefined: Self = StObject.set(x, "typeMismatch", js.undefined)
    
    inline def setValueMissing(value: Boolean): Self = StObject.set(x, "valueMissing", value.asInstanceOf[js.Any])
    
    inline def setValueMissingUndefined: Self = StObject.set(x, "valueMissing", js.undefined)
  }
}
