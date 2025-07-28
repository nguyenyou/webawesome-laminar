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
  case object AnimationPage        extends Page("Animation")
  case object BreadcrumbPage       extends Page("Breadcrumb")
  case object ButtonPage           extends Page("Button")
  case object ButtonGroupPage      extends Page("Button Group")
  case object BadgePage            extends Page("Badge")
  case object CardPage             extends Page("Card")
  case object CarouselPage         extends Page("Carousel")
  case object CheckboxPage         extends Page("Checkbox")
  case object ColorPickerPage      extends Page("Color Picker")
  case object CalloutPage          extends Page("Callout")
  case object ComparisonPage       extends Page("Comparison")
  case object CopyButtonPage       extends Page("Copy Button")
  case object DropdownPage         extends Page("Dropdown")
  case object DialogPage           extends Page("Dialog")
  case object DrawerPage           extends Page("Drawer")
  case object DetailsPage          extends Page("Details")
  case object DividerPage          extends Page("Divider")
  case object FormatBytesPage      extends Page("Format Bytes")
  case object FormatDatePage       extends Page("Format Date")
  case object FormatNumberPage     extends Page("Format Number")
  case object MutationObserverPage extends Page("Mutation Observer")
  case object RelativeTimePage     extends Page("Relative Time")
  case object ProgressBarPage      extends Page("Progress Bar")
  case object ProgressRingPage     extends Page("Progress Ring")
  case object PopupPage            extends Page("Popup")
  case object QrCodePage           extends Page("QR Code")
  case object IconPage             extends Page("Icon")
  case object InputPage            extends Page("Input")
  case object IncludePage          extends Page("Include")
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
  case object RatingPage           extends Page("Rating")
  case object ResizeObserverPage   extends Page("Resize Observer")
  case object ScrollerPage         extends Page("Scroller")
  case object ZoomableFramePage    extends Page("Zoomable Frame")
  given pageCodec: Codec[Page] = deriveAllCodecs
}

// Step 2: Map Page to View
val pageViews: Signal[HtmlElement] = AppRouter.currentPageSignal.splitMatchOne
  .handleValue(HomePage)(HomeView())
  .handleValue(AnimationPage)(AnimationView()())
  .handleValue(ButtonPage)(ButtonView()())
  .handleValue(ButtonGroupPage)(ButtonGroupView()())
  .handleValue(AvatarPage)(AvatarView()())
  .handleValue(BadgePage)(BadgeView()())
  .handleValue(BreadcrumbPage)(BreadcrumbView()())
  .handleValue(CalloutPage)(CalloutView()())
  .handleValue(ComparisonPage)(ComparisonView()())
  .handleValue(CopyButtonPage)(CopyButtonView()())
  .handleValue(CarouselPage)(CarouselView()())
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
  .handleValue(PopupPage)(PopupView()())
  .handleValue(IconPage)(IconView()())
  .handleValue(InputPage)(InputView()())
  .handleValue(IncludePage)(IncludeView()())
  .handleValue(DetailsPage)(DetailsView()())
  .handleValue(DividerPage)(DividerView()())
  .handleValue(FormatBytesPage)(FormatBytesView()())
  .handleValue(FormatDatePage)(FormatDateView()())
  .handleValue(FormatNumberPage)(FormatNumberView()())
  .handleValue(MutationObserverPage)(MutationObserverView()())
  .handleValue(RelativeTimePage)(RelativeTimeView()())
  .handleValue(ProgressBarPage)(ProgressBarView()())
  .handleValue(ProgressRingPage)(ProgressRingView()())
  .handleValue(QrCodePage)(QrCodeView()())
  .handleValue(NotFoundPage)(div("Not Found"))
  .handleValue(TabGroupPage)(TabGroupView()())
  .handleValue(SpinnerPage)(SpinnerView()())
  .handleValue(TextAreaPage)(TextareaView()())
  .handleValue(SliderPage)(SliderView()())
  .handleValue(TreePage)(TreeView()())
  .handleValue(SplitPanelPage)(SplitPanelView()())
  .handleValue(SkeletonPage)(SkeletonView()())
  .handleValue(CardPage)(CardView()())
  .handleValue(RatingPage)(RatingView()())
  .handleValue(ResizeObserverPage)(ResizeObserverView()())
  .handleValue(ScrollerPage)(ScrollerView()())
  .handleValue(ZoomableFramePage)(ZoomableFrameView()())
  .toSignal

