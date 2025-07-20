package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeInts.`1`
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.CSSNumberish
import io.github.nguyenyou.webawesome.std.FillMode
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import io.github.nguyenyou.webawesome.std.Keyframe
import io.github.nguyenyou.webawesome.std.PlaybackDirection
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsAnimationAnimationMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/animation/animation", JSImport.Default)
  @js.native
  open class default () extends WaAnimation
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/animation/animation", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/animation/animation", "default.css")
    @js.native
    def css: String = js.native
    inline def css_=(x: String): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaAnimation
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeElementMod.default {
    
    /* private */ var animation: Any = js.native
    
    /** Clears all keyframe effects caused by this animation and aborts its playback. */
    def cancel(): Unit = js.native
    
    def connectedCallback(): Unit = js.native
    
    /* private */ var createAnimation: Any = js.native
    
    /** Gets and sets the current animation time. */
    def currentTime: CSSNumberish = js.native
    def currentTime_=(time: Double): Unit = js.native
    
    var defaultSlot: js.Promise[HTMLSlotElement] = js.native
    
    /** The number of milliseconds to delay the start of the animation. */
    var delay: Double = js.native
    
    /* private */ var destroyAnimation: Any = js.native
    
    /**
      * Determines the direction of playback as well as the behavior when reaching the end of an iteration.
      * [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
      */
    var direction: PlaybackDirection = js.native
    
    def disconnectedCallback(): Unit = js.native
    
    /** The number of milliseconds each iteration of the animation takes to complete. */
    var duration: Double = js.native
    
    /**
      * The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
      * such as `cubic-bezier(0, 1, .76, 1.14)`.
      */
    var easing: String = js.native
    
    /** The number of milliseconds to delay after the active period of an animation sequence. */
    var endDelay: Double = js.native
    
    /** Sets how the animation applies styles to its target before and after its execution. */
    var fill: FillMode = js.native
    
    /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
    def finish(): Unit = js.native
    
    /* private */ var handleAnimationCancel: Any = js.native
    
    def handleAnimationChange(): Unit = js.native
    
    /* private */ var handleAnimationFinish: Any = js.native
    
    def handlePlayChange(): Boolean = js.native
    
    def handlePlaybackRateChange(): Unit = js.native
    
    /* private */ var handleSlotChange: Any = js.native
    
    /* private */ var hasStarted: Any = js.native
    
    /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
    var iterationStart: Double = js.native
    
    /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
    var iterations: Double = js.native
    
    /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
    var keyframes: js.UndefOr[js.Array[Keyframe]] = js.native
    
    /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
    var name: String = js.native
    
    /**
      * Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
      * the animation finishes or gets canceled.
      */
    var play: Boolean = js.native
    
    /**
      * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
      * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
      * value can be changed without causing the animation to restart.
      */
    var playbackRate: Double = js.native
    
    def render(): TemplateResult[`1`] = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-animation`: WaAnimation
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-animation`: WaAnimation): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-animation")(`wa-animation`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-animation`(value: WaAnimation): Self = StObject.set(x, "wa-animation", value.asInstanceOf[js.Any])
      }
    }
  }
}
