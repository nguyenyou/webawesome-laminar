package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.WeakMap
import org.scalajs.dom.CSSStyleDeclaration
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalComputedStyleMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/computed-style", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/internal/computed-style", "computedStyleMap")
  @js.native
  val computedStyleMap: WeakMap[Element, CSSStyleDeclaration] = js.native
  
  inline def getComputedStyle(el: Element): CSSStyleDeclaration | Null = ^.asInstanceOf[js.Dynamic].applyDynamic("getComputedStyle")(el.asInstanceOf[js.Any]).asInstanceOf[CSSStyleDeclaration | Null]
}
