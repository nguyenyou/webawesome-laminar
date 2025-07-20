package io.github.nguyenyou.webawesome.shoelaceStyleLocalize

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object anon {
  
  /* Inlined std.Partial<@shoelace-style/localize.@shoelace-style/localize.ExistsOptions> */
  trait PartialExistsOptions extends StObject {
    
    var includeFallback: js.UndefOr[Boolean] = js.undefined
    
    var lang: js.UndefOr[String] = js.undefined
  }
  object PartialExistsOptions {
    
    inline def apply(): PartialExistsOptions = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[PartialExistsOptions]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: PartialExistsOptions] (val x: Self) extends AnyVal {
      
      inline def setIncludeFallback(value: Boolean): Self = StObject.set(x, "includeFallback", value.asInstanceOf[js.Any])
      
      inline def setIncludeFallbackUndefined: Self = StObject.set(x, "includeFallback", js.undefined)
      
      inline def setLang(value: String): Self = StObject.set(x, "lang", value.asInstanceOf[js.Any])
      
      inline def setLangUndefined: Self = StObject.set(x, "lang", js.undefined)
    }
  }
}
