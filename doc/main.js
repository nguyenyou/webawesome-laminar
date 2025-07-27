import "./style.css";
import "@awesome.me/webawesome/dist/styles/webawesome.css";
import "./laminar-devtools.js";

if (process.env.NODE_ENV === "development") {
  import("../out/doc/fastLinkJS.dest/main.js");
} else {
  import("../out/doc/fullLinkJS.dest/main.js");
}
