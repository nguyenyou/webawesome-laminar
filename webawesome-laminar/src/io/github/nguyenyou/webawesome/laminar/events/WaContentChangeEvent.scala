package io.github.nguyenyou.webawesome.laminar.events

import org.scalajs.dom.Element

import scala.scalajs.js

trait WaContentChangeEvent extends js.Object {
  def items: js.Array[Element]
}
