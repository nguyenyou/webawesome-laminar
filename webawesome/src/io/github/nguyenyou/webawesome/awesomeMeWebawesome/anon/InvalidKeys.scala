package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.badInput
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.customError
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.patternMismatch
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.rangeOverflow
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.rangeUnderflow
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.stepMismatch
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.tooLong
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.tooShort
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.typeMismatch
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.valid
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.valueMissing
import io.github.nguyenyou.webawesome.std.Exclude
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait InvalidKeys extends StObject {
  
  var invalidKeys: js.Array[
    Exclude[
      badInput | customError | patternMismatch | rangeOverflow | rangeUnderflow | stepMismatch | tooLong | tooShort | typeMismatch | valid | valueMissing, 
      valid
    ]
  ]
  
  var isValid: Boolean
  
  var message: String
}
object InvalidKeys {
  
  inline def apply(
    invalidKeys: js.Array[
      Exclude[
        badInput | customError | patternMismatch | rangeOverflow | rangeUnderflow | stepMismatch | tooLong | tooShort | typeMismatch | valid | valueMissing, 
        valid
      ]
    ],
    isValid: Boolean,
    message: String
  ): InvalidKeys = {
    val __obj = js.Dynamic.literal(invalidKeys = invalidKeys.asInstanceOf[js.Any], isValid = isValid.asInstanceOf[js.Any], message = message.asInstanceOf[js.Any])
    __obj.asInstanceOf[InvalidKeys]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: InvalidKeys] (val x: Self) extends AnyVal {
    
    inline def setInvalidKeys(
      value: js.Array[
          Exclude[
            badInput | customError | patternMismatch | rangeOverflow | rangeUnderflow | stepMismatch | tooLong | tooShort | typeMismatch | valid | valueMissing, 
            valid
          ]
        ]
    ): Self = StObject.set(x, "invalidKeys", value.asInstanceOf[js.Any])
    
    inline def setInvalidKeysVarargs(
      value: (Exclude[
          badInput | customError | patternMismatch | rangeOverflow | rangeUnderflow | stepMismatch | tooLong | tooShort | typeMismatch | valid | valueMissing, 
          valid
        ])*
    ): Self = StObject.set(x, "invalidKeys", js.Array(value*))
    
    inline def setIsValid(value: Boolean): Self = StObject.set(x, "isValid", value.asInstanceOf[js.Any])
    
    inline def setMessage(value: String): Self = StObject.set(x, "message", value.asInstanceOf[js.Any])
  }
}
