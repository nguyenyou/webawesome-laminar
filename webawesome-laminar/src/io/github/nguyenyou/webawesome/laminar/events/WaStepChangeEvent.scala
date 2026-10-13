package io.github.nguyenyou.webawesome.laminar.events

import io.github.nguyenyou.webawesome.laminar.Step

import scala.scalajs.js

trait WaStepChangeEvent extends js.Object {
  def name: String
  def previousName: String | Null
  def step: Step.Ref
  def previousStep: Step.Ref | Null
}
