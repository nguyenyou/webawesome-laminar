package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveController
import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveControllerHost
import org.scalajs.dom.Element
import org.scalajs.dom.Node
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalSlotMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/slot", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/internal/slot", "HasSlotController")
  @js.native
  open class HasSlotController protected ()
    extends StObject
       with ReactiveController {
    def this(host: ReactiveControllerHost & Element, slotNames: String*) = this()
    
    /* private */ var handleSlotChange: Any = js.native
    
    /* private */ var hasDefaultSlot: Any = js.native
    
    /* private */ var hasNamedSlot: Any = js.native
    
    var host: ReactiveControllerHost & Element = js.native
    
    @JSName("hostConnected")
    def hostConnected_MHasSlotController(): Unit = js.native
    
    @JSName("hostDisconnected")
    def hostDisconnected_MHasSlotController(): Unit = js.native
    
    var slotNames: js.Array[String] = js.native
    
    def test(slotName: String): Boolean = js.native
  }
  
  inline def getInnerHTML(nodes: js.Iterable[Node]): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getInnerHTML")(nodes.asInstanceOf[js.Any]).asInstanceOf[String]
  inline def getInnerHTML(nodes: js.Iterable[Node], callback: js.Function1[/* node */ Node, js.UndefOr[String]]): String = (^.asInstanceOf[js.Dynamic].applyDynamic("getInnerHTML")(nodes.asInstanceOf[js.Any], callback.asInstanceOf[js.Any])).asInstanceOf[String]
}
