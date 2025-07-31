package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*

case class SwitchView()
    extends ExampleView(
      "Switch",
      Some("https://webawesome.com/docs/components/switch/")
    ) {
  def playground: HtmlElement = {
    Demo(
      center = true,
      content = Source.annotate {
        val checked = Var(true)
        Switch(
          _.defaultChecked <-- checked,
          _.controlled(
            _.checked <-- checked,
            _.onInput.mapToChecked --> checked
          )
        )("Switch")
      }
    )().withLocator
  }
  def component: HtmlElement = {
    div(
      Demo(
        title = "Checked",
        description = "Use the `defaultChecked` attribute to activate the switch.",
        content = Source.annotate {
          Switch(_.defaultChecked := true)("Switch")
        }
      )().withLocator,
      Demo(
        title = "Disabled",
        description = "Use the `disabled` attribute to disable the switch.",
        content = Source.annotate {
          Switch(_.disabled := true)("Switch")
        }
      )().withLocator,
      Demo(
        title = "Size",
        description = "Use the `size` attribute to change a switch's size.",
        content = Source.annotate {
          div(
            tw.flex.flexCol.gap2,
            // <show>
            Switch(_.size.small)("Switch"),
            Switch(_.size.medium)("Switch"),
            Switch(_.size.large)("Switch")
            // </show>
          )
        }
      )().withLocator,
      Demo(
        title = "Hint",
        description =
          "Add descriptive hint to a switch with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.",
        content = Source.annotate {
          Switch(_.hint := "What should the user know about the switch?")("Switch")
        }
      )().withLocator,
      Demo(
        title = "Custom Styles",
        description = "Use the available custom properties to change how the switch is styled..",
        content = Source.annotate {
          Switch(
            _.style := "--width: 80px; --height: 40px; --thumb-size: 36px;"
          )("Really big")
        }
      )().withLocator
    )
  }

}
