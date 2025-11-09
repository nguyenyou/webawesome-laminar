package doc

import com.raquo.laminar.api.L.*

def Examples(children: HtmlElement*) = {
  div(
    display.flex,
    flexWrap.wrap,
    gap.px(16),
    padding.px(8),
    children
  )
}