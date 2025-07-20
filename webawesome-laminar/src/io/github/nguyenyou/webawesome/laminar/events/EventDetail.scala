package io.github.nguyenyou.webawesome.laminar.events

import scala.scalajs.js

trait EventDetail[T] extends js.Object {

  def detail: T

}
