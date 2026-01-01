package doc

import com.raquo.laminar.api.L.*

def ExampleGroups(children: HtmlElement*) = {
  div(
    display.flex,
    flexDirection.column,
    gap.px(8),
    children
  )
}
