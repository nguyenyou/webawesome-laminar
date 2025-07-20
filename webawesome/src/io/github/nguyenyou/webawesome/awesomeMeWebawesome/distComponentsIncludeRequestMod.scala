package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`no-cors`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`same-origin`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.cors
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsIncludeRequestMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/include/request", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def requestInclude(src: String): js.Promise[IncludeFile] = ^.asInstanceOf[js.Dynamic].applyDynamic("requestInclude")(src.asInstanceOf[js.Any]).asInstanceOf[js.Promise[IncludeFile]]
  inline def requestInclude(src: String, mode: cors | `no-cors` | `same-origin`): js.Promise[IncludeFile] = (^.asInstanceOf[js.Dynamic].applyDynamic("requestInclude")(src.asInstanceOf[js.Any], mode.asInstanceOf[js.Any])).asInstanceOf[js.Promise[IncludeFile]]
  
  trait IncludeFile extends StObject {
    
    var html: String
    
    var ok: Boolean
    
    var status: Double
  }
  object IncludeFile {
    
    inline def apply(html: String, ok: Boolean, status: Double): IncludeFile = {
      val __obj = js.Dynamic.literal(html = html.asInstanceOf[js.Any], ok = ok.asInstanceOf[js.Any], status = status.asInstanceOf[js.Any])
      __obj.asInstanceOf[IncludeFile]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: IncludeFile] (val x: Self) extends AnyVal {
      
      inline def setHtml(value: String): Self = StObject.set(x, "html", value.asInstanceOf[js.Any])
      
      inline def setOk(value: Boolean): Self = StObject.set(x, "ok", value.asInstanceOf[js.Any])
      
      inline def setStatus(value: Double): Self = StObject.set(x, "status", value.asInstanceOf[js.Any])
    }
  }
}
