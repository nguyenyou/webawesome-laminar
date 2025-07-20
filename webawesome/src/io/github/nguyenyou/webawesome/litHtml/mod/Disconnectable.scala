package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.std.Set
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait Disconnectable extends StObject {
  
  @JSName("_$disconnectableChildren")
  var _$disconnectableChildren: js.UndefOr[Set[Disconnectable]] = js.undefined
  
  @JSName("_$isConnected")
  var _$isConnected: Boolean
  
  @JSName("_$parent")
  var _$parent: js.UndefOr[Disconnectable] = js.undefined
}
object Disconnectable {
  
  inline def apply(_$isConnected: Boolean): Disconnectable = {
    val __obj = js.Dynamic.literal(_$isConnected = _$isConnected.asInstanceOf[js.Any])
    __obj.asInstanceOf[Disconnectable]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: Disconnectable] (val x: Self) extends AnyVal {
    
    inline def set_$disconnectableChildren(value: Set[Disconnectable]): Self = StObject.set(x, "_$disconnectableChildren", value.asInstanceOf[js.Any])
    
    inline def set_$disconnectableChildrenUndefined: Self = StObject.set(x, "_$disconnectableChildren", js.undefined)
    
    inline def set_$isConnected(value: Boolean): Self = StObject.set(x, "_$isConnected", value.asInstanceOf[js.Any])
    
    inline def set_$parent(value: Disconnectable): Self = StObject.set(x, "_$parent", value.asInstanceOf[js.Any])
    
    inline def set_$parentUndefined: Self = StObject.set(x, "_$parent", js.undefined)
  }
}
