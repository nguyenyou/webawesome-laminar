package doc

import com.raquo.laminar.api.L.*

def Examples(children: HtmlElement*) = {
  div(
    display.flex,
    flexWrap.wrap,
    alignItems.center,
    gap.px(16),
    children
  )
}