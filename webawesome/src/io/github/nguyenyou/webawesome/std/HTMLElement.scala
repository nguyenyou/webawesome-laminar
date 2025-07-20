package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * Any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement)
  */
@js.native
trait HTMLElement
  extends StObject
     with Element
     with ElementCSSInlineStyle
     with ElementContentEditable
     with GlobalEventHandlers
     with HTMLOrSVGElement {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKey) */
  /* standard dom */
  var accessKey: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKeyLabel) */
  /* standard dom */
  val accessKeyLabel: String = js.native
  
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/attachInternals) */
  /* standard dom */
  def attachInternals(): ElementInternals = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/autocapitalize) */
  /* standard dom */
  var autocapitalize: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/click) */
  /* standard dom */
  def click(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dir) */
  /* standard dom */
  var dir: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable) */
  /* standard dom */
  var draggable: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden) */
  /* standard dom */
  var hidden: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidePopover) */
  /* standard dom */
  def hidePopover(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert) */
  /* standard dom */
  var inert: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/innerText) */
  /* standard dom */
  var innerText: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/lang) */
  /* standard dom */
  var lang: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetHeight) */
  /* standard dom */
  val offsetHeight: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetLeft) */
  /* standard dom */
  val offsetLeft: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetParent) */
  /* standard dom */
  val offsetParent: org.scalajs.dom.Element | Null = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetTop) */
  /* standard dom */
  val offsetTop: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetWidth) */
  /* standard dom */
  val offsetWidth: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText) */
  /* standard dom */
  var outerText: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover) */
  /* standard dom */
  var popover: String | Null = js.native
  
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
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/showPopover) */
  /* standard dom */
  def showPopover(): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck) */
  /* standard dom */
  var spellcheck: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/title) */
  /* standard dom */
  var title: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/togglePopover) */
  /* standard dom */
  def togglePopover(): Boolean = js.native
  def togglePopover(options: Boolean): Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/translate) */
  /* standard dom */
  var translate: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/writingSuggestions) */
  /* standard dom */
  var writingSuggestions: String = js.native
}
