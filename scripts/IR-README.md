# WebAwesome Laminar Intermediate Representation (IR)

This document describes the Intermediate Representation (IR) system for generating Laminar ScalaJS components from Web Awesome custom elements.

## Overview

The IR system processes the `custom-elements.json` manifest from Web Awesome and creates a structured representation suitable for generating type-safe Laminar ScalaJS components. The IR captures all essential information about components including:

- **Attributes**: HTML attributes with their types and descriptions
- **Events**: Custom events emitted by components
- **Slots**: Named slots for content projection
- **CSS Properties**: Custom CSS properties for styling
- **CSS Parts**: Shadow DOM parts for styling
- **Methods**: Public API methods
- **Dependencies**: Component dependencies

## Generated IR Statistics

The current IR contains:
- **57 Components**: All Web Awesome components
- **402 Attributes**: HTML attributes across all components
- **137 Events**: Custom events
- **121 Slots**: Named and default slots
- **99 CSS Properties**: Custom CSS properties
- **150 Methods**: Public API methods

## IR Structure

### Main IR Object

```typescript
{
  "schemaVersion": "1.0.0",
  "sourceManifest": {
    "schemaVersion": "1.0.0",
    "modulesCount": 64
  },
  "generated": "2025-07-19T03:00:17.809Z",
  "components": ComponentIR[],
  "summary": {
    "totalComponents": 57,
    "totalAttributes": 402,
    "totalEvents": 137,
    "totalSlots": 121,
    "totalCSSProperties": 99,
    "totalMethods": 150
  }
}
```

### ComponentIR Structure

```typescript
interface ComponentIR {
  // Basic component info
  name: string;              // Component class name (e.g., "WaButton")
  tagName: string;           // HTML tag name (e.g., "wa-button")
  packagePath: string;       // Scala package path
  description?: string;      // Component description
  documentation?: string;    // Documentation URL
  since?: string;           // Version info
  
  // Component structure
  attributes: AttributeIR[];
  events: EventIR[];
  slots: SlotIR[];
  cssProperties: CSSPropertyIR[];
  cssParts: CSSPartIR[];
  methods: MethodIR[];
  
  // Dependencies
  dependencies: string[];    // Other wa-* components this depends on
}
```

### AttributeIR Structure

```typescript
interface AttributeIR {
  name: string;              // HTML attribute name (e.g., "disabled")
  fieldName?: string;        // JS field name if different (e.g., "withCaret" for "with-caret")
  type: string;              // Scala type (String, Boolean, Double, etc.)
  description?: string;
  default?: string;
  required?: boolean;
  reflects?: boolean;        // Whether changes reflect to attribute
}
```

### EventIR Structure

```typescript
interface EventIR {
  name: string;              // Event name (e.g., "wa-load")
  eventType?: string;        // Event type class (e.g., "WaLoadEvent")
  description?: string;
  reactName?: string;        // React event name for reference
}
```

### SlotIR Structure

```typescript
interface SlotIR {
  name: string;              // Slot name (empty string for default slot)
  description?: string;
}
```

### CSSPropertyIR Structure

```typescript
interface CSSPropertyIR {
  name: string;              // CSS custom property name (e.g., "--size")
  description?: string;
  default?: string;
}
```

### CSSPartIR Structure

```typescript
interface CSSPartIR {
  name: string;              // CSS part name (e.g., "base")
  description?: string;
}
```

### MethodIR Structure

```typescript
interface MethodIR {
  name: string;              // Method name
  description?: string;
  parameters: ParameterIR[];
  returnType?: string;
  public: boolean;           // Whether it's a public API method
}

interface ParameterIR {
  name: string;
  type: string;
  optional?: boolean;
  description?: string;
}
```

## Type Mapping

The IR system automatically maps TypeScript types to Scala types:

| TypeScript Type | Scala Type |
|-----------------|------------|
| `string` | `String` |
| `boolean` | `Boolean` |
| `number` | `Double` |
| `HTMLElement` | `dom.HTMLElement` |
| `HTMLImageElement` | `dom.html.Image` |
| `HTMLButtonElement` | `dom.html.Button` |
| `'small' \| 'medium' \| 'large'` | `String` (with validation) |
| `T[]` | `js.Array[T]` |
| `Promise<T>` | `js.Promise[js.Any]` |

