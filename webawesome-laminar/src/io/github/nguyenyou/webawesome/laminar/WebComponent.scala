package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L.{idAttr, styleAttr}
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.keys.EventProp
import com.raquo.laminar.keys.HtmlProp
import com.raquo.laminar.modifiers.Modifier
import com.raquo.laminar.nodes.ReactiveHtmlElement
import com.raquo.laminar.tags.CustomHtmlTag
import org.scalajs.dom

import scala.language.implicitConversions
import scala.scalajs.js

/** Base trait for all WebAwesome components. */
abstract class WebComponent(tagName: String) extends CommonTypes { this: Self =>

  type Self

  lazy val id: HtmlProp[String, String] = idAttr
  lazy val style: HtmlAttr[String] = styleAttr

  /** Override this with JSImport-ed object of the component. The import must register the component's custom element in
    * the DOM.
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

  final def apply(componentMods: ComponentMod*)(laminarMods: LaminarMod*): Element = {
    val el = tag()
    componentMods.foreach(_(this)(el))
    laminarMods.foreach(_(el))
    el
  }
}
