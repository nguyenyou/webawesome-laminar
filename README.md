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