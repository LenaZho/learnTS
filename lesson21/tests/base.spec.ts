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

test.describe('Subscription Page Tests', () => {
    test.beforeEach(async ({ subscriptionsPage }) => {
        await subscriptionsPage.goto();
    });

    test('check subscription card elements', async ({ subscriptionsPage }) => {
        const cards = await subscriptionsPage.getSubscriptionCards();
        expect(cards.length).toBeGreaterThan(0);

        const card = cards[0];
        await expect(card.title).toBeVisible();
        await expect(card.price).toBeVisible();
        await expect(card.subscribeButton).toBeVisible();
        await expect(card.subscribeButton).toBeEnabled();
    });

    test('check daily support elements', async ({ subscriptionsPage }) => {
        await expect(subscriptionsPage.dailySupport.container).toBeVisible();
        await expect(subscriptionsPage.dailySupport.title).toBeVisible();
        await expect(subscriptionsPage.dailySupport.joinButton).toBeVisible();
        await expect(subscriptionsPage.dailySupport.joinButton).toBeEnabled();
    });
});
