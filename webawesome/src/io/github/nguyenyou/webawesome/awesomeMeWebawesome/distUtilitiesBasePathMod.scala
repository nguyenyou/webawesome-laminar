package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distUtilitiesBasePathMod {
  
  @JSImport("@awesome.me/webawesome/dist/utilities/base-path", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def getBasePath(): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getBasePath")().asInstanceOf[String]
  inline def getBasePath(subpath: String): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getBasePath")(subpath.asInstanceOf[js.Any]).asInstanceOf[String]
  
  inline def getKitCode(): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getKitCode")().asInstanceOf[String]
  
  inline def setBasePath(path: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("setBasePath")(path.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def setKitCode(code: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("setKitCode")(code.asInstanceOf[js.Any]).asInstanceOf[Unit]
}
