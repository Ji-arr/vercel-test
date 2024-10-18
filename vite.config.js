import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteSSR } from "vite-plugin-ssr";

export default defineConfig({
  plugins: [react(), ViteSSR()],
});
