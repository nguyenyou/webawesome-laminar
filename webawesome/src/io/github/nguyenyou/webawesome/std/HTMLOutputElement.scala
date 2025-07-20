package io.github.nguyenyou.webawesome.std

import org.scalajs.dom.DOMTokenList
import org.scalajs.dom.HTMLFormElement
import org.scalajs.dom.HTMLLabelElement
import org.scalajs.dom.NodeList
import org.scalajs.dom.ValidityState
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * Provides properties and methods (beyond those inherited from HTMLElement) for manipulating the layout and presentation of <output> elements.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement)
  */
@js.native
trait HTMLOutputElement
  extends StObject
     with HTMLElement {
  
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/checkValidity) */
  /* standard dom */
  def checkValidity(): Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/defaultValue) */
  /* standard dom */
  var defaultValue: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/form) */
  /* standard dom */
  val form: HTMLFormElement | Null = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/htmlFor) */
  /* standard dom */
  def htmlFor: DOMTokenList = js.native
  /* standard dom */
  def htmlFor_=(value: String): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/labels) */
  /* standard dom */
  val labels: NodeList[HTMLLabelElement & org.scalajs.dom.Node] = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/name) */
  /* standard dom */
  var name: String = js.native
  
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
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/reportValidity) */
  /* standard dom */
  def reportValidity(): Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/setCustomValidity) */
  /* standard dom */
  def setCustomValidity(error: String): Unit = js.native
  
  /**
    * Returns the string "output".
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/type)
    */
  /* standard dom */
  val `type`: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/validationMessage) */
  /* standard dom */
  val validationMessage: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/validity) */
  /* standard dom */
  val validity: ValidityState = js.native
  
  /**
    * Returns the element's current value.
    *
    * Can be set, to change the value.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/value)
    */
  /* standard dom */
  var value: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/willValidate) */
  /* standard dom */
  val willValidate: Boolean = js.native
}
