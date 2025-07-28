package io.github.nguyenyou.webawesome.laminar.events

import io.github.nguyenyou.webawesome.laminar.CarouselItem

import scala.scalajs.js

trait WaSlideChangeEvent extends js.Object {
  def index: Int
  def slide: CarouselItem.Ref
}
