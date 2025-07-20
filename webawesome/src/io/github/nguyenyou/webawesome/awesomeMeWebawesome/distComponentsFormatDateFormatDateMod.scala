package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`12`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`2-digit`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`24`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.auto
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.long
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.narrow
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.numeric
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.short
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsFormatDateFormatDateMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/format-date/format-date", JSImport.Default)
  @js.native
  open class default () extends WaFormatDate
  
  @js.native
  trait WaFormatDate
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /**
      * The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
      * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
      * in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
      */
    var date: js.Date | String = js.native
    
    /** The format for displaying the day. */
    var day: numeric | `2-digit` = js.native
    
    /** The format for displaying the era. */
    var era: narrow | short | long = js.native
    
    /** The format for displaying the hour. */
    var hour: numeric | `2-digit` = js.native
    
    /** The format for displaying the hour. */
    var hourFormat: auto | `12` | `24` = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The format for displaying the minute. */
    var minute: numeric | `2-digit` = js.native
    
    /** The format for displaying the month. */
    var month: numeric | `2-digit` | narrow | short | long = js.native
    
    def render(): js.UndefOr[TemplateResult[`1`]] = js.native
    
    /** The format for displaying the second. */
    var second: numeric | `2-digit` = js.native
    
    /** The time zone to express the time in. */
    var timeZone: String = js.native
    
    /** The format for displaying the time. */
    var timeZoneName: short | long = js.native
    
    /** The format for displaying the weekday. */
    var weekday: narrow | short | long = js.native
    
    /** The format for displaying the year. */
    var year: numeric | `2-digit` = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-format-date`: WaFormatDate
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-format-date`: WaFormatDate): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-format-date")(`wa-format-date`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-format-date`(value: WaFormatDate): Self = StObject.set(x, "wa-format-date", value.asInstanceOf[js.Any])
      }
    }
  }
}
