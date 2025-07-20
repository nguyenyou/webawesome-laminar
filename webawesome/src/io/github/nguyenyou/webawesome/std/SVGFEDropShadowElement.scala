package io.github.nguyenyou.webawesome.std

import org.scalajs.dom.SVGAnimatedNumber
import org.scalajs.dom.SVGAnimatedString
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGFEDropShadowElement) */
@js.native
trait SVGFEDropShadowElement
  extends StObject
     with SVGElement
     with SVGFilterPrimitiveStandardAttributes {
  
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /* standard dom */
  val dx: SVGAnimatedNumber = js.native
  
  /* standard dom */
  val dy: SVGAnimatedNumber = js.native
  
  /* standard dom */
  val in1: SVGAnimatedString = js.native
  
  /* InferMemberOverrides */
  override def removeEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def removeEventListener(
    `type`: String,
    callback: EventListenerOrEventListenerObject,
    options: org.scalajs.dom.EventListenerOptions
  ): Unit = js.native
  /* InferMemberOverrides */
  override def removeEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /* standard dom */
  def setStdDeviation(stdDeviationX: Double, stdDeviationY: Double): Unit = js.native
  
  /* standard dom */
  val stdDeviationX: SVGAnimatedNumber = js.native
  
  /* standard dom */
  val stdDeviationY: SVGAnimatedNumber = js.native
}
