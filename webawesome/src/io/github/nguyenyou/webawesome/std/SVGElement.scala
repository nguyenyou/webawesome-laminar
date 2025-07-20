package io.github.nguyenyou.webawesome.std

import org.scalajs.dom.SVGSVGElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive from the SVGElement interface.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement)
  */
@js.native
trait SVGElement
  extends StObject
     with Element
     with ElementCSSInlineStyle
     with GlobalEventHandlers
     with HTMLOrSVGElement {
  
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/ownerSVGElement) */
  /* standard dom */
  val ownerSVGElement: SVGSVGElement | Null = js.native
  
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
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/viewportElement) */
  /* standard dom */
  val viewportElement: org.scalajs.dom.SVGElement | Null = js.native
}
