# WebAwesome Laminar Docs

## How to run this docs

```sh
bun --filter docs dev
```

Open http://localhost:3000

Compile ScalaJS code:

```sh
./mill __.fullLinkJS
```

Bundle the compiled ScalaJS code:

```sh
bun build.ts
```
