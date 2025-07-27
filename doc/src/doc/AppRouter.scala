package doc

import com.raquo.laminar.api.L.*
import com.raquo.waypoint
import com.raquo.waypoint.*
import doc.utils.JsonUtils.*
import io.bullet.borer.*
import io.bullet.borer.derivation.MapBasedCodecs.*
import org.scalajs.dom

import Pages.*
import AppRouter.*
import views.docs.*
import views.HomeView

// Step 1: Define Pages
object Pages {

  sealed trait Page(val title: String, val url: String = "") {
    def path: String = if (url.isEmpty) title.replaceAll(" ", "-").toLowerCase else url
  }

  case object HomePage             extends Page("Home")
  case object NotFoundPage         extends Page("Not Found")
  case object AvatarPage           extends Page("Avatar")
  case object BreadcrumbPage       extends Page("Breadcrumb")
  case object ButtonPage           extends Page("Button")
  case object ButtonGroupPage      extends Page("Button Group")
  case object BadgePage            extends Page("Badge")
  case object CardPage             extends Page("Card")
  case object CheckboxPage         extends Page("Checkbox")
  case object ColorPickerPage      extends Page("Color Picker")
  case object CalloutPage          extends Page("Callout")
  case object DropdownPage         extends Page("Dropdown")
  case object DialogPage           extends Page("Dialog")
  case object DrawerPage           extends Page("Drawer")
  case object DetailsPage          extends Page("Details")
  case object DividerPage          extends Page("Divider")
  case object FormatBytesPage      extends Page("Format Bytes")
  case object FormatDatePage       extends Page("Format Date")
  case object FormatNumberPage     extends Page("Format Number")
  case object MutationObserverPage extends Page("Mutation Observer")
  case object ProgressBarPage      extends Page("Progress Bar")
  case object ProgressRingPage     extends Page("Progress Ring")
  case object InputPage            extends Page("Input")
  case object RadioGroupPage       extends Page("RadioGroup")
  case object SelectPage           extends Page("Select")
  case object SwitchPage           extends Page("Switch")
  case object SpinnerPage          extends Page("Spinner")
  case object SliderPage           extends Page("Slider")
  case object SkeletonPage         extends Page("Skeleton")
  case object TagPage              extends Page("Tag")
  case object PopoverPage          extends Page("Popover")
  case object TreePage             extends Page("Tree")
  case object TextAreaPage         extends Page("TextArea")
  case object TabGroupPage         extends Page("TabGroup")
  case object SplitPanelPage       extends Page("Split Panel")
  case object TooltipPage          extends Page("Tooltip")
  given pageCodec: Codec[Page] = deriveAllCodecs
}

// Step 2: Map Page to View
val pageViews: Signal[HtmlElement] = AppRouter.currentPageSignal.splitMatchOne
  .handleValue(HomePage)(HomeView())
  .handleValue(ButtonPage)(ButtonView()())
  .handleValue(ButtonGroupPage)(ButtonGroupView()())
  .handleValue(AvatarPage)(AvatarView()())
  .handleValue(BadgePage)(BadgeView()())
  .handleValue(BreadcrumbPage)(BreadcrumbView()())
  .handleValue(CalloutPage)(CalloutView()())
  .handleValue(CheckboxPage)(CheckboxView()())
  .handleValue(ColorPickerPage)(ColorPickerView()())
  .handleValue(DialogPage)(DialogView()())
  .handleValue(DropdownPage)(DropdownView()())
  .handleValue(SelectPage)(SelectView()())
  .handleValue(RadioGroupPage)(RadioGroupView()())
  .handleValue(SwitchPage)(SwitchView()())
  .handleValue(TooltipPage)(TooltipView()())
  .handleValue(TagPage)(TagView()())
  .handleValue(DrawerPage)(DrawerView()())
  .handleValue(PopoverPage)(PopoverView()())
  .handleValue(InputPage)(InputView()())
  .handleValue(DetailsPage)(DetailsView()())
  .handleValue(DividerPage)(DividerView()())
  .handleValue(FormatBytesPage)(FormatBytesView()())
  .handleValue(FormatDatePage)(FormatDateView()())
  .handleValue(FormatNumberPage)(FormatNumberView()())
  .handleValue(MutationObserverPage)(MutationObserverView()())
  .handleValue(ProgressBarPage)(ProgressBarView()())
  .handleValue(ProgressRingPage)(ProgressRingView()())
  .handleValue(NotFoundPage)(div("Not Found"))
  .handleValue(TabGroupPage)(TabGroupView()())
  .handleValue(SpinnerPage)(SpinnerView()())
  .handleValue(TextAreaPage)(TextareaView()())
  .handleValue(SliderPage)(SliderView()())
  .handleValue(TreePage)(TreeView()())
  .handleValue(SplitPanelPage)(SplitPanelView()())
  .handleValue(SkeletonPage)(SkeletonView()())
  .handleValue(CardPage)(CardView()())
  .toSignal

