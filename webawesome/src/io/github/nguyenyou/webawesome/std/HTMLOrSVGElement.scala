package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@js.native
trait HTMLOrSVGElement extends StObject {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/autofocus) */
  /* standard dom */
  var autofocus: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/blur) */
  /* standard dom */
  def blur(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dataset) */
  /* standard dom */
  val dataset: DOMStringMap = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus) */
  /* standard dom */
  def focus(): Unit = js.native
  def focus(options: FocusOptions): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/nonce) */
  /* standard dom */
  var nonce: js.UndefOr[String] = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex) */
  /* standard dom */
  var tabIndex: Double = js.native
}
