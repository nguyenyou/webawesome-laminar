package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveControllerHost
import io.github.nguyenyou.webawesome.shoelaceStyleLocalize.shoelaceStyleLocalizeStrings.ltr
import io.github.nguyenyou.webawesome.shoelaceStyleLocalize.shoelaceStyleLocalizeStrings.rtl
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distUtilitiesLocalizeMod {
  
  @JSImport("@awesome.me/webawesome/dist/utilities/localize", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/utilities/localize", "LocalizeController")
  @js.native
  open class LocalizeController protected ()
    extends io.github.nguyenyou.webawesome.shoelaceStyleLocalize.mod.LocalizeController[Translation] {
    def this(host: ReactiveControllerHost & HTMLElement) = this()
  }
  
  inline def registerTranslation(translation: io.github.nguyenyou.webawesome.shoelaceStyleLocalize.mod.Translation*): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("registerTranslation")(translation.asInstanceOf[Seq[js.Any]]*).asInstanceOf[Unit]
  
  trait Translation
    extends StObject
       with io.github.nguyenyou.webawesome.shoelaceStyleLocalize.mod.Translation {
    
    var carousel: String
    
    var clearEntry: String
    
    var close: String
    
    var copied: String
    
    var copy: String
    
    var currentValue: String
    
    var error: String
    
    def goToSlide(slide: Double, count: Double): String
    
    var hidePassword: String
    
    var loading: String
    
    var nextSlide: String
    
    def numOptionsSelected(num: Double): String
    
    var pauseAnimation: String
    
    var playAnimation: String
    
    var previousSlide: String
    
    var progress: String
    
    var remove: String
    
    var resize: String
    
    var scrollToEnd: String
    
    var scrollToStart: String
    
    var scrollableRegion: String
    
    var selectAColorFromTheScreen: String
    
    var showPassword: String
    
    def slideNum(slide: Double): String
    
    var toggleColorFormat: String
    
    var zoomIn: String
    
    var zoomOut: String
  }
  object Translation {
    
    inline def apply(
      $code: String,
      $dir: ltr | rtl,
      $name: String,
      carousel: String,
      clearEntry: String,
      close: String,
      copied: String,
      copy: String,
      currentValue: String,
      error: String,
      goToSlide: (Double, Double) => String,
      hidePassword: String,
      loading: String,
      nextSlide: String,
      numOptionsSelected: Double => String,
      pauseAnimation: String,
      playAnimation: String,
      previousSlide: String,
      progress: String,
      remove: String,
      resize: String,
      scrollToEnd: String,
      scrollToStart: String,
      scrollableRegion: String,
      selectAColorFromTheScreen: String,
      showPassword: String,
      slideNum: Double => String,
      toggleColorFormat: String,
      zoomIn: String,
      zoomOut: String
    ): Translation = {
      val __obj = js.Dynamic.literal($code = $code.asInstanceOf[js.Any], $dir = $dir.asInstanceOf[js.Any], $name = $name.asInstanceOf[js.Any], carousel = carousel.asInstanceOf[js.Any], clearEntry = clearEntry.asInstanceOf[js.Any], close = close.asInstanceOf[js.Any], copied = copied.asInstanceOf[js.Any], copy = copy.asInstanceOf[js.Any], currentValue = currentValue.asInstanceOf[js.Any], error = error.asInstanceOf[js.Any], goToSlide = js.Any.fromFunction2(goToSlide), hidePassword = hidePassword.asInstanceOf[js.Any], loading = loading.asInstanceOf[js.Any], nextSlide = nextSlide.asInstanceOf[js.Any], numOptionsSelected = js.Any.fromFunction1(numOptionsSelected), pauseAnimation = pauseAnimation.asInstanceOf[js.Any], playAnimation = playAnimation.asInstanceOf[js.Any], previousSlide = previousSlide.asInstanceOf[js.Any], progress = progress.asInstanceOf[js.Any], remove = remove.asInstanceOf[js.Any], resize = resize.asInstanceOf[js.Any], scrollToEnd = scrollToEnd.asInstanceOf[js.Any], scrollToStart = scrollToStart.asInstanceOf[js.Any], scrollableRegion = scrollableRegion.asInstanceOf[js.Any], selectAColorFromTheScreen = selectAColorFromTheScreen.asInstanceOf[js.Any], showPassword = showPassword.asInstanceOf[js.Any], slideNum = js.Any.fromFunction1(slideNum), toggleColorFormat = toggleColorFormat.asInstanceOf[js.Any], zoomIn = zoomIn.asInstanceOf[js.Any], zoomOut = zoomOut.asInstanceOf[js.Any])
      __obj.asInstanceOf[Translation]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: Translation] (val x: Self) extends AnyVal {
      
      inline def setCarousel(value: String): Self = StObject.set(x, "carousel", value.asInstanceOf[js.Any])
      
      inline def setClearEntry(value: String): Self = StObject.set(x, "clearEntry", value.asInstanceOf[js.Any])
      
      inline def setClose(value: String): Self = StObject.set(x, "close", value.asInstanceOf[js.Any])
      
      inline def setCopied(value: String): Self = StObject.set(x, "copied", value.asInstanceOf[js.Any])
      
      inline def setCopy(value: String): Self = StObject.set(x, "copy", value.asInstanceOf[js.Any])
      
      inline def setCurrentValue(value: String): Self = StObject.set(x, "currentValue", value.asInstanceOf[js.Any])
      
      inline def setError(value: String): Self = StObject.set(x, "error", value.asInstanceOf[js.Any])
      
      inline def setGoToSlide(value: (Double, Double) => String): Self = StObject.set(x, "goToSlide", js.Any.fromFunction2(value))
      
      inline def setHidePassword(value: String): Self = StObject.set(x, "hidePassword", value.asInstanceOf[js.Any])
      
      inline def setLoading(value: String): Self = StObject.set(x, "loading", value.asInstanceOf[js.Any])
      
      inline def setNextSlide(value: String): Self = StObject.set(x, "nextSlide", value.asInstanceOf[js.Any])
      
      inline def setNumOptionsSelected(value: Double => String): Self = StObject.set(x, "numOptionsSelected", js.Any.fromFunction1(value))
      
      inline def setPauseAnimation(value: String): Self = StObject.set(x, "pauseAnimation", value.asInstanceOf[js.Any])
      
      inline def setPlayAnimation(value: String): Self = StObject.set(x, "playAnimation", value.asInstanceOf[js.Any])
      
      inline def setPreviousSlide(value: String): Self = StObject.set(x, "previousSlide", value.asInstanceOf[js.Any])
      
      inline def setProgress(value: String): Self = StObject.set(x, "progress", value.asInstanceOf[js.Any])
      
      inline def setRemove(value: String): Self = StObject.set(x, "remove", value.asInstanceOf[js.Any])
      
      inline def setResize(value: String): Self = StObject.set(x, "resize", value.asInstanceOf[js.Any])
      
      inline def setScrollToEnd(value: String): Self = StObject.set(x, "scrollToEnd", value.asInstanceOf[js.Any])
      
      inline def setScrollToStart(value: String): Self = StObject.set(x, "scrollToStart", value.asInstanceOf[js.Any])
      
      inline def setScrollableRegion(value: String): Self = StObject.set(x, "scrollableRegion", value.asInstanceOf[js.Any])
      
      inline def setSelectAColorFromTheScreen(value: String): Self = StObject.set(x, "selectAColorFromTheScreen", value.asInstanceOf[js.Any])
      
      inline def setShowPassword(value: String): Self = StObject.set(x, "showPassword", value.asInstanceOf[js.Any])
      
      inline def setSlideNum(value: Double => String): Self = StObject.set(x, "slideNum", js.Any.fromFunction1(value))
      
      inline def setToggleColorFormat(value: String): Self = StObject.set(x, "toggleColorFormat", value.asInstanceOf[js.Any])
      
      inline def setZoomIn(value: String): Self = StObject.set(x, "zoomIn", value.asInstanceOf[js.Any])
      
      inline def setZoomOut(value: String): Self = StObject.set(x, "zoomOut", value.asInstanceOf[js.Any])
    }
  }
}
