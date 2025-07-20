package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._empty
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.always
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.auto
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.long
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.narrow
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.short
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsRelativeTimeRelativeTimeMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/relative-time/relative-time", JSImport.Default)
  @js.native
  open class default () extends WaRelativeTime
  
  @js.native
  trait WaRelativeTime
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /**
      * The date from which to calculate time from. If not set, the current date and time will be used. When passing a
      * string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
      * a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
      */
    var date: js.Date | String = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /** The formatting style to use. */
    var format: long | short | narrow = js.native
    
    /* private */ var isoTime: Any = js.native
    
    /* private */ val localize: Any = js.native
    
    /**
      * When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
      * "1 day ago" and "in 1 day" will be shown.
      */
    var numeric: always | auto = js.native
    
    /* private */ var relativeTime: Any = js.native
    
    def render(): TemplateResult[`1`] | _empty = js.native
    
    /** Keep the displayed value up to date as time passes. */
    var sync: Boolean = js.native
    
    /* private */ var updateTimeout: Any = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-relative-time`: WaRelativeTime
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-relative-time`: WaRelativeTime): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-relative-time")(`wa-relative-time`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-relative-time`(value: WaRelativeTime): Self = StObject.set(x, "wa-relative-time", value.asInstanceOf[js.Any])
      }
    }
  }
}
