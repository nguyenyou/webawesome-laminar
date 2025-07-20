package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsDividerDividerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/divider/divider", JSImport.Default)
  @js.native
  open class default () extends WaDivider
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/divider/divider", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/divider/divider", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaDivider
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    override def connectedCallback(): Unit = js.native
    
    def handleVerticalChange(): Unit = js.native
    
    /** Sets the divider's orientation. */
    var orientation: horizontal | vertical = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-divider`: WaDivider
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-divider`: WaDivider): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-divider")(`wa-divider`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-divider`(value: WaDivider): Self = StObject.set(x, "wa-divider", value.asInstanceOf[js.Any])
      }
    }
  }
}
