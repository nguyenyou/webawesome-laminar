package io.github.nguyenyou.webawesome.std

import org.scalajs.dom.CSSStyleDeclaration
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@js.native
trait ElementCSSInlineStyle extends StObject {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/attributeStyleMap) */
  /* standard dom */
  val attributeStyleMap: StylePropertyMap = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/style) */
  /* standard dom */
  def style: CSSStyleDeclaration = js.native
  /* standard dom */
  def style_=(cssText: String): Unit = js.native
}
