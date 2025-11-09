package doc

import com.raquo.laminar.api.L.*

def VerticalExamples(children: HtmlElement*) = {
  div(
    display.flex,
    flexWrap.wrap,
    flexDirection.column,
    gap.px(16),
    children
  )
}