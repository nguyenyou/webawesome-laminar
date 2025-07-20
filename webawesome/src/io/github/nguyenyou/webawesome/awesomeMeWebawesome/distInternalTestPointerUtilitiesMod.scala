package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.AfterMouseDown
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.bottom
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.center
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.left
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.right
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.top
import org.scalajs.dom.Element
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalTestPointerUtilitiesMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/test/pointer-utilities", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  inline def clickOnElement(/** The element to click */
  el: Element): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Unit,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: Unit,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: Unit,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def clickOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: Unit,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Unit,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("clickOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  
  inline def dragElement(/** The element to drag */
  el: Element): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Double,
    /** The vertical distance to drag in pixels */
  deltaY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any], deltaY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Double,
    /** The vertical distance to drag in pixels */
  deltaY: Double,
    callbacks: AfterMouseDown
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any], deltaY.asInstanceOf[js.Any], callbacks.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Double,
    /** The vertical distance to drag in pixels */
  deltaY: Unit,
    callbacks: AfterMouseDown
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any], deltaY.asInstanceOf[js.Any], callbacks.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Unit,
    /** The vertical distance to drag in pixels */
  deltaY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any], deltaY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Unit,
    /** The vertical distance to drag in pixels */
  deltaY: Double,
    callbacks: AfterMouseDown
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any], deltaY.asInstanceOf[js.Any], callbacks.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def dragElement(
    /** The element to drag */
  el: Element,
    /** The horizontal distance to drag in pixels */
  deltaX: Unit,
    /** The vertical distance to drag in pixels */
  deltaY: Unit,
    callbacks: AfterMouseDown
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("dragElement")(el.asInstanceOf[js.Any], deltaX.asInstanceOf[js.Any], deltaY.asInstanceOf[js.Any], callbacks.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  
  @JSImport("@awesome.me/webawesome/dist/internal/test/pointer-utilities", "isSafari")
  @js.native
  val isSafari: Boolean = js.native
  
  inline def moveMouseOnElement(/** The element to click */
  el: Element): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: top | right | bottom | left | center,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Unit,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: Unit,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: Unit,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Double,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
  inline def moveMouseOnElement(
    /** The element to click */
  el: Element,
    /** The location of the element to click */
  position: Unit,
    /** The horizontal offset to apply to the position when clicking */
  offsetX: Unit,
    /** The vertical offset to apply to the position when clicking */
  offsetY: Double
  ): js.Promise[Unit] = (^.asInstanceOf[js.Dynamic].applyDynamic("moveMouseOnElement")(el.asInstanceOf[js.Any], position.asInstanceOf[js.Any], offsetX.asInstanceOf[js.Any], offsetY.asInstanceOf[js.Any])).asInstanceOf[js.Promise[Unit]]
}
