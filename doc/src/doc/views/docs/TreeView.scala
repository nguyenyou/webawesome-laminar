package doc.views.docs

import com.raquo.laminar.api.L.*
import doc.components.Demo
import doc.components.Locator.withLocator
import doc.libs.scalawind.*
import doc.macros.Source
import io.github.nguyenyou.webawesome.laminar.*
import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
import io.github.nguyenyou.webawesome.laminar.SharedTypes

case class TreeView()
    extends ExampleView(
      "Tree",
      Some("https://webawesome.com/docs/components/tree/")
    ) {
  def playground: HtmlElement = {
    Demo(
      content = Source.annotate {
        Tree(_.selection.multiple)(
          TreeItem()(
            "Parent Node",
            TreeItem(_.selected := true)("Child Node 1"),
            TreeItem()(
              "Child Node 2",
              TreeItem()("Child Node 2 - 1"),
              TreeItem()("Child Node 2 - 2")
            )
          )
        )
      }
    )().withLocator
  }

  def component: HtmlElement = {
    div(
      Demo(
        title = "Basic Tree",
        content = Source.annotate {
          Tree()(
            TreeItem()(
              "Deciduous",
              TreeItem()("Birch"),
              TreeItem()(
                "Maple",
                TreeItem()("Field maple"),
                TreeItem()("Red maple"),
                TreeItem()("Sugar maple")
              ),
              TreeItem()("Oak")
            ),
            TreeItem()(
              "Coniferous",
              TreeItem()("Cedar"),
              TreeItem()("Pine"),
              TreeItem()("Spruce")
            ),
            TreeItem()(
              "Non-trees",
              TreeItem()("Bamboo"),
              TreeItem()("Cactus"),
              TreeItem()("Fern")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Selection Modes",
        description = """
        | The `selection` attribute lets you change the selection behavior of the tree.
        | 
        | - Use `single` to allow the selection of a single item (default).
        | - Use `multiple` to allow the selection of multiple items.
        | - Use `leaf` to only allow leaf nodes to be selected.
        """.stripMargin,
        content = Source.annotate {
          val selectionMode = Var(TreeSelection.single.value)

          div(
            tw.spaceY4,
            Select(
              _.label := "Selection",
              _.value <-- selectionMode,
              _.onInput.mapToValue.map(_.asInstanceOf[SharedTypes.TreeSelection]) --> selectionMode
            )(
              UOption(_.value := TreeSelection.single.value)("Single"),
              UOption(_.value := TreeSelection.multiple.value)("Multiple"),
              UOption(_.value := TreeSelection.leaf.value)("Leaf")
            ),
            Tree(
              _.selection <-- selectionMode
            )(
              inContext { ctx =>
                selectionMode --> Observer { _ =>
                  ctx.ref.querySelectorAll("wa-tree-item").foreach { item =>
                    item.asInstanceOf[TreeItem.Ref].selected = false
                  }
                }
              },
              TreeItem()(
                "Item 1",
                TreeItem()(
                  "Item A",
                  TreeItem()("Item Z"),
                  TreeItem()("Item Y"),
                  TreeItem()("Item X")
                ),
                TreeItem()("Item B"),
                TreeItem()("Item C")
              ),
              TreeItem()("Item 2"),
              TreeItem()("Item 3")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Showing Indent Guides",
        description = """
        | Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, 
        | using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.
        """.stripMargin,
        content = Source.annotate {
          Tree(
            _.style := "--indent-guide-width: 1px"
          )(
            TreeItem(_.expanded := true)(
              "Deciduous",
              TreeItem()("Birch"),
              TreeItem(_.expanded := true)(
                "Maple",
                TreeItem()("Field maple"),
                TreeItem()("Red maple"),
                TreeItem()("Sugar maple")
              ),
              TreeItem()("Oak")
            ),
            TreeItem()(
              "Coniferous",
              TreeItem()("Cedar"),
              TreeItem()("Pine"),
              TreeItem()("Spruce")
            ),
            TreeItem()(
              "Non-trees",
              TreeItem()("Bamboo"),
              TreeItem()("Cactus"),
              TreeItem()("Fern")
            )
          )
        }
      )().withLocator,
      Demo(
        title = "Customizing the Expand and Collapse Icons",
        description = """
        | Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. 
        | To disable the animation, override the `rotate` property on the `expand-button` part as shown below.
        """.stripMargin,
        content = Source.annotate {
          div(
            styleTag("""
            .custom-icons wa-tree-item::part(expand-button) {
              /* Disable the expand/collapse animation */
              rotate: none;
            }
            """),
            Tree(
              _.slots.expandIcon(Icon(_.name := "square-plus", _.variant := "solid")()),
              _.slots.collapseIcon(Icon(_.name := "square-minus", _.variant := "solid")())
            )(
              cls("custom-icons"),
              TreeItem()(
                "Deciduous",
                TreeItem()("Birch"),
                TreeItem()(
                  "Maple",
                  TreeItem()("Field maple"),
                  TreeItem()("Red maple"),
                  TreeItem()("Sugar maple")
                ),
                TreeItem()("Oak")
              ),
              TreeItem()(
                "Coniferous",
                TreeItem()("Cedar"),
                TreeItem()("Pine"),
                TreeItem()("Spruce")
              ),
              TreeItem()(
                "Non-trees",
                TreeItem()("Bamboo"),
                TreeItem()("Cactus"),
                TreeItem()("Fern")
              )
            )
          )
        }
      )().withLocator,
      Demo(
        title = "With Icons",
        description = "Decorative icons can be used before labels to provide hints for each node.",
        content = Source.annotate {
          Tree()(
            TreeItem(_.expanded := true)(
              Icon(_.name := "folder", _.variant := "regular")(),
              "Documents",
              TreeItem()(
                Icon(_.name := "folder", _.variant := "regular")(),
                "Photos",
                TreeItem()(
                  Icon(_.name := "image", _.variant := "regular")(),
                  "birds.jpg"
                ),
                TreeItem()(
                  Icon(_.name := "image", _.variant := "regular")(),
                  "kitten.jpg"
                ),
                TreeItem()(
                  Icon(_.name := "image", _.variant := "regular")(),
                  "puppy.jpg"
                )
              ),
              TreeItem()(
                Icon(_.name := "folder", _.variant := "regular")(),
                "Writing",
                TreeItem()(
                  Icon(_.name := "file", _.variant := "regular")(),
                  "draft.txt"
                ),
                TreeItem()(
                  Icon(_.name := "file-pdf", _.variant := "regular")(),
                  "final.pdf"
                ),
                TreeItem()(
                  Icon(_.name := "file-lines", _.variant := "regular")(),
                  "sales.xls"
                )
              )
            )
          )
        }
      )().withLocator
    )
  }
}
