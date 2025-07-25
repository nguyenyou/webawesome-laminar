package io.github.nguyenyou.webawesome.laminar
import com.raquo.laminar.keys.HtmlAttr
import com.raquo.laminar.modifiers.KeySetter.HtmlAttrSetter
import io.github.nguyenyou.webawesome.laminar.SharedTypes.ComponentSize
import io.github.nguyenyou.webawesome.laminar.SharedTypes.ThemeVariant

/** Typical events / properties / etc. defined on Shoelace web components. We selectively export them from this object
  * into individual components that define them.
  */
object CommonKeys extends CommonTypes {

  /** Standard sizes */
  object size extends HtmlAttr[ComponentSize]("size", UnionAsStringCodec[ComponentSize]) {

    lazy val small: HtmlAttrSetter[ComponentSize] = size("small")

    lazy val medium: HtmlAttrSetter[ComponentSize] = size("medium")

    lazy val large: HtmlAttrSetter[ComponentSize] = size("large")
  }

  object variant extends HtmlAttr[ThemeVariant]("variant", UnionAsStringCodec[ThemeVariant]) {

    lazy val brand: HtmlAttrSetter[ThemeVariant] = variant("brand")

    lazy val danger: HtmlAttrSetter[ThemeVariant] = variant("danger")

    lazy val neutral: HtmlAttrSetter[ThemeVariant] = variant("neutral")

    lazy val success: HtmlAttrSetter[ThemeVariant] = variant("success")

    lazy val warning: HtmlAttrSetter[ThemeVariant] = variant("warning")

  }
}
