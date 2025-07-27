package io.github.nguyenyou.webawesome.laminar.events

import scala.scalajs.js

trait WaHoverEvent extends js.Object {
  def phase: "start" | "move" | "end"
  def value: Int
}
