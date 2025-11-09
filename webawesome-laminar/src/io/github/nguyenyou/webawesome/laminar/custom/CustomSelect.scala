package io.github.nguyenyou.webawesome.laminar.custom

import com.raquo.laminar.api.L.*
import io.github.nguyenyou.webawesome.laminar.Select

trait CustomSelect {
  object multiplevalues {
    def :=(values: List[String]): Modifier[Select.Element] = {
      inContext { ctx =>
        import scala.scalajs.js.JSConverters.*
        ctx.ref.asInstanceOf[Select.Ref].value = values.toJSArray
        Val(values) --> Observer[List[String]] { vals =>
          ctx.ref.asInstanceOf[Select.Ref].value = vals.toJSArray
        }
      }
    }
    def <--(values: Signal[List[String]]): Modifier[Select.Element] = {
      inContext { ctx =>
        import scala.scalajs.js.JSConverters.*
        values --> Observer[List[String]] { vals =>
          ctx.ref.asInstanceOf[Select.Ref].value = vals.toJSArray
        }
      }
    }

  }
}
