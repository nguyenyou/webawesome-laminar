package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalTestWaitForScrollingMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/test/wait-for-scrolling", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def waitForScrollingToEnd(element: Element): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("waitForScrollingToEnd")(element.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def waitForScrollingToEnd(element: Element, timeoutInMs: Double): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("waitForScrollingToEnd")(element.asInstanceOf[js.Any], timeoutInMs.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
}
