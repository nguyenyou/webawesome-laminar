package io.github.nguyenyou.webawesome.litHtml.mod

import io.github.nguyenyou.webawesome.std.ChildNode
import org.scalajs.dom.Node
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@JSImport("lit-html", "ChildPart")
@js.native
open class ChildPart protected ()
  extends StObject
     with Disconnectable
     with Part {
  def this(startNode: ChildNode) = this()
  def this(startNode: ChildNode, endNode: ChildNode) = this()
  def this(startNode: ChildNode, endNode: ChildNode, parent: ChildPart) = this()
  def this(startNode: ChildNode, endNode: ChildNode, parent: TemplateInstance) = this()
  def this(startNode: ChildNode, endNode: Null, parent: ChildPart) = this()
  def this(startNode: ChildNode, endNode: Null, parent: TemplateInstance) = this()
  def this(startNode: ChildNode, endNode: ChildNode, parent: ChildPart, options: RenderOptions) = this()
  def this(startNode: ChildNode, endNode: ChildNode, parent: TemplateInstance, options: RenderOptions) = this()
  def this(startNode: ChildNode, endNode: ChildNode, parent: Unit, options: RenderOptions) = this()
  def this(startNode: ChildNode, endNode: Null, parent: ChildPart, options: RenderOptions) = this()
  def this(startNode: ChildNode, endNode: Null, parent: TemplateInstance, options: RenderOptions) = this()
  def this(startNode: ChildNode, endNode: Null, parent: Unit, options: RenderOptions) = this()
  
  @JSName("_$committedValue")
  var _$committedValue: Any = js.native
  
  /* CompleteClass */
  @JSName("_$isConnected")
  var _$isConnected: Boolean = js.native
  @JSName("_$isConnected")
  def _$isConnected_MChildPart: Boolean = js.native
  
  @JSName("_$setValue")
  def _$setValue(value: Any): Unit = js.native
  @JSName("_$setValue")
  def _$setValue(value: Any, directiveParent: DirectiveParent): Unit = js.native
  
  /* private */ var _commitIterable: Any = js.native
  
  /* private */ var _commitNode: Any = js.native
  
  /* private */ var _commitTemplateResult: Any = js.native
  
  /* private */ var _commitText: Any = js.native
  
  /* private */ var _insert: Any = js.native
  
  /* private */ var _textSanitizer: Any = js.native
  
  /**
    * The part's trailing marker node, if any. See `.parentNode` for more
    * information.
    */
  def endNode: Node | Null = js.native
  
  val options: js.UndefOr[RenderOptions] = js.native
  
  /**
    * The parent node into which the part renders its content.
    *
    * A ChildPart's content consists of a range of adjacent child nodes of
    * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
    * `.endNode`).
    *
    * - If both `.startNode` and `.endNode` are non-null, then the part's content
    * consists of all siblings between `.startNode` and `.endNode`, exclusively.
    *
    * - If `.startNode` is non-null but `.endNode` is null, then the part's
    * content consists of all siblings following `.startNode`, up to and
    * including the last child of `.parentNode`. If `.endNode` is non-null, then
    * `.startNode` will always be non-null.
    *
    * - If both `.endNode` and `.startNode` are null, then the part's content
    * consists of all child nodes of `.parentNode`.
    */
  def parentNode: Node = js.native
  
  /**
    * The part's leading marker node, if any. See `.parentNode` for more
    * information.
    */
  def startNode: Node | Null = js.native
  
  val `type`: /* 2 */ Double = js.native
}
