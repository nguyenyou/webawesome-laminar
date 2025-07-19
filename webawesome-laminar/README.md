# WebAwesome Laminar Components

Type-safe Laminar ScalaJS bindings for [Web Awesome](https://webawesome.com/) components.

## Overview

This library provides complete Laminar bindings for all 57 Web Awesome components, automatically generated from the official Web Awesome custom-elements.json manifest. Each component is fully typed with:

- **Type-safe attributes**: All HTML attributes with proper Scala types
- **Custom events**: WebAwesome-specific events with proper typing  
- **Slots**: Named slots for content projection
- **CSS properties**: Custom CSS properties for styling
- **CSS parts**: Shadow DOM parts for styling
- **Public methods**: Imperative API methods

## Generated Components

All 57 Web Awesome components are available:

### Form Components
- `Button` - Buttons represent actions available to the user
- `Input` - Inputs collect data from the user  
- `Textarea` - Textareas collect multi-line data from the user
- `Select` - Selects allow you to choose items from a menu
- `Checkbox` - Checkboxes allow the user to toggle an option on or off
- `Radio` / `RadioGroup` - Radio buttons allow the user to select a single option from a group
- `Switch` - Switches allow the user to toggle an option on or off
- `Slider` - Sliders allow the user to select a value within a range

### Layout Components  
- `Card` - Cards can be used to group related subjects in a container
- `Details` - Details show a brief summary and expand to show additional content
- `Drawer` - Drawers slide out from a container to expose additional options
- `Dialog` - Dialogs are containers for content that overlay the page
- `Divider` - Dividers are used to visually separate or group elements
- `SplitPanel` - Split panels display two adjacent panels, allowing the user to reposition them

### Navigation Components
- `Breadcrumb` / `BreadcrumbItem` - Breadcrumbs provide a group of links so users can easily navigate
- `TabGroup` / `Tab` / `TabPanel` - Tabs organize content into a container that shows one section at a time
- `Tree` / `TreeItem` - Trees allow you to display a hierarchical list of selectable tree items
- `Dropdown` / `DropdownItem` - Dropdowns expose additional content that "drops down" in a panel

### Feedback Components
- `Badge` - Badges are used to draw attention and display statuses or counts
- `Callout` - Callouts are used to display important messages inline
- `ProgressBar` / `ProgressRing` - Progress elements are used to show the completion progress of a task
- `Spinner` - Spinners are used to show the progress of an indeterminate operation
- `Skeleton` - Skeletons are used to provide a visual placeholder while content is loading

### Media Components
- `AnimatedImage` - A component for displaying animated GIFs and WEBPs
- `Avatar` - Avatars are used to represent a person or object
- `Icon` - Icons are symbols that can be used to represent various options
- `Carousel` / `CarouselItem` - Carousels display an arbitrary number of content slides
- `Comparison` - Compare visual differences between similar photos
- `ZoomableFrame` - Display images that can be zoomed and panned

### Utility Components
- `Animation` - Animate elements declaratively with nearly 100 baked-in presets
- `CopyButton` - Copies data to the clipboard when the user clicks the trigger
- `FormatBytes` / `FormatDate` / `FormatNumber` - Format and display values
- `Include` - Includes give you the power to embed external HTML files
- `Popover` - Poppover provides rich hover interactions
- `Popup` - Popup is a utility that lets you declaratively anchor "popup" containers
- `QrCode` - Generates a QR code and renders it using the Canvas API
- `Rating` - Ratings give users a way to quickly view and provide feedback
- `RelativeTime` - Outputs a localized time phrase relative to the current date and time
- `Tag` - Tags are used as labels to organize things or to indicate a selection
- `Tooltip` - Tooltips display additional information based on a specific action

### Observer Components
- `MutationObserver` - The Mutation Observer component offers a thin, declarative interface to the Mutation Observer API
- `ResizeObserver` - The Resize Observer component offers a thin, declarative interface to the Resize Observer API

## Usage

### Basic Usage

```scala
import io.github.nguyenyou.webawesome.laminar._

// Simple button
Button("Click me")

// Button with attributes
Button(
  _.variant := "brand",
  _.size := "large", 
  _.disabled := true,
  "Submit"
)

// Button with event handling
Button(
  _.onClick --> { _ => println("Button clicked!") },
  "Click me"
)
```

### Attributes

All HTML attributes are available as type-safe properties:

```scala
Button(
  _.variant := "brand",        // String attribute
  _.disabled := true,          // Boolean attribute  
  _.size := "large",          // String attribute
  _.pill := true,             // Boolean attribute
  _.loading := false          // Boolean attribute
)
```

### Events

WebAwesome-specific events are available with proper typing:

```scala
Input(
  _.onInput --> { _ => println("Input changed") },
  _.onWaChange --> { _ => println("WebAwesome change event") },
  _.onBlur --> { _ => println("Input lost focus") }
)
```

### Slots

Named slots allow you to project content into specific areas:

```scala
Button(
  _.slots.start(Icon(_.name := "plus")),
  "Add Item",
  _.slots.end(Badge("New"))
)

Card(
  _.slots.header("Card Title"),
  "Card content goes here",
  _.slots.footer(Button("Action"))
)
```

### CSS Styling

CSS custom properties and parts are available for styling:

```scss
// CSS custom properties
wa-button {
  --wa-color-primary: #007bff;
}

// CSS parts
wa-button::part(base) {
  border-radius: 8px;
}

wa-button::part(label) {
  font-weight: bold;
}
```

Access CSS property and part names programmatically:

```scala
// CSS properties are available in cssVars object
Button.cssVars.colorPrimary // "--wa-color-primary"

// CSS parts are available in cssParts object  
Button.cssParts.base        // "base"
Button.cssParts.label       // "label"
```

### Form Integration

Form components work seamlessly with Laminar's form handling:

```scala
val nameVar = Var("")
val enabledVar = Var(false)

div(
  Input(
    _.placeholder := "Enter your name",
    _.value <-- nameVar,
    _.onInput.mapToValue --> nameVar
  ),
  
  Checkbox(
    _.checked <-- enabledVar,
    _.onChange.mapToChecked --> enabledVar,
    "Enable notifications"
  ),
  
  Button(
    _.disabled <-- nameVar.signal.map(_.isEmpty),
    _.onClick --> { _ => 
      println(s"Name: ${nameVar.now()}, Enabled: ${enabledVar.now()}")
    },
    "Submit"
  )
)
```

### Advanced Usage

Components support the full range of Laminar patterns:

```scala
// Conditional rendering
div(
  children <-- someSignal.map { items =>
    items.map { item =>
      Card(
        _.slots.header(item.title),
        item.content,
        _.slots.footer(
          ButtonGroup(
            Button(_.variant := "brand", "Edit"),
            Button(_.variant := "danger", "Delete")
          )
        )
      )
    }
  }
)

// Dynamic attributes
Button(
  _.variant <-- userTypeSignal.map {
    case Admin => "danger"
    case User => "neutral"
  },
  _.disabled <-- loadingSignal,
  "Save Changes"
)
```

## Setup

Add the dependency to your `build.sbt`:

```scala
libraryDependencies += "io.github.nguyenyou" %%% "webawesome-laminar" % "1.0.0"
```

Make sure to include the Web Awesome CSS and JavaScript:

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3/dist/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3/dist/webawesome.js"></script>
```

Or install via npm:

```bash
npm install @awesome.me/webawesome
```

## Component Documentation

Each component includes:

- **ScalaDoc**: Complete API documentation with descriptions
- **Type safety**: All attributes and events are properly typed
- **IDE support**: Full autocomplete and type checking
- **Web Awesome docs**: Links to official component documentation

For detailed component documentation, see the [Web Awesome Documentation](https://backers.webawesome.com/docs/components).

## Generation

This library is automatically generated from the Web Awesome custom-elements.json manifest using a TypeScript-based code generator. The generation process:

1. **Parses** the custom-elements.json manifest
2. **Creates** an intermediate representation (IR)  
3. **Generates** type-safe Scala code using code-block-writer
4. **Validates** all components compile correctly

## Contributing

This is a generated library. To contribute:

1. Update the generator scripts in `/scripts`
2. Regenerate components with `npm run generate`
3. Test the generated components
4. Submit a PR with generator improvements

## License

MIT License - see LICENSE file for details. 