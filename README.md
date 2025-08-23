![Maven Central Version](https://img.shields.io/maven-central/v/io.github.nguyenyou/webawesome-laminar_sjs1_3)

<p align="center">
  <img src="https://raw.githubusercontent.com/nguyenyou/webawesome-laminar/main/.github/assets/logo.png" />
  <br/>
  <span>Laminar bindings for <a href="https://webawesome.com/">WebAwesome</a> web components library</span>
  <br/><br/>
</p>

## Quickstart

Following these simple steps for a quickstart.

```sh
npx degit nguyenyou/webawesome-laminar/examples/quickstart webawesome-laminar-quickstart
cd webawesome-laminar-quickstart
npm install
npm run dev
```

Open: http://localhost:5173/

## Manual Setup

Follow these steps to manually set up the Laminar bindings for WebAwesome:

1. Install the WebAwesome library

Since this package provides only Laminar bindings, you must install the underlying WebAwesome library separately:

```sh
npm install @awesome.me/webawesome
```

2. Add the Laminar bindings

If you’re using Mill, add the dependency as follows:

```scala
def mvnDeps = Seq(
  mvn"io.github.nguyenyou::webawesome-laminar::0.3.0",
)
```

> If you’re using sbt or another build tool, adjust the dependency syntax accordingly.

3. Import the CSS

Ensure the WebAwesome styles are included in your project:

```js
import "@awesome.me/webawesome/dist/styles/webawesome.css";
```

4. Use the components in Laminar

You’re now ready to use WebAwesome components in your Laminar application:

```scala
import io.github.nguyenyou.webawesome.laminar.*

Button()("Click me")
```

## Notable feature

For attributes that accept a fixed set of string values, this library offers two ergonomic ways to work with them:

### 1. Union Types (Type-Safe Strings)

You can assign string values directly while still enjoying full type safety via Scala’s union types. This works both for `String` and `Signal[String]`.

```scala
Button(
  _.variant := "success" // String
)("Click me")

Button(
  _.variant <-- Val("success") // Signal[String]
)("Click me")
```

### 2. Dot notation

For cases where the attribute value is static and known at compile time, you can use dot notation for better discoverability and cleaner syntax:

```scala
Button(
  _.variant.success
)()
```

One advantage of this syntax is that it allows for faster typing.


## Credits

While building this library, I learned a lot and borrowed many ideas from Nikita’s [laminar-shoelace-components](https://github.com/raquo/laminar-shoelace-components) library.

## Author

Tu Nguyen - [@younguyen95](https://x.com/younguyen95)

## License
This project is provided under the MIT license.

