package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.L
import com.raquo.laminar.api.L.*
import com.raquo.laminar.codecs.*
import com.raquo.laminar.defs.styles.traits as s
import com.raquo.laminar.defs.styles.units as u
import com.raquo.laminar.keys
import com.raquo.laminar.keys.DerivedStyleProp
import com.raquo.laminar.modifiers.KeySetter.StyleSetter
import org.scalajs.dom

// Custom codec for union types - accepts any union type but encodes as string
object UnionAsStringCodec {
  def apply[T <: String]: Codec[T, String] = new Codec[T, String] {
    override def encode(scalaValue: T): String = scalaValue
    override def decode(domValue: String): T   = domValue.asInstanceOf[T] // scalafix:ok
  }
}

trait CommonTypes {

  protected type DSP[V] = DerivedStyleProp[V]

  protected type SS = StyleSetter

  protected def eventProp[Ev <: dom.Event](name: String): EventProp[Ev] = L.eventProp(name)

  protected def stringProp(name: String): HtmlProp[String, ?] = L.htmlProp(name, StringAsIsCodec)

  protected def intProp(name: String): HtmlProp[Int, ?] = L.htmlProp(name, IntAsIsCodec)

  protected def doubleProp(name: String): HtmlProp[Double, ?] = L.htmlProp(name, DoubleAsIsCodec)

  protected def boolProp(name: String): HtmlProp[Boolean, ?] = L.htmlProp(name, BooleanAsIsCodec)

  protected def asIsProp[V](name: String): HtmlProp[V, ?] = L.htmlProp(name, AsIsCodec[V]())

  protected def boolAttr(name: String): HtmlAttr[Boolean] = {
    L.htmlAttr(name, BooleanAsAttrPresenceCodec)
  }

  protected def intAttr(name: String): HtmlAttr[Int] = {
    L.htmlAttr(name, IntAsStringCodec)
  }

  protected def doubleAttr(name: String): HtmlAttr[Double] = {
    L.htmlAttr(name, DoubleAsStringCodec)
  }

  protected def stringAttr(name: String): HtmlAttr[String] = {
    L.htmlAttr(name, StringAsIsCodec)
  }

  // Custom attribute constructor for union types
  protected def unionAttr[T <: String](name: String): HtmlAttr[T] = new HtmlAttr(name, UnionAsStringCodec[T])

  protected def lengthStyle(name: String): StyleProp[String] & u.Length[DSP, Int] = {
    new StyleProp[String](name) with u.Length[DSP, Int]
  }

  protected def colorStyle(name: String): StyleProp[String] & s.Color & u.Color[SS, DSP] = {
    new StyleProp[String](name) with s.Color with u.Color[SS, DSP]
  }

  protected def timeStyle(key: String): StyleProp[String] & u.Time[DSP] = {
    new StyleProp[String](key) with u.Time[DSP]
  }

  protected def lineStyle(key: String): StyleProp[String] & s.Line = {
    new StyleProp[String](key) with s.Line
  }

  protected def doubleStyle(key: String): StyleProp[Double] = {
    new StyleProp[Double](key)
  }

  protected def intStyle(key: String): StyleProp[Int] = {
    new StyleProp[Int](key)
  }
}
