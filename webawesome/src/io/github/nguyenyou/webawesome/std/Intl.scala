package io.github.nguyenyou.webawesome.std

import io.github.nguyenyou.webawesome.std.stdStrings.`2-digit`
import io.github.nguyenyou.webawesome.std.stdStrings.`best fit`
import io.github.nguyenyou.webawesome.std.stdStrings.basic
import io.github.nguyenyou.webawesome.std.stdStrings.long
import io.github.nguyenyou.webawesome.std.stdStrings.longGeneric
import io.github.nguyenyou.webawesome.std.stdStrings.longOffset
import io.github.nguyenyou.webawesome.std.stdStrings.lookup
import io.github.nguyenyou.webawesome.std.stdStrings.narrow
import io.github.nguyenyou.webawesome.std.stdStrings.numeric
import io.github.nguyenyou.webawesome.std.stdStrings.short
import io.github.nguyenyou.webawesome.std.stdStrings.shortGeneric
import io.github.nguyenyou.webawesome.std.stdStrings.shortOffset
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/////////////////////////////
/// ECMAScript Internationalization API
/////////////////////////////
object Intl {
  
  trait DateTimeFormatOptions extends StObject {
    
    /* standard es5 */
    var day: js.UndefOr[numeric | `2-digit`] = js.undefined
    
    /* standard es5 */
    var era: js.UndefOr[long | short | narrow] = js.undefined
    
    /* standard es5 */
    var formatMatcher: js.UndefOr[(`best fit`) | basic] = js.undefined
    
    /* standard es5 */
    var hour: js.UndefOr[numeric | `2-digit`] = js.undefined
    
    /* standard es5 */
    var hour12: js.UndefOr[Boolean] = js.undefined
    
    /* standard es5 */
    var localeMatcher: js.UndefOr[(`best fit`) | lookup] = js.undefined
    
    /* standard es5 */
    var minute: js.UndefOr[numeric | `2-digit`] = js.undefined
    
    /* standard es5 */
    var month: js.UndefOr[numeric | `2-digit` | long | short | narrow] = js.undefined
    
    /* standard es5 */
    var second: js.UndefOr[numeric | `2-digit`] = js.undefined
    
    /* standard es5 */
    var timeZone: js.UndefOr[String] = js.undefined
    
    /* standard es5 */
    var timeZoneName: js.UndefOr[short | long | shortOffset | longOffset | shortGeneric | longGeneric] = js.undefined
    
    /* standard es5 */
    var weekday: js.UndefOr[long | short | narrow] = js.undefined
    
    /* standard es5 */
    var year: js.UndefOr[numeric | `2-digit`] = js.undefined
  }
  object DateTimeFormatOptions {
    
    inline def apply(): DateTimeFormatOptions = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[DateTimeFormatOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: DateTimeFormatOptions] (val x: Self) extends AnyVal {
      
      inline def setDay(value: numeric | `2-digit`): Self = StObject.set(x, "day", value.asInstanceOf[js.Any])
      
      inline def setDayUndefined: Self = StObject.set(x, "day", js.undefined)
      
      inline def setEra(value: long | short | narrow): Self = StObject.set(x, "era", value.asInstanceOf[js.Any])
      
      inline def setEraUndefined: Self = StObject.set(x, "era", js.undefined)
      
      inline def setFormatMatcher(value: (`best fit`) | basic): Self = StObject.set(x, "formatMatcher", value.asInstanceOf[js.Any])
      
      inline def setFormatMatcherUndefined: Self = StObject.set(x, "formatMatcher", js.undefined)
      
      inline def setHour(value: numeric | `2-digit`): Self = StObject.set(x, "hour", value.asInstanceOf[js.Any])
      
      inline def setHour12(value: Boolean): Self = StObject.set(x, "hour12", value.asInstanceOf[js.Any])
      
      inline def setHour12Undefined: Self = StObject.set(x, "hour12", js.undefined)
      
      inline def setHourUndefined: Self = StObject.set(x, "hour", js.undefined)
      
      inline def setLocaleMatcher(value: (`best fit`) | lookup): Self = StObject.set(x, "localeMatcher", value.asInstanceOf[js.Any])
      
      inline def setLocaleMatcherUndefined: Self = StObject.set(x, "localeMatcher", js.undefined)
      
      inline def setMinute(value: numeric | `2-digit`): Self = StObject.set(x, "minute", value.asInstanceOf[js.Any])
      
      inline def setMinuteUndefined: Self = StObject.set(x, "minute", js.undefined)
      
      inline def setMonth(value: numeric | `2-digit` | long | short | narrow): Self = StObject.set(x, "month", value.asInstanceOf[js.Any])
      
      inline def setMonthUndefined: Self = StObject.set(x, "month", js.undefined)
      
      inline def setSecond(value: numeric | `2-digit`): Self = StObject.set(x, "second", value.asInstanceOf[js.Any])
      
      inline def setSecondUndefined: Self = StObject.set(x, "second", js.undefined)
      
      inline def setTimeZone(value: String): Self = StObject.set(x, "timeZone", value.asInstanceOf[js.Any])
      
      inline def setTimeZoneName(value: short | long | shortOffset | longOffset | shortGeneric | longGeneric): Self = StObject.set(x, "timeZoneName", value.asInstanceOf[js.Any])
      
      inline def setTimeZoneNameUndefined: Self = StObject.set(x, "timeZoneName", js.undefined)
      
      inline def setTimeZoneUndefined: Self = StObject.set(x, "timeZone", js.undefined)
      
      inline def setWeekday(value: long | short | narrow): Self = StObject.set(x, "weekday", value.asInstanceOf[js.Any])
      
      inline def setWeekdayUndefined: Self = StObject.set(x, "weekday", js.undefined)
      
      inline def setYear(value: numeric | `2-digit`): Self = StObject.set(x, "year", value.asInstanceOf[js.Any])
      
      inline def setYearUndefined: Self = StObject.set(x, "year", js.undefined)
    }
  }
  
