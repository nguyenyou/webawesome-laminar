package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.FocusOptions
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsRatingRatingMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/rating/rating", JSImport.Default)
  @js.native
  open class default () extends WaRating
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/rating/rating", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/rating/rating", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaRating
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /** Removes focus from the rating. */
    def blur(): Unit = js.native
    
    /** Disables the rating. */
    var disabled: Boolean = js.native
    
    /** Sets focus on the rating. */
    def focus(): Unit = js.native
    def focus(options: FocusOptions): Unit = js.native
    
    /**
      * A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
      * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
      * well with `<wa-icon>` elements.
      */
    def getSymbol(value: Double, isSelected: Boolean): String = js.native
    
    /* private */ var getValueFromMousePosition: Any = js.native
    
    /* private */ var getValueFromTouchPosition: Any = js.native
    
    /* private */ var getValueFromXCoordinate: Any = js.native
    
    /* private */ var handleClick: Any = js.native
    
    def handleHoverValueChange(): Unit = js.native
    
    def handleIsHoveringChange(): Unit = js.native
    
    /* private */ var handleKeyDown: Any = js.native
    
    /* private */ var handleMouseEnter: Any = js.native
    
    /* private */ var handleMouseLeave: Any = js.native
    
    /* private */ var handleMouseMove: Any = js.native
    
    /* private */ var handleTouchEnd: Any = js.native
    
    /* private */ var handleTouchMove: Any = js.native
    
    /* private */ var handleTouchStart: Any = js.native
    
    /* private */ var hoverValue: Any = js.native
    
    /* private */ var isHovering: Any = js.native
    
    /** A label that describes the rating to assistive devices. */
    var label: String = js.native
    
    /* private */ val localize: Any = js.native
    
    /** The highest rating to show. */
    var max: Double = js.native
    
    /**
      * The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
      * attribute to `0.5`.
      */
    var precision: Double = js.native
    
    var rating: HTMLElement = js.native
    
    /** Makes the rating readonly. */
    var readonly: Boolean = js.native
    
    def render(): TemplateResult[`1`] = js.native
    
    /* private */ var roundToPrecision: Any = js.native
    
    /* private */ var setValue: Any = js.native
    
    /** The component's size. */
    var size: small | medium | large = js.native
    
    /** The current rating. */
    var value: Double = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-rating`: WaRating
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-rating`: WaRating): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-rating")(`wa-rating`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-rating`(value: WaRating): Self = StObject.set(x, "wa-rating", value.asInstanceOf[js.Any])
      }
    }
  }
}
