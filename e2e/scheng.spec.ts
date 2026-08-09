import { test, expect } from "@playwright/test";

test.describe("Scheng Holdings", () => {
  test("homepage loads and shows heading", async ({ page }) => {
    await page.goto("/scheng");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("nav has correct links", async ({ page }) => {
    await page.goto("/scheng");
    await expect(page.locator('nav a:has-text("Início")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Empresas")')).toBeVisible();
  });

  test("theme toggle exists", async ({ page }) => {
    await page.goto("/scheng");
    const toggleBtn = page.getByRole("button", { name: /tema/i });
    await expect(toggleBtn).toBeVisible();
  });

  test("GuiaFin page loads", async ({ page }) => {
    await page.goto("/guiafin");
    await expect(page.locator("h1").first()).toBeVisible();
  });
});

test.describe("Mobile", () => {
  test("responsive layout loads", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/scheng");
    await expect(page.locator("h1").first()).toBeVisible();
  });
});
