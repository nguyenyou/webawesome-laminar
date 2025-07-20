package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.PartialAllDefinedOptions
import io.github.nguyenyou.webawesome.std.ShadowRoot
import org.scalajs.dom.Document
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distUtilitiesDefinedMod {
  
  @JSImport("@awesome.me/webawesome/dist/utilities/defined", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def allDefined(): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("allDefined")().asInstanceOf[js.Promise[Unit]]
  inline def allDefined(options: PartialAllDefinedOptions): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("allDefined")(options.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  
  trait AllDefinedOptions extends StObject {
    
    /**
      * To wait for additional custom elements that may not be on the page when the function is called, provide them here.
      */
    var additionalElements: String | js.Array[String]
    
    /**
      * A callback that accepts a custom element tag name and returns `true` if the custom element should be defined before
      * resolving or `false` to skip it. The tag name is always in lowercase.
      */
    def `match`(tagName: String): Boolean
    
    /**
      * The root in which to look for custom elements. Defaults to `document`. By design, shadow roots are not traversed,
      * but you can call this function and set `root` to a custom element's shadow root if needed.
      */
    var root: Document | ShadowRoot
  }
  object AllDefinedOptions {
    
    inline def apply(
      additionalElements: String | js.Array[String],
      `match`: String => Boolean,
      root: Document | ShadowRoot
    ): AllDefinedOptions = {
      val __obj = js.Dynamic.literal(additionalElements = additionalElements.asInstanceOf[js.Any], root = root.asInstanceOf[js.Any])
      __obj.updateDynamic("match")(js.Any.fromFunction1(`match`))
      __obj.asInstanceOf[AllDefinedOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: AllDefinedOptions] (val x: Self) extends AnyVal {
      
      inline def setAdditionalElements(value: String | js.Array[String]): Self = StObject.set(x, "additionalElements", value.asInstanceOf[js.Any])
      
      inline def setAdditionalElementsVarargs(value: String*): Self = StObject.set(x, "additionalElements", js.Array(value*))
      
      inline def setMatch(value: String => Boolean): Self = StObject.set(x, "match", js.Any.fromFunction1(value))
      
      inline def setRoot(value: Document | ShadowRoot): Self = StObject.set(x, "root", value.asInstanceOf[js.Any])
    }
  }
}
