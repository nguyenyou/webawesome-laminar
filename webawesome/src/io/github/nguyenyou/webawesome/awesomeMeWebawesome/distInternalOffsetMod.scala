package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.Top
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalOffsetMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/offset", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def getOffset(element: HTMLElement, parent: HTMLElement): Top = (^.asInstanceOf[js.Dynamic].applyDynamic("getOffset")(element.asInstanceOf[js.Any], parent.asInstanceOf[js.Any])).asInstanceOf[Top]
}
