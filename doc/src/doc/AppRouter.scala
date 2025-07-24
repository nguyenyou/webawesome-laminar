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

  case object HomePage                 extends Page("Home")
  case object NotFoundPage             extends Page("Not Found")
  case object AvatarPage               extends Page("Avatar")
  case object AvatarGroupPage          extends Page("AvatarGroup")
  case object BarPage                  extends Page("Bar")
  case object BreadcrumbPage           extends Page("Breadcrumb")
  case object BusyIndicatorPage        extends Page("BusyIndicator")
  case object ButtonPage               extends Page("Button")
  case object ButtonGroupPage          extends Page("Button Group")
  case object BadgePage                extends Page("Badge")
  case object CalendarPage             extends Page("Calendar")
  case object CalendarLegendPage       extends Page("CalendarLegend")
  case object CardPage                 extends Page("Card")
  case object CarouselPage             extends Page("Carousel")
  case object CheckboxPage             extends Page("Checkbox")
  case object ColorPalettePage         extends Page("Color Palette")
  case object ColorPalettePopoverPage  extends Page("Color Palette Popover")
  case object ColorPickerPage          extends Page("Color Picker")
  case object ComboBoxPage             extends Page("Combo Box")
  case object CalloutPage              extends Page("Callout")
  case object DropdownPage             extends Page("Dropdown")
  case object DatePickerPage           extends Page("DatePicker")
  case object DateRangePickerPage      extends Page("DateRangePicker")
  case object DateTimePickerPage       extends Page("DateTimePicker")
  case object DialogPage               extends Page("Dialog")
  case object DrawerPage               extends Page("Drawer")
  case object DetailsPage              extends Page("Details")
  case object DividerPage              extends Page("Divider")
  case object ProgressBarPage          extends Page("Progress Bar")
  case object ProgressRingPage         extends Page("Progress Ring")
  case object InputPage                extends Page("Input")
  case object LabelPage                extends Page("Label")
  case object LinkPage                 extends Page("Link")
  case object ListViewPage             extends Page("List")
  case object MenuPage                 extends Page("Menu")
  case object MessageStripPage         extends Page("MessageStrip")
  case object MultiComboBoxPage        extends Page("MultiComboBox")
  case object MultiInputPage           extends Page("MultiInput")
  case object RadioButtonPage          extends Page("RadioButton")
  case object RadioGroupPage           extends Page("RadioGroup")
  case object RangeSliderPage          extends Page("RangeSlider")
  case object RatingIndicatorPage      extends Page("RatingIndicator")
  case object SplitButtonPage          extends Page("SplitButton")
  case object SelectPage               extends Page("Select")
  case object SegmentedButtonPage      extends Page("SegmentedButton")
  case object SwitchPage               extends Page("Switch")
  case object SpinnerPage              extends Page("Spinner")
  case object SliderPage               extends Page("Slider")
  case object SkeletonPage             extends Page("Skeleton")
  case object ToastPage                extends Page("Toast")
  case object TagPage                  extends Page("Tag")
  case object TextPage                 extends Page("Text")
  case object TitlePage                extends Page("Title")
  case object PanelPage                extends Page("Panel")
  case object ProgressIndicatorPage    extends Page("ProgressIndicator")
  case object PopoverPage              extends Page("Popover")
  case object TreePage             extends Page("Tree")
  case object ToggleButtonPage         extends Page("ToggleButton")
  case object TokenPage                extends Page("Token")
  case object TextAreaPage             extends Page("TextArea")
  case object BarcodeScannerDialogPage extends Page("BarcodeScannerDialog")
  case object FormPage                 extends Page("Form")
  case object ResponsivePopoverPage    extends Page("ResponsivePopover")
  case object ExpandableTextPage       extends Page("ExpandableText")
  case object TablePage                extends Page("Table")
  case object FileUploaderPage         extends Page("FileUploader")
  case object IconPage                 extends Page("Icon")
  case object IconsPage                extends Page("Icons")
  case object AiButtonPage             extends Page("AI Button")
  case object TabPage                  extends Page("Tab")
  case object ToolbarPage              extends Page("Toolbar")
  case object TimePickerPage           extends Page("TimePicker")
  case object TooltipPage              extends Page("Tooltip")
  case object StepInputPage            extends Page("StepInput")
  case object SideNavigationPage       extends Page("SideNavigation")
  case object TabGroupPage             extends Page("TabGroup")
  case object SplitPanelPage           extends Page("Split Panel")
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
  ProgressBarPage,
  ProgressRingPage,
  SliderPage,
  TreePage,
  SplitPanelPage,
  SkeletonPage,
  CardPage,
  ).sortBy(_.getClass.getSimpleName.slice(0, 2))

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
            AvatarGroupPage,
            root / AvatarGroupPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            BarPage,
            root / BarPage.path / endOfSegments,
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
            BusyIndicatorPage,
            root / BusyIndicatorPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            CalendarPage,
            root / CalendarPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            CalendarLegendPage,
            root / CalendarLegendPage.path / endOfSegments,
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
            CarouselPage,
            root / CarouselPage.path / endOfSegments,
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
            CalloutPage,
            root / CalloutPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ColorPalettePage,
            root / ColorPalettePage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ColorPalettePopoverPage,
            root / ColorPalettePopoverPage.path / endOfSegments,
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
            ComboBoxPage,
            root / ComboBoxPage.path / endOfSegments,
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
            DatePickerPage,
            root / DatePickerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DateRangePickerPage,
            root / DateRangePickerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            DateTimePickerPage,
            root / DateTimePickerPage.path / endOfSegments,
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
            FileUploaderPage,
            root / FileUploaderPage.path / endOfSegments,
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
            LabelPage,
            root / LabelPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            LinkPage,
            root / LinkPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ListViewPage,
            root / ListViewPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            MenuPage,
            root / MenuPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            MessageStripPage,
            root / MessageStripPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            MultiInputPage,
            root / MultiInputPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            MultiComboBoxPage,
            root / MultiComboBoxPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            RadioButtonPage,
            root / RadioButtonPage.path / endOfSegments,
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
            RangeSliderPage,
            root / RangeSliderPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            RatingIndicatorPage,
            root / RatingIndicatorPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SplitButtonPage,
            root / SplitButtonPage.path / endOfSegments,
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
            SegmentedButtonPage,
            root / SegmentedButtonPage.path / endOfSegments,
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
            ToastPage,
            root / ToastPage.path / endOfSegments,
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
            TextPage,
            root / TextPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TitlePage,
            root / TitlePage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            PanelPage,
            root / PanelPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ProgressIndicatorPage,
            root / ProgressIndicatorPage.path / endOfSegments,
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
            ToggleButtonPage,
            root / ToggleButtonPage.path / endOfSegments,
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
            TokenPage,
            root / TokenPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ToolbarPage,
            root / ToolbarPage.path / endOfSegments,
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
            AiButtonPage,
            root / AiButtonPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            BarcodeScannerDialogPage,
            root / BarcodeScannerDialogPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            FormPage,
            root / FormPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ResponsivePopoverPage,
            root / ResponsivePopoverPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            ExpandableTextPage,
            root / ExpandableTextPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TablePage,
            root / TablePage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TabPage,
            root / TabPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            StepInputPage,
            root / StepInputPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            TimePickerPage,
            root / TimePickerPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            FileUploaderPage,
            root / FileUploaderPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            IconPage,
            root / IconPage.path / endOfSegments,
            "/docs"
          ),
        Route
          .static(
            SideNavigationPage,
            root / SideNavigationPage.path / endOfSegments,
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
          ),
        Route
          .static(IconsPage, root / "icons" / endOfSegments)
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
