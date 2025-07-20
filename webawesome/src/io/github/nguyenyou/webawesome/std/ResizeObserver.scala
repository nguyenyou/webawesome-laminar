package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver) */
@js.native
trait ResizeObserver extends StObject {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver/disconnect) */
  /* standard dom */
  def disconnect(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver/observe) */
  /* standard dom */
  def observe(target: org.scalajs.dom.Element): Unit = js.native
  def observe(target: org.scalajs.dom.Element, options: ResizeObserverOptions): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver/unobserve) */
  /* standard dom */
  def unobserve(target: org.scalajs.dom.Element): Unit = js.native
}
