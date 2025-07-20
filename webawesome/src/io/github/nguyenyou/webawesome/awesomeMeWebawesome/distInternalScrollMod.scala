package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.auto
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.both
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.horizontal
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.smooth
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.vertical
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalScrollMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/scroll", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def lockBodyScrolling(lockingEl: HTMLElement): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("lockBodyScrolling")(lockingEl.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def scrollIntoView(element: HTMLElement, container: HTMLElement): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("scrollIntoView")(element.asInstanceOf[js.Any], container.asInstanceOf[js.Any])).asInstanceOf[Unit]
  inline def scrollIntoView(element: HTMLElement, container: HTMLElement, direction: horizontal | vertical | both): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("scrollIntoView")(element.asInstanceOf[js.Any], container.asInstanceOf[js.Any], direction.asInstanceOf[js.Any])).asInstanceOf[Unit]
  inline def scrollIntoView(
    element: HTMLElement,
    container: HTMLElement,
    direction: horizontal | vertical | both,
    behavior: smooth | auto
  ): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("scrollIntoView")(element.asInstanceOf[js.Any], container.asInstanceOf[js.Any], direction.asInstanceOf[js.Any], behavior.asInstanceOf[js.Any])).asInstanceOf[Unit]
  inline def scrollIntoView(element: HTMLElement, container: HTMLElement, direction: Unit, behavior: smooth | auto): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("scrollIntoView")(element.asInstanceOf[js.Any], container.asInstanceOf[js.Any], direction.asInstanceOf[js.Any], behavior.asInstanceOf[js.Any])).asInstanceOf[Unit]
  
  inline def unlockBodyScrolling(lockingEl: HTMLElement): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("unlockBodyScrolling")(lockingEl.asInstanceOf[js.Any]).asInstanceOf[Unit]
}
