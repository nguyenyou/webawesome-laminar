package io.github.nguyenyou.webawesome.std

import io.github.nguyenyou.webawesome.std.stdInts.`0x01`
import io.github.nguyenyou.webawesome.std.stdInts.`0x02`
import io.github.nguyenyou.webawesome.std.stdInts.`0x04`
import io.github.nguyenyou.webawesome.std.stdInts.`0x08`
import io.github.nguyenyou.webawesome.std.stdInts.`0x10`
import io.github.nguyenyou.webawesome.std.stdInts.`0x20`
import io.github.nguyenyou.webawesome.std.stdInts.`10`
import io.github.nguyenyou.webawesome.std.stdInts.`11`
import io.github.nguyenyou.webawesome.std.stdInts.`12`
import io.github.nguyenyou.webawesome.std.stdInts.`1`
import io.github.nguyenyou.webawesome.std.stdInts.`2`
import io.github.nguyenyou.webawesome.std.stdInts.`3`
import io.github.nguyenyou.webawesome.std.stdInts.`4`
import io.github.nguyenyou.webawesome.std.stdInts.`5`
import io.github.nguyenyou.webawesome.std.stdInts.`6`
import io.github.nguyenyou.webawesome.std.stdInts.`7`
import io.github.nguyenyou.webawesome.std.stdInts.`8`
import io.github.nguyenyou.webawesome.std.stdInts.`9`
import org.scalajs.dom.Document
import org.scalajs.dom.NodeList
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node)
  */
