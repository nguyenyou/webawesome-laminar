package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

/**
  * Describes an {@link Iterator} produced by the runtime that inherits from the intrinsic `Iterator.prototype`.
  */
@js.native
trait IteratorObject[T, TReturn, TNext]
  extends StObject
     with Iterator[T, TReturn, TNext] {
  
  /* standard es2015.iterable */
  @JSName(js.Symbol.iterator)
  var iterator: js.Function0[IteratorObject[T, TReturn, TNext]] = js.native
}
