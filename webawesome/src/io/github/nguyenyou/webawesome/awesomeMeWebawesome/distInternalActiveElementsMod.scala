package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Generator
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalActiveElementsMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/active-elements", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def activeElements(): Generator[Element, Any, Any] = ^.asInstanceOf[js.Dynamic].applyDynamic("activeElements")().asInstanceOf[Generator[Element, Any, Any]]
  inline def activeElements(activeElement: Element): Generator[Element, Any, Any] = ^.asInstanceOf[js.Dynamic].applyDynamic("activeElements")(activeElement.asInstanceOf[js.Any]).asInstanceOf[Generator[Element, Any, Any]]
  
  inline def getDeepestActiveElement(): js.UndefOr[Element] = ^.asInstanceOf[js.Dynamic].applyDynamic("getDeepestActiveElement")().asInstanceOf[js.UndefOr[Element]]
}
