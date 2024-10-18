// server/index.jsx
import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import App from "../App"; // Assuming App.jsx is one level up from the server folder

export { render };
export { passToClient };

const passToClient = ["pageProps", "documentProps"];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(<App pageContext={pageContext} />);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My SSR Vite App</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
