package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.HTMLElementvalueunknown
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.InvalidKeys
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.WebAwesomeFormAssociatedE
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.any
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.autocomplete
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.restore
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.CustomStateSet
import io.github.nguyenyou.webawesome.std.Parameters
import org.scalajs.dom.Event
import org.scalajs.dom.File
import org.scalajs.dom.FormData
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.HTMLFormElement
import org.scalajs.dom.HTMLInputElement
import org.scalajs.dom.HTMLTextAreaElement
import org.scalajs.dom.Node
import org.scalajs.dom.NodeList
import org.scalajs.dom.ValidityState
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalWebawesomeFormAssociatedElementMod {
  
  /* import warning: RemoveDifficultInheritance.summarizeChanges 
  - Dropped {[ P in std.Exclude<keyof std.ElementInternals, 'form' | 'setFormValue'> ]: std.ElementInternals[P]} */ @JSImport("@awesome.me/webawesome/dist/internal/webawesome-form-associated-element", "WebAwesomeFormAssociatedElement")
  @js.native
  open class WebAwesomeFormAssociatedElement () extends WebAwesomeFormControl {
    
    def allValidators: js.Array[Validator[WebAwesomeFormAssociatedE]] = js.native
    
    var assumeInteractionOn: js.Array[String] = js.native
    
    override def connectedCallback(): Unit = js.native
    
    @JSName("customError")
    var customError_WebAwesomeFormAssociatedElement: String | Null = js.native
    
    /** Disables the form control. */
    @JSName("disabled")
    var disabled_WebAwesomeFormAssociatedElement: Boolean = js.native
    
    def emitInvalid(e: Event): Unit = js.native
    
    /* private */ var emittedEvents: Any = js.native
    
    def firstUpdated(
      /* import warning: parser.TsParser#functionParam Dropping repeated marker of param args because its type Parameters<LitElement['firstUpdated']> is not an array type */ args: Parameters[js.Function1[/* _changedProperties */ PropertyValues[Any], Unit]]
    ): Unit = js.native
    
    def formDisabledCallback(isDisabled: Boolean): Unit = js.native
    
    def formResetCallback(): Unit = js.native
    
    /**
      * Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
      * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of
      * "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
      */
    def formStateRestoreCallback(state: String, reason: autocomplete | restore): Unit = js.native
    def formStateRestoreCallback(state: File, reason: autocomplete | restore): Unit = js.native
    def formStateRestoreCallback(state: FormData, reason: autocomplete | restore): Unit = js.native
    def formStateRestoreCallback(state: Null, reason: autocomplete | restore): Unit = js.native
    
    /* private */ var handleInteraction: Any = js.native
    
    var input: js.UndefOr[HTMLElementvalueunknown | HTMLInputElement | HTMLTextAreaElement] = js.native
    
    def labels: NodeList[Node] = js.native
    
    /** The name of the input, submitted as a name/value pair with form data. */
    @JSName("name")
    var name_WebAwesomeFormAssociatedElement: String | Null = js.native
    
    @JSName("required")
    var required_WebAwesomeFormAssociatedElement: Boolean = js.native
    
    /**
      * Reset validity is a way of removing manual custom errors and native validation.
      */
    def resetValidity(): Unit = js.native
    
    def setCustomStates(): Unit = js.native
    
    def setValidity(
      /* import warning: parser.TsParser#functionParam Dropping repeated marker of param args because its type Parameters<typeof this.internals.setValidity> is not an array type */ args: Parameters[
          /* import warning: ResolveTypeQueries.resolve Couldn't resolve typeof this.internals.setValidity */ Any
        ]
    ): Unit = js.native
    
    def setValue(
      /* import warning: parser.TsParser#functionParam Dropping repeated marker of param args because its type Parameters<typeof this.internals.setFormValue> is not an array type */ args: Parameters[
          /* import warning: ResolveTypeQueries.resolve Couldn't resolve typeof this.internals.setFormValue */ Any
        ]
    ): Unit = js.native
    
    var states: CustomStateSet = js.native
    
    def updateValidity(): Unit = js.native
    
    @JSName("validationMessage")
    def validationMessage_MWebAwesomeFormAssociatedElement: String = js.native
    
    /**
      * Override this to change where constraint validation popups are anchored.
      */
    def validationTarget: js.UndefOr[HTMLElement] = js.native
    
    var validators: js.Array[Validator[WebAwesomeFormAssociatedE]] = js.native
    
    @JSName("validity")
    def validity_MWebAwesomeFormAssociatedElement: ValidityState = js.native
    
    @JSName("valueHasChanged")
    var valueHasChanged_WebAwesomeFormAssociatedElement: Boolean = js.native
    
    def willValidate: Boolean = js.native
  }
  /* static members */
  object WebAwesomeFormAssociatedElement {
    
    @JSImport("@awesome.me/webawesome/dist/internal/webawesome-form-associated-element", "WebAwesomeFormAssociatedElement")
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/internal/webawesome-form-associated-element", "WebAwesomeFormAssociatedElement.formAssociated")
    @js.native
    def formAssociated: Boolean = js.native
    inline def formAssociated_=(x: Boolean): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("formAssociated")(x.asInstanceOf[js.Any])
  }
  
  trait Validator[T /* <: WebAwesomeFormAssociatedE */] extends StObject {
    
    def checkValidity(element: T): InvalidKeys
    
    var message: js.UndefOr[String | (js.Function1[/* element */ T, String])] = js.undefined
    
    var observedAttributes: js.UndefOr[js.Array[String]] = js.undefined
  }
  object Validator {
    
    inline def apply[T /* <: WebAwesomeFormAssociatedE */](checkValidity: T => InvalidKeys): Validator[T] = {
      val __obj = js.Dynamic.literal(checkValidity = js.Any.fromFunction1(checkValidity))
      __obj.asInstanceOf[Validator[T]]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: Validator[?], T /* <: WebAwesomeFormAssociatedE */] (val x: Self & Validator[T]) extends AnyVal {
      
      inline def setCheckValidity(value: T => InvalidKeys): Self = StObject.set(x, "checkValidity", js.Any.fromFunction1(value))
      
      inline def setMessage(value: String | (js.Function1[/* element */ T, String])): Self = StObject.set(x, "message", value.asInstanceOf[js.Any])
      
      inline def setMessageFunction1(value: /* element */ T => String): Self = StObject.set(x, "message", js.Any.fromFunction1(value))
      
      inline def setMessageUndefined: Self = StObject.set(x, "message", js.undefined)
      
      inline def setObservedAttributes(value: js.Array[String]): Self = StObject.set(x, "observedAttributes", value.asInstanceOf[js.Any])
      
      inline def setObservedAttributesUndefined: Self = StObject.set(x, "observedAttributes", js.undefined)
      
      inline def setObservedAttributesVarargs(value: String*): Self = StObject.set(x, "observedAttributes", js.Array(value*))
    }
  }
  
  @js.native
  trait WebAwesomeFormControl extends default {
    
    def checkValidity(): Boolean = js.native
    
    var checked: js.UndefOr[Boolean] = js.native
    
    /** Convenience API for `setCustomValidity()` */
    var customError: Null | String = js.native
    
    var defaultChecked: js.UndefOr[Boolean] = js.native
    
    var defaultSelected: js.UndefOr[Boolean] = js.native
    
    var defaultValue: js.UndefOr[Any] = js.native
    
    var disabled: js.UndefOr[Boolean] = js.native
    
    var form: js.UndefOr[String | Null] = js.native
    
    def getForm(): HTMLFormElement | Null = js.native
    
    var hasInteracted: Boolean = js.native
    
    var max: js.UndefOr[Double | String | js.Date] = js.native
    
    var maxlength: js.UndefOr[Double] = js.native
    
    var min: js.UndefOr[Double | String | js.Date] = js.native
    
    var minlength: js.UndefOr[Double] = js.native
    
    var name: Null | String = js.native
    
    var pattern: js.UndefOr[String] = js.native
    
    def reportValidity(): Boolean = js.native
    
    var required: js.UndefOr[Boolean] = js.native
    
    var selected: js.UndefOr[Boolean] = js.native
    
    def setCustomValidity(message: String): Unit = js.native
    
    var step: js.UndefOr[Double | any] = js.native
    
    val validationMessage: String = js.native
    
    val validity: ValidityState = js.native
    
    var value: js.UndefOr[Any] = js.native
    
    var valueHasChanged: js.UndefOr[Boolean] = js.native
  }
}
