package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalajs.dom.Event
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/* import warning: transforms.RemoveMultipleInheritance#findNewParents newComments Dropped parents 
- `io.github.nguyenyou.webawesome`.litHtml.mod.Part because Already inherited */ @JSImport("lit-html", "EventPart")
@js.native
open class EventPart protected () extends AttributePart {
  def this(element: HTMLElement, name: String, strings: js.Array[String], parent: Disconnectable) = this()
  def this(
    element: HTMLElement,
    name: String,
    strings: js.Array[String],
    parent: Disconnectable,
    options: RenderOptions
  ) = this()
  
  def handleEvent(event: Event): Unit = js.native
}
