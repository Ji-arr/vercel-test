// src/pages/index.page.jsx
import React from "react";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <div>
      <Helmet>
        <title>My Vite React App</title>
        <meta
          name="description"
          content="This is a Vite + React application optimized for SEO."
        />
        <meta
          name="keywords"
          content="Vite, React, SEO, server-side rendering"
        />
      </Helmet>
      <h1>Welcome to My Vite + React App</h1>
      <p>This is an example of a server-rendered React app for SEO.</p>
    </div>
  );
}
