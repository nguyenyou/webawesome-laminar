package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.FnCall
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.FnCallTemplate
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`client-only`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`ssr-client-hydrated`
import io.github.nguyenyou.webawesome.litHtml.mod.ResultType
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalTestFixtureMod {
  
  object clientFixture {
    
    inline def apply[T /* <: HTMLElement */](template: TemplateResult[ResultType]): js.Promise[T] = ^.asInstanceOf[js.Dynamic].apply(template.asInstanceOf[js.Any]).asInstanceOf[js.Promise[T]]
    inline def apply[T /* <: HTMLElement */](template: String): js.Promise[T] = ^.asInstanceOf[js.Dynamic].apply(template.asInstanceOf[js.Any]).asInstanceOf[js.Promise[T]]
    
    @JSImport("@awesome.me/webawesome/dist/internal/test/fixture", "clientFixture")
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/internal/test/fixture", "clientFixture.type")
    @js.native
    val `type`: `client-only` = js.native
  }
  
  @JSImport("@awesome.me/webawesome/dist/internal/test/fixture", "fixtures")
  @js.native
  val fixtures: js.Array[FnCall | FnCallTemplate] = js.native
  
  object hydratedFixture {
    
    inline def apply[T /* <: HTMLElement */](template: TemplateResult[ResultType]): js.Promise[T] = ^.asInstanceOf[js.Dynamic].apply(template.asInstanceOf[js.Any]).asInstanceOf[js.Promise[T]]
    
    @JSImport("@awesome.me/webawesome/dist/internal/test/fixture", "hydratedFixture")
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/internal/test/fixture", "hydratedFixture.type")
    @js.native
    val `type`: `ssr-client-hydrated` = js.native
  }
  
  object global {
    
    trait Window extends StObject {
      
      var CSR_ONLY: Boolean
      
      var SSR_ONLY: Boolean
      
      var clientComponents: js.Array[String]
      
      var serverComponents: js.Array[String]
    }
    object Window {
      
      inline def apply(
        CSR_ONLY: Boolean,
        SSR_ONLY: Boolean,
        clientComponents: js.Array[String],
        serverComponents: js.Array[String]
      ): Window = {
        val __obj = js.Dynamic.literal(CSR_ONLY = CSR_ONLY.asInstanceOf[js.Any], SSR_ONLY = SSR_ONLY.asInstanceOf[js.Any], clientComponents = clientComponents.asInstanceOf[js.Any], serverComponents = serverComponents.asInstanceOf[js.Any])
        __obj.asInstanceOf[Window]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: Window] (val x: Self) extends AnyVal {
        
        inline def setCSR_ONLY(value: Boolean): Self = StObject.set(x, "CSR_ONLY", value.asInstanceOf[js.Any])
        
        inline def setClientComponents(value: js.Array[String]): Self = StObject.set(x, "clientComponents", value.asInstanceOf[js.Any])
        
        inline def setClientComponentsVarargs(value: String*): Self = StObject.set(x, "clientComponents", js.Array(value*))
        
        inline def setSSR_ONLY(value: Boolean): Self = StObject.set(x, "SSR_ONLY", value.asInstanceOf[js.Any])
        
        inline def setServerComponents(value: js.Array[String]): Self = StObject.set(x, "serverComponents", value.asInstanceOf[js.Any])
        
        inline def setServerComponentsVarargs(value: String*): Self = StObject.set(x, "serverComponents", js.Array(value*))
      }
    }
  }
}
