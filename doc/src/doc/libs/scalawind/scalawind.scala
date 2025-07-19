package doc.libs.scalawind

import com.raquo.laminar.api.L
import com.raquo.laminar.nodes.ReactiveHtmlElement
import org.scalajs.dom.HTMLHeadingElement

import scala.annotation.unused
import scala.language.implicitConversions
import scala.quoted.*

// Create a priority hierarchy for implicit conversions
trait LowPriorityImplicits {
  implicit inline def laminarTailwind(inline tailwind: Tailwind): L.HtmlMod = {
    ${ laminarTailwindImpl('tailwind) }
  }

  implicit inline def laminarSvgTailwind(inline tailwind: Tailwind): L.SvgMod = {
    ${ laminarSvgTailwindImpl('tailwind) }
  }
}

trait HighPriorityImplicits extends LowPriorityImplicits {
  implicit inline def laminarHtmlHeading(
      inline tailwind: Tailwind
  ): L.Modifier[ReactiveHtmlElement[HTMLHeadingElement]] = {
    ${ toHtmlHeadingModImpl('tailwind) }
  }
}

// Make the companion object extend the priority hierarchy
object Tailwind extends HighPriorityImplicits {
  def apply(): Tailwind = new Tailwind()

  implicit inline def sw(inline tailwind: Tailwind): String =
    ${ swImpl('tailwind) }
}

extension (inline tailwind: Tailwind) {
  inline def toHtmlMod: L.HtmlMod =
    ${ laminarTailwindImpl('tailwind) }
  inline def toSvgMod: L.SvgMod =
    ${ laminarSvgTailwindImpl('tailwind) }
  inline def <--(inline boolSignal: L.Signal[Boolean]): L.HtmlMod =
    ${ boolSignalClsImpl('tailwind, 'boolSignal) }
  inline def :=(inline bool: Boolean): L.HtmlMod =
    ${ boolClsImpl('tailwind, 'bool) }
}

def boolSignalClsImpl(tailwindExpr: Expr[Tailwind], boolSignal: Expr[L.Signal[Boolean]])(using
    Quotes
): Expr[L.HtmlMod] = {
  val value = swImpl(tailwindExpr).valueOrAbort
  '{ L.cls(${ Expr(value) }) <-- ${ boolSignal } }
}

def boolClsImpl(tailwindExpr: Expr[Tailwind], bool: Expr[Boolean])(using Quotes): Expr[L.HtmlMod] = {
  val value = swImpl(tailwindExpr).valueOrAbort
  '{ L.cls(${ Expr(value) }) := ${ bool } }
}

def laminarTailwindImpl(
    tailwindExpr: Expr[Tailwind]
)(using
    Quotes
): Expr[L.HtmlMod] = {
  val value = swImpl(tailwindExpr).valueOrAbort
  '{ L.cls := ${ Expr(value) } }
}

def laminarSvgTailwindImpl(
    tailwindExpr: Expr[Tailwind]
)(using
    Quotes
): Expr[L.SvgMod] = {
  val value = swImpl(tailwindExpr).valueOrAbort
  '{ L.svg.className := ${ Expr(value) } }
}

def toHtmlHeadingModImpl(
    tailwindExpr: Expr[Tailwind]
)(using Quotes): Expr[L.Modifier[ReactiveHtmlElement[HTMLHeadingElement]]] = {
  val value = swImpl(tailwindExpr).valueOrAbort
  '{ L.cls := ${ Expr(value) } }
}

extension (inline tailwind: Tailwind) {
  inline def css: String =
    ${ swImpl('tailwind) }
}

def convertCamelCaseToSnakeCase(methodName: String): String = {

  val units = List(
    "px",
    "pc",
    "vh",
    "tx"
  )

  val step1 = "[A-Z]".r.replaceAllIn(
    methodName,
    m => s"_${m.group(0).toLowerCase}"
  )

  val step2 = "([a-z]+)([0-9]+)".r.replaceAllIn(
    step1,
    m => {
      val p1 = m.group(1)
      val p2 = m.group(2)
      if (units.contains(p1)) {
        m.group(0)
      } else {
        s"${p1}_${p2}"
      }
    }
  )

  val step3 = "_([a-z]+)([0-9]+)".r.replaceAllIn(
    step2,
    m => {
      val p1 = m.group(1)
      val p2 = m.group(2)
      if (units.contains(p1)) {
        m.group(0)
      } else {
        s"_${p1}_${p2}"
      }
    }
  )

  step3.toLowerCase
}

def toSnakeCase(methodName: String): String = {
  if (methodName.matches("^px[0-9]+$")) {
    s"px_${methodName.substring(2)}"
  } else {
    convertCamelCaseToSnakeCase(methodName)
  }
}

def methodNameToTailwindClass(methodName: String) = {
  toSnakeCase(methodName).replace("_", "-")
}

def swImpl(tailwindExpr: Expr[Tailwind])(using Quotes): Expr[String] = {
  import quotes.reflect.*
  @SuppressWarnings(
    Array(
      "scalafix:DisableSyntax.var"
    )
  )
  def extractClassNames(term: Term, prefix: String = "", important: Boolean = false): List[String] = {
    var stack      = List((term, prefix, important))
    var classNames = List.empty[String]

    while (stack.nonEmpty) {
      stack.headOption.foreach { (currentTerm, currentPrefix, currentImportant) =>
        stack = stack.drop(1)

        currentTerm match {
          case Apply(Select(inner, "important"), List(styles)) =>
            stack = (styles, currentPrefix, true) :: stack
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Inlined(_, _, inner) =>
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Select(inner, name) =>
            val methodName = methodNameToTailwindClass(name)
            val className  = s"$currentPrefix${if (currentImportant) "!" else ""}${methodName}"
            classNames = classNames :+ className
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Ident("tw") =>
          // No action needed, just continue processing the remaining stack
          case Apply(Ident(name), List(arg)) =>
            val methodName = methodNameToTailwindClass(name)
            val className  = s"$currentPrefix${if (currentImportant) "!" else ""}${methodName}"
            classNames = classNames :+ className
            stack = (arg, currentPrefix, currentImportant) :: stack
          case Apply(Select(inner, name), List(Literal(StringConstant(value)))) if name == "raw" =>
            val className = s"$currentPrefix${if (currentImportant) "!" else ""}$value"
            classNames = classNames :+ className
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Apply(Select(inner, name), List(Literal(StringConstant(opacity)))) if name.endsWith("$") =>
            val methodName = methodNameToTailwindClass(name.stripSuffix("$"))
            val className  = s"$currentPrefix${if (currentImportant) "!" else ""}${methodName}/${opacity}"
            classNames = classNames :+ className
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Apply(Select(inner, name), List(Literal(StringConstant(value)))) =>
            val methodName = methodNameToTailwindClass(name)
            val className  = s"$currentPrefix${if (currentImportant) "!" else ""}${methodName}[$value]"
            classNames = classNames :+ className
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Apply(Apply(Ident(name), args), List(Literal(StringConstant(value)))) =>
            val methodName = methodNameToTailwindClass(name)
            val className  = s"$currentPrefix${if (currentImportant) "!" else ""}${methodName}[$value]"
            classNames = classNames :+ className
            stack = args.map(arg => (arg, currentPrefix, currentImportant)) ++ stack
          case Apply(Select(Ident("tw"), name), List(inner)) =>
            val methodName = methodNameToTailwindClass(name)
            stack = (inner, s"$currentPrefix${methodName}:", currentImportant) :: stack
          case Apply(Select(inner, "variant"), List(Literal(StringConstant(selector)), styles)) =>
            val variantPrefix = s"$currentPrefix[$selector]:" // Use the selector as provided
            val styleClasses =
              extractClassNames(styles, variantPrefix, currentImportant) // Extract classes with the variant prefix
            classNames = classNames ++ styleClasses
            stack = (inner, currentPrefix, currentImportant) :: stack
          case Apply(Select(inner, name), args) =>
            val methodName   = methodNameToTailwindClass(name)
            val innerClasses = args.flatMap(arg => extractClassNames(arg, s"$currentPrefix${methodName}:"))
            classNames = classNames ++ innerClasses
            stack = (inner, currentPrefix, currentImportant) :: stack
          case unexpectedTerm =>
            report.errorAndAbort(s"Unexpected term: $unexpectedTerm")
        }
      }
    }

    classNames
  }

  val term            = tailwindExpr.asTerm
  val classList       = extractClassNames(term).reverse
  val combinedClasses = classList.mkString(" ")
  Expr(combinedClasses)
}

val tw = Tailwind()

case class Tailwind() {
  def hover(@unused tw: Tailwind)     = this
  def focus(@unused tw: Tailwind)     = this
  def active(@unused tw: Tailwind)    = this
  def sm(@unused tw: Tailwind)        = this
  def md(@unused tw: Tailwind)        = this
  def lg(@unused tw: Tailwind)        = this
  def xl(@unused tw: Tailwind)        = this
  def _2xl(@unused tw: Tailwind)      = this
  def important(@unused tw: Tailwind) = this
  def raw(@unused tw: String)         = this
  def min_h_(@unused tw: String)      = this
  def w_(@unused tw: String)          = this
  def h_(@unused tw: String)          = this
  def grid_cols_(@unused tw: String)  = this
  def group                           = this
  def flex                            = this
  def spaceBetween                    = this
  def flex1                           = this
  def itemsEnd                        = this
  def flexCol                         = this
  def minHSvh                         = this
  def justifyCenter                   = this
  def justifyBetween                  = this
  def border_all                      = this
  def size10                          = this
  def relative                        = this
  def borderGrid                      = this
  def borderBorder                    = this
  def containerWrapper                = this
  def noScrollbar                     = this
  def sidebarItemHover                = this
  def sticky                          = this
  def borderB                         = this
  def borderL                         = this
  def borderR                         = this
  def borderT                         = this
  def container                       = this
  def mr4                             = this
  def mr6                             = this
  def h6                              = this
  def h14                             = this
  def w6                              = this
  def p2                              = this
  def py10                            = this
  def objectContain                   = this
  def inlineBlock                     = this
  def fontBold                        = this
  def mlAuto                          = this
  def itemsCenter                     = this
  def gap2                            = this
  def gap4                            = this
  def gap6                            = this
  def gap10                           = this
  def itemsStart                      = this
  def grid                            = this
  def gridCols2                       = this
  def py0                             = this
  def py4                             = this
  def py6                             = this
  def pr3                             = this
  def py8                             = this
  def py12                            = this
  def mxAuto                          = this
  def wFull                           = this
  def minW0                           = this
  def maxW2xl                         = this
  def textBase                        = this
  def fontLight                       = this
  def textForeground                  = this
  def maxW5xl                         = this
  def hidden                          = this
  def textSm                          = this
  def truncate                        = this
  def textXs                          = this
  def block                           = this
  def top0                            = this
  def top20                           = this
  def _mt6                            = this
  def pt4                             = this
  def textBalance                     = this
  def textCenter                      = this
  def textLeft                        = this
  def leadingLoose                    = this
  def justifyEnd                      = this
  def z50                             = this
  def bgOpacity95                     = this
  def backdropBlur                    = this
  def absolute                        = this
  def opacity0                        = this
  def opacity10                       = this
  def opacity50                       = this
  def opacity80                       = this
  def opacity100                      = this
  def border0                         = this
  def rounded                         = this
  def shadowSm                        = this
  def shadowMd                        = this
  def transitionAll                   = this
  def duration300                     = this
  def `gap_0.5`                       = this
  def easeOut                         = this
  def textWhite                       = this
  def `h_0.5`                         = this
  def `_bottom_1.5`                   = this
  def spaceY2                         = this
  def h9                              = this
  def transitionColors                = this
  def m0                              = this
  def p0                              = this
  def whitespacePreWrap               = this
  def roundedMd                       = this
  def roundedXl                       = this
  def uppercase                       = this
  def pl1                             = this
  def overflowHidden                  = this
  def inlineFlex                      = this
  def cursorPointer                   = this
  def w9                              = this
  def w8                              = this
  def borderNone                      = this
  def outlineNone                     = this
  def right6                          = this
  def top4                            = this
  def bgNeutral800                    = this
  def px3                             = this
  def py1                             = this
  def p3                              = this
  def mb4                             = this
  def mb2                             = this
  def fontSemibold                    = this
  def textLg                          = this
  def textXl                          = this
  def px8                             = this
  def gap1                            = this
  def mb5                             = this
  def z10                             = this
  def p10                             = this
  def border                          = this
  def hFull                           = this
  def px1                             = this
  def p1                              = this
  def overflowXVisible                = this
  def overflowYAuto                   = this
  def fontMedium                      = this
  def h8                              = this
  def roundedLg                       = this
  def fontNormal                      = this
  def px2                             = this
  def px4                             = this
  def gridFlowRow                     = this
  def ml2                             = this
  def shrink0                         = this
  def autoRowsMax                     = this
  def overflowAuto                    = this
  def pr4                             = this
  def fixed                           = this
  def top14                           = this
  def z30                             = this
  def ml0                             = this
  def ml4                             = this
  def ml6                             = this
  def ml8                             = this
  def p4                              = this
  def spaceY4                         = this
  def flexWrap                        = this
  def spaceX2                         = this
  def spaceX4                         = this
  def textGreen500                    = this
  def textRed500                      = this
  def textOrange500                   = this
  def p6                              = this
  def text2xl                         = this
  def text3xl                         = this
  def text4xl                         = this
  def leadingTight                    = this
  def trackingTighter                 = this
  def mt0                             = this
  def mt2                             = this
  def mt4                             = this
  def textGray500                     = this
  def pl4                             = this
  def pl10                            = this
  def pl12                            = this
  def pl14                            = this
  def right0                          = this
  def _right2                         = this
  def bottom1                         = this
  def bottom0                         = this
  def left0                           = this
  def _bottom2                        = this
  def _bottom4                        = this
  def fontMono                        = this
  def ml1                             = this
  def maxW3xl                         = this
  def maxW4xl                         = this
  def py2                             = this
  def bgBlack                         = this
  def bgWhite                         = this
  def bgBackground                    = this
  def underline                       = this
  def py3                             = this
  def pl3                             = this
  def pr5                             = this
}
