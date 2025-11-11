![Scala3](https://img.shields.io/badge/Scala%203-%23de3423.svg?logo=scala&logoColor=white)
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
npx degit nguyenyou/webawesome-laminar/quickstart webawesome-laminar-quickstart
cd webawesome-laminar-quickstart
npm install
npm run dev
```

Open: http://localhost:5173/

## Manual Setup

https://webawesome-laminar.vercel.app/docs/getting-started

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
