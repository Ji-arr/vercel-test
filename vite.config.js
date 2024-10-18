import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePWA from "vite-plugin-pwa";
import { ViteSSR } from "vite-plugin-ssr";

export default defineConfig({
  plugins: [
    react(),
    ViteSSR(),
    VitePWA(), // Optional: for PWA features
  ],
});
