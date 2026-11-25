import React, { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only at build time by prerender.mjs to write the page's HTML into dist/index.html.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
