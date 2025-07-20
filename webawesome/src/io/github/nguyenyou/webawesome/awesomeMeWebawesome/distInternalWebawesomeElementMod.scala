package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.Has
import io.github.nguyenyou.webawesome.lit.mod.CSSResult
import io.github.nguyenyou.webawesome.lit.mod.LitElement
import io.github.nguyenyou.webawesome.litReactiveElement.cssTagMod.CSSResultGroup
import io.github.nguyenyou.webawesome.litReactiveElement.mod.PropertyValues
import io.github.nguyenyou.webawesome.std.ElementInternals
import io.github.nguyenyou.webawesome.std.EventInit
import io.github.nguyenyou.webawesome.std.Map
import org.scalajs.dom.Event
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distInternalWebawesomeElementMod {
  
  @JSImport("@awesome.me/webawesome/dist/internal/webawesome-element", JSImport.Default)
  @js.native
  open class default () extends WebAwesomeElement
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/internal/webawesome-element", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    /**
      * One or more CSS files to include in the component's shadow root. Host styles are automatically prepended. We use
      * this instead of Lit's styles property because we're importing CSS files as strings and need to convert them using
      * unsafeCSS.
      */
    @JSImport("@awesome.me/webawesome/dist/internal/webawesome-element", "default.css")
    @js.native
    def css: js.UndefOr[CSSResultGroup | CSSResult | String | (js.Array[CSSResult | String])] = js.native
    inline def css_=(x: js.UndefOr[CSSResultGroup | CSSResult | String | (js.Array[CSSResult | String])]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WebAwesomeElement extends LitElement {
    
    def attributeChangedCallback(name: String): Unit = js.native
    def attributeChangedCallback(name: String, oldValue: String): Unit = js.native
    def attributeChangedCallback(name: String, oldValue: String, newValue: String): Unit = js.native
    def attributeChangedCallback(name: String, oldValue: Null, newValue: String): Unit = js.native
    
    /**
      * Methods for setting and checking custom states.
      */
    var customStates: Has = js.native
    
    var didSSR: Boolean = js.native
    
    var dir: String = js.native
    
    /* protected */ @JSName("firstUpdated")
    def firstUpdated_0(
      changedProperties: /* import warning: importer.ImportType#apply Failed type conversion: std.Parameters<(_changedProperties : @lit/reactive-element.@lit/reactive-element.PropertyValues<any>): void>[0] */ js.Any
    ): Unit = js.native
    
    var initialReflectedProperties: Map[String, Any] = js.native
    
    var internals: ElementInternals = js.native
    
    var lang: String = js.native
    
    /* private */ var `private`: Any = js.native
    
    /**
      * Given a native event, this function cancels it and dispatches it again from the host element using the desired
      * event options.
      */
    def relayNativeEvent(event: Event): Unit = js.native
    def relayNativeEvent(event: Event, eventOptions: EventInit): Unit = js.native
    
    /* protected */ def update(changedProperties: PropertyValues[this.type]): Unit = js.native
    
    /* protected */ @JSName("willUpdate")
    def willUpdate_0(
      changedProperties: /* import warning: importer.ImportType#apply Failed type conversion: std.Parameters<(_changedProperties : @lit/reactive-element.@lit/reactive-element.PropertyValues<any>): void>[0] */ js.Any
    ): Unit = js.native
  }
  
  /* augmented module */
  object litAugmentingMod {
    
    trait PropertyDeclaration extends StObject {
      
      /**
        * Specifies the property’s default value
        */
      var default: js.UndefOr[Any] = js.undefined
      
      var initial: js.UndefOr[Any] = js.undefined
    }
    object PropertyDeclaration {
      
      inline def apply(): PropertyDeclaration = {
        val __obj = js.Dynamic.literal()
        __obj.asInstanceOf[PropertyDeclaration]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: PropertyDeclaration] (val x: Self) extends AnyVal {
        
        inline def setDefault(value: Any): Self = StObject.set(x, "default", value.asInstanceOf[js.Any])
        
        inline def setDefaultUndefined: Self = StObject.set(x, "default", js.undefined)
        
        inline def setInitial(value: Any): Self = StObject.set(x, "initial", value.asInstanceOf[js.Any])
        
        inline def setInitialUndefined: Self = StObject.set(x, "initial", js.undefined)
      }
    }
  }
}
