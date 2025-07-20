package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalajs.dom.Element
import org.scalajs.dom.Event
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalEventMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/event", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def getTargetElement(event: Event): Element | Null = ^.asInstanceOf[js.Dynamic].applyDynamic("getTargetElement")(event.asInstanceOf[js.Any]).asInstanceOf[Element | Null]
  
  inline def waitForEvent(el: HTMLElement, eventName: String): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("waitForEvent")(el.asInstanceOf[js.Any], eventName.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
}
