package examples.tabGroup

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
  example7()
}

def example1() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example1")
  if (container != null) {
    render(container, {
      TabGroup()(
        Tab(_.panel := "general")(
          "General"
        ),
        Tab(_.panel := "custom")(
          "Custom"
        ),
        Tab(_.panel := "advanced")(
          "Advanced"
        ),
        Tab(_.panel := "disabled", _.disabled := true)(
          "Disabled"
        ),
        TabPanel(_.name := "general")(
          "This is the general tab panel."
        ),
        TabPanel(_.name := "custom")(
          "This is the custom tab panel."
        ),
        TabPanel(_.name := "advanced")(
          "This is the advanced tab panel."
        ),
        TabPanel(_.name := "disabled")(
          disabled := true,
          "This is the disabled tab panel."
        )
      )
    })
  }
}

def example2() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example2")
  if (container != null) {
    render(container, {
      TabGroup(_.active := "advanced")(
        Tab(_.panel := "general")("General"),
        Tab(_.panel := "custom")("Custom"),
        Tab(_.panel := "advanced")("Advanced"),
        TabPanel(_.name := "general")("This is the general tab panel."),
        TabPanel(_.name := "custom")("This is the custom tab panel."),
        TabPanel(_.name := "advanced")("This is the advanced tab panel.")
      )
    })
  }
}

def example3() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example3")
  if (container != null) {
    render(container, {
      TabGroup(_.placement.bottom)(
        Tab(_.panel := "general")("General"),
        Tab(_.panel := "custom")("Custom"),
        Tab(_.panel := "advanced")("Advanced"),
        Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
        TabPanel(_.name := "general")("This is the general tab panel."),
        TabPanel(_.name := "custom")("This is the custom tab panel."),
        TabPanel(_.name := "advanced")("This is the advanced tab panel."),
        TabPanel(_.name := "disabled")("This is a disabled tab panel.")
      )
    })
  }
}

def example4() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example4")
  if (container != null) {
    render(container, {
      TabGroup(_.placement.start)(
        Tab(_.panel := "general")("General"),
        Tab(_.panel := "custom")("Custom"),
        Tab(_.panel := "advanced")("Advanced"),
        Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
        TabPanel(_.name := "general")("This is the general tab panel."),
        TabPanel(_.name := "custom")("This is the custom tab panel."),
        TabPanel(_.name := "advanced")("This is the advanced tab panel."),
        TabPanel(_.name := "disabled")("This is a disabled tab panel.")
      )
    })
  }
}

def example5() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example5")
  if (container != null) {
    render(container, {
      TabGroup(_.placement.end)(
        Tab(_.panel := "general")("General"),
        Tab(_.panel := "custom")("Custom"),
        Tab(_.panel := "advanced")("Advanced"),
        Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
        TabPanel(_.name := "general")("This is the general tab panel."),
        TabPanel(_.name := "custom")("This is the custom tab panel."),
        TabPanel(_.name := "advanced")("This is the advanced tab panel."),
        TabPanel(_.name := "disabled")("This is a disabled tab panel.")
      )
    })
  }
}

def example6() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example6")
  if (container != null) {
    render(container, {
      TabGroup()(
        Tab(_.panel := "tab-1")("Tab 1"),
        Tab(_.panel := "tab-2")("Tab 2"),
        Tab(_.panel := "tab-3")("Tab 3"),
        Tab(_.panel := "tab-4")("Tab 4"),
        Tab(_.panel := "tab-5")("Tab 5"),
        Tab(_.panel := "tab-6")("Tab 6"),
        Tab(_.panel := "tab-7")("Tab 7"),
        Tab(_.panel := "tab-8")("Tab 8"),
        Tab(_.panel := "tab-9")("Tab 9"),
        Tab(_.panel := "tab-10")("Tab 10"),
        Tab(_.panel := "tab-11")("Tab 11"),
        Tab(_.panel := "tab-12")("Tab 12"),
        Tab(_.panel := "tab-13")("Tab 13"),
        Tab(_.panel := "tab-14")("Tab 14"),
        Tab(_.panel := "tab-15")("Tab 15"),
        Tab(_.panel := "tab-16")("Tab 16"),
        Tab(_.panel := "tab-17")("Tab 17"),
        Tab(_.panel := "tab-18")("Tab 18"),
        Tab(_.panel := "tab-19")("Tab 19"),
        Tab(_.panel := "tab-20")("Tab 20"),
        TabPanel(_.name := "tab-1")("Tab panel 1"),
        TabPanel(_.name := "tab-2")("Tab panel 2"),
        TabPanel(_.name := "tab-3")("Tab panel 3"),
        TabPanel(_.name := "tab-4")("Tab panel 4"),
        TabPanel(_.name := "tab-5")("Tab panel 5"),
        TabPanel(_.name := "tab-6")("Tab panel 6"),
        TabPanel(_.name := "tab-7")("Tab panel 7"),
        TabPanel(_.name := "tab-8")("Tab panel 8"),
        TabPanel(_.name := "tab-9")("Tab panel 9"),
        TabPanel(_.name := "tab-10")("Tab panel 10"),
        TabPanel(_.name := "tab-11")("Tab panel 11"),
        TabPanel(_.name := "tab-12")("Tab panel 12"),
        TabPanel(_.name := "tab-13")("Tab panel 13"),
        TabPanel(_.name := "tab-14")("Tab panel 14"),
        TabPanel(_.name := "tab-15")("Tab panel 15"),
        TabPanel(_.name := "tab-16")("Tab panel 16"),
        TabPanel(_.name := "tab-17")("Tab panel 17"),
        TabPanel(_.name := "tab-18")("Tab panel 18"),
        TabPanel(_.name := "tab-19")("Tab panel 19"),
        TabPanel(_.name := "tab-20")("Tab panel 20")
      )
    })
  }
}

def example7() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#example7")
  if (container != null) {
    render(container, {
      TabGroup(_.activation.manual)(
        Tab(_.panel := "general")("General"),
        Tab(_.panel := "custom")("Custom"),
        Tab(_.panel := "advanced")("Advanced"),
        Tab(_.panel := "disabled", _.disabled := true)("Disabled"),
        TabPanel(_.name := "general")("This is the general tab panel."),
        TabPanel(_.name := "custom")("This is the custom tab panel."),
        TabPanel(_.name := "advanced")("This is the advanced tab panel."),
        TabPanel(_.name := "disabled")("This is a disabled tab panel.")
      )
    })
  }
}
