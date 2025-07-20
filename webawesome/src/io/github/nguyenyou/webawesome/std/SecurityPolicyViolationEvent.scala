package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * Inherits from Event, and represents the event object of an event sent on a document or worker when its content security policy is violated.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)
  */
@js.native
trait SecurityPolicyViolationEvent
  extends StObject
     with Event {
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) */
  /* standard dom */
  val blockedURI: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) */
  /* standard dom */
  val columnNumber: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/disposition) */
  /* standard dom */
  val disposition: SecurityPolicyViolationEventDisposition = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/documentURI) */
  /* standard dom */
  val documentURI: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) */
  /* standard dom */
  val effectiveDirective: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) */
  /* standard dom */
  val lineNumber: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) */
  /* standard dom */
  val originalPolicy: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/referrer) */
  /* standard dom */
  val referrer: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sample) */
  /* standard dom */
  val sample: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) */
  /* standard dom */
  val sourceFile: String = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/statusCode) */
  /* standard dom */
  val statusCode: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) */
  /* standard dom */
  val violatedDirective: String = js.native
}
