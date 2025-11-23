import { test, expect } from '../src/fixtures/base.fixtures';

test.describe('Monobase Page Tests', () => {
  
  test.beforeEach(async ({ monobasePage }) => {
    await monobasePage.goto();
  });

  test('check page title is visible', async ({ monobasePage }) => {
    await expect(monobasePage.pageTitle).toBeVisible();
  });

  test('check Get Started button is visible', async ({ monobasePage }) => {
    await expect(monobasePage.getStartedButton).toBeVisible();
  });

  test('check subscriber count is visible', async ({ monobasePage }) => {
    await expect(monobasePage.subscriberCount).toBeVisible();
  });

  test('check Telegram button is visible', async ({ monobasePage }) => {
    await expect(monobasePage.telegramButton).toBeVisible();
  });

  test('check Instagram button is visible', async ({ monobasePage }) => {
    await expect(monobasePage.instagramButton).toBeVisible();
  });

  test('check Twitter button is visible', async ({ monobasePage }) => {
    await expect(monobasePage.twitterButton).toBeVisible();
  });

  test('check Website button is visible', async ({ monobasePage }) => {
    await expect(monobasePage.websiteButton).toBeVisible();
  });

  test('Telegram button has correct link', async ({ monobasePage }) => {
    const href = await monobasePage.telegramButton.getAttribute('href');
    expect(href).toContain('t.me/sternenkofund');
  });

  test('Instagram button has correct link', async ({ monobasePage }) => {
    const href = await monobasePage.instagramButton.getAttribute('href');
    expect(href).toContain('instagram.com/sternenkofund');
  });

  test('Get Started button is clickable', async ({ monobasePage }) => {
    await expect(monobasePage.getStartedButton).toBeEnabled();
  });
});
