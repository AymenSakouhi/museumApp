import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 30000,
  //
  use: {
    headless: true,
    baseURL: "http://localhost:3000",
    // setting up the viewport but as I am running headless, I don't need it
    // viewport: { width: 1280, height: 720 },
  },
  // Run your local dev server before starting the tests.
  webServer: {
    command: "bun run preview",
    url: "http://localhost:3000",
    // reuseExistingServer: true,
  },
});
