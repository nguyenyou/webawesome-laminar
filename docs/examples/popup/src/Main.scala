package examples.popup

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
  example7()
  example8()
  example9()
  example10()
  example11()
  example12()
  example13()
}

def example1() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example1")
  if (container != null) {
    render(container, {
      val placementVar = Var[SharedTypes.Placement]("top")
      val distanceVar  = Var("0")
      val skiddingVar  = Var("0")
      val activeVar    = Var(true)
      val arrowVar     = Var(false)
      
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
          cls("flex gap-2"),
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
          cls("flex gap-2 mt-2"),
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
    })
  }
}

def example2() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example2")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example3() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example3")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example4() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example4")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example5() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example5")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example6() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example6")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example7() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example7")
  if (container != null) {
    render(container, {
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
          cls("flex flex-wrap gap-4 items-end"),
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
          cls("flex gap-4 mt-4"),
          Switch(
            _.name := "arrow",
            _.checked <-- arrowVar,
            _.onInput.mapToChecked --> arrowVar
          )("Arrow")
        )
      )
    })
  }
}

def example8() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example8")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example9() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example9")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example10() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example10")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example11() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example11")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example12() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example12")
  if (container != null) {
    render(container, {
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
    })
  }
}

def example13() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example13")
  if (container != null) {
    render(container, {
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
    })
  }
}
