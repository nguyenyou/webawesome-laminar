package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bit
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.byte
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.long
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.narrow
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.short
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsFormatBytesFormatBytesMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/format-bytes/format-bytes", JSImport.Default)
  @js.native
  open class default () extends WaFormatBytes
  
  @js.native
  trait WaFormatBytes
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
    var display: long | short | narrow = js.native
    
    /* private */ val localize: Any = js.native
    
    def render(): String = js.native
    
    /** The type of unit to display. */
    var unit: byte | bit = js.native
    
    /** The number to format in bytes. */
    var value: Double = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-format-bytes`: WaFormatBytes
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-format-bytes`: WaFormatBytes): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-format-bytes")(`wa-format-bytes`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-format-bytes`(value: WaFormatBytes): Self = StObject.set(x, "wa-format-bytes", value.asInstanceOf[js.Any])
      }
    }
  }
}
