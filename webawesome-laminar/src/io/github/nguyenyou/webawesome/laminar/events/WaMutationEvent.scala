package io.github.nguyenyou.webawesome.laminar.events

import org.scalajs.dom.MutationRecord

import scala.scalajs.js

trait WaMutationEvent extends js.Object {
  def mutationList: js.Array[MutationRecord]
}