## Usage for Laminar Component Generation

The IR is designed to facilitate generation of Laminar ScalaJS components that follow this pattern:

```scala
package io.github.nguyenyou.webawesome.laminar

import com.raquo.laminar.api.Laminar
import com.raquo.laminar.keys.{EventProp, HtmlProp}
import com.raquo.laminar.modifiers.Modifier
import com.raquo.laminar.nodes.ReactiveHtmlElement
import org.scalajs.dom

object Button extends WebComponent("wa-button") {
  override def RawImport: js.Object = ??? // JS import for wa-button
  
  type Ref = dom.HTMLElement
  
  // Attributes
  val variant: HtmlProp[String, _] = htmlProp("variant", StringCodec)
  val disabled: HtmlProp[Boolean, _] = htmlProp("disabled", BooleanCodec)
  // ... more attributes
  
  // Events  
  val onWaInvalid: EventProp[dom.Event] = eventProp("wa-invalid")
  // ... more events
  
  // Methods (for imperative API)
  extension (element: Element) {
    def click(): Unit = element.ref.asInstanceOf[js.Dynamic].click()
    def focus(options: js.UndefOr[dom.FocusOptions] = js.undefined): Unit = 
      element.ref.asInstanceOf[js.Dynamic].focus(options)
  }
}
```

## Sample Component: WaButton

Here's what the WaButton component looks like in the IR:

```json
{
  "name": "WaButton", 
  "tagName": "wa-button",
  "packagePath": "io.github.nguyenyou.webawesome.laminar.Button",
  "description": "Buttons represent actions that are available to the user.",
  "documentation": "https://backers.webawesome.com/docs/components/button",
  "since": "2.0",
  "attributes": [
    {
      "name": "variant",
      "fieldName": "variant", 
      "type": "String",
      "description": "The button's theme variant.",
      "default": "'neutral'"
    },
    {
      "name": "disabled",
      "fieldName": "disabled",
      "type": "Boolean", 
      "description": "Disables the button.",
      "default": "false"
    }
    // ... 19 more attributes
  ],
  "events": [
    {
      "name": "wa-invalid",
      "eventType": "WaInvalidEvent",
      "description": "Emitted when the form control has been checked for validity and its constraints aren't satisfied."
    }
    // ... 3 more events
  ],
  "slots": [
    {
      "name": "",
      "description": "The button's label."
    },
    {
      "name": "start", 
      "description": "An element, such as `<wa-icon>`, placed before the label."
    },
    {
      "name": "end",
      "description": "An element, such as `<wa-icon>`, placed after the label." 
    }
  ],
  "methods": [
    {
      "name": "click",
      "description": "Simulates a click on the button.",
      "parameters": [],
      "returnType": "Unit",
      "public": true
    },
    {
      "name": "focus", 
      "description": "Sets focus on the button.",
      "parameters": [
        {
          "name": "options",
          "type": "dom.FocusOptions",
          "optional": true
        }
      ],
      "returnType": "Unit",
      "public": true
    }
    // ... 3 more methods
  ],
  "dependencies": ["wa-icon", "wa-spinner"]
}
```

## Generation Workflow

1. **Parse custom-elements.json**: Extract component definitions
2. **Create IR**: Transform to structured representation
3. **Generate Scala**: Use IR to create Laminar components
4. **Type Safety**: Leverage IR type information for compile-time safety

## Next Steps

The IR can now be used to generate:

1. **Component Objects**: Scala objects extending `WebComponent`
2. **Attribute Props**: Type-safe HTML properties 
3. **Event Props**: Custom event handlers
4. **Method Extensions**: Imperative API methods
5. **Documentation**: Scaladoc from component descriptions
6. **Package Structure**: Organized by component functionality

This IR provides everything needed to generate a complete, type-safe Laminar binding for all Web Awesome components. 