// Runs after `vite build` and `vite build --ssr`: renders the app to HTML and writes it into dist/index.html.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(root, "dist", "index.html");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const html = readFileSync(indexPath, "utf-8");
const placeholder = '<div id="root"></div>';

if (!html.includes(placeholder)) {
  throw new Error("prerender: could not find the empty root div in dist/index.html");
}

writeFileSync(indexPath, html.replace(placeholder, `<div id="root">${render()}</div>`));
rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log("prerender: wrote dist/index.html");
