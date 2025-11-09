package examples.tree

@main
def app = {
  example1()
  example2()
  example3()
  example4()
  example5()
  example6()
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
      val selectionMode = Var(TreeSelection.single.value)
      
      div(
        cls("space-y-4"),
        Select(
          _.label := "Selection",
          _.value <-- selectionMode,
          _.onInput.mapToValue.map(_.asInstanceOf[SharedTypes.TreeSelection]) --> selectionMode
        )(
          UOption(_.value := TreeSelection.single.value)("Single"),
          UOption(_.value := TreeSelection.multiple.value)("Multiple"),
          UOption(_.value := TreeSelection.leaf.value)("Leaf")
        ),
        Tree(_.selection <-- selectionMode)(
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
      Tree(_.style := "--indent-guide-width: 1px")(
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
    })
  }
}
