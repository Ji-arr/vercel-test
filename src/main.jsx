// main.jsx
import React from "react";
import { hydrateRoot } from "react-dom/client"; // React 18 uses hydrateRoot for SSR hydration
import App from "./App";
import { getPage } from "vite-plugin-ssr/client";

hydrateApp();

async function hydrateApp() {
  const pageContext = await getPage(); // Get the current page context for SSR
  hydrateRoot(
    document.getElementById("root"),
    <App pageContext={pageContext} />
  );
}
