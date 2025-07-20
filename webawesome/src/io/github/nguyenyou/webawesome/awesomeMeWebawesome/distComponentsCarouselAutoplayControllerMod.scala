package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.lit.mod.ReactiveElement
import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveController
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsCarouselAutoplayControllerMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/carousel/autoplay-controller", "AutoplayController")
  @js.native
  open class AutoplayController protected ()
    extends StObject
       with ReactiveController {
    def this(host: ReactiveElement, tickCallback: js.Function0[Unit]) = this()
    
    /* private */ var activeInteractions: Any = js.native
    
    /* private */ var host: Any = js.native
    
    @JSName("hostConnected")
    def hostConnected_MAutoplayController(): Unit = js.native
    
    @JSName("hostDisconnected")
    def hostDisconnected_MAutoplayController(): Unit = js.native
    
    def pause(): Unit = js.native
    
    var paused: Boolean = js.native
    
    def resume(): Unit = js.native
    
    def start(interval: Double): Unit = js.native
    
    def stop(): Unit = js.native
    
    var stopped: Boolean = js.native
    
    /* private */ var tickCallback: Any = js.native
    
    /* private */ var timerId: Any = js.native
  }
}