// Step 3: Display in Sidebar
val componentsPages: List[Page] = List(
  AvatarPage,
  BadgePage,
  ButtonPage,
  ButtonGroupPage,
  BreadcrumbPage,
  CalloutPage,
  CheckboxPage,
  ColorPickerPage,
  DialogPage,
  DropdownPage,
  SelectPage,
  RadioGroupPage,
  SwitchPage,
  TooltipPage,
  DrawerPage,
  PopoverPage,
  InputPage,
  TabGroupPage,
  SpinnerPage,
  TextAreaPage,
  TagPage,
  DetailsPage,
  DividerPage,
  FormatBytesPage,
  FormatDatePage,
  FormatNumberPage,
  MutationObserverPage,
  ProgressBarPage,
  ProgressRingPage,
  SliderPage,
  TreePage,
  SplitPanelPage,
  SkeletonPage,
  CardPage
).sortBy(_.getClass.getSimpleName.slice(0, 3))

// Step 4: Map URL to Page
object AppRouter
    extends waypoint.Router[Page](
      routes = List(
        Route.static(HomePage, root / endOfSegments),
        Route
          .static(
            ButtonPage,
            root / ButtonPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ButtonGroupPage,
            root / ButtonGroupPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            BadgePage,
            root / BadgePage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            CalloutPage,
            root / CalloutPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            AvatarPage,
            root / AvatarPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            BreadcrumbPage,
            root / BreadcrumbPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            CardPage,
            root / CardPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            CheckboxPage,
            root / CheckboxPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ColorPickerPage,
            root / ColorPickerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DropdownPage,
            root / DropdownPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DialogPage,
            root / DialogPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DrawerPage,
            root / DrawerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DetailsPage,
            root / DetailsPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DividerPage,
            root / DividerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            FormatBytesPage,
            root / FormatBytesPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            FormatDatePage,
            root / FormatDatePage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            FormatNumberPage,
            root / FormatNumberPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            MutationObserverPage,
            root / MutationObserverPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ProgressBarPage,
            root / ProgressBarPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ProgressRingPage,
            root / ProgressRingPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            InputPage,
            root / InputPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            RadioGroupPage,
            root / RadioGroupPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SelectPage,
            root / SelectPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SwitchPage,
            root / SwitchPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SliderPage,
            root / SliderPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SkeletonPage,
            root / SkeletonPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TagPage,
            root / TagPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            PopoverPage,
            root / PopoverPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TreePage,
            root / TreePage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TooltipPage,
            root / TooltipPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TextAreaPage,
            root / TextAreaPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TabGroupPage,
            root / TabGroupPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SpinnerPage,
            root / SpinnerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SplitPanelPage,
            root / SplitPanelPage.path / endOfSegments,
            "/docs"
          )
      ),
      getPageTitle = page => s"${page.title} | WebAwesome Laminar", // displayed in the browser tab next to favicon
      serializePage = page =>
        Json
          .encode(page)
          .toUtf8String, // serialize page data for storage in History API log
      deserializePage = pageStr => Json.decodeString(pageStr).to[Page].value, // deserialize the above
      routeFallback = _ => NotFoundPage
    ) {

  currentPageSignal.foreach { _ =>
    // Reset scroll position (see Waypoint docs for caveats / more details)
    dom.window.scrollTo(x = 0, y = 0)
  }(using
    owner
  )

}
