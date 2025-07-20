package doc.views

import com.raquo.laminar.api.L.*
import doc.AppRouter
import doc.Pages.ButtonPage
import doc.views.docs.ExampleView

object HomeView extends ExampleView("Home") {

  override def playground: HtmlElement = {
    div(
    )
  }
  override def component: HtmlElement = {
    div(
      onMountCallback { _ =>
        AppRouter.pushState(ButtonPage)
      }
    )
  }

}
