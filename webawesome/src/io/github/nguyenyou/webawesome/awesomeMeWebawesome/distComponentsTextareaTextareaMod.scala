package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.Left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.Top
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.auto
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.backward
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.both
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.characters
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.decimal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.done
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.email
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.end
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.enter
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.forward
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.go
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.next
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.none
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.numeric
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.off
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.on
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
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
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.url
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.words
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.FocusOptions
import org.scalajs.dom.HTMLDivElement
import org.scalajs.dom.HTMLTextAreaElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsTextareaTextareaMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/textarea/textarea", JSImport.Default)
  @js.native
  open class default () extends WaTextarea
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/textarea/textarea", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/textarea/textarea", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaTextarea extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _value: Any = js.native
    
    /** The textarea's visual appearance. */
    var appearance: filled | outlined = js.native
    
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    var autocapitalize: off | none | on | sentences | words | characters = js.native
    
    /**
      * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
      * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
      */
    var autocomplete: String = js.native
    
    /** Indicates whether the browser's autocorrect feature is on or off. */
    var autocorrect: String = js.native
    
    /** Indicates that the input should receive focus on page load. */
    var autofocus: Boolean = js.native
    
    var base: HTMLDivElement = js.native
    
    /** Removes focus from the textarea. */
    def blur(): Unit = js.native
    
    /** The default value of the form control. Primarily used for resetting the form control. */
    @JSName("defaultValue")
    var defaultValue_WaTextarea: String = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    var enterkeyhint: enter | done | go | next | previous | search | send = js.native
    
    /** Sets focus on the textarea. */
    override def focus(): Unit = js.native
    override def focus(options: FocusOptions): Unit = js.native
    
    /**
      * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
      * the same document or shadow root for this to work.
      */
    @JSName("form")
    var form_WaTextarea: Null = js.native
    
    /* private */ var handleBlur: Any = js.native
    
    /* private */ var handleChange: Any = js.native
    
    /* private */ var handleInput: Any = js.native
    
    def handleRowsChange(): Unit = js.native
    
    def handleValueChange(): js.Promise[Unit] = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** The textarea's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String = js.native
    
    @JSName("input")
    var input_WaTextarea: HTMLTextAreaElement = js.native
    
    /**
      * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
      * keyboard on supportive devices.
      */
    var inputmode: none | text | decimal | numeric | tel | search | email | url = js.native
    
    /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
    var label: String = js.native
    
    /** The maximum length of input that will be considered valid. */
    @JSName("maxlength")
    var maxlength_WaTextarea: Double = js.native
    
    /** The minimum length of input that will be considered valid. */
    @JSName("minlength")
    var minlength_WaTextarea: Double = js.native
    
    /** Placeholder text to show as a hint when the input is empty. */
    var placeholder: String = js.native
    
    /** Makes the textarea readonly. */
    var readonly: Boolean = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /** Controls how the textarea can be resized. */
    var resize: none | vertical | horizontal | both | auto = js.native
    
    /* private */ var resizeObserver: Any = js.native
    
    /** The number of rows to display by default. */
    var rows: Double = js.native
    
    /** Gets or sets the textarea's scroll position. */
    def scrollPosition(): js.UndefOr[Top] = js.native
    def scrollPosition(position: Left): js.UndefOr[Top] = js.native
    
    /** Selects all the text in the textarea. */
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
    
    /* private */ var setTextareaDimensions: Any = js.native
    
    /** The textarea's size. */
    var size: small | medium | large = js.native
    
    var sizeAdjuster: HTMLTextAreaElement = js.native
    
    /** Enables spell checking on the textarea. */
    var spellcheck: Boolean = js.native
    
    var title: String = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /** The current value of the input, submitted as a name/value pair with form data. */
    @JSName("value")
    def value_MWaTextarea: String | Null = js.native
    
    /**
      * Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`.
      */
    var withHint: Boolean = js.native
    
    /**
      * Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`.
      */
    var withLabel: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-textarea`: WaTextarea
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-textarea`: WaTextarea): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-textarea")(`wa-textarea`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-textarea`(value: WaTextarea): Self = StObject.set(x, "wa-textarea", value.asInstanceOf[js.Any])
      }
    }
  }
}
