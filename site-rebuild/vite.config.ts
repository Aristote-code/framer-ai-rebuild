import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // SPA fallback so deep links (/enterprise, /solutions/designers) resolve.
  appType: "spa",
});
