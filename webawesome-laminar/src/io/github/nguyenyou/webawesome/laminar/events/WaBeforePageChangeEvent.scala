package io.github.nguyenyou.webawesome.laminar.events

import scala.scalajs.js

trait WaBeforePageChangeEvent extends js.Object {
  def page: Double
  def pageSize: Double
}
