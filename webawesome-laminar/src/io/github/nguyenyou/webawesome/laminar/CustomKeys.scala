package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.modifiers.KeySetter.HtmlAttrSetter

object CustomKeys {
  object Close {

    private def setter(component: String): HtmlAttrSetter[String] = L.dataAttr(component) := "close"

    lazy val dialog: HtmlAttrSetter[String] = setter("dialog")

    lazy val drawer: HtmlAttrSetter[String] = setter("drawer")

    lazy val popover: HtmlAttrSetter[String] = setter("popover")
  }

  object Open {
    private def setter(component: String)(id: String): HtmlAttrSetter[String] =
      L.dataAttr(component) := s"open $id"

    def dialog(id: String): HtmlAttrSetter[String] = setter("dialog")(id)

    def drawer(id: String): HtmlAttrSetter[String] = setter("drawer")(id)
  }
}
