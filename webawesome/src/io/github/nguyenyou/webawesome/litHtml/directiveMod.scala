package io.github.nguyenyou.webawesome.litHtml

import io.github.nguyenyou.webawesome.litHtml.litHtmlInts.`1`
import io.github.nguyenyou.webawesome.litHtml.litHtmlInts.`2`
import io.github.nguyenyou.webawesome.litHtml.litHtmlInts.`3`
import io.github.nguyenyou.webawesome.litHtml.litHtmlInts.`4`
import io.github.nguyenyou.webawesome.litHtml.litHtmlInts.`5`
import io.github.nguyenyou.webawesome.litHtml.litHtmlInts.`6`
import io.github.nguyenyou.webawesome.litHtml.mod.Disconnectable
import io.github.nguyenyou.webawesome.litHtml.mod.Part
import org.scalablytyped.runtime.Instantiable1
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object directiveMod {
  
  /* note: abstract class */ @JSImport("lit-html/directive", "Directive")
  @js.native
  open class Directive_ protected ()
    extends StObject
       with Disconnectable {
    def this(_partInfo: PartInfo) = this()
    
    /* CompleteClass */
    @JSName("_$isConnected")
    var _$isConnected: Boolean = js.native
    @JSName("_$isConnected")
    def _$isConnected_MDirective_ : Boolean = js.native
    
    def render(props: Any*): Any = js.native
    
    def update(_part: Part, props: js.Array[Any]): Any = js.native
  }
  
  /* Inlined { readonly ATTRIBUTE :1,  readonly CHILD :2,  readonly PROPERTY :3,  readonly BOOLEAN_ATTRIBUTE :4,  readonly EVENT :5,  readonly ELEMENT :6}[keyof { readonly ATTRIBUTE :1,  readonly CHILD :2,  readonly PROPERTY :3,  readonly BOOLEAN_ATTRIBUTE :4,  readonly EVENT :5,  readonly ELEMENT :6}] */
  /* Rewritten from type alias, can be one of: 
    - `io.github.nguyenyou.webawesome`.litHtml.litHtmlInts.`3`
    - `io.github.nguyenyou.webawesome`.litHtml.litHtmlInts.`2`
    - `io.github.nguyenyou.webawesome`.litHtml.litHtmlInts.`4`
    - `io.github.nguyenyou.webawesome`.litHtml.litHtmlInts.`5`
    - `io.github.nguyenyou.webawesome`.litHtml.litHtmlInts.`6`
    - `io.github.nguyenyou.webawesome`.litHtml.litHtmlInts.`1`
  */
  trait PartType extends StObject
  object PartType
  
  trait AttributePartInfo
    extends StObject
       with PartInfo {
    
    val name: String
    
    val strings: js.UndefOr[js.Array[String]] = js.undefined
    
    val tagName: String
    
    val `type`: `1` | `3` | `4` | `5`
  }
  object AttributePartInfo {
    
    inline def apply(name: String, tagName: String, `type`: `1` | `3` | `4` | `5`): AttributePartInfo = {
      val __obj = js.Dynamic.literal(name = name.asInstanceOf[js.Any], tagName = tagName.asInstanceOf[js.Any])
      __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
      __obj.asInstanceOf[AttributePartInfo]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: AttributePartInfo] (val x: Self) extends AnyVal {
      
      inline def setName(value: String): Self = StObject.set(x, "name", value.asInstanceOf[js.Any])
      
      inline def setStrings(value: js.Array[String]): Self = StObject.set(x, "strings", value.asInstanceOf[js.Any])
      
      inline def setStringsUndefined: Self = StObject.set(x, "strings", js.undefined)
      
      inline def setStringsVarargs(value: String*): Self = StObject.set(x, "strings", js.Array(value*))
      
      inline def setTagName(value: String): Self = StObject.set(x, "tagName", value.asInstanceOf[js.Any])
      
      inline def setType(value: `1` | `3` | `4` | `5`): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
    }
  }
  
  trait ChildPartInfo
    extends StObject
       with PartInfo {
    
    val `type`: `2`
  }
  object ChildPartInfo {
    
    inline def apply(): ChildPartInfo = {
      val __obj = js.Dynamic.literal()
      __obj.updateDynamic("type")(2)
      __obj.asInstanceOf[ChildPartInfo]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: ChildPartInfo] (val x: Self) extends AnyVal {
      
      inline def setType(value: `2`): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
    }
  }
  
  @js.native
  trait DirectiveClass
    extends StObject
       with Instantiable1[/* part */ PartInfo, Directive_]
  
  trait DirectiveResult[C /* <: DirectiveClass */] extends StObject
  
  trait ElementPartInfo
    extends StObject
       with PartInfo {
    
    val `type`: `6`
  }
  object ElementPartInfo {
    
    inline def apply(): ElementPartInfo = {
      val __obj = js.Dynamic.literal()
      __obj.updateDynamic("type")(6)
      __obj.asInstanceOf[ElementPartInfo]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: ElementPartInfo] (val x: Self) extends AnyVal {
      
      inline def setType(value: `6`): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
    }
  }
  
  /* Rewritten from type alias, can be one of: 
    - `io.github.nguyenyou.webawesome`.litHtml.directiveMod.ChildPartInfo
    - `io.github.nguyenyou.webawesome`.litHtml.directiveMod.AttributePartInfo
    - `io.github.nguyenyou.webawesome`.litHtml.directiveMod.ElementPartInfo
  */
  trait PartInfo extends StObject
  object PartInfo {
    
    inline def AttributePartInfo(name: String, tagName: String, `type`: `1` | `3` | `4` | `5`): io.github.nguyenyou.webawesome.litHtml.directiveMod.AttributePartInfo = {
      val __obj = js.Dynamic.literal(name = name.asInstanceOf[js.Any], tagName = tagName.asInstanceOf[js.Any])
      __obj.updateDynamic("type")(`type`.asInstanceOf[js.Any])
      __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.directiveMod.AttributePartInfo]
    }
    
    inline def ChildPartInfo(): io.github.nguyenyou.webawesome.litHtml.directiveMod.ChildPartInfo = {
      val __obj = js.Dynamic.literal()
      __obj.updateDynamic("type")(2)
      __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.directiveMod.ChildPartInfo]
    }
    
    inline def ElementPartInfo(): io.github.nguyenyou.webawesome.litHtml.directiveMod.ElementPartInfo = {
      val __obj = js.Dynamic.literal()
      __obj.updateDynamic("type")(6)
      __obj.asInstanceOf[io.github.nguyenyou.webawesome.litHtml.directiveMod.ElementPartInfo]
    }
  }
}
