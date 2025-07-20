package io.github.nguyenyou.webawesome.litElement

import io.github.nguyenyou.webawesome.litHtml.mod.RenderOptions
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object litElementMod {
  
  @JSImport("lit-element/lit-element", "CSSResult")
  @js.native
  /* private */ open class CSSResult ()
    extends io.github.nguyenyou.webawesome.litReactiveElement.mod.CSSResult
  
  @JSImport("lit-element/lit-element", "LitElement")
  @js.native
  open class LitElement ()
    extends io.github.nguyenyou.webawesome.litReactiveElement.mod.ReactiveElement {
    
    /* private */ var __childPart: Any = js.native
    
    /**
      * Invoked on each update to perform rendering tasks. This method may return
      * any value renderable by lit-html's `ChildPart` - typically a
      * `TemplateResult`. Setting properties inside this method will *not* trigger
      * the element to update.
      * @category rendering
      */
    /* protected */ def render(): Any = js.native
    
    /**
      * @category rendering
      */
    val renderOptions: RenderOptions = js.native
  }
  /* static members */
  object LitElement
  
  /* note: abstract class */ @JSImport("lit-element/lit-element", "ReactiveElement")
  @js.native
  open class ReactiveElement ()
    extends io.github.nguyenyou.webawesome.litReactiveElement.mod.ReactiveElement
  /* static members */
  object ReactiveElement
}
