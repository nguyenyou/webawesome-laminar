package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsMutationMod.WaMutationEventDetail
import org.scalablytyped.runtime.Shortcut
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distReactMutationObserverMod extends Shortcut {
  
  /**
    * @summary The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
    * @documentation https://webawesome.com/docs/components/mutation-observer
    * @status stable
    * @since 2.0
    *
    * @event {{ mutationList: MutationRecord[] }} wa-mutation - Emitted when a mutation occurs.
    *
    * @slot - The content to watch for mutations.
    */
  @JSImport("@awesome.me/webawesome/dist/react/mutation-observer", JSImport.Default)
  @js.native
  val default: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaMutation :EventName<WaMutationEvent>}> */ Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/react/mutation-observer", "WaMutationEvent")
  @js.native
  open class WaMutationEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsEventsMod.WaMutationEvent {
    def this(detail: WaMutationEventDetail) = this()
  }
  
  type _To = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaMutation :EventName<WaMutationEvent>}> */ Any
  
  /* This means you don't have to write `default`, but can instead just say `distReactMutationObserverMod.foo` */
  override def _to: /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify imported_react.ReactWebComponent<Component, {  onWaMutation :EventName<WaMutationEvent>}> */ Any = default
}
