import { test, expect } from "@playwright/test";

test.describe("Scheng Holdings", () => {
  test("homepage loads and shows brand name", async ({ page }) => {
    await page.goto("/scheng");
    await expect(page.locator("text=Scheng Holdings")).toBeVisible();
  });

  test("nav has correct links", async ({ page }) => {
    await page.goto("/scheng");
    await expect(page.locator('nav a:has-text("Início")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Empresas")')).toBeVisible();
  });

  test("theme toggle works", async ({ page }) => {
    await page.goto("/scheng");
    const toggleBtn = page.locator('button[aria-label*="tema"], button:has-text("tema")').first();
    await expect(toggleBtn).toBeVisible();
    await toggleBtn.click();
    await page.waitForTimeout(300);
  });

  test("GuiaFin page loads", async ({ page }) => {
    await page.goto("/guiafin");
    await expect(page.locator("text=GuiaFin")).toBeVisible();
  });
});

test.describe("Mobile", () => {
  test("responsive layout loads", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/scheng");
    await expect(page.locator("text=Scheng Holdings")).toBeVisible();
  });
});