@js.native
trait Node
  extends StObject
     with EventTarget {
  
  /* standard dom */
  val ATTRIBUTE_NODE: `2` = js.native
  
  /** node is a CDATASection node. */
  /* standard dom */
  val CDATA_SECTION_NODE: `4` = js.native
  
  /** node is a Comment node. */
  /* standard dom */
  val COMMENT_NODE: `8` = js.native
  
  /** node is a DocumentFragment node. */
  /* standard dom */
  val DOCUMENT_FRAGMENT_NODE: `11` = js.native
  
  /** node is a document. */
  /* standard dom */
  val DOCUMENT_NODE: `9` = js.native
  
  /** Set when other is a descendant of node. */
  /* standard dom */
  val DOCUMENT_POSITION_CONTAINED_BY: `0x10` = js.native
  
  /** Set when other is an ancestor of node. */
  /* standard dom */
  val DOCUMENT_POSITION_CONTAINS: `0x08` = js.native
  
  /** Set when node and other are not in the same tree. */
  /* standard dom */
  val DOCUMENT_POSITION_DISCONNECTED: `0x01` = js.native
  
  /** Set when other is following node. */
  /* standard dom */
  val DOCUMENT_POSITION_FOLLOWING: `0x04` = js.native
  
  /* standard dom */
  val DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: `0x20` = js.native
  
  /** Set when other is preceding node. */
  /* standard dom */
  val DOCUMENT_POSITION_PRECEDING: `0x02` = js.native
  
  /** node is a doctype. */
  /* standard dom */
  val DOCUMENT_TYPE_NODE: `10` = js.native
  
  /** node is an element. */
  /* standard dom */
  val ELEMENT_NODE: `1` = js.native
  
  /* standard dom */
  val ENTITY_NODE: `6` = js.native
  
  /* standard dom */
  val ENTITY_REFERENCE_NODE: `5` = js.native
  
  /* standard dom */
  val NOTATION_NODE: `12` = js.native
  
  /** node is a ProcessingInstruction node. */
  /* standard dom */
  val PROCESSING_INSTRUCTION_NODE: `7` = js.native
  
  /** node is a Text node. */
  /* standard dom */
  val TEXT_NODE: `3` = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild) */
  /* standard dom */
  def appendChild[T /* <: org.scalajs.dom.Node */](node: T): T = js.native
  
  /**
    * Returns node's node document's document base URL.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)
    */
  /* standard dom */
  val baseURI: String = js.native
  
  /**
    * Returns the children.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)
    */
  /* standard dom */
  val childNodes: NodeList[ChildNode & org.scalajs.dom.Node] = js.native
  
  /**
    * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)
    */
  /* standard dom */
  def cloneNode(): org.scalajs.dom.Node = js.native
  def cloneNode(subtree: Boolean): org.scalajs.dom.Node = js.native
  
  /**
    * Returns a bitmask indicating the position of other relative to node.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)
    */
  /* standard dom */
  def compareDocumentPosition(other: org.scalajs.dom.Node): Double = js.native
  
  /**
    * Returns true if other is an inclusive descendant of node, and false otherwise.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)
    */
  /* standard dom */
  def contains(): Boolean = js.native
  def contains(other: org.scalajs.dom.Node): Boolean = js.native
  
  /**
    * Returns the first child.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)
    */
  /* standard dom */
  val firstChild: ChildNode | Null = js.native
  
  /**
    * Returns node's root.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)
    */
  /* standard dom */
  def getRootNode(): org.scalajs.dom.Node = js.native
  def getRootNode(options: GetRootNodeOptions): org.scalajs.dom.Node = js.native
  
  /**
    * Returns whether node has children.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)
    */
  /* standard dom */
  def hasChildNodes(): Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore) */
  /* standard dom */
  def insertBefore[T /* <: org.scalajs.dom.Node */](node: T): T = js.native
  def insertBefore[T /* <: org.scalajs.dom.Node */](node: T, child: org.scalajs.dom.Node): T = js.native
  
  /**
    * Returns true if node is connected and false otherwise.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)
    */
  /* standard dom */
  val isConnected: Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace) */
  /* standard dom */
  def isDefaultNamespace(): Boolean = js.native
  def isDefaultNamespace(namespace: String): Boolean = js.native
  
  /**
    * Returns whether node and otherNode have the same properties.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)
    */
  /* standard dom */
  def isEqualNode(): Boolean = js.native
  def isEqualNode(otherNode: org.scalajs.dom.Node): Boolean = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode) */
  /* standard dom */
  def isSameNode(): Boolean = js.native
  def isSameNode(otherNode: org.scalajs.dom.Node): Boolean = js.native
  
  /**
    * Returns the last child.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)
    */
  /* standard dom */
  val lastChild: ChildNode | Null = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI) */
  /* standard dom */
  def lookupNamespaceURI(): String | Null = js.native
  def lookupNamespaceURI(prefix: String): String | Null = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix) */
  /* standard dom */
  def lookupPrefix(): String | Null = js.native
  def lookupPrefix(namespace: String): String | Null = js.native
  
  /**
    * Returns the next sibling.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)
    */
  /* standard dom */
  val nextSibling: ChildNode | Null = js.native
  
  /**
    * Returns a string appropriate for the type of node.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)
    */
  /* standard dom */
  val nodeName: String = js.native
  
  /**
    * Returns the type of node.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)
    */
  /* standard dom */
  val nodeType: Double = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue) */
  /* standard dom */
  var nodeValue: String | Null = js.native
  
  /**
    * Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)
    */
  /* standard dom */
  def normalize(): Unit = js.native
  
  /**
    * Returns the node document. Returns null for documents.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)
    */
  /* standard dom */
  val ownerDocument: Document | Null = js.native
  
  /**
    * Returns the parent element.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)
    */
  /* standard dom */
  val parentElement: org.scalajs.dom.HTMLElement | Null = js.native
  
  /**
    * Returns the parent.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)
    */
  /* standard dom */
  val parentNode: org.scalajs.dom.ParentNode | Null = js.native
  
  /**
    * Returns the previous sibling.
    *
    * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)
    */
  /* standard dom */
  val previousSibling: ChildNode | Null = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild) */
  /* standard dom */
  def removeChild[T /* <: org.scalajs.dom.Node */](child: T): T = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild) */
  /* standard dom */
  def replaceChild[T /* <: org.scalajs.dom.Node */](node: org.scalajs.dom.Node, child: T): T = js.native
  
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent) */
  /* standard dom */
  var textContent: String | Null = js.native
}
