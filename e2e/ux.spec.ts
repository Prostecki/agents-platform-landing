import { test, expect } from '@playwright/test';

test.describe('User Experience & Layout', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Mobile Menu should open and cover the screen on iPhone', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is only for mobile devices');

    const menuTrigger = page.locator('.mobile-menu-trigger');
    await expect(menuTrigger).toBeVisible();

    // Open menu
    await menuTrigger.click();

    const overlay = page.locator('.mobile-menu-overlay');
    await expect(overlay).toBeVisible();
    
    // Check if it covers full screen (Portal check)
    const box = await overlay.boundingBox();
    expect(box?.width).toBeGreaterThan(300);
    expect(box?.height).toBeGreaterThan(600);

    // Check if scroll is blocked
    const overflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(overflow).toBe('hidden');

    // Close menu
    await page.locator('.mobile-menu-close').click();
    await expect(overlay).not.toBeVisible();

    // Check if scroll is restored
    const overflowAfter = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    expect(overflowAfter).not.toBe('hidden');
  });

  test('Theme toggle should change data-theme attribute', async ({ page }) => {
    const html = page.locator('html');
    const initialTheme = await html.getAttribute('data-theme');
    const targetTheme = initialTheme === 'dark' ? 'light' : 'dark';

    const toggle = page.locator('.theme-toggle');
    await toggle.click();

    await expect(html).toHaveAttribute('data-theme', targetTheme);

    // Optional: toggle back and verify
    await toggle.click();
    await expect(html).toHaveAttribute('data-theme', initialTheme!);
  });

  test('Hero buttons should have correct layout on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile layout specific test');

    const ctaRow = page.locator('.cta-row');
    await expect(ctaRow).toHaveCSS('flex-direction', 'column');
    await expect(ctaRow).toHaveCSS('gap', '12px');
  });
});
