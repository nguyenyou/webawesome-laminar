package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.nodes.Slot
import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

// This file is generated at compile-time by WebAwesome generator

/** Popup is a utility that lets you declaratively anchor "popup" containers to another element.
  *
  * [[https://webawesome.com/docs/components/popup WebAwesome docs]]
  */
object Popup extends WebComponent("wa-popup") {

  @JSImport("@awesome.me/webawesome/dist/components/popup/popup.js", JSImport.Namespace)
  @js.native
  object RawImport extends js.Object

  type Self = Popup.type

  type Ref = WaPopupComponent & dom.HTMLElement

  // -- Events --

  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your
    * listener or consider debouncing it.
    */
  lazy val onReposition: EventProp[dom.Event] = eventProp("wa-reposition")

  // -- Attributes --

  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
    * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
    * `anchor` slot instead.
    */
  lazy val anchor: HtmlAttr[String] = stringAttr("anchor")

  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
    * down and the popup will be hidden.
    */
  lazy val active: HtmlAttr[Boolean] = boolAttr("active")

  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the panel
    * inside of the viewport.
    */
  lazy val placement: HtmlAttr[String] = stringAttr("placement")

  /** The bounding box to use for flipping, shifting, and auto-sizing. Valid values: "viewport", "scroll". */
  lazy val boundary: HtmlAttr[PopupBoundary] = unionAttr("boundary")

  /** The distance in pixels from which to offset the panel away from its anchor. */
  lazy val distance: HtmlAttr[Double] = doubleAttr("distance")

  /** The distance in pixels from which to offset the panel along its anchor. */
  lazy val skidding: HtmlAttr[Double] = doubleAttr("skidding")

  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
    * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
    * `::part(arrow)` in your stylesheet.
    */
  lazy val arrow: HtmlAttr[Boolean] = boolAttr("arrow")

  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
    * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
    * align the arrow to the start, end, or center of the popover instead. Valid values: "start", "end", "center",
    * "anchor".
    */
  lazy val arrowPlacement: HtmlAttr[PopupArrowPlacement] = unionAttr("arrow-placement")

  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
    * this will prevent it from overflowing the corners.
    */
  lazy val arrowPadding: HtmlAttr[Double] = doubleAttr("arrow-padding")

  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
    * `flipFallbackPlacements` to further configure how the fallback placement is determined.
    */
  lazy val flip: HtmlAttr[Boolean] = boolAttr("flip")

  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be
    * a string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
    * fallback strategy will be used instead.
    */
  lazy val flipFallbackPlacements: HtmlAttr[String] = stringAttr("flip-fallback-placements")

  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
    * the popup should be positioned using the best available fit based on available space or as it was initially
    * preferred. Valid values: "best-fit", "initial".
    */
  lazy val flipFallbackStrategy: HtmlAttr[PopupFlipFallbackStrategy] = unionAttr("flip-fallback-strategy")

  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
    * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
    * change the boundary by passing a reference to one or more elements to this property.
    */
  lazy val flipBoundary: HtmlAttr[String] = stringAttr("flipBoundary")

  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  lazy val flipPadding: HtmlAttr[Double] = doubleAttr("flip-padding")

  /** Moves the popup along the axis to keep it in view when clipped. */
  lazy val shift: HtmlAttr[Boolean] = boolAttr("shift")

  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
    * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
    * change the boundary by passing a reference to one or more elements to this property.
    */
  lazy val shiftBoundary: HtmlAttr[String] = stringAttr("shiftBoundary")

  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  lazy val shiftPadding: HtmlAttr[Double] = doubleAttr("shift-padding")

  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. Valid values:
    * "horizontal", "vertical", "both".
    */
  lazy val autoSize: HtmlAttr[PopupAutoSize] = unionAttr("auto-size")

  /** Syncs the popup's width or height to that of the anchor element. Valid values: "width", "height", "both". */
  lazy val sync: HtmlAttr[PopupSync] = unionAttr("sync")

  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
    * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
    * change the boundary by passing a reference to one or more elements to this property.
    */
  lazy val autoSizeBoundary: HtmlAttr[String] = stringAttr("autoSizeBoundary")

  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  lazy val autoSizePadding: HtmlAttr[Double] = doubleAttr("auto-size-padding")

  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
    * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
    * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
    * active.
    */
  lazy val hoverBridge: HtmlAttr[Boolean] = boolAttr("hover-bridge")

