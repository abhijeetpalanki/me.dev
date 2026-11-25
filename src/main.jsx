import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships pre-rendered HTML, so React attaches to it instead of rebuilding it.
// The dev server sends an empty root, so it renders from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
