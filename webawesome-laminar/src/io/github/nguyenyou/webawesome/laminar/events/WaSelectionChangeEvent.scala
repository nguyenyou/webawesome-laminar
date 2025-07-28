package io.github.nguyenyou.webawesome.laminar.events

import io.github.nguyenyou.webawesome.laminar.TreeItem

import scala.scalajs.js

trait WaSelectionChangeEvent extends js.Object {
  def selection: js.Array[TreeItem.Ref]
}
