package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.OmitIconLibraryname
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distComponentsIconIconMod.default
import org.scalajs.dom.SVGElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsIconLibraryMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/icon/library", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def getDefaultIconFamily(): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getDefaultIconFamily")().asInstanceOf[String]
  
  inline def getIconLibrary(): js.UndefOr[IconLibrary] = ^.asInstanceOf[js.Dynamic].applyDynamic("getIconLibrary")().asInstanceOf[js.UndefOr[IconLibrary]]
  inline def getIconLibrary(name: String): js.UndefOr[IconLibrary] = ^.asInstanceOf[js.Dynamic].applyDynamic("getIconLibrary")(name.asInstanceOf[js.Any]).asInstanceOf[js.UndefOr[IconLibrary]]
  
  inline def registerIconLibrary(name: String, options: OmitIconLibraryname): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("registerIconLibrary")(name.asInstanceOf[js.Any], options.asInstanceOf[js.Any])).asInstanceOf[Unit]
  
  inline def setDefaultIconFamily(family: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("setDefaultIconFamily")(family.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def unregisterIconLibrary(name: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("unregisterIconLibrary")(name.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def unwatchIcon(icon: default): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("unwatchIcon")(icon.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def watchIcon(icon: default): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("watchIcon")(icon.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  trait IconLibrary extends StObject {
    
    var mutator: js.UndefOr[IconLibraryMutator] = js.undefined
    
    var name: String
    
    def resolver(name: String, family: String, variant: String): String
    @JSName("resolver")
    var resolver_Original: IconLibraryResolver
    
    var spriteSheet: js.UndefOr[Boolean] = js.undefined
  }
  object IconLibrary {
    
    inline def apply(name: String, resolver: (/* name */ String, /* family */ String, /* variant */ String) => String): IconLibrary = {
      val __obj = js.Dynamic.literal(name = name.asInstanceOf[js.Any], resolver = js.Any.fromFunction3(resolver))
      __obj.asInstanceOf[IconLibrary]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: IconLibrary] (val x: Self) extends AnyVal {
      
      inline def setMutator(value: /* svg */ SVGElement => Unit): Self = StObject.set(x, "mutator", js.Any.fromFunction1(value))
      
      inline def setMutatorUndefined: Self = StObject.set(x, "mutator", js.undefined)
      
      inline def setName(value: String): Self = StObject.set(x, "name", value.asInstanceOf[js.Any])
      
      inline def setResolver(value: (/* name */ String, /* family */ String, /* variant */ String) => String): Self = StObject.set(x, "resolver", js.Any.fromFunction3(value))
      
      inline def setSpriteSheet(value: Boolean): Self = StObject.set(x, "spriteSheet", value.asInstanceOf[js.Any])
      
      inline def setSpriteSheetUndefined: Self = StObject.set(x, "spriteSheet", js.undefined)
    }
  }
  
  type IconLibraryMutator = js.Function1[/* svg */ SVGElement, Unit]
  
  type IconLibraryResolver = js.Function3[/* name */ String, /* family */ String, /* variant */ String, String]
}
