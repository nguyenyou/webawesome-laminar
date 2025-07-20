package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.NumberDictionary
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

@js.native
trait HTMLCollectionOf[T /* <: org.scalajs.dom.Element */]
  extends StObject
     with /* standard es5 */
/* n */ NumberDictionary[T] {
  
  /* standard dom */
  def item(index: Double): T | Null = js.native
  
  /* standard dom.iterable */
  @JSName(js.Symbol.iterator)
  var iterator: js.Function0[ArrayIterator[T]] = js.native
  
  /* standard dom */
  def namedItem(name: String): T | Null = js.native
}
