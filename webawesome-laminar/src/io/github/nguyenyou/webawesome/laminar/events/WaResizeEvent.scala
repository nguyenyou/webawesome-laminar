package io.github.nguyenyou.webawesome.laminar.events

import org.scalajs.dom.ResizeObserverEntry

import scala.scalajs.js

trait WaResizeEvent extends js.Object {
  def entries: js.Array[ResizeObserverEntry]
}
