package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.OmitIconLibraryname
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon.PartialAllDefinedOptions
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsCopyMod.WaCopyErrorEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHideMod.WaHideEventDetails
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsHoverMod.WaHoverEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsMutationMod.WaMutationEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsResizeMod.WaResizeEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsSelectMod.WaSelectEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsSelectionChangeMod.WaSelectionChangeEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsSlideChangeMod.WaSlideChangeEventDetails
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsTabHideMod.WaTabHideEventDetail
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distEventsTabShowMod.WaTabShowEventDetail
import io.github.nguyenyou.webawesome.shoelaceStyleLocalize.mod.Translation
import io.github.nguyenyou.webawesome.std.Record
import io.github.nguyenyou.webawesome.std.ShadowRoot
import org.scalajs.dom.Document
import org.scalajs.dom.Element
import org.scalajs.dom.HTMLFormElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distWebawesomeDotloaderMod {
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", JSImport.Namespace)
  @js.native
  val ^ : js.Any = js.native
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaAfterCollapseEvent")
  @js.native
  open class WaAfterCollapseEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaAfterCollapseEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaAfterExpandEvent")
  @js.native
  open class WaAfterExpandEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaAfterExpandEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaAfterHideEvent")
  @js.native
  open class WaAfterHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaAfterHideEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaAfterShowEvent")
  @js.native
  open class WaAfterShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaAfterShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaCancelEvent")
  @js.native
  open class WaCancelEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaCancelEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaClearEvent")
  @js.native
  open class WaClearEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaClearEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaCollapseEvent")
  @js.native
  open class WaCollapseEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaCollapseEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaCopyEvent")
  @js.native
  open class WaCopyEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaCopyEvent {
    def this(detail: WaCopyErrorEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaErrorEvent")
  @js.native
  open class WaErrorEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaErrorEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaExpandEvent")
  @js.native
  open class WaExpandEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaExpandEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaFinishEvent")
  @js.native
  open class WaFinishEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaFinishEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaHideEvent")
  @js.native
  open class WaHideEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaHideEvent {
    def this(detail: WaHideEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaHoverEvent")
  @js.native
  open class WaHoverEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaHoverEvent {
    def this(detail: WaHoverEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaInvalidEvent")
  @js.native
  open class WaInvalidEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaInvalidEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaLazyChangeEvent")
  @js.native
  open class WaLazyChangeEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaLazyChangeEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaLazyLoadEvent")
  @js.native
  open class WaLazyLoadEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaLazyLoadEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaLoadEvent")
  @js.native
  open class WaLoadEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaLoadEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaMutationEvent")
  @js.native
  open class WaMutationEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaMutationEvent {
    def this(detail: WaMutationEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaRemoveEvent")
  @js.native
  open class WaRemoveEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaRemoveEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaRepositionEvent")
  @js.native
  open class WaRepositionEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaRepositionEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaResizeEvent")
  @js.native
  open class WaResizeEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaResizeEvent {
    def this(detail: WaResizeEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaSelectEvent")
  @js.native
  open class WaSelectEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaSelectEvent {
    def this(detail: WaSelectEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaSelectionChangeEvent")
  @js.native
  open class WaSelectionChangeEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaSelectionChangeEvent {
    def this(detail: WaSelectionChangeEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaShowEvent")
  @js.native
  open class WaShowEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaShowEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaSlideChangeEvent")
  @js.native
  open class WaSlideChangeEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaSlideChangeEvent {
    def this(detail: WaSlideChangeEventDetails) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaStartEvent")
  @js.native
  open class WaStartEvent ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaStartEvent
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaTabHideEvent")
  @js.native
  open class WaTabHideEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaTabHideEvent {
    def this(detail: WaTabHideEventDetail) = this()
  }
  
  @JSImport("@awesome.me/webawesome/dist/webawesome.loader", "WaTabShowEvent")
  @js.native
  open class WaTabShowEvent protected ()
    extends io.github.nguyenyou.webawesome.awesomeMeWebawesome.mod.WaTabShowEvent {
    def this(detail: WaTabShowEventDetail) = this()
  }
  
  inline def allDefined(): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("allDefined")().asInstanceOf[js.Promise[Unit]]
  inline def allDefined(options: PartialAllDefinedOptions): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("allDefined")(options.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  
  inline def discover(root: ShadowRoot): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("discover")(root.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def discover(root: Document): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("discover")(root.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  inline def discover(root: Element): js.Promise[Unit] = ^.asInstanceOf[js.Dynamic].applyDynamic("discover")(root.asInstanceOf[js.Any]).asInstanceOf[js.Promise[Unit]]
  
  inline def getAnimationNames(): js.Array[String] = ^.asInstanceOf[js.Dynamic].applyDynamic("getAnimationNames")().asInstanceOf[js.Array[String]]
  
  inline def getBasePath(): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getBasePath")().asInstanceOf[String]
  inline def getBasePath(subpath: String): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getBasePath")(subpath.asInstanceOf[js.Any]).asInstanceOf[String]
  
  inline def getDefaultIconFamily(): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getDefaultIconFamily")().asInstanceOf[String]
  
  inline def getEasingNames(): js.Array[String] = ^.asInstanceOf[js.Dynamic].applyDynamic("getEasingNames")().asInstanceOf[js.Array[String]]
  
  inline def getKitCode(): String = ^.asInstanceOf[js.Dynamic].applyDynamic("getKitCode")().asInstanceOf[String]
  
  inline def preventTurboFouce(): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("preventTurboFouce")().asInstanceOf[Unit]
  inline def preventTurboFouce(timeout: Double): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("preventTurboFouce")(timeout.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def registerIconLibrary(name: String, options: OmitIconLibraryname): Unit = (^.asInstanceOf[js.Dynamic].applyDynamic("registerIconLibrary")(name.asInstanceOf[js.Any], options.asInstanceOf[js.Any])).asInstanceOf[Unit]
  
  inline def registerTranslation(translation: Translation*): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("registerTranslation")(translation.asInstanceOf[Seq[js.Any]]*).asInstanceOf[Unit]
  
  inline def serialize(form: HTMLFormElement): Record[String, Any] = ^.asInstanceOf[js.Dynamic].applyDynamic("serialize")(form.asInstanceOf[js.Any]).asInstanceOf[Record[String, Any]]
  
  inline def setBasePath(path: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("setBasePath")(path.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def setDefaultIconFamily(family: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("setDefaultIconFamily")(family.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def setKitCode(code: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("setKitCode")(code.asInstanceOf[js.Any]).asInstanceOf[Unit]
  
  inline def startLoader(): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("startLoader")().asInstanceOf[Unit]
  
  inline def stopLoader(): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("stopLoader")().asInstanceOf[Unit]
  
  inline def unregisterIconLibrary(name: String): Unit = ^.asInstanceOf[js.Dynamic].applyDynamic("unregisterIconLibrary")(name.asInstanceOf[js.Any]).asInstanceOf[Unit]
}
