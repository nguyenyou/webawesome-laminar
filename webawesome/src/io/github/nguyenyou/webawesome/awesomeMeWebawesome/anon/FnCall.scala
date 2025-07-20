package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import io.github.nguyenyou.webawesome.litHtml.mod.ResultType
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@js.native
trait FnCall extends StObject {
  
  def apply[T /* <: HTMLElement */](template: TemplateResult[ResultType]): js.Promise[T] = js.native
  def apply[T /* <: HTMLElement */](template: String): js.Promise[T] = js.native
}
