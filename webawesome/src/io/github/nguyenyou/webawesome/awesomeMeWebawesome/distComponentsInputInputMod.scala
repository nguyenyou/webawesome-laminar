package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.DelegatesFocus
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`datetime-local`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.any
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.backward
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.characters
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.date
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.decimal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.done
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.email
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.enter
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.forward
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.go
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.next
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.none
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.number
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.numeric
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.off
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.on
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.password
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.preserve
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.previous
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.search
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.select
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.send
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.sentences
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.start
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.tel
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.text
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.time
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.url
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.words
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.FocusOptions
import org.scalajs.dom.HTMLInputElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsInputInputMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/input/input", JSImport.Default)
  @js.native
  open class default () extends WaInput
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/input/input", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/input/input", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
    
    @JSImport("@awesome.me/webawesome/dist/components/input/input", "default.shadowRootOptions")
    @js.native
    def shadowRootOptions: DelegatesFocus = js.native
    inline def shadowRootOptions_=(x: DelegatesFocus): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("shadowRootOptions")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaInput extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    /** The input's visual appearance. */
    var appearance: filled | outlined = js.native
    
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    var autocapitalize: off | none | on | sentences | words | characters = js.native
    
    /**
      * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
      * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
      */
    var autocomplete: String = js.native
    
    /** Indicates whether the browser's autocorrect feature is on or off. */
    var autocorrect: off | on = js.native
    
    /** Indicates that the input should receive focus on page load. */
    var autofocus: Boolean = js.native
    
    /** Removes focus from the input. */
    def blur(): Unit = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultValue")
    var defaultValue_WaInput: String | Null = js.native
    
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    var enterkeyhint: enter | done | go | next | previous | search | send = js.native
    
    /** Sets focus on the input. */
    def focus(): Unit = js.native
    def focus(options: FocusOptions): Unit = js.native
    
    /**
      * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
      * the same document or shadow root for this to work.
      */
    @JSName("form")
    var form_WaInput: Null = js.native
    
    /* private */ var handleChange: Any = js.native
    
    /* private */ var handleClearClick: Any = js.native
    
    /* private */ var handleInput: Any = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handlePasswordToggle: Any = js.native
    
    def handleStepChange(): Unit = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String = js.native
    
    @JSName("input")
    var input_WaInput: HTMLInputElement = js.native
    
    /**
      * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
      * keyboard on supportive devices.
      */
    var inputmode: none | text | decimal | numeric | tel | search | email | url = js.native
    
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    var label: String = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The input's maximum value. Only applies to date and number input types. */
    @JSName("max")
    var max_WaInput: Double | String = js.native
    
    /** The maximum length of input that will be considered valid. */
    @JSName("maxlength")
    var maxlength_WaInput: Double = js.native
    
    /** The input's minimum value. Only applies to date and number input types. */
    @JSName("min")
    var min_WaInput: Double | String = js.native
    
    /** The minimum length of input that will be considered valid. */
    @JSName("minlength")
    var minlength_WaInput: Double = js.native
    
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    var passwordToggle: Boolean = js.native
    
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    var passwordVisible: Boolean = js.native
    
    /** A regular expression pattern to validate input against. */
    @JSName("pattern")
    var pattern_WaInput: String = js.native
    
    /** Draws a pill-style input with rounded edges. */
    var pill: Boolean = js.native
    
    /** Placeholder text to show as a hint when the input is empty. */
    var placeholder: String = js.native
    
    /** Makes the input readonly. */
    var readonly: Boolean = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /** Selects all the text in the input. */
    def select(): Unit = js.native
    
    /** Replaces a range of text with a new string. */
    def setRangeText(replacement: String): Unit = js.native
    def setRangeText(replacement: String, start: Double): Unit = js.native
    def setRangeText(replacement: String, start: Double, end: Double): Unit = js.native
    def setRangeText(replacement: String, start: Double, end: Double, selectMode: select | start | end | preserve): Unit = js.native
    def setRangeText(replacement: String, start: Double, end: Unit, selectMode: select | start | end | preserve): Unit = js.native
    def setRangeText(replacement: String, start: Unit, end: Double): Unit = js.native
    def setRangeText(replacement: String, start: Unit, end: Double, selectMode: select | start | end | preserve): Unit = js.native
    def setRangeText(replacement: String, start: Unit, end: Unit, selectMode: select | start | end | preserve): Unit = js.native
    
    /** Sets the start and end positions of the text selection (0-based). */
    def setSelectionRange(selectionStart: Double, selectionEnd: Double): Unit = js.native
    def setSelectionRange(selectionStart: Double, selectionEnd: Double, selectionDirection: forward | backward | none): Unit = js.native
    
    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    def showPicker(): Unit = js.native
    
    /** The input's size. */
    var size: small | medium | large = js.native
    
    /** Enables spell checking on the input. */
    var spellcheck: Boolean = js.native
    
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    def stepDown(): Unit = js.native
    
    /** Increments the value of a numeric input type by the value of the step attribute. */
    def stepUp(): Unit = js.native
    
    /**
      * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
      * implied, allowing any numeric value. Only applies to date and number input types.
      */
    @JSName("step")
    var step_WaInput: Double | any = js.native
    
    var title: String = js.native
    
    /**
      * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
      * to `text`.
      */
    var `type`: date | `datetime-local` | email | number | password | search | tel | text | time | url = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** The current value of the input, submitted as a name/value pair with form data. */
    @JSName("value")
    def value_MWaInput: String | Null = js.native
    
    /** Adds a clear button when the input is not empty. */
    var withClear: Boolean = js.native
    
    /**
      * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
      */
    var withHint: Boolean = js.native
    
    /**
      * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
      */
    var withLabel: Boolean = js.native
    
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    var withoutSpinButtons: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-input`: WaInput
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-input`: WaInput): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-input")(`wa-input`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-input`(value: WaInput): Self = StObject.set(x, "wa-input", value.asInstanceOf[js.Any])
      }
    }
  }
}
