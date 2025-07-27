package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.inputs.InputController
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.modifiers.Binder
import com.raquo.laminar.modifiers.EventListener
import com.raquo.laminar.modifiers.KeyUpdater
import org.scalajs.dom

trait ControlledInput { this: WebComponent =>

  /** Creates controlled input block.
    *
    * Works similarly to standard Laminar controlled inputs, except you need to check what prop and event(s) a
    * particular Web Component expects.
    *
    * For general info, see [[https://laminar.dev/documentation#controlled-inputs Controlled Inputs docs]]
    */
  def controlled[Ev <: dom.Event, V](
      updater: this.type => KeyUpdater[Element, HtmlProp[V, ?], V],
      listener: this.type => EventListener[Ev, ?]
  ): Binder[Element] = {
    InputController.controlled(listener(this), updater(this))
  }

}
