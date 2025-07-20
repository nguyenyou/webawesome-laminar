package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.WebAwesomeFormAssociatedE
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.KeyboardEvent
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalSubmitOnEnterMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/submit-on-enter", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def submitForm(el: WebAwesomeFormAssociatedE): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("submitForm")(el.asInstanceOf[js.Any]).asInstanceOf[Unit]
  inline def submitForm(el: HTMLElement): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("submitForm")(el.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def submitOnEnter[T /* <: HTMLElement */](event: KeyboardEvent, el: T): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("submitOnEnter")(event.asInstanceOf[js.Any], el.asInstanceOf[js.Any])).asInstanceOf[Unit]
}
