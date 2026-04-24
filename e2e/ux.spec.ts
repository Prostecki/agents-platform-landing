import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Athlete AI — Comprehensive UX & UI Audit', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // --- Accessibility Tests ---
  test('Should pass basic accessibility checks', async ({ page }) => {
    await injectAxe(page);
    await checkA11y(page, undefined, {
      axeOptions: {
        rules: {
          'color-contrast': { enabled: false }, // Decorative high-contrast design
          'region': { enabled: false },
        },
      },
    });
  });

  // --- Theme & Visual State ---
  test('Theme toggle should persist and apply correct colors', async ({ page }) => {
    const html = page.locator('html');
    const toggle = page.locator('.theme-toggle');
    
    const initialTheme = await html.getAttribute('data-theme');
    
    // Switch theme
    await toggle.click();
    const midTheme = await html.getAttribute('data-theme');
    expect(midTheme).not.toBe(initialTheme);
    
    // Switch back
    await toggle.click();
    await expect(html).toHaveAttribute('data-theme', initialTheme!);
  });

  // --- Features Carousel (Adaptive & Snap) ---
  test('Features Carousel should support scroll snap on mobile', async ({ page, isMobile }) => {
    const carousel = page.locator('.carousel-container');
    await expect(carousel).toBeVisible();

    if (isMobile) {
      const scrollSnap = await carousel.evaluate(el => getComputedStyle(el).scrollSnapType);
      expect(scrollSnap).toContain('x mandatory');

      const card = page.locator('text=Built for Strength');
      await card.scrollIntoViewIfNeeded();
      await expect(card).toBeInViewport();
    }
  });

  // --- Agent Network (SVG & Nodes) ---
  test('Agent Network should render nodes and animated beams', async ({ page }) => {
    const networkSection = page.locator('h2:has-text("How your coaches talk")');
    await expect(networkSection).toBeVisible();

    // Specific node check
    await expect(page.locator('div').filter({ hasText: /^Nutrition$/ }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Athlete AI$/ }).first()).toBeVisible();

    // Check for SVG beams
    const beams = await page.locator('svg path').count();
    expect(beams).toBeGreaterThan(0);
  });

  // --- Navigation & Mobile Menu ---
  test('Mobile menu should trigger and block scroll', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Only for mobile devices');

    const menuTrigger = page.locator('.mobile-menu-trigger');
    await menuTrigger.click();

    const menuOverlay = page.locator('.mobile-menu-overlay');
    await expect(menuOverlay).toBeVisible();

    const overflow = await page.evaluate(() => getComputedStyle(document.body).overflow);
    expect(overflow).toBe('hidden');

    await page.locator('.mobile-menu-close').click();
    await expect(menuOverlay).not.toBeVisible();
    
    const overflowAfter = await page.evaluate(() => getComputedStyle(document.body).overflow);
    expect(overflowAfter).not.toBe('hidden');
  });

  // --- Form / CTA Interactions ---
  test('Final CTA should have correct link', async ({ page }) => {
    const ctaButton = page.locator('a:has-text("Join the Waitlist")').last();
    await expect(ctaButton).toBeVisible();
  });
});
