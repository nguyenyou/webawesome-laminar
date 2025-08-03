import "@awesome.me/webawesome/dist/styles/webawesome.css";

if (process.env.NODE_ENV === "development") {
  import("./out/myapp/fastLinkJS.dest/main.js");
} else {
  import("./out/myapp/fullLinkJS.dest/main.js");
}
