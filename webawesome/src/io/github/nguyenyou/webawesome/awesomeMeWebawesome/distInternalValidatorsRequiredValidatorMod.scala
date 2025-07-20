package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.WebAwesomeFormAssociatedE
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.Validator
import org.scalajs.dom.HTMLInputElement
import org.scalajs.dom.HTMLSelectElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalValidatorsRequiredValidatorMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/validators/required-validator", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def RequiredValidator(): Validator[WebAwesomeFormAssociatedE] = ^.asInstanceOf[js.Dynamic].applyDynamic("RequiredValidator")().asInstanceOf[Validator[WebAwesomeFormAssociatedE]]
  inline def RequiredValidator(options: RequiredValidatorOptions): Validator[WebAwesomeFormAssociatedE] = ^.asInstanceOf[js.Dynamic].applyDynamic("RequiredValidator")(options.asInstanceOf[js.Any]).asInstanceOf[Validator[WebAwesomeFormAssociatedE]]
  
  trait RequiredValidatorOptions extends StObject {
    
    /** This is a cheap way for us to get translation strings for the user without having proper translations. */
    var validationElement: js.UndefOr[HTMLSelectElement | HTMLInputElement] = js.undefined
    
    /**
      * The property to check if its not null-ish. For most elements this will be "value".
      * For "checkbox" for example it will be "checked"
      */
    var validationProperty: js.UndefOr[String] = js.undefined
  }
  object RequiredValidatorOptions {
    
    inline def apply(): RequiredValidatorOptions = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[RequiredValidatorOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: RequiredValidatorOptions] (val x: Self) extends AnyVal {
      
      inline def setValidationElement(value: HTMLSelectElement | HTMLInputElement): Self = StObject.set(x, "validationElement", value.asInstanceOf[js.Any])
      
      inline def setValidationElementUndefined: Self = StObject.set(x, "validationElement", js.undefined)
      
      inline def setValidationProperty(value: String): Self = StObject.set(x, "validationProperty", value.asInstanceOf[js.Any])
      
      inline def setValidationPropertyUndefined: Self = StObject.set(x, "validationProperty", js.undefined)
    }
  }
}
