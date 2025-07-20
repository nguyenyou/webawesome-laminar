package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.litHtml.directiveMod.Directive_
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait DirectiveParent extends StObject {
  
  @JSName("_$isConnected")
  var _$isConnected: Boolean
  
  @JSName("_$parent")
  var _$parent: js.UndefOr[DirectiveParent] = js.undefined
  
  var __directive: js.UndefOr[Directive_] = js.undefined
  
  var __directives: js.UndefOr[js.Array[js.UndefOr[Directive_]]] = js.undefined
}
object DirectiveParent {
  
  inline def apply(_$isConnected: Boolean): DirectiveParent = {
    val __obj = js.Dynamic.literal(_$isConnected = _$isConnected.asInstanceOf[js.Any])
    __obj.asInstanceOf[DirectiveParent]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: DirectiveParent] (val x: Self) extends AnyVal {
    
    inline def set_$isConnected(value: Boolean): Self = StObject.set(x, "_$isConnected", value.asInstanceOf[js.Any])
    
    inline def set_$parent(value: DirectiveParent): Self = StObject.set(x, "_$parent", value.asInstanceOf[js.Any])
    
    inline def set_$parentUndefined: Self = StObject.set(x, "_$parent", js.undefined)
    
    inline def set__directive(value: Directive_): Self = StObject.set(x, "__directive", value.asInstanceOf[js.Any])
    
    inline def set__directiveUndefined: Self = StObject.set(x, "__directive", js.undefined)
    
    inline def set__directives(value: js.Array[js.UndefOr[Directive_]]): Self = StObject.set(x, "__directives", value.asInstanceOf[js.Any])
    
    inline def set__directivesUndefined: Self = StObject.set(x, "__directives", js.undefined)
    
    inline def set__directivesVarargs(value: js.UndefOr[Directive_]*): Self = StObject.set(x, "__directives", js.Array(value*))
  }
}
