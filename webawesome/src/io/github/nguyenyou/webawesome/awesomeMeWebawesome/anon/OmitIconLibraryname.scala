package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsIconLibraryMod.IconLibraryMutator
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsIconLibraryMod.IconLibraryResolver
import org.scalajs.dom.SVGElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* Inlined std.Omit<@awesome.me/webawesome.@awesome.me/webawesome/dist/components/icon/library.IconLibrary, 'name'> */
trait OmitIconLibraryname extends StObject {
  
  var mutator: js.UndefOr[IconLibraryMutator] = js.undefined
  
  def resolver(name: String, family: String, variant: String): String
  @JSName("resolver")
  var resolver_Original: IconLibraryResolver
  
  var spriteSheet: js.UndefOr[Boolean] = js.undefined
}
object OmitIconLibraryname {
  
  inline def apply(resolver: (/* name */ String, /* family */ String, /* variant */ String) => String): OmitIconLibraryname = {
    val __obj = js.Dynamic.literal(resolver = js.Any.fromFunction3(resolver))
    __obj.asInstanceOf[OmitIconLibraryname]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: OmitIconLibraryname] (val x: Self) extends AnyVal {
    
    inline def setMutator(value: /* svg */ SVGElement => Unit): Self = StObject.set(x, "mutator", js.Any.fromFunction1(value))
    
    inline def setMutatorUndefined: Self = StObject.set(x, "mutator", js.undefined)
    
    inline def setResolver(value: (/* name */ String, /* family */ String, /* variant */ String) => String): Self = StObject.set(x, "resolver", js.Any.fromFunction3(value))
    
    inline def setSpriteSheet(value: Boolean): Self = StObject.set(x, "spriteSheet", value.asInstanceOf[js.Any])
    
    inline def setSpriteSheetUndefined: Self = StObject.set(x, "spriteSheet", js.undefined)
  }
}
