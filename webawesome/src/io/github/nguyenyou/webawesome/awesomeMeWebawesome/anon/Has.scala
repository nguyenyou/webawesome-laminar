package io.github.nguyenyou.webawesome.awesomeMeWebawesome.anon

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait Has extends StObject {
  
  /** Determines whether or not the element currently has the specified state. */
  def has(customState: String): Boolean
  
  /** Adds or removes the specified custom state. */
  def set(customState: String, active: Boolean): Unit
}
object Has {
  
  inline def apply(has: String => Boolean, set: (String, Boolean) => Unit): Has = {
    val __obj = js.Dynamic.literal(has = js.Any.fromFunction1(has), set = js.Any.fromFunction2(set))
    __obj.asInstanceOf[Has]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: Has] (val x: Self) extends AnyVal {
    
    inline def setHas(value: String => Boolean): Self = StObject.set(x, "has", js.Any.fromFunction1(value))
    
    inline def setSet(value: (String, Boolean) => Unit): Self = StObject.set(x, "set", js.Any.fromFunction2(value))
  }
}
