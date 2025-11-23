import { test, expect } from '../src/fixtures/base.fixtures';

test.describe('Monobase Page Tests', () => {
  
  test.beforeEach(async ({ monobasePage }) => {
    await monobasePage.goto();
  });

  test('check needed page elements are visible', async ({ monobasePage }) => {
    await expect(monobasePage.pageTitle).toBeVisible();
    await expect(monobasePage.getStartedButton).toBeVisible();
    await expect(monobasePage.subscriberCount).toBeVisible();
  });

  test('check social media buttons are visible', async ({ monobasePage }) => {
    await expect(monobasePage.telegramButton).toBeVisible();
    await expect(monobasePage.instagramButton).toBeVisible();
    await expect(monobasePage.twitterButton).toBeVisible();
    await expect(monobasePage.websiteButton).toBeVisible();
  });

  test('check social media buttons have correct links', async ({ monobasePage }) => {
    const telegramHref = await monobasePage.telegramButton.getAttribute('href');
    const instaHref = await monobasePage.instagramButton.getAttribute('href');
    const twitterHref = await monobasePage.twitterButton.getAttribute('href');
    const websiteHref = await monobasePage.websiteButton.getAttribute('href');
    
    expect(telegramHref).toContain('t.me/sternenkofund');
    expect(instaHref).toContain('instagram.com/sternenkofund');
    expect(twitterHref).toContain('x.com/sternenkofund');
    expect(websiteHref).toContain('sternenkofund.org');
  });

  test('Get Started button is clickable', async ({ monobasePage }) => {
    await expect(monobasePage.getStartedButton).toBeEnabled();
  });
});
