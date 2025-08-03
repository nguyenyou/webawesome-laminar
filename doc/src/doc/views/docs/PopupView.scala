package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import io.github.nguyenyou.webawesome.laminar.CommonKeys
import io.github.nguyenyou.webawesome.laminar.SharedTypes
import io.github.nguyenyou.webawesome.laminar.SharedTypes.PopupArrowPlacement

case class PopupView()
    extends ExampleView(
      "Popup",
      Some("https://webawesome.com/docs/components/popup/")
    ) {
  def playground: HtmlElement = {
    val placementVar = Var[SharedTypes.Placement]("top")
    val distanceVar  = Var("0")
    val skiddingVar  = Var("0")
    val activeVar    = Var(true)
    val arrowVar     = Var(false)

    Demo(
      content = Source.annotate {
        div(
          padding.px(40),
          Popup(
            _.placement <-- placementVar,
            _.distance <-- distanceVar.signal.map(_.toDouble),
            _.skidding <-- skiddingVar.signal.map(_.toDouble),
            _.active <-- activeVar,
            _.arrow <-- arrowVar,
            _.style := "--arrow-color: var(--wa-color-brand-fill-loud)",
            _.slots.anchor(
              span(
                display.inlineBlock,
                width.px(150),
                height.px(150),
                border := "1px dashed var(--wa-color-neutral-fill-loud)",
                margin.px(50)
              )
            )
          )(
            div(
              width.px(100),
              height.px(50),
              background   := "var(--wa-color-brand-fill-loud)",
              borderRadius := "var(--wa-border-radius-m)"
            )
          ),
          div(
            tw.flex.gap2,
            Select(
              _.label := "Placement",
              _.name  := "placement",
              _.value <-- placementVar,
              _.onInput.mapToValue.map(_.asInstanceOf[SharedTypes.Placement]) --> placementVar
            )(
              UOption(_.value := CommonKeys.Placement.top.value)("top"),
              UOption(_.value := CommonKeys.Placement.topStart.value)("top-start"),
              UOption(_.value := CommonKeys.Placement.topEnd.value)("top-end"),
              UOption(_.value := CommonKeys.Placement.bottom.value)("bottom"),
              UOption(_.value := CommonKeys.Placement.bottomStart.value)("bottom-start"),
              UOption(_.value := CommonKeys.Placement.bottomEnd.value)("bottom-end"),
              UOption(_.value := CommonKeys.Placement.right.value)("right"),
              UOption(_.value := CommonKeys.Placement.rightStart.value)("right-start"),
              UOption(_.value := CommonKeys.Placement.rightEnd.value)("right-end"),
              UOption(_.value := CommonKeys.Placement.left.value)("left"),
              UOption(_.value := CommonKeys.Placement.leftStart.value)("left-start"),
              UOption(_.value := CommonKeys.Placement.leftEnd.value)("left-end")
            ),
            Input(
              _.label := "Distance",
              _.`type`.number,
              _.name := "distance",
              _.value <-- distanceVar,
              _.onInput.mapToValue --> distanceVar
            )(),
            Input(
              _.label := "Skidding",
              _.`type`.number,
              _.name := "skidding",
              _.value <-- skiddingVar,
              _.onInput.mapToValue --> skiddingVar
            )()
          ),
          div(
            tw.flex.gap2.mt2,
            Switch(
              _.name := "active",
              _.checked <-- activeVar,
              _.onInput.mapToChecked --> activeVar
            )("Active"),
            Switch(
              _.name := "arrow",
              _.checked <-- arrowVar,
              _.onInput.mapToChecked --> arrowVar
            )("Arrow")
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Activating",
        description =
          "Popups are inactive and hidden until the `active` attribute is applied. Removing the attribute will tear down all positioning logic and listeners.",
        content = Source.annotate {
          val activeVar = Var(true)

          div(
            Popup(
              _.placement.top,
              _.active <-- activeVar,
              _.slots.anchor(
                span(
                  display.inlineBlock,
                  width.px(150),
                  height.px(150),
                  border := "2px dashed var(--wa-color-neutral-fill-loud)",
                  margin.px(50)
                )
              )
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            ),
            br(),
            Switch(
              _.checked <-- activeVar,
              _.onInput.mapToChecked --> activeVar
            )("Active")
          )
        }
      )().withLocator,
      Demo(
        title = "External Anchors",
        description =
          "By default, anchors are slotted into the popup using the `anchor` slot. If your anchor needs to live outside of the popup, you can pass the anchor's `id` to the `anchor` attribute.",
        content = Source.annotate {
          div(
            span(
              idAttr := "external-anchor",
              display.inlineBlock,
              width.px(150),
              height.px(150),
              border := "2px dashed var(--wa-color-neutral-fill-loud)",
              margin := "50px 0 0 50px"
            ),
            Popup(
              _.anchor := "external-anchor",
              _.placement.top,
              _.active := true
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Placement",
        description =
          "Use the `placement` attribute to tell the popup the preferred placement of the popup. Note that the actual position will vary to ensure the panel remains in the viewport.",
        content = Source.annotate {
          val placementVar = Var[SharedTypes.Placement]("top")

          div(
            Popup(
              _.placement <-- placementVar,
              _.active := true,
              _.slots.anchor(
                span(
                  display.inlineBlock,
                  width.px(150),
                  height.px(150),
                  border := "2px dashed var(--wa-color-neutral-fill-loud)",
                  margin.px(50)
                )
              )
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            ),
            Select(
              _.label := "Placement",
              _.value <-- placementVar,
              _.onInput.mapToValue.map(_.asInstanceOf[SharedTypes.Placement]) --> placementVar,
              _.style := "max-width: 280px;"
            )(
              UOption(_.value := CommonKeys.Placement.top.value)("top"),
              UOption(_.value := CommonKeys.Placement.topStart.value)("top-start"),
              UOption(_.value := CommonKeys.Placement.topEnd.value)("top-end"),
              UOption(_.value := CommonKeys.Placement.bottom.value)("bottom"),
              UOption(_.value := CommonKeys.Placement.bottomStart.value)("bottom-start"),
              UOption(_.value := CommonKeys.Placement.bottomEnd.value)("bottom-end"),
              UOption(_.value := CommonKeys.Placement.right.value)("right"),
              UOption(_.value := CommonKeys.Placement.rightStart.value)("right-start"),
              UOption(_.value := CommonKeys.Placement.rightEnd.value)("right-end"),
              UOption(_.value := CommonKeys.Placement.left.value)("left"),
              UOption(_.value := CommonKeys.Placement.leftStart.value)("left-start"),
              UOption(_.value := CommonKeys.Placement.leftEnd.value)("left-end")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Distance",
        description =
          "Use the `distance` attribute to change the distance between the popup and its anchor. A positive value will move the popup further away and a negative value will move it closer.",
        content = Source.annotate {
          val distanceVar = Var(0.0)

          div(
            Popup(
              _.placement.top,
              _.distance <-- distanceVar,
              _.active := true,
              _.slots.anchor(
                span(
                  display.inlineBlock,
                  width.px(150),
                  height.px(150),
                  border := "2px dashed var(--wa-color-neutral-fill-loud)",
                  margin.px(50)
                )
              )
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            ),
            Slider(
              _.label := "Distance",
              _.min   := -50,
              _.max   := 50,
              _.step  := 1,
              _.value <-- distanceVar.signal.map(_.toString),
              _.onInput.map(_.target.value) --> distanceVar
            )(
              maxWidth := "260px"
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Skidding",
        description =
          "The `skidding` attribute is similar to `distance`, but instead allows you to offset the popup along the anchor's axis. Both positive and negative values are allowed.",
        content = Source.annotate {
          val skiddingVar = Var(0.0)

          div(
            Popup(
              _.placement.top,
              _.skidding <-- skiddingVar,
              _.active := true,
              _.slots.anchor(
                span(
                  display.inlineBlock,
                  width.px(150),
                  height.px(150),
                  border := "2px dashed var(--wa-color-neutral-fill-loud)",
                  margin.px(50)
                )
              )
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            ),
            Slider(
              _.label := "Skidding",
              _.min   := -50,
              _.max   := 50,
              _.step  := 1,
              _.value <-- skiddingVar.signal.map(_.toString),
              _.onInput.map(_.target.value) --> skiddingVar
            )(
              maxWidth := "260px"
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Arrows",
        description =
          "Add an arrow to your popup with the `arrow` attribute. It's usually a good idea to set a `distance` to make room for the arrow. To adjust the arrow's color and size, use the `--arrow-color` and `--arrow-size` custom properties.",
        content = Source.annotate {
          val placementVar      = Var[SharedTypes.Placement]("top")
          val arrowPlacementVar = Var[PopupArrowPlacement]("anchor")
          val arrowVar          = Var(true)

          div(
            Popup(
              _.placement <-- placementVar,
              _.arrow <-- arrowVar,
              _.arrowPlacement <-- arrowPlacementVar,
              _.distance := 8,
              _.active   := true,
              _.style    := "--arrow-color: var(--wa-color-brand-fill-loud)",
              _.slots.anchor(
                span(
                  display.inlineBlock,
                  width.px(150),
                  height.px(150),
                  border := "2px dashed var(--wa-color-neutral-fill-loud)",
                  margin.px(50)
                )
              )
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            ),
            div(
              tw.flex.flexWrap.gap4.itemsEnd,
              Select(
                _.label := "Placement",
                _.name  := "placement",
                _.value <-- placementVar,
                _.onInput.mapToValue.map(_.asInstanceOf[SharedTypes.Placement]) --> placementVar
              )(
                width := "160px",
                UOption(_.value := CommonKeys.Placement.top.value)("top"),
                UOption(_.value := CommonKeys.Placement.topStart.value)("top-start"),
                UOption(_.value := CommonKeys.Placement.topEnd.value)("top-end"),
                UOption(_.value := CommonKeys.Placement.bottom.value)("bottom"),
                UOption(_.value := CommonKeys.Placement.bottomStart.value)("bottom-start"),
                UOption(_.value := CommonKeys.Placement.bottomEnd.value)("bottom-end"),
                UOption(_.value := CommonKeys.Placement.right.value)("right"),
                UOption(_.value := CommonKeys.Placement.rightStart.value)("right-start"),
                UOption(_.value := CommonKeys.Placement.rightEnd.value)("right-end"),
                UOption(_.value := CommonKeys.Placement.left.value)("left"),
                UOption(_.value := CommonKeys.Placement.leftStart.value)("left-start"),
                UOption(_.value := CommonKeys.Placement.leftEnd.value)("left-end")
              ),
              Select(
                _.label := "Arrow Placement",
                _.name  := "arrow-placement",
                _.value <-- arrowPlacementVar,
                _.onInput.mapToValue.map {
                  case p: PopupArrowPlacement =>
                    arrowPlacementVar.set(p)
                  case _ => ()
                } --> Observer.empty
              )(
                width := "160px",
                UOption(_.value := "anchor")("anchor"),
                UOption(_.value := "start")("start"),
                UOption(_.value := "end")("end"),
                UOption(_.value := "center")("center")
              )
            ),
            div(
              tw.flex.gap4.mt4,
              Switch(
                _.name := "arrow",
                _.checked <-- arrowVar,
                _.onInput.mapToChecked --> arrowVar
              )("Arrow")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Flip",
        description =
          "When the popup doesn't have enough room in its preferred placement, it can automatically flip to keep it in view. To enable this, use the `flip` attribute. Scroll the container to see how the popup flips to prevent clipping.",
        content = Source.annotate {
          val flipVar = Var(true)

          div(
            div(
              position.relative,
              height.px(300),
              border := "2px solid var(--wa-color-surface-border)",
              overflow.auto,
              Popup(
                _.placement.top,
                _.flip <-- flipVar,
                _.active := true,
                _.boundary.scroll,
                _.slots.anchor(
                  span(
                    display.inlineBlock,
                    width.px(150),
                    height.px(150),
                    border := "2px dashed var(--wa-color-neutral-fill-loud)",
                    margin := "150px 50px"
                  )
                )
              )(
                div(
                  width.px(100),
                  height.px(50),
                  background   := "var(--wa-color-brand-fill-loud)",
                  borderRadius := "var(--wa-border-radius-m)"
                )
              )
            ),
            br(),
            Switch(
              _.checked <-- flipVar,
              _.onInput.mapToChecked --> flipVar
            )("Flip")
          )
        }
      )().withLocator,
      Demo(
        title = "Flip Fallbacks",
        description =
          "While using the `flip` attribute, you can customize the placement of the popup when the preferred placement doesn't have room. For this, use `flip-fallback-placements` and `flip-fallback-strategy`.",
        content = Source.annotate {
          div(
            div(
              position.relative,
              height.px(300),
              border := "2px solid var(--wa-color-surface-border)",
              overflow.auto,
              Popup(
                _.placement.top,
                _.flip                   := true,
                _.flipFallbackPlacements := "right bottom",
                _.flipFallbackStrategy.initial,
                _.active := true,
                _.boundary.scroll,
                _.slots.anchor(
                  span(
                    display.inlineBlock,
                    width.px(150),
                    height.px(150),
                    border := "2px dashed var(--wa-color-neutral-fill-loud)",
                    margin := "250px 50px"
                  )
                )
              )(
                div(
                  width.px(100),
                  height.px(50),
                  background   := "var(--wa-color-brand-fill-loud)",
                  borderRadius := "var(--wa-border-radius-m)"
                )
              )
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Shift",
        description =
          "When a popup is longer than its anchor, it risks overflowing. In this case, use the `shift` attribute to shift the popup along its axis and back into view.",
        content = Source.annotate {
          val shiftVar = Var(true)

          div(
            div(
              position.relative,
              border := "2px solid var(--wa-color-surface-border)",
              overflow.auto,
              Popup(
                _.placement.top,
                _.shift <-- shiftVar,
                _.shiftPadding := 10,
                _.active       := true,
                _.boundary.scroll,
                _.slots.anchor(
                  span(
                    display.inlineBlock,
                    width.px(150),
                    height.px(150),
                    border := "2px dashed var(--wa-color-neutral-fill-loud)",
                    margin := "60px 0 0 10px"
                  )
                )
              )(
                div(
                  width.px(300),
                  height.px(50),
                  background   := "var(--wa-color-brand-fill-loud)",
                  borderRadius := "var(--wa-border-radius-m)"
                )
              )
            ),
            Switch(
              _.checked <-- shiftVar,
              _.onInput.mapToChecked --> shiftVar
            )("Shift")
          )
        }
      )().withLocator,
      Demo(
        title = "Auto-size",
        description =
          "Use the `auto-size` attribute to tell the popup to resize when necessary to prevent it from overflowing. Possible values are `horizontal`, `vertical`, and `both`.",
        content = Source.annotate {
          val autoSizeVar = Var(true)

          div(
            div(
              position.relative,
              height.px(300),
              border := "2px solid var(--wa-color-surface-border)",
              overflow.auto,
              Popup(
                _.placement.top,
                _.autoSize <-- autoSizeVar.signal.map(if (_) "both" else "vertical"),
                _.autoSizePadding := 10,
                _.active          := true,
                _.boundary.scroll,
                _.slots.anchor(
                  span(
                    display.inlineBlock,
                    width.px(150),
                    height.px(150),
                    border := "2px dashed var(--wa-color-neutral-fill-loud)",
                    margin := "250px 50px 100px 50px"
                  )
                )
              )(
                div(
                  background   := "var(--wa-color-brand-fill-loud)",
                  borderRadius := "var(--wa-border-radius-m)",
                  width.px(100),
                  height.px(200),
                  maxWidth  := "var(--auto-size-available-width)",
                  maxHeight := "var(--auto-size-available-height)",
                  overflow.auto
                )
              )
            ),
            br(),
            Switch(
              _.checked <-- autoSizeVar,
              _.onInput.mapToChecked --> autoSizeVar
            )("Auto-size")
          )
        }
      )().withLocator,
      Demo(
        title = "Hover Bridge",
        description =
          "When a gap exists between the anchor and the popup element, this option will add a \"hover bridge\" that fills the gap using an invisible element. This makes listening for events such as `mouseover` and `mouseout` more sane.",
        content = Source.annotate {
          val hoverBridgeVar = Var(true)
          val distanceVar    = Var(10.0)
          val skiddingVar    = Var(0.0)

          div(
            Popup(
              _.placement.top,
              _.hoverBridge <-- hoverBridgeVar,
              _.distance <-- distanceVar,
              _.skidding <-- skiddingVar,
              _.active := true,
              _.style := """
                --arrow-color: var(--wa-color-brand-fill-loud);
              """.stripMargin.trim,
              _.slots.anchor(
                span(
                  display.inlineBlock,
                  width.px(150),
                  height.px(150),
                  border := "2px dashed var(--wa-color-neutral-fill-loud)",
                  margin.px(50)
                )
              )
            )(
              div(
                width.px(100),
                height.px(50),
                background   := "var(--wa-color-brand-fill-loud)",
                borderRadius := "var(--wa-border-radius-m)"
              )
            ),
            br(),
            Switch(
              _.checked <-- hoverBridgeVar,
              _.onInput.mapToChecked --> hoverBridgeVar
            )("Hover Bridge"),
            br(),
            Slider(
              _.label := "Distance",
              _.min   := 0,
              _.max   := 50,
              _.step  := 1,
              _.value <-- distanceVar.signal.map(_.toString),
              _.onInput.map(_.target.value) --> distanceVar
            )(
              maxWidth  := "260px",
              marginTop := "0.5rem"
            ),
            Slider(
              _.label := "Skidding",
              _.min   := -50,
              _.max   := 50,
              _.step  := 1,
              _.value <-- skiddingVar.signal.map(_.toString),
              _.onInput.map(_.target.value) --> skiddingVar
            )(
              maxWidth  := "260px",
              marginTop := "0.5rem"
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Virtual Elements",
        description =
          "In most cases, popups are anchored to an actual element. Sometimes, it can be useful to anchor them to a non-element. This example anchors a popup to the mouse cursor using a virtual element.",
        content = Source.annotate {
          val enabledVar = Var(false)
          Var(0.0)
          Var(0.0)

          div(
            Popup(
              _.placement.rightStart,
              _.active <-- enabledVar,
              // Note: Setting virtual element would need to be done via ref in real implementation
              _.style := "z-index: 1000; pointer-events: none;"
            )(
              div(
                width.px(100),
                height.px(100),
                border       := "4px solid var(--wa-color-neutral-fill-loud)",
                borderRadius := "50%",
                transform    := "translate(-50px, -50px)",
                animation    := "1s virtual-cursor infinite"
              )
            ),
            Switch(
              _.checked <-- enabledVar,
              _.onInput.mapToChecked --> enabledVar
            )("Highlight mouse cursor"),
            // Note: Mouse tracking would need to be implemented via onMouseMove
            styleTag("""
              @keyframes virtual-cursor {
                0% { transform: translate(-50px, -50px) scale(1); }
                50% { transform: translate(-50px, -50px) scale(1.1); }
              }
            """)
          )
        }
      )().withLocator
    )
  }

}
