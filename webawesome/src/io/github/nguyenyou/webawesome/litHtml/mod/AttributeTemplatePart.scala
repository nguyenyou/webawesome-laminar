package io.github.nguyenyou.webawesome.litHtml.mod

import org.scalablytyped.runtime.Instantiable5
import org.scalajs.dom.HTMLElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait AttributeTemplatePart
  extends StObject
     with TemplatePart {
  
  val ctor: Instantiable5[
    /* element */ HTMLElement, 
    /* name */ String, 
    /* strings */ js.Array[String], 
    /* parent */ Disconnectable, 
    /* options */ js.UndefOr[RenderOptions], 
    AttributePart
  ]
  
  val index: Double
  
  val name: String
  
  val strings: js.Array[String]
  
  val `type`: /* 1 */ Double
}
object AttributeTemplatePart {
  
  inline def apply(
    ctor: Instantiable5[
      /* element */ HTMLElement, 
      /* name */ String, 
      /* strings */ js.Array[String], 
      /* parent */ Disconnectable, 
      /* options */ js.UndefOr[RenderOptions], 
      AttributePart
    ],
    index: Double,
    name: String,
    strings: js.Array[String],
    `type`: /* 1 */ Double
  ): AttributeTemplatePart = {
    val __obj = js.Dynamic.literal(ctor = ctor.asInstanceOf[js.Any], index = index.asInstanceOf[js.Any], name = name.asInstanceOf[js.Any], strings = strings.asInstanceOf[js.Any])
    __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
    __obj.asInstanceOf[AttributeTemplatePart]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: AttributeTemplatePart] (val x: Self) extends AnyVal {
    
    inline def setCtor(
      value: Instantiable5[
          /* element */ HTMLElement, 
          /* name */ String, 
          /* strings */ js.Array[String], 
          /* parent */ Disconnectable, 
          /* options */ js.UndefOr[RenderOptions], 
          AttributePart
        ]
    ): Self = StObject.set(x, "ctor", value.asInstanceOf[js.Any])
    
    inline def setIndex(value: Double): Self = StObject.set(x, "index", value.asInstanceOf[js.Any])
    
    inline def setName(value: String): Self = StObject.set(x, "name", value.asInstanceOf[js.Any])
    
    inline def setStrings(value: js.Array[String]): Self = StObject.set(x, "strings", value.asInstanceOf[js.Any])
    
    inline def setStringsVarargs(value: String*): Self = StObject.set(x, "strings", js.Array(value*))
    
    inline def setType(value: /* 1 */ Double): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
  }
}