  trait NumberFormatOptions extends StObject {
    
    /* standard es5 */
    var currency: js.UndefOr[String] = js.undefined
    
    /* standard es5 */
    var currencyDisplay: js.UndefOr[NumberFormatOptionsCurrencyDisplay] = js.undefined
    
    /* standard es5 */
    var localeMatcher: js.UndefOr[lookup | (`best fit`)] = js.undefined
    
    /* standard es5 */
    var maximumFractionDigits: js.UndefOr[Double] = js.undefined
    
    /* standard es5 */
    var maximumSignificantDigits: js.UndefOr[Double] = js.undefined
    
    /* standard es5 */
    var minimumFractionDigits: js.UndefOr[Double] = js.undefined
    
    /* standard es5 */
    var minimumIntegerDigits: js.UndefOr[Double] = js.undefined
    
    /* standard es5 */
    var minimumSignificantDigits: js.UndefOr[Double] = js.undefined
    
    /* standard es5 */
    var style: js.UndefOr[NumberFormatOptionsStyle] = js.undefined
    
    /* standard es5 */
    var useGrouping: js.UndefOr[NumberFormatOptionsUseGrouping] = js.undefined
  }
  object NumberFormatOptions {
    
    inline def apply(): NumberFormatOptions = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[NumberFormatOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: NumberFormatOptions] (val x: Self) extends AnyVal {
      
      inline def setCurrency(value: String): Self = StObject.set(x, "currency", value.asInstanceOf[js.Any])
      
      inline def setCurrencyDisplay(value: NumberFormatOptionsCurrencyDisplay): Self = StObject.set(x, "currencyDisplay", value.asInstanceOf[js.Any])
      
      inline def setCurrencyDisplayUndefined: Self = StObject.set(x, "currencyDisplay", js.undefined)
      
      inline def setCurrencyUndefined: Self = StObject.set(x, "currency", js.undefined)
      
      inline def setLocaleMatcher(value: lookup | (`best fit`)): Self = StObject.set(x, "localeMatcher", value.asInstanceOf[js.Any])
      
      inline def setLocaleMatcherUndefined: Self = StObject.set(x, "localeMatcher", js.undefined)
      
      inline def setMaximumFractionDigits(value: Double): Self = StObject.set(x, "maximumFractionDigits", value.asInstanceOf[js.Any])
      
      inline def setMaximumFractionDigitsUndefined: Self = StObject.set(x, "maximumFractionDigits", js.undefined)
      
      inline def setMaximumSignificantDigits(value: Double): Self = StObject.set(x, "maximumSignificantDigits", value.asInstanceOf[js.Any])
      
      inline def setMaximumSignificantDigitsUndefined: Self = StObject.set(x, "maximumSignificantDigits", js.undefined)
      
      inline def setMinimumFractionDigits(value: Double): Self = StObject.set(x, "minimumFractionDigits", value.asInstanceOf[js.Any])
      
      inline def setMinimumFractionDigitsUndefined: Self = StObject.set(x, "minimumFractionDigits", js.undefined)
      
      inline def setMinimumIntegerDigits(value: Double): Self = StObject.set(x, "minimumIntegerDigits", value.asInstanceOf[js.Any])
      
      inline def setMinimumIntegerDigitsUndefined: Self = StObject.set(x, "minimumIntegerDigits", js.undefined)
      
      inline def setMinimumSignificantDigits(value: Double): Self = StObject.set(x, "minimumSignificantDigits", value.asInstanceOf[js.Any])
      
      inline def setMinimumSignificantDigitsUndefined: Self = StObject.set(x, "minimumSignificantDigits", js.undefined)
      
      inline def setStyle(value: NumberFormatOptionsStyle): Self = StObject.set(x, "style", value.asInstanceOf[js.Any])
      
      inline def setStyleUndefined: Self = StObject.set(x, "style", js.undefined)
      
      inline def setUseGrouping(value: NumberFormatOptionsUseGrouping): Self = StObject.set(x, "useGrouping", value.asInstanceOf[js.Any])
      
      inline def setUseGroupingUndefined: Self = StObject.set(x, "useGrouping", js.undefined)
    }
  }
  
  /* Rewritten from type alias, can be one of: 
    - `io.github.nguyenyou.webawesome`.std.stdStrings.code
    - `io.github.nguyenyou.webawesome`.std.stdStrings.symbol
    - `io.github.nguyenyou.webawesome`.std.stdStrings.name
  */
  trait NumberFormatOptionsCurrencyDisplay extends StObject
  
  /* Rewritten from type alias, can be one of: 
    - `io.github.nguyenyou.webawesome`.std.stdStrings.decimal
    - `io.github.nguyenyou.webawesome`.std.stdStrings.percent
    - `io.github.nguyenyou.webawesome`.std.stdStrings.currency
  */
  trait NumberFormatOptionsStyle extends StObject
  
  /** NOTE: Conditional type definitions are impossible to translate to Scala.
    * See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html for an intro.
    * This RHS of the type alias is guess work. You should cast if it's not correct in your case.
    * TS definition: {{{
    {} extends std.Intl.NumberFormatOptionsUseGroupingRegistry ? boolean : keyof std.Intl.NumberFormatOptionsUseGroupingRegistry | 'true' | 'false' | boolean
    }}}
    */
  type NumberFormatOptionsUseGrouping = Boolean
}
