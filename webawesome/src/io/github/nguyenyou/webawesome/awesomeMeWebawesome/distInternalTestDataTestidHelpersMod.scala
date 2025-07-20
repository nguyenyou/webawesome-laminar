package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalajs.dom.Element
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalTestDataTestidHelpersMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/test/data-testid-helpers", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def queryByTestId[T /* <: Element */](container: HTMLElement, testId: String): T | Null = (^.asInstanceOf[js.Dynamic].applyDynamic("queryByTestId")(container.asInstanceOf[js.Any], testId.asInstanceOf[js.Any])).asInstanceOf[T | Null]
}
