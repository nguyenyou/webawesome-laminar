# WebAwesome Laminar Docs

## How to run this docs

```sh
bun --filter docs dev
```

Open http://localhost:3000

Compile the examples:

```sh
./mill __.fullLinkJS
```

Bundle the examples:

```sh
bun build.ts
```

Stop and start the dev server again

```sh
bun --filter docs dev
```