package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.lit.mod.LitElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalWatchMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/watch", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def watch(propertyName: String): js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ] = ^.asInstanceOf[js.Dynamic].applyDynamic("watch")(propertyName.asInstanceOf[js.Any]).asInstanceOf[js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ]]
  inline def watch(propertyName: String, options: WatchOptions): js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ] = (^.asInstanceOf[js.Dynamic].applyDynamic("watch")(propertyName.asInstanceOf[js.Any], options.asInstanceOf[js.Any])).asInstanceOf[js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ]]
  inline def watch(propertyName: js.Array[String]): js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ] = ^.asInstanceOf[js.Dynamic].applyDynamic("watch")(propertyName.asInstanceOf[js.Any]).asInstanceOf[js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ]]
  inline def watch(propertyName: js.Array[String], options: WatchOptions): js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ] = (^.asInstanceOf[js.Dynamic].applyDynamic("watch")(propertyName.asInstanceOf[js.Any], options.asInstanceOf[js.Any])).asInstanceOf[js.Function2[
    /* proto */ LitElement, 
    /* decoratedFnName */ UpdateHandlerFunctionKeys[LitElement], 
    Unit
  ]]
  
  /** NOTE: Conditional type definitions are impossible to translate to Scala.
    * See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html for an intro.
    * This RHS of the type alias is guess work. You should cast if it's not correct in your case.
    * TS definition: {{{
    A extends undefined ? never : A
    }}}
    */
  type NonUndefined[A] = A
  
  type UpdateHandler = js.Function2[/* prev */ js.UndefOr[Any], /* next */ js.UndefOr[Any], Unit]
  
  type UpdateHandlerFunctionKeys[T /* <: js.Object */] = /* import warning: importer.ImportType#apply Failed type conversion: {[ K in keyof T ]: -? @awesome.me/webawesome.@awesome.me/webawesome/dist/internal/watch.NonUndefined<T[K]> extends @awesome.me/webawesome.@awesome.me/webawesome/dist/internal/watch.UpdateHandler? K : never}[keyof T] */ js.Any
  
  trait WatchOptions extends StObject {
    
    /**
      * If true, will only start watching after the initial update/render
      */
    var waitUntilFirstUpdate: js.UndefOr[Boolean] = js.undefined
  }
  object WatchOptions {
    
    inline def apply(): WatchOptions = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[WatchOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: WatchOptions] (val x: Self) extends AnyVal {
      
      inline def setWaitUntilFirstUpdate(value: Boolean): Self = StObject.set(x, "waitUntilFirstUpdate", value.asInstanceOf[js.Any])
      
      inline def setWaitUntilFirstUpdateUndefined: Self = StObject.set(x, "waitUntilFirstUpdate", js.undefined)
    }
  }
}
