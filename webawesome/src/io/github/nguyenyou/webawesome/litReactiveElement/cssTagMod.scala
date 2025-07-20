package io.github.nguyenyou.webawesome.litReactiveElement

import org.scalajs.dom.CSSStyleSheet
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object cssTagMod {
  
  @JSImport("@lit/reactive-element/css-tag", "CSSResult")
  @js.native
  /* private */ open class CSSResult () extends StObject {
    
    @JSName("_$cssResult$")
    var _DollarcssResultDollar: Boolean = js.native
    
    /* private */ var _strings: Any = js.native
    
    /* private */ var _styleSheet: Any = js.native
    
    val cssText: String = js.native
    
    def styleSheet: js.UndefOr[CSSStyleSheet] = js.native
  }
  
  /** 
  NOTE: Rewritten from type alias:
  {{{
  type CSSResultGroup = @lit/reactive-element.@lit/reactive-element/css-tag.CSSResultOrNative | @lit/reactive-element.@lit/reactive-element/css-tag.CSSResultArray
  }}}
  to avoid circular code involving: 
  - @lit/reactive-element.@lit/reactive-element/css-tag.CSSResultArray
  - @lit/reactive-element.@lit/reactive-element/css-tag.CSSResultGroup
  */
  type CSSResultGroup = CSSResultOrNative | Any
  
  type CSSResultOrNative = CSSResult | CSSStyleSheet
}
