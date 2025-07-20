package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement) */
@js.native
trait SVGAnimationElement
  extends StObject
     with SVGElement
     with SVGTests {
  
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/beginElement) */
  /* standard dom */
  def beginElement(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/beginElementAt) */
  /* standard dom */
  def beginElementAt(offset: Double): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/endElement) */
  /* standard dom */
  def endElement(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/endElementAt) */
  /* standard dom */
  def endElementAt(offset: Double): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/getCurrentTime) */
  /* standard dom */
  def getCurrentTime(): Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/getSimpleDuration) */
  /* standard dom */
  def getSimpleDuration(): Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/getStartTime) */
  /* standard dom */
  def getStartTime(): Double = js.native
  
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
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/targetElement) */
  /* standard dom */
  val targetElement: org.scalajs.dom.SVGElement | Null = js.native
}
