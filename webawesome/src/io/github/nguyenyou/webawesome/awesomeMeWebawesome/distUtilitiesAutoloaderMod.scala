package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.ShadowRoot
import org.scalajs.dom.Document
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distUtilitiesAutoloaderMod {
  
  @JSImport("@awesome.me/webawesome/dist/utilities/autoloader", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def discover(root: ShadowRoot): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("discover")(root.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def discover(root: Document): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("discover")(root.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def discover(root: Element): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("discover")(root.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  
  inline def preventTurboFouce(): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("preventTurboFouce")().asInstanceOf[Unit]
  inline def preventTurboFouce(timeout: Double): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("preventTurboFouce")(timeout.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def startLoader(): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("startLoader")().asInstanceOf[Unit]
  
  inline def stopLoader(): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("stopLoader")().asInstanceOf[Unit]
}
