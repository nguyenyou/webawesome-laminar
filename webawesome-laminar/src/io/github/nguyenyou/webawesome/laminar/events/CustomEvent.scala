package io.github.nguyenyou.webawesome.laminar.events

import org.scalajs.dom
import org.scalajs.dom.EventInit
import org.scalajs.dom.EventTarget

import scala.scalajs.js
import scala.scalajs.js.annotation.JSGlobal

@js.native
@JSGlobal
class CustomEvent[T <: EventTarget](typeArg: String, init: js.UndefOr[EventInit] = js.undefined)
    extends dom.Event(typeArg, init) {

  override def target: T = js.native

}
