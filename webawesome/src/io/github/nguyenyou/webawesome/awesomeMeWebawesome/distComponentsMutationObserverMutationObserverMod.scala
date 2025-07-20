package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsMutationObserverMutationObserverMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer", JSImport.Default)
  @js.native
  open class default () extends WaMutationObserver
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/mutation-observer/mutation-observer", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaMutationObserver
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /**
      * Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
      * `attr="class id title"`. To watch all attributes, use `*`.
      */
    var attr: String = js.native
    
    /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
    var attrOldValue: Boolean = js.native
    
    /** Watches for changes to the character data contained within the node. */
    var charData: Boolean = js.native
    
    /** Indicates whether or not the previous value of the node's text should be recorded. */
    var charDataOldValue: Boolean = js.native
    
    /** Watches for the addition or removal of new child nodes. */
    var childList: Boolean = js.native
    
    override def connectedCallback(): Unit = js.native
    
    /** Disables the observer. */
    var disabled: Boolean = js.native
    
    override def disconnectedCallback(): Unit = js.native
    
    def handleChange(): Unit = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /* private */ var handleMutation: Any = js.native
    
    /* private */ var mutationObserver: Any = js.native
    
    override def render(): TemplateResult[`1`] = js.native
    
    /* private */ var startObserver: Any = js.native
    
    /* private */ var stopObserver: Any = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-mutation-observer`: WaMutationObserver
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-mutation-observer`: WaMutationObserver): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-mutation-observer")(`wa-mutation-observer`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-mutation-observer`(value: WaMutationObserver): Self = StObject.set(x, "wa-mutation-observer", value.asInstanceOf[js.Any])
      }
    }
  }
}
