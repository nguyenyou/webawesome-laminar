package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait KeyframeAnimationOptions
  extends StObject
     with KeyframeEffectOptions {
  
  /* standard dom */
  var id: js.UndefOr[String] = js.undefined
  
  /* standard dom */
  var timeline: js.UndefOr[AnimationTimeline | Null] = js.undefined
}
object KeyframeAnimationOptions {
  
  inline def apply(): KeyframeAnimationOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[KeyframeAnimationOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: KeyframeAnimationOptions] (val x: Self) extends AnyVal {
    
    inline def setId(value: String): Self = StObject.set(x, "id", value.asInstanceOf[js.Any])
    
    inline def setIdUndefined: Self = StObject.set(x, "id", js.undefined)
    
    inline def setTimeline(value: AnimationTimeline): Self = StObject.set(x, "timeline", value.asInstanceOf[js.Any])
    
    inline def setTimelineNull: Self = StObject.set(x, "timeline", null)
    
    inline def setTimelineUndefined: Self = StObject.set(x, "timeline", js.undefined)
  }
}
