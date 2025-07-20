package io.github.nguyenyou.webawesome.litReactiveElement

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object reactiveControllerMod {
  
  trait ReactiveController extends StObject {
    
    /**
      * Called when the host is connected to the component tree. For custom
      * element hosts, this corresponds to the `connectedCallback()` lifecycle,
      * which is only called when the component is connected to the document.
      */
    var hostConnected: js.UndefOr[js.Function0[Unit]] = js.undefined
    
    /**
      * Called when the host is disconnected from the component tree. For custom
      * element hosts, this corresponds to the `disconnectedCallback()` lifecycle,
      * which is called the host or an ancestor component is disconnected from the
      * document.
      */
    var hostDisconnected: js.UndefOr[js.Function0[Unit]] = js.undefined
    
    /**
      * Called during the client-side host update, just before the host calls
      * its own update.
      *
      * Code in `update()` can depend on the DOM as it is not called in
      * server-side rendering.
      */
    var hostUpdate: js.UndefOr[js.Function0[Unit]] = js.undefined
    
    /**
      * Called after a host update, just before the host calls firstUpdated and
      * updated. It is not called in server-side rendering.
      *
      */
    var hostUpdated: js.UndefOr[js.Function0[Unit]] = js.undefined
  }
  object ReactiveController {
    
    inline def apply(): ReactiveController = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[ReactiveController]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: ReactiveController] (val x: Self) extends AnyVal {
      
      inline def setHostConnected(value: () => Unit): Self = StObject.set(x, "hostConnected", js.Any.fromFunction0(value))
      
      inline def setHostConnectedUndefined: Self = StObject.set(x, "hostConnected", js.undefined)
      
      inline def setHostDisconnected(value: () => Unit): Self = StObject.set(x, "hostDisconnected", js.Any.fromFunction0(value))
      
      inline def setHostDisconnectedUndefined: Self = StObject.set(x, "hostDisconnected", js.undefined)
      
      inline def setHostUpdate(value: () => Unit): Self = StObject.set(x, "hostUpdate", js.Any.fromFunction0(value))
      
      inline def setHostUpdateUndefined: Self = StObject.set(x, "hostUpdate", js.undefined)
      
      inline def setHostUpdated(value: () => Unit): Self = StObject.set(x, "hostUpdated", js.Any.fromFunction0(value))
      
      inline def setHostUpdatedUndefined: Self = StObject.set(x, "hostUpdated", js.undefined)
    }
  }
  
  trait ReactiveControllerHost extends StObject {
    
    /**
      * Adds a controller to the host, which sets up the controller's lifecycle
      * methods to be called with the host's lifecycle.
      */
    def addController(controller: ReactiveController): Unit
    
    /**
      * Removes a controller from the host.
      */
    def removeController(controller: ReactiveController): Unit
    
    /**
      * Requests a host update which is processed asynchronously. The update can
      * be waited on via the `updateComplete` property.
      */
    def requestUpdate(): Unit
    
    /**
      * Returns a Promise that resolves when the host has completed updating.
      * The Promise value is a boolean that is `true` if the element completed the
      * update without triggering another update. The Promise result is `false` if
      * a property was set inside `updated()`. If the Promise is rejected, an
      * exception was thrown during the update.
      *
      * @return A promise of a boolean that indicates if the update resolved
      *     without triggering another update.
      */
    val updateComplete: js.Promise[Boolean]
  }
  object ReactiveControllerHost {
    
    inline def apply(
      addController: ReactiveController => Unit,
      removeController: ReactiveController => Unit,
      requestUpdate: () => Unit,
      updateComplete: js.Promise[Boolean]
    ): ReactiveControllerHost = {
      val __obj = js.Dynamic.literal(addController = js.Any.fromFunction1(addController), removeController = js.Any.fromFunction1(removeController), requestUpdate = js.Any.fromFunction0(requestUpdate), updateComplete = updateComplete.asInstanceOf[js.Any])
      __obj.asInstanceOf[ReactiveControllerHost]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: ReactiveControllerHost] (val x: Self) extends AnyVal {
      
      inline def setAddController(value: ReactiveController => Unit): Self = StObject.set(x, "addController", js.Any.fromFunction1(value))
      
      inline def setRemoveController(value: ReactiveController => Unit): Self = StObject.set(x, "removeController", js.Any.fromFunction1(value))
      
      inline def setRequestUpdate(value: () => Unit): Self = StObject.set(x, "requestUpdate", js.Any.fromFunction0(value))
      
      inline def setUpdateComplete(value: js.Promise[Boolean]): Self = StObject.set(x, "updateComplete", value.asInstanceOf[js.Any])
    }
  }
}
