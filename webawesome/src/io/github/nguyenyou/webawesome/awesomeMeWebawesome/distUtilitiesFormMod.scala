package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Record
import org.scalajs.dom.HTMLFormElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distUtilitiesFormMod {
  
  @JSImport("@awesome.me/webawesome/dist/utilities/form", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def serialize(form: HTMLFormElement): Record[String, Any] = ^.asInstanceOf[js.Dynamic].applyDynamic("serialize")(form.asInstanceOf[js.Any]).asInstanceOf[Record[String, Any]]
}
