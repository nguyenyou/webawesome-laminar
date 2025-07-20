package io.github.nguyenyou.webawesome.shoelaceStyleLocalize

import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveController
import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveControllerHost
import io.github.nguyenyou.webawesome.shoelaceStyleLocalize.anon.PartialExistsOptions
import io.github.nguyenyou.webawesome.shoelaceStyleLocalize.shoelaceStyleLocalizeStrings.ltr
import io.github.nguyenyou.webawesome.shoelaceStyleLocalize.shoelaceStyleLocalizeStrings.rtl
import io.github.nguyenyou.webawesome.std.Intl.DateTimeFormatOptions
import io.github.nguyenyou.webawesome.std.Intl.NumberFormatOptions
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object mod {
  
  @JSImport("@shoelace-style/localize", "LocalizeController")
  @js.native
  open class LocalizeController[UserTranslation /* <: Translation */] protected ()
    extends StObject
       with ReactiveController {
    def this(host: ReactiveControllerHost & HTMLElement) = this()
    
    def date(dateToFormat: String): String = js.native
    def date(dateToFormat: String, options: DateTimeFormatOptions): String = js.native
    def date(dateToFormat: js.Date): String = js.native
    def date(dateToFormat: js.Date, options: DateTimeFormatOptions): String = js.native
    
    def dir(): String = js.native
    
    def exists[K /* <: /* keyof UserTranslation */ String */](key: K, options: PartialExistsOptions): Boolean = js.native
    
    /* private */ var getTranslationData: Any = js.native
    
    var host: ReactiveControllerHost & HTMLElement = js.native
    
    @JSName("hostConnected")
    def hostConnected_MLocalizeController(): Unit = js.native
    
    @JSName("hostDisconnected")
    def hostDisconnected_MLocalizeController(): Unit = js.native
    
    def lang(): String = js.native
    
    def number(numberToFormat: String): String = js.native
    def number(numberToFormat: String, options: NumberFormatOptions): String = js.native
    def number(numberToFormat: Double): String = js.native
    def number(numberToFormat: Double, options: NumberFormatOptions): String = js.native
    
    def relativeTime(
      value: Double,
      unit: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify Intl.RelativeTimeFormatUnit */ Any
    ): String = js.native
    def relativeTime(
      value: Double,
      unit: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify Intl.RelativeTimeFormatUnit */ Any,
      options: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify Intl.RelativeTimeFormatOptions */ Any
    ): String = js.native
    
    def term[K /* <: /* keyof UserTranslation */ String */](
      key: K,
      /* import warning: parser.TsParser#functionParam Dropping repeated marker of param args because its type FunctionParams<UserTranslation[K]> is not an array type */ args: FunctionParams[
          /* import warning: importer.ImportType#apply Failed type conversion: UserTranslation[K] */ js.Any
        ]
    ): String = js.native
  }
  
  /** NOTE: Conditional type definitions are impossible to translate to Scala.
    * See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html for an intro.
    * This RHS of the type alias is guess work. You should cast if it's not correct in your case.
    * TS definition: {{{
    T extends (args : infer U): string ? U : []
    }}}
    */
  type FunctionParams[T] = js.Array[Any]
  
  trait Translation extends StObject {
    
    @JSName("$code")
    var $code: String
    
    @JSName("$dir")
    var $dir: ltr | rtl
    
    @JSName("$name")
    var $name: String
  }
  object Translation {
    
    inline def apply($code: String, $dir: ltr | rtl, $name: String): Translation = {
      val __obj = js.Dynamic.literal($code = $code.asInstanceOf[js.Any], $dir = $dir.asInstanceOf[js.Any], $name = $name.asInstanceOf[js.Any])
      __obj.asInstanceOf[Translation]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: Translation] (val x: Self) extends AnyVal {
      
      inline def set$code(value: String): Self = StObject.set(x, "$code", value.asInstanceOf[js.Any])
      
      inline def set$dir(value: ltr | rtl): Self = StObject.set(x, "$dir", value.asInstanceOf[js.Any])
      
      inline def set$name(value: String): Self = StObject.set(x, "$name", value.asInstanceOf[js.Any])
    }
  }
}
