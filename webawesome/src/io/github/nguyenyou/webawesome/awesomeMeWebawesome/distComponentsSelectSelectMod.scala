package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.TypeofUnsafeHTMLDirective
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.directiveMod.DirectiveResult
import io.github.nguyenyou.webawesome.litHtml.mod.ResultType
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.FocusOptions
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import io.github.nguyenyou.webawesome.std.Set
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.HTMLInputElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsSelectSelectMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/select/select", JSImport.Default)
  @js.native
  open class default () extends WaSelect
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/select/select", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/select/select", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaSelect extends WebAwesomeFormAssociatedElement {
    
    /* private */ var _defaultValue: Any = js.native
    
    /* private */ var _value: Any = js.native
    
    /* private */ var addOpenListeners: Any = js.native
    
    /** The select's visual appearance. */
    var appearance: filled | outlined = js.native
    
    /** Removes focus from the control. */
    def blur(): Unit = js.native
    
    var combobox: HTMLSlotElement = js.native
    
    /**
      * @private
      * A converter for defaultValue from array to string if its multiple. Also fixes some hydration issues.
      */
    /* private */ var convertDefaultValue: Any = js.native
    
    var currentOption: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsOptionOptionMod.default = js.native
    
    @JSName("defaultValue")
    def defaultValue_MWaSelect: Null | String | js.Array[String] = js.native
    
    var displayInput: HTMLInputElement = js.native
    
    var displayLabel: String = js.native
    
    /** Sets focus on the control. */
    def focus(): Unit = js.native
    def focus(options: FocusOptions): Unit = js.native
    
    /**
      * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
      * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
      * the same document or shadow root for this to work.
      */
    @JSName("form")
    var form_WaSelect: Null = js.native
    
    /* private */ var getAllOptions: Any = js.native
    
    /* private */ var getFirstOption: Any = js.native
    
    /**
      * A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
      * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted
      * HTML of the symbol to render at the specified value.
      */
    def getTag(
      option: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsOptionOptionMod.default,
      index: Double
    ): TemplateResult[ResultType] | String | HTMLElement = js.native
    
    /* private */ var handleClearClick: Any = js.native
    
    /* private */ var handleClearMouseDown: Any = js.native
    
    /* private */ var handleComboboxKeyDown: Any = js.native
    
    /* private */ var handleComboboxMouseDown: Any = js.native
    
    def handleDefaultSlotChange(): Unit = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /* private */ var handleDocumentFocusIn: Any = js.native
    
    /* private */ var handleDocumentKeyDown: Any = js.native
    
    /* private */ var handleDocumentMouseDown: Any = js.native
    
    /* private */ var handleFocus: Any = js.native
    
    /* private */ var handleLabelClick: Any = js.native
    
    def handleOpenChange(): js.Promise[Unit] = js.native
    
    /* private */ var handleOptionClick: Any = js.native
    
    /* private */ var handleTagRemove: Any = js.native
    
    def handleValueChange(): Unit = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** Hides the listbox. */
    def hide(): js.Promise[Unit] = js.native
    
    /** The select's hint. If you need to display HTML, use the `hint` slot instead. */
    var hint: String = js.native
    
    /** The select's label. If you need to display HTML, use the `label` slot instead. */
    var label: String = js.native
    
    var listbox: HTMLSlotElement = js.native
    
    /* private */ val localize: Any = js.native
    
    /**
      * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
      * indicate the number of additional items that are selected. Set to 0 to remove the limit.
      */
    var maxOptionsVisible: Double = js.native
    
    /** Allows more than one option to be selected. */
    var multiple: Boolean = js.native
    
    /** The name of the select, submitted as a name/value pair with form data. */
    @JSName("name")
    var name_WaSelect: String = js.native
    
    /**
      * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
      * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
      */
    var open: Boolean = js.native
    
    var optionValues: js.UndefOr[Set[String | Null]] = js.native
    
    /** Draws a pill-style select with rounded edges. */
    var pill: Boolean = js.native
    
    /** Placeholder text to show as a hint when the select is empty. */
    var placeholder: String = js.native
    
    /**
      * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
      * inside of the viewport.
      */
    var placement: top | bottom = js.native
    
    var popup: io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsPopupPopupMod.default = js.native
    
    /* private */ var removeOpenListeners: Any = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    var selectedOptions: js.Array[
        io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsOptionOptionMod.default
      ] = js.native
    
    def selectionChanged(): Unit = js.native
    
    /* private */ var setCurrentOption: Any = js.native
    
    /* private */ var setSelectedOptions: Any = js.native
    
    /** Shows the listbox. */
    def show(): js.Promise[Unit] = js.native
    
    /** The select's size. */
    var size: small | medium | large = js.native
    
    /* protected */ def tags: js.Array[DirectiveResult[TypeofUnsafeHTMLDirective] | Null] = js.native
    
    /* private */ var toggleOptionSelection: Any = js.native
    
    /* private */ var typeToSelectString: Any = js.native
    
    /* private */ var typeToSelectTimeout: Any = js.native
    
    /* private */ var updateDefaultValue: Any = js.native
    
    def updated(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    var valueInput: HTMLInputElement = js.native
    
    @JSName("value")
    def value_MWaSelect: String | js.Array[String] | Null = js.native
    
    /** Adds a clear button when the select is not empty. */
    var withClear: Boolean = js.native
    
    /**
      * Used for SSR purposes when hint is slotted in. Will show the hint on first render.
      */
    var withHint: Boolean = js.native
    
    /**
      * Used for SSR purposes when a label is slotted in. Will show the label on first render.
      */
    var withLabel: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-select`: WaSelect
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-select`: WaSelect): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-select")(`wa-select`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-select`(value: WaSelect): Self = StObject.set(x, "wa-select", value.asInstanceOf[js.Any])
      }
    }
  }
}
