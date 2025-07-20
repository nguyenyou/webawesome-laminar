package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.code
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.currency
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.decimal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.name
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.narrowSymbol
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.percent
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.symbol
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsFormatNumberFormatNumberMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/format-number/format-number", JSImport.Default)
  @js.native
  open class default () extends WaFormatNumber
  
  @js.native
  trait WaFormatNumber
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
    var currency: String = js.native
    
    /** How to display the currency. */
    var currencyDisplay: symbol | narrowSymbol | code | name = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The maximum number of fraction digits to use. Possible values are 0-100. */
    var maximumFractionDigits: Double = js.native
    
    /** The maximum number of significant digits to use,. Possible values are 1-21. */
    var maximumSignificantDigits: Double = js.native
    
    /** The minimum number of fraction digits to use. Possible values are 0-100. */
    var minimumFractionDigits: Double = js.native
    
    /** The minimum number of integer digits to use. Possible values are 1-21. */
    var minimumIntegerDigits: Double = js.native
    
    /** The minimum number of significant digits to use. Possible values are 1-21. */
    var minimumSignificantDigits: Double = js.native
    
    def render(): String = js.native
    
    /** The formatting style to use. */
    var `type`: currency | decimal | percent = js.native
    
    /** The number to format. */
    var value: Double = js.native
    
    /** Turns off grouping separators. */
    var withoutGrouping: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-format-number`: WaFormatNumber
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-format-number`: WaFormatNumber): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-format-number")(`wa-format-number`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-format-number`(value: WaFormatNumber): Self = StObject.set(x, "wa-format-number", value.asInstanceOf[js.Any])
      }
    }
  }
}
