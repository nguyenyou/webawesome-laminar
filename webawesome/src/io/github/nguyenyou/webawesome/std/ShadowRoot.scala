package io.github.nguyenyou.webawesome.std

import io.github.nguyenyou.webawesome.std.stdStrings.slotchange
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot) */
@js.native
trait ShadowRoot
  extends StObject
     with DocumentFragment
     with DocumentOrShadowRoot {
  
  /** Throws a "NotSupportedError" DOMException if context object is a shadow root. */
  /* standard dom */
  @JSName("addEventListener")
  def addEventListener_slotchange(
    `type`: slotchange,
    listener: js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any]
  ): Unit = js.native
  @JSName("addEventListener")
  def addEventListener_slotchange(
    `type`: slotchange,
    listener: js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any],
    options: AddEventListenerOptions
  ): Unit = js.native
  @JSName("addEventListener")
  def addEventListener_slotchange(
    `type`: slotchange,
    listener: js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any],
    options: Boolean
  ): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/clonable) */
  /* standard dom */
  val clonable: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/delegatesFocus) */
  /* standard dom */
  val delegatesFocus: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/getHTML) */
  /* standard dom */
  def getHTML(): String = js.native
  def getHTML(options: GetHTMLOptions): String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/host) */
  /* standard dom */
  val host: org.scalajs.dom.Element = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/innerHTML) */
  /* standard dom */
  var innerHTML: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/mode) */
  /* standard dom */
  val mode: ShadowRootMode = js.native
  
  /* standard dom */
  var onslotchange: (js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any]) | Null = js.native
  
  /* standard dom */
  @JSName("removeEventListener")
  def removeEventListener_slotchange(
    `type`: slotchange,
    listener: js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any]
  ): Unit = js.native
  @JSName("removeEventListener")
  def removeEventListener_slotchange(
    `type`: slotchange,
    listener: js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any],
    options: org.scalajs.dom.EventListenerOptions
  ): Unit = js.native
  @JSName("removeEventListener")
  def removeEventListener_slotchange(
    `type`: slotchange,
    listener: js.ThisFunction1[/* this */ this.type, /* ev */ org.scalajs.dom.Event, Any],
    options: Boolean
  ): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/serializable) */
  /* standard dom */
  val serializable: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/setHTMLUnsafe) */
  /* standard dom */
  def setHTMLUnsafe(html: String): Unit = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/slotAssignment) */
  /* standard dom */
  val slotAssignment: SlotAssignmentMode = js.native
}
