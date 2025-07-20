package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.litHtml.anon.ImportNode
import io.github.nguyenyou.webawesome.std.ChildNode
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait RenderOptions extends StObject {
  
  /**
    * Node used for cloning the template (`importNode` will be called on this
    * node). This controls the `ownerDocument` of the rendered DOM, along with
    * any inherited context. Defaults to the global `document`.
    */
  var creationScope: js.UndefOr[ImportNode] = js.undefined
  
  /**
    * An object to use as the `this` value for event listeners. It's often
    * useful to set this to the host component rendering a template.
    */
  var host: js.UndefOr[js.Object] = js.undefined
  
  /**
    * The initial connected state for the top-level part being rendered. If no
    * `isConnected` option is set, `AsyncDirective`s will be connected by
    * default. Set to `false` if the initial render occurs in a disconnected tree
    * and `AsyncDirective`s should see `isConnected === false` for their initial
    * render. The `part.setConnected()` method must be used subsequent to initial
    * render to change the connected state of the part.
    */
  var isConnected: js.UndefOr[Boolean] = js.undefined
  
  /**
    * A DOM node before which to render content in the container.
    */
  var renderBefore: js.UndefOr[ChildNode | Null] = js.undefined
}
object RenderOptions {
  
  inline def apply(): RenderOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[RenderOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: RenderOptions] (val x: Self) extends AnyVal {
    
    inline def setCreationScope(value: ImportNode): Self = StObject.set(x, "creationScope", value.asInstanceOf[js.Any])
    
    inline def setCreationScopeUndefined: Self = StObject.set(x, "creationScope", js.undefined)
    
    inline def setHost(value: js.Object): Self = StObject.set(x, "host", value.asInstanceOf[js.Any])
    
    inline def setHostUndefined: Self = StObject.set(x, "host", js.undefined)
    
    inline def setIsConnected(value: Boolean): Self = StObject.set(x, "isConnected", value.asInstanceOf[js.Any])
    
    inline def setIsConnectedUndefined: Self = StObject.set(x, "isConnected", js.undefined)
    
    inline def setRenderBefore(value: ChildNode): Self = StObject.set(x, "renderBefore", value.asInstanceOf[js.Any])
    
    inline def setRenderBeforeNull: Self = StObject.set(x, "renderBefore", null)
    
    inline def setRenderBeforeUndefined: Self = StObject.set(x, "renderBefore", js.undefined)
  }
}
