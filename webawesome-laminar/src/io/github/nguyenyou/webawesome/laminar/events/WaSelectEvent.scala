package io.github.nguyenyou.webawesome.laminar.events

import org.scalajs.dom

import scala.scalajs.js

@js.native
trait WaSelectItem extends js.Object {
  def value: js.UndefOr[String]
  def `type`: js.UndefOr[String]
  def checked: js.UndefOr[Boolean]
}

trait WaSelectEvent extends js.Object {

  def item: dom.HTMLElement & WaSelectItem

}
