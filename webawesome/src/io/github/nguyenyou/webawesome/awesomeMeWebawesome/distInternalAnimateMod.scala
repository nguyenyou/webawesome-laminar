package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.std.Animation
import io.github.nguyenyou.webawesome.std.Keyframe
import io.github.nguyenyou.webawesome.std.KeyframeAnimationOptions
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalAnimateMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/animate", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def animate(el: Element, keyframes: js.Array[Keyframe]): js.Promise[Unit | Animation] = (^.asInstanceOf[js.Dynamic].applyDynamic("animate")(el.asInstanceOf[js.Any], keyframes.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit | Animation]]
  inline def animate(el: Element, keyframes: js.Array[Keyframe], options: KeyframeAnimationOptions): js.Promise[Unit | Animation] = (^.asInstanceOf[js.Dynamic].applyDynamic("animate")(el.asInstanceOf[js.Any], keyframes.asInstanceOf[js.Any], options.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit | Animation]]
  
  inline def animateWithClass(el: Element, className: String): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("animateWithClass")(el.asInstanceOf[js.Any], className.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  
  inline def parseDuration(duration: String): Double = ^.asInstanceOf[js.Dynamic].applyDynamic("parseDuration")(duration.asInstanceOf[js.Any]).asInstanceOf[Double]
  inline def parseDuration(duration: Double): Double = ^.asInstanceOf[js.Dynamic].applyDynamic("parseDuration")(duration.asInstanceOf[js.Any]).asInstanceOf[Double]
  
  inline def prefersReducedMotion(): Boolean = ^.asInstanceOf[js.Dynamic].applyDynamic("prefersReducedMotion")().asInstanceOf[Boolean]
}
