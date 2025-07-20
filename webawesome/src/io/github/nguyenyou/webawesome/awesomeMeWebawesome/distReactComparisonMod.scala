package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactComparisonMod extends Shortcut {
  
  /**
    * @summary Compare visual differences between similar content with a sliding panel.
    * @documentation https://webawesome.com/docs/components/comparison
    * @status stable
    * @since 2.0
    *
    * @dependency wa-icon
    *
    * @slot before - The before content, often an `<img>` or `<svg>` element.
    * @slot after - The after content, often an `<img>` or `<svg>` element.
    * @slot handle - The icon used inside the handle.
    *
    * @event change - Emitted when the position changes.
    *
    * @csspart base - The container that wraps the before and after content.
    * @csspart before - The container that wraps the before content.
    * @csspart after - The container that wraps the after content.
    * @csspart divider - The divider that separates the before and after content.
    * @csspart handle - The handle that the user drags to expose the after content.
    *
    * @cssproperty --divider-width - The width of the dividing line.
    * @cssproperty --handle-size - The size of the compare handle.
    *
    * @cssstate dragging - Applied when the comparison is being dragged.
    */
  @JSImport("@awesome.me/webawesome/dist/react/comparison", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = js.native
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactComparisonMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {}> */ Any = default
}
