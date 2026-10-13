# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Laminar bindings for the WebAwesome web component library. Published to Maven Central as `io.github.nguyenyou:webawesome-laminar_sjs1_3`. Scala 3 + Scala.js + Laminar.

## Build System

**Mill** is the build tool. Bun is the JS package manager.

```bash
# Compile Scala.js (full link)
./mill __.fullLinkJS

# Format code
./mill mill.scalalib.scalafmt/

# Lint/fix with Scalafix
./mill __.fix

# Build docs site examples (links JS + bundles for docs)
bun run compile

# Code generation from WebAwesome metadata
bun run generate          # generate + fmt + fix
bun run generate:force    # force regeneration

# Run docs dev server (Next.js)
bun run dev
```

## Search Exclusions

Do not search in: `out/`, `.bsp/`, `.metals/`, `.idea/`

## Architecture

### Code Generation Pipeline

Most Scala source files in `webawesome-laminar/src/` are **auto-generated** — do not edit them directly. The pipeline:

1. `scripts/gen-ir.ts` — reads `@awesome.me/webawesome` custom-elements.json from node_modules, produces `scripts/webawesome-laminar-ir.json`
2. `scripts/extract-shared-types.ts` — identifies union types shared across components, produces `scripts/shared-types-mapping.json`
3. `scripts/generate-components.ts` — generates Scala files from IR + type mappings
4. `scripts/generate.ts` — orchestrator that runs all steps, then formats/fixes

**Manually maintained files** (not generated):
- `WebComponent.scala` — abstract base class for all components
- `CommonTypes.scala` — codec helpers (`UnionAsStringCodec`, `useImport`)
- `CommonKeys.scala` — reusable attribute objects shared across components
- `SharedTypes.scala` — generated, but the pattern is important (Scala 3 union types)
- `CustomKeys.scala`, `ControlledInput.scala` — custom extensions
- `custom/` and `events/` subdirectories

### Component Pattern

Every generated component (e.g., `WaButton`) extends `WebComponent(tagName)` and follows:

```scala
// Two-group apply: component-specific mods, then standard Laminar mods
Button(_.variant.success, _.size.large)(cls := "my-btn", onClick --> handler)
```

- **Type-safe attributes** use Scala 3 union types: `type ComponentSize = "large" | "medium" | "small"`
- Two ergonomic APIs: string assignment (`_.variant := "success"`) or dot notation (`_.variant.success`)
- `CommonKeys` objects define shared attributes (size, variant, placement, etc.) mixed into components
- `RawImport` triggers the JS side-effect import that registers the custom element

### Mill Modules

- `webawesome-laminar` — the published library (Scala 3.3.6 for LTS compat)
- `doc` — documentation examples
- `BunBuildModule` — custom Mill trait that runs `fullLinkJS` then `bun build` for bundling examples
- Example modules extend `ExampleModule` (WebModule + BunBuildModule)

### Documentation Site

Next.js app in `docs/` using Fumadocs for MDX. Component docs are in `docs/content/docs/`. Interactive examples are bundled Scala.js apps served from `docs/public/examples/`.

## Key Versions

- Scala 3.7.2 (dev) / 3.3.6 (published library)
- Scala.js 1.19.0
- Laminar 17.2.1
- WebAwesome 3.14.0
- Mill (see `.mill-version`)
