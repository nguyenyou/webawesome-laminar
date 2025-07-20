package io.github.nguyenyou.webawesome.std

import org.scalajs.dom.Document
import org.scalajs.dom.Window
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/** @deprecated */
@js.native
trait HTMLFrameElement
  extends StObject
     with HTMLElement {
  
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
  /* InferMemberOverrides */
  override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
  
  /**
    * Retrieves the document object of the page or frame.
    * @deprecated
    */
  /* standard dom */
  val contentDocument: Document | Null = js.native
  
  /**
    * Retrieves the object of the specified.
    * @deprecated
    */
  /* standard dom */
  val contentWindow: Window | Null = js.native
  
  /**
    * Sets or retrieves whether to display a border for the frame.
    * @deprecated
    */
  /* standard dom */
  var frameBorder: String = js.native
  
  /**
    * Sets or retrieves a URI to a long description of the object.
    * @deprecated
    */
  /* standard dom */
  var longDesc: String = js.native
  
  /**
    * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
    * @deprecated
    */
  /* standard dom */
  var marginHeight: String = js.native
  
  /**
    * Sets or retrieves the left and right margin widths before displaying the text in a frame.
    * @deprecated
    */
  /* standard dom */
  var marginWidth: String = js.native
  
  /**
    * Sets or retrieves the frame name.
    * @deprecated
    */
  /* standard dom */
  var name: String = js.native
  
  /**
    * Sets or retrieves whether the user can resize the frame.
    * @deprecated
    */
  /* standard dom */
  var noResize: Boolean = js.native
  
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
  
  /**
    * Sets or retrieves whether the frame can be scrolled.
    * @deprecated
    */
  /* standard dom */
  var scrolling: String = js.native
  
  /**
    * Sets or retrieves a URL to be loaded by the object.
    * @deprecated
    */
  /* standard dom */
  var src: String = js.native
}