  // -- Slots --

  object slots {

    /** The popup's content. Note: You can just say `_ => element` instead of `_.slots.default(element)` */
    lazy val default: Slot = Slot("")

    /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor`
      * attribute or property instead.
      */
    lazy val anchor: Slot = Slot("anchor")

  }

  // -- CSS Vars --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssVars {

    /** The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. Default: 6px */
    lazy val arrowSize: String = "--arrow-size"

    /** The color of the arrow. Default: black */
    lazy val arrowColor: String = "--arrow-color"

    /** A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for
      * positioning child elements that need to overflow. This property is only available when using `auto-size`.
      */
    lazy val autoSizeAvailableWidth: String = "--auto-size-available-width"

    /** A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for
      * positioning child elements that need to overflow. This property is only available when using `auto-size`.
      */
    lazy val autoSizeAvailableHeight: String = "--auto-size-available-height"

    /** The show duration to use when applying built-in animation classes. Default: 100ms */
    lazy val showDuration: String = "--show-duration"

    /** The hide duration to use when applying built-in animation classes. Default: 100ms */
    lazy val hideDuration: String = "--hide-duration"

  }

  // -- CSS Parts --

  /** For documentation only. You need to style these from a CSS stylesheet. */
  object cssParts {

    /** The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned
      * dynamically as the popup moves. This is most useful for applying a background color to match the popup, and
      * maybe a border or box shadow.
      */
    lazy val arrow: String = "arrow"

    /** The popup's container. Useful for setting a background color, box shadow, etc. */
    lazy val popup: String = "popup"

    /** The hover bridge element. Only available when the `hover-bridge` option is enabled. */
    lazy val hoverBridge: String = "hover-bridge"

  }

  // -- Element type --

  @js.native
  trait WaPopupComponent extends js.Object {
    this: dom.HTMLElement =>

    /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
      * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
      * `anchor` slot instead.
      */
    var anchor: String

    /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is
      * torn down and the popup will be hidden.
      */
    var active: Boolean

    /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the panel
      * inside of the viewport.
      */
    var placement: js.Any

    /** The bounding box to use for flipping, shifting, and auto-sizing. Valid values: "viewport", "scroll". */
    var boundary: PopupBoundary

    /** The distance in pixels from which to offset the panel away from its anchor. */
    var distance: Double

    /** The distance in pixels from which to offset the panel along its anchor. */
    var skidding: Double

    /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
      * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
      * `::part(arrow)` in your stylesheet.
      */
    var arrow: Boolean

    /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
      * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
      * align the arrow to the start, end, or center of the popover instead. Valid values: "start", "end", "center",
      * "anchor".
      */
    var arrowPlacement: PopupArrowPlacement

    /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for
      * example, this will prevent it from overflowing the corners.
      */
    var arrowPadding: Double

    /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
      * `flipFallbackPlacements` to further configure how the fallback placement is determined.
      */
    var flip: Boolean

    /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must
      * be a string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the
      * flip fallback strategy will be used instead.
      */
    var flipFallbackPlacements: String

    /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine
      * whether the popup should be positioned using the best available fit based on available space or as it was
      * initially preferred. Valid values: "best-fit", "initial".
      */
    var flipFallbackStrategy: PopupFlipFallbackStrategy

    /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
      * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
      * change the boundary by passing a reference to one or more elements to this property.
      */
    var flipBoundary: js.Any

    /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
    var flipPadding: Double

    /** Moves the popup along the axis to keep it in view when clipped. */
    var shift: Boolean

    /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
      * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
      * change the boundary by passing a reference to one or more elements to this property.
      */
    var shiftBoundary: js.Any

    /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
    var shiftPadding: Double

    /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. Valid values:
      * "horizontal", "vertical", "both".
      */
    var autoSize: PopupAutoSize

    /** Syncs the popup's width or height to that of the anchor element. Valid values: "width", "height", "both". */
    var sync: PopupSync

    /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
      * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
      * change the boundary by passing a reference to one or more elements to this property.
      */
    var autoSizeBoundary: js.Any

    /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
    var autoSizePadding: Double

    /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
      * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
      * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover
      * is active.
      */
    var hoverBridge: Boolean

    /** Forces the popup to recalculate and reposition itself. */
    def reposition(): js.Any = js.native

  }
}
