package io.github.nguyenyou.webawesome.litHtml

import io.github.nguyenyou.webawesome.litHtml.directiveMod.Directive_
import io.github.nguyenyou.webawesome.litHtml.directiveMod.PartInfo
import io.github.nguyenyou.webawesome.litHtml.mod.ResultType
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object directivesUnsafeHtmlMod {
  
  @JSImport("lit-html/directives/unsafe-html", "UnsafeHTMLDirective")
  @js.native
  open class UnsafeHTMLDirective protected () extends Directive_ {
    def this(partInfo: PartInfo) = this()
    
    /* private */ var _templateResult: Any = js.native
    
    /* private */ var _value: Any = js.native
    
    def render(): js.UndefOr[js.Symbol | TemplateResult[ResultType] | Null] = js.native
    def render(value: String): js.UndefOr[js.Symbol | TemplateResult[ResultType] | Null] = js.native
    def render(value: js.Symbol): js.UndefOr[js.Symbol | TemplateResult[ResultType] | Null] = js.native
  }
  /* static members */
  object UnsafeHTMLDirective
}