// Step 3: Display in Sidebar
val componentsPages: List[Page] = List(
  AnimationPage,
  AvatarPage,
  BadgePage,
  ButtonPage,
  ButtonGroupPage,
  BreadcrumbPage,
  CalloutPage,
  ComparisonPage,
  CopyButtonPage,
  CarouselPage,
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
  PopupPage,
  IconPage,
  InputPage,
  IncludePage,
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
  RelativeTimePage,
  ProgressBarPage,
  ProgressRingPage,
  QrCodePage,
  SliderPage,
  TreePage,
  SplitPanelPage,
  SkeletonPage,
  CardPage,
  RatingPage,
  ResizeObserverPage,
  ScrollerPage,
  ZoomableFramePage
).sortBy(_.getClass.getSimpleName.slice(0, 3))

// Step 4: Map URL to Page
object AppRouter
    extends waypoint.Router[Page](
      routes = List(
        Route.static(HomePage, root / endOfSegments),
        Route
          .static(
            AnimationPage,
            root / AnimationPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ButtonPage,
            root / ButtonPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ButtonGroupPage,
            root / ButtonGroupPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            BadgePage,
            root / BadgePage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            CalloutPage,
            root / CalloutPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ComparisonPage,
            root / ComparisonPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            CopyButtonPage,
            root / CopyButtonPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            CarouselPage,
            root / CarouselPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            AvatarPage,
            root / AvatarPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            BreadcrumbPage,
            root / BreadcrumbPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            CardPage,
            root / CardPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            CheckboxPage,
            root / CheckboxPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ColorPickerPage,
            root / ColorPickerPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            DropdownPage,
            root / DropdownPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            DialogPage,
            root / DialogPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            DrawerPage,
            root / DrawerPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            DetailsPage,
            root / DetailsPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            DividerPage,
            root / DividerPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            FormatBytesPage,
            root / FormatBytesPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            FormatDatePage,
            root / FormatDatePage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            FormatNumberPage,
            root / FormatNumberPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            MutationObserverPage,
            root / MutationObserverPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            RelativeTimePage,
            root / RelativeTimePage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ProgressBarPage,
            root / ProgressBarPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ProgressRingPage,
            root / ProgressRingPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            QrCodePage,
            root / QrCodePage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            PopupPage,
            root / PopupPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            IconPage,
            root / IconPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            InputPage,
            root / InputPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            IncludePage,
            root / IncludePage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            RadioGroupPage,
            root / RadioGroupPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            SelectPage,
            root / SelectPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            SwitchPage,
            root / SwitchPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            SliderPage,
            root / SliderPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            SkeletonPage,
            root / SkeletonPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            TagPage,
            root / TagPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            PopoverPage,
            root / PopoverPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            TreePage,
            root / TreePage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            TooltipPage,
            root / TooltipPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            TextAreaPage,
            root / TextAreaPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            TabGroupPage,
            root / TabGroupPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            SpinnerPage,
            root / SpinnerPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            SplitPanelPage,
            root / SplitPanelPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            RatingPage,
            root / RatingPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ResizeObserverPage,
            root / ResizeObserverPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ScrollerPage,
            root / ScrollerPage.path / endOfSegments,
            "/docs/components"
          ),
        Route
          .static(
            ZoomableFramePage,
            root / ZoomableFramePage.path / endOfSegments,
            "/docs/components"
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
