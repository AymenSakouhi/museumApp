import { expect, test } from "@playwright/test";

test("check title to be there", async ({ page }) => {
  await page.goto("/");
  const heading = page.locator("h1");
  await expect(page).toHaveTitle("Rsbuild App");
  await expect(heading).toHaveText("Moderno Museum");
});

test("img content to have source", async ({ page }) => {
  await page.goto("/");
  const img = page.locator("img").first();
  await expect(img).toHaveAttribute("src", "/assets/monalisa.jpg");
});

test("check content of description card", async ({ page }) => {
  await page.goto("/");
  const paintingTitle = page.getByTestId("painting-title").first();
  await expect(paintingTitle).toContainText("Monalisa");
  // const paintingDescription = page.getByTestId("painting-description").first();

  expect(paintingTitle);
});
