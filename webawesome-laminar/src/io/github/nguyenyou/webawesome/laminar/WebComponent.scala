package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.Laminar
import com.raquo.laminar.keys.{EventProcessor, EventProp, HtmlProp, HtmlAttr}
import com.raquo.laminar.modifiers.Modifier
import com.raquo.laminar.nodes.ReactiveHtmlElement
import com.raquo.laminar.tags.CustomHtmlTag
import com.raquo.laminar.codecs.Codec
import org.scalajs.dom

import scala.scalajs.js

/** Base trait for all WebAwesome components. */
abstract class WebComponent(tagName: String) extends CommonTypes { this: Self =>
  
  type Self
  
  /** Override this with JSImport-ed object of the component.
    * The import must register the component's custom element in the DOM.
    */
  def RawImport: js.Object

  useImport(RawImport)

  type Ref <: dom.HTMLElement

  private type Element = ReactiveHtmlElement[Ref]

  type ModFunction = Self => Modifier[Element]

  private type ComponentMod = Self => Modifier[Element]
  private type LaminarMod   = Modifier[Element]

  // Note: this is overridden for components that have controlled inputs – see `tagWithControlledInputs`
  protected lazy val tag: CustomHtmlTag[Ref] = new CustomHtmlTag(tagName)

  protected def tagWithControlledInput[Ref <: dom.html.Element, A, Ev <: dom.Event](
    prop: HtmlProp[A, ?],
    initial: A,
    eventProp: EventProp[Ev]
  ): CustomHtmlTag[Ref] = {
    CustomHtmlTag.withControlledInput(tagName, prop, initial, eventProp)
  }

  // Mark imported JS object as used, to prevent dead code elimination
  @inline protected def useImport(importObject: js.Any): Unit = ()


  /** Optional syntax for using built-in Laminar events: `_.on(onDblClick.preventDefault) --> ...` */
  def on[Ev <: dom.Event, V](ev: EventProcessor[Ev, V]): EventProcessor[Ev, V] = ev

  final def apply(componentMods: ComponentMod*)(laminarMods: LaminarMod*): Element = {
    val el = tag()
    componentMods.foreach(_(this)(el))
    laminarMods.foreach(_(el))
    el
  }

  given toL: Conversion[WebComponent, Laminar] with
    override def apply(x: WebComponent): Laminar =
      com.raquo.laminar.api.L

  /** Lets you set standard Laminar properties when using `of` method,
    * e.g. `sl.Button.of(_.L.attr := "value")`
    */
  def L: Laminar = com.raquo.laminar.api.L
}
