package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap) */
@js.native
trait StylePropertyMap
  extends StObject
     with StylePropertyMapReadOnly {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/append) */
  /* standard dom */
  def append(property: String, values: (CSSStyleValue | String)*): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/clear) */
  /* standard dom */
  def clear(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/delete) */
  /* standard dom */
  def delete(property: String): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/set) */
  /* standard dom */
  def set(property: String, values: (CSSStyleValue | String)*): Unit = js.native
}
