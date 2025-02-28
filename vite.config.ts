import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // Enables `describe` and `test` globally
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./setup.ts", // Runs before tests (optional)
    coverage: {
      provider: "v8", // Enables coverage reports (optional)
    },
  },
});
